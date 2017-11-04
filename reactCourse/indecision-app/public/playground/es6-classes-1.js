// Car class
// make,model,vin
// getDescription
// Person class
class Person{
  constructor(name='Anonymous', age=0){
    this.name = name;
    this.age = age;

  }
  getDescription(){
      return `${this.name} is ${this.age} years old`;
  }
  getGreeting(){
    return `Hi. I am ${this.name}!`;
  }

}

class Student extends Person{
  constructor(name, age, major){
    super(name, age);
    this.major = major;

  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){

    if(this.hasMajor()){
      return `${this.name} is ${this.age} years old and has a major in ${this.major}`;


    }
    else{
      return super.getDescription();
    }
  }

}

class Traveler extends Person{
  constructor(name, age, homeLocation=''){
    super(name, age);
    this.homeLocation = homeLocation;

  }
  hasHomeLocation(){
    return !!this.homeLocation;
  }
  getGreeting(){
    if(this.hasHomeLocation()){
      return super.getDescription() + `. I am visiting from ${this.homeLocation}.`;
    }
    else{
      return super.getDescription();
    }

  }
}
const me1 = new Traveler('Damola', 30, 'Lagos');
const me = new Traveler('Damola', 30);
const you = new Traveler();
console.log(me.getGreeting());
console.log(me1.getGreeting());
