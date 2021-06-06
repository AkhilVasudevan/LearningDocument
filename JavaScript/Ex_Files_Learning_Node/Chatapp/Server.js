var express=require('express');
var bodyParser=require('body-parser');
const { info } = require('console');
var app=express();
var http=require('http').Server(app);
var io=require('socket.io')(http);
var mongoose =require('mongoose');

mongoose.Promise=Promise;

var dbURL='mongodb://localhost:27017';

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var Message=mongoose.model('Message',{name:String,message:String});

//var messages=[{name:'Tim',message:'Hi'},{name:'Jane',message:'Hello'}];

app.get('/messages',(req,res)=>{
    Message.find({},(err,messages)=>{
        res.send(messages);
    });
});

app.post('/messages',(req,res)=>{
    var message=new Message(req.body);
    message.save()
    .then(()=>{
        return Message.findOne({message:'badword'});
    })
    .then((censored)=>{
        if(censored)
        {
            console.log('censored word found ',censored);
            return Message.remove({_id:censored.id});
        }
        io.emit('message',req.body);
        res.sendStatus(200);
    })
    .catch((err)=>{
        sendStatus(500);
        return console.error(err);
    });
});

io.on('connection',(socket)=>{
    console.log('a user connected')
});

mongoose.connect(dbURL,{useUnifiedTopology:true,useNewUrlParser:true},(err)=>{
    console.log('mongodb connection ',err);
});

var server=http.listen(3000,()=>{console.log('server is listening on port',server.address().port)});