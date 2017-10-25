'use strict';
/**
 * Created by Damola on 2017-09-16.
 */
/*
let user =  {
    name:"John",
    age:30,
    'likes birds':true
};
let key = prompt('What would you like to know about the user?', 'name');
if(key) {


    alert(user[key]);
}
*/
/*
let person = {};

let input = document.querySelector('input');
let btn = document.querySelector('button');
let para = document.querySelector('p');
btn.onclick = function() {
        let code = input.value;
        para.textContent = `${code}`;
    };
*/
/*
let bag ={
    [fruit]:'5',
};

let fruit = prompt('Which fruit do you want to buy?','mango');
alert(bag[fruit]);
    */
/*
let vars = prompt('What is the users name and age?','bob,30');
let varArray = vars.split(',');
function makeUser(name, age){
    return{
      name: name,
        age: age
    };
}
let user = makeUser([varArray[0]], varArray[1]);
if('name' in user) {


    alert(user.name);
    alert(user.age);
}
 */

/*
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};
let clone = _.cloneDeep(user);
alert(user.sizes===clone.sizes);

function createNewPerson(name){
    let obj = {};
    obj.name = name;
    obj.greeting = function () {
        return `Hey my name is ${this.name}!`;
    };
    return obj;
}
let newPerson = createNewPerson('Oyindamola');
alert(newPerson.greeting());
*/
/*
function makeNewPerson(name){
    return{
      name:name,
        greeting: function () {
            return `Hey my name is ${this.name}!`
        }
    };
}

let newPerson = makeNewPerson('Oyindamola');
alert(newPerson.greeting());
*/
/*
function UserFuncClass(name, birthday){
    function calcAge(){
        return new Date.now().getFullYear() - birthday.getFullYear();
    }
    this.sayHi =  function(){
        alert(`Hi my name is ${name}, and I am ${calcAge()} years old.`);
    }
}


function UserFactoryClass(name, birthday){
    function calcAge(){
     return new Date().getFullYear() - birthday.getFullYear();
    }
    return {
        sayHi(){
            alert(`Hi my name is ${name}, I am ${calcAge()} years old!`);
        }
    };
}
let user1 = new UserFuncClass('Damola', new Date(1993,1,9));
let user = UserFactoryClass('John', new Date(1993,1,9));
user.sayHi();
user1.sayHi();
function  User(name, birthday){
    this._name = name;
    this.birthday = birthday;

}

User.prototype._calcAge = function(){
    return new Date.now().getFullYear() - birthday.getFullYear();
};

User.prototype.sayHi = function () {
    alert(`Hi my name is ${name}, and I am ${calcAge()} years old.`);
};
*/
/*
function Animal(name){
    this.name = name;
}

function Rabbit(name){
    this.name = name;
}

Animal.prototype.eat = function(food){
  return `${this.name} is eating ${food}`;
};

Animal.prototype.sleep = function () {
  return `${this.name} is sleeping!`;
};

Rabbit.prototype.hop = function () {
  return `${this.name} is hoping!`;
};

Rabbit.prototype.__proto__=Animal.prototype;
let rabbit = new Rabbit('Dougie');

alert(rabbit.hop());
alert(rabbit.eat('carrots'));
alert(rabbit.sleep());
*/
/*
class User{
    constructor(name){
        this._name = name;
    }

    sayHi(){
        alert(`Hey my name is ${this.name}`);
    }
    get name(){
        return this._name
    }
    set name(value){
        if (value.length<4){
            alert('Name is too short!');
            return
        }
        this._name = value;
    }
    get canFight(){
        return true;
    }
}
let user = new User("John");
alert(user.canFight);
*/
/*
function makeClass(phrase){
    return class{
        sayHi(){
            alert(phrase);
        }
    }
}
let user = makeClass('Hello');
new user().sayHi();
*/
/*
let user = class myClass{
    sayHi(){
        alert('Hi!');
    }
};
new user().sayHi();
*/
/*
class User{
    static sayHi(){
        alert('Hey hey!');
    }
}

User.sayHi();

*/
/*
class Article{
    constructor(title, date){
        this.title = title;
        this.date = date;
    }
    static compare(articleA, articleB){
        return articleA.date - articleB.date;
    }
    toString(){
        return `${this.title}, ${this.date.getDay()}-${this.date.getMonth()+1}-${this.date.getFullYear()}`;
    }
    static createNewArticle(){
        return new this("New Article", new Date());
    }
}

let newArticle = Article.createNewArticle();
alert(newArticle);
*/
/*
class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed += speed;
        alert(`${this.name} runs with speed ${this.speed}.`);

    }
    stop(){
        this.speed = 0;
        alert(`${this.name} stopped.`);

    }
    eat(food){

        alert(`${this.name} is eating ${food}!`);

    }
    static evovlePhrase(){
        alert(`I am evolving!`);
    }
}

class Rabbit extends Animal{
    constructor(name, earLength){
        super(name);
        this.earLength = earLength;
    }
    hop(){
        alert(`${this.name} is hoping`)
    }

    get food(){
        return 'carrot';
    }

    eat(food=this.food){
        super.eat(food);
        this.hop();
    }
}

let rabbit = new Rabbit('Gemini');
rabbit.eat('fish');
Rabbit.evovlePhrase();
*/
/*
class SimpleDate{
    constructor(year,month,day) {
        let _year = year;
        let _day = day;
        let _month = month;


        this.addDays= function(nDays){
            _day += nDays;
        };
        this.getDay = function()
        {
            return _day;
        };
    }
}
let adate = new SimpleDate(2019,1,1);
alert(adate.getDay());
*/
/*
let SimpleDate = (function () {
        let _year = new WeakMap();
        let _month = new WeakMap();
        let _day = new WeakMap();

        class SimpleDate{
            constructor(year,month,day){
                _year.set(this,year);
                _month.set(this,year);
                _day.set(this,year);
            }
            addDays(nDays){

            }
            getDays(){
                return this[_day];
            }
        }
        return SimpleDate;
    }());

let adate = new SimpleDate(2019,1,1);
alert(adate);
*/
/*
class SimpleDate{
    static setDefaultDate(year, month, day){
        this._defaultDate = new SimpleDate(year, month, day);
    }
    constructor(year, month, day){
        if(arguments.length===0){
            this._year = SimpleDate._defaultDate._year;
            this._month = SimpleDate._defaultDate._month;
            this._day = SimpleDate._defaultDate._day;
            return;
        }
        this._year = year;
        this._month = month;
        this._day = day;
    }

    addDays(nDays){

    }

    getDay(){
        return this._day;
    }
}

SimpleDate.setDefaultDate(1970, 1, 1);
let adate = new SimpleDate();

alert(adate._day);
*/
/*
class Employee{
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }
    getFullName(){
        return `${this._firstName}, ${this._lastName}`;
    }

}


class Manager extends Employee{
    constructor(firstName, lastName){
        super(firstName, lastName);
        this._employeesManaging = [];
    }

    addEmployee(employee){
        this._employeesManaging.push(employee);



    }
}
    */
class ShoppingCart{
    constructor(){
        this.total = 0;
        this.items = {};
    }
    addItem(item_name, quantity, price){
        this.total += quantity*price;
        this.items[item_name] = quantity;

    }

    removeItem(item_name, quantity, price){
        this.total -= quantity*price;
        if(this.items[item_name] < quantity){
            delete this.item[item_name];
        }
        else{
            this.item[item_name] -= quantity;
        }


    }
    checkout(cash_paid){
        if(this.total-cash_paid>0){
            return 'Cash paid not enough';
        }
        return this.total-cash_paid;
    }

}

class Shop extends ShoppingCart{
    constructor(){
        super();
        this.quantity = 100;
    }
    removeItem(){
        this.quantity-=1;
    }
}