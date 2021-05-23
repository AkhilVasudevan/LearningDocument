/*
  WRITE YOUR SOLUTION HERE
*/
function Movie(Title,Director,Genre,ReleaseYear,Rating)
{
  this.Title=Title;
  this.Director=Director;
  this.Genre=Genre;
  this.ReleaseYear=ReleaseYear;
  this.Rating=Rating;
}

Movie.prototype.getOverview=function()
{
  return `${this.Title}, a ${this.Genre} film directed by 
  ${this.Director} was released in ${this.ReleaseYear}. It
  received a rating of ${this.Rating}`;
}

const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);

const Batman = new Movie(
  "The Dark Knight",
  "Christopher Nolan",
  "Action",
  2008,
  83
);

const TheNotebook = new Movie(
  "The Notebook",
  "Nick Cassavetes",
  "Romance",
  2004,
  54
);

console.log(Spiderman.getOverview());
console.log(Batman.getOverview());
console.log(TheNotebook.getOverview());