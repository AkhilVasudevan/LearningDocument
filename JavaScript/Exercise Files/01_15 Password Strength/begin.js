/*
  WRITE YOUR SOLUTION HERE
*/
function checkPassword(password) {
  let oneLowerCaseLetter=/(?=.+[a-z])/;
  let oneUpperCaseLetter=/(?=.+[A-Z])/;
  let oneDigit=/(?=.+[0-9])/;
  let oneSpecialCharacter=/(?=.+[!@#$%^&*])/;
  let minimumEightCharacters=/(?=.{8,})/;
  let isValid = oneDigit.test(password) &&
                oneLowerCaseLetter.test(password) &&
                oneSpecialCharacter.test(password) &&
                oneUpperCaseLetter.test(password) &&
                minimumEightCharacters.test(password);
  return isValid? "Your password is valid":"Your password is invalid, try again";
}
console.log(checkPassword("abc"));
console.log(checkPassword("9Ab!4567"));