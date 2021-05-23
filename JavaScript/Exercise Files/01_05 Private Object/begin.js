/*
  WRITE YOUR SOLUTION HERE
*/
const username=Symbol("username");
const password=Symbol("password");

const user={
  [username]:"akhil",
  [password]:"1234",
  age:24
};

console.log(user.username);
console.log(user.password);