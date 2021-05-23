/*
  WRITE YOUR SOLUTION HERE
*/
function getStudents(classRoom)
{
  let {hasTeachingAssistant, classList}=classRoom;
  let teacher, teachingAssitant, students;
  if(hasTeachingAssistant)
  {
    [teacher,teachingAssitant,...students]=classList;
  }
  else
  {
    [teacher,...students]=classList;
  }
  return students;
}
classRoom={
  hasTeachingAssistant: true,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
};
console.log(getStudents(classRoom));
classRoom.hasTeachingAssistant=false;
console.log(getStudents(classRoom));