/*
  WRITE YOUR SOLUTION HERE
*/
function* getStop() {
  yield "Poughkeepsie";
  yield "Newburgh";
  yield "Peekskill";
  yield "Yonkers";
  yield "Bronx";
  yield "Grand Central";
}
const trainLine=getStop();
const button =document.querySelector("#next-stop");
button.addEventListener("click",()=>{
  let currStop=trainLine.next();
  if(currStop.done)
  {
    console.log("We made it!");
    button.setAttribute("disabled",true);
  }
  else{
    console.log(currStop.value);
  }
});