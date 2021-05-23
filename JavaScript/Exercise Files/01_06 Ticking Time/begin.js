/*
  WRITE YOUR SOLUTION HERE
*/
function clock()
{
  const clockNode=document.querySelector("#clock");
  return setInterval(()=>{
    let date=new Date();
    let tick =date.toLocaleTimeString();
    clockNode.innerText=tick;
  },1000)
}
clock();