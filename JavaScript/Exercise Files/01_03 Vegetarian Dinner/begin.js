/*
  WRITE YOUR SOLUTION HERE
*/
function vegetarianMenu(dishList)
{
  const ul=document.querySelector('#menu');
  const vegOptions=dishList.filter((option)=> option.isVegetarian===true);
  vegOptions.forEach((option)=>{
    const li=document.createElement("li");
    li.innerText=option.name;
    ul.append(li);
  });
}
const dishes=[
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];
vegetarianMenu(dishes);