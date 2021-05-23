/*
  WRITE YOUR SOLUTION HERE
*/
function getTotalCost(coffees,costPerCoffee)
{
  let totalCoffees=coffees.reduce(
    (tempSum,coffee)=>(tempSum+=coffee)
  );
  return `The total bill is ${totalCoffees * costPerCoffee}`
}
coffees=[2, 5, 7, 1, 4];
costPerCoffee=1.25;
console.log(getTotalCost(coffees,costPerCoffee));