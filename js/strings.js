"use strict";
/**
 * Created by Damola on 2017-09-21.
 */
/*
function sum(a, b){
    return a+b;
}
let a = 100;
let b = 19;
alert(`${a} + ${b} = ${sum(a,b)}`);
    */

let guestList = `Guests:\n* John\n*Pete\n*Punching`;
alert(guestList);
let aString ='Created by Damola on 2017-09-21';
while(true) {
    let query = prompt(`What word are you looking for? From the following word\n${aString}`);
    if(query) {
        if (~aString.indexOf(query)) {
            alert(`We found ${query} at ${aString.indexOf(query)} in\n${aString}`);
        }
        

    }
    else{
        break
    }
}