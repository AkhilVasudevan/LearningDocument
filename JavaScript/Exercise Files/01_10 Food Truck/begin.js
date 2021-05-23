/*
  WRITE YOUR SOLUTION HERE
*/
function foodTruckFestival(menus)
{
  let menuList=menus.flat();
  console.log(menuList);
  let menuItems=new Set();
  menuList.forEach((item)=>menuItems.add(item));
  console.log(menuItems);
  const ul=document.querySelector("#combined-menu");
  menuItems.forEach((item)=>{
    let foodItem=document.createElement("li");
    foodItem.innerText=item;
    ul.appendChild(foodItem);
  });
}
menus=[["Tacos", "Burgers"], ["Pizza"], ["Burgers", "Fries"]]
foodTruckFestival(menus);