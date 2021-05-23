/*
  WRITE YOUR SOLUTION HERE
*/
function factorial(data)
{
  if(data.length===1)
  {
    return 1;
  }
  return factorial(data.slice(1)) * data.length;
}

console.log(factorial("HelloWorld"));