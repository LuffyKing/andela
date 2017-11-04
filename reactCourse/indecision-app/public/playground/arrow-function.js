/*
const square = function(x){
  return x**2;
}
console.log(square(8));
const squareArr = (x) => x**2;
console.log(squareArr(8));
*/
const getFirstNameArrow = (x) => x.split(' ')[0];
function getFirstName(x){
  return x.split(' ')[0];
}
console.log(getFirstName('Damola Aderinwale'));
console.log(getFirstNameArrow('Damola Aderinwale'));
