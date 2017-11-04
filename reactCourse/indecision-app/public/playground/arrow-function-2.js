const multiplier = {
  numbers: [1,2,3,4,5,6,7,8],
  multiplyBy: 6,
  multiply(){
    return this.numbers.map((number) => number*this.multiplyBy);
  }



}
console.log(multiplier.multiply());
