/*
  WRITE YOUR SOLUTION HERE
*/
class Book
{
  constructor(Title,Author,ISBN,numCopies)
  {
    this.Title=Title;
    this.Author=Author;
    this.ISBN=ISBN;
    this.numCopies=numCopies;
  }
  getAvailability()
  {
    if(this.numCopies==0)
    {
      return "Out of stock";
    }
    else if(this.numCopies<10)
    {
      return "Low stock";
    }
    else
    {
      return "In stock";
    }
  }
  sell(numsold=1)
  {
    this.numCopies-=numsold;
  }
  restock(numcopies=5)
  {
    this.numCopies+=numcopies;
  }
  get availability()
  {
    return this.getAvailability();
  }
}
const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);
HungerGames.restock(12);
console.log(HungerGames.availability);
HungerGames.sell(17);
console.log(HungerGames.availability);