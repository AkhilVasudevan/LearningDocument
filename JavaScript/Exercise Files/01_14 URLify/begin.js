/*
  WRITE YOUR SOLUTION HERE
*/
function URLify(url)
{
  const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;
  url=url.replace(punctuation,"").toLowerCase().trim().replaceAll(" ","-");
  return url;
}

console.log(URLify("How I Got Into Programming!!!"));
console.log(URLify("I've got a new job :)"));