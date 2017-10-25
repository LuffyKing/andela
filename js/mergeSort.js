'use strict';
/**
 * Created by Damola on 2017-10-05.
 */
let arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
function mergeSortTopDown(array){
    console.log(array);
    if(array.length<2){
        return array;
    }
    let middle = Math.floor(array.length/2);
    let left = array.slice(0,middle);
    let right = array.slice(middle);
    console.log(`${left} - ${right}`);
    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}

function mergeTopDown(left, right) {
    let array = [];
    console.log(`${left} - ${right}`);
    while(left.length && right.length){
        if(left[0] < right[0]){

            array.push(left.shift());
        }
        else{
            array.push(right.shift());
        }
    }
    let finalArr = array.concat(left).concat(right);
    console.log(finalArr);
    return finalArr;
}
console.log(mergeSortTopDown(arr));