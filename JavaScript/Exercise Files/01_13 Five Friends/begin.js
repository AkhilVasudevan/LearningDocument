/*
  WRITE YOUR SOLUTION HERE
*/
async function getUsers()
{
  let response = await (await fetch("https://randomuser.me/api/?results=5")).json();
  let timeline=document.querySelector("#timeline");
  response.results.forEach((item)=>{
    let thumbNail=document.createElement("img");
    thumbNail.setAttribute("src",item.picture.thumbnail);
    timeline.appendChild(thumbNail);
  });
}

getUsers();