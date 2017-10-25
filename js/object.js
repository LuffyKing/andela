"use strict";
/**
 * Created by Damola on 2017-09-20.
 */
function makeUser(name, money) {
    return {
        name,
        money,
        [Symbol.toPrimitive](hint){
            return hint == 'string' ? `name: ${this.name}`:this.money
            }
        }
    }


let str = 'hello';
str.toUpperCase();