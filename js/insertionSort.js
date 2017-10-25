'use strict';
/**
 * Created by Damola on 2017-10-06.
 */
let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
function swap(array, firstElement, secondElement){
    let temp =  array[firstElement];
    array[firstElement] = array[secondElement];
    array[secondElement] = temp;
}
function insertionSort(array){
    for(let index=1; index<array.length; index++){
        let indexTrack = index;
        for(let travIndex=index-1; travIndex >= 0 && array[indexTrack]<array[travIndex]; travIndex--){
            console.log(`preswap: ${array}`);
            swap(array, travIndex, indexTrack);
            console.log(`postswap: ${array}`);

            indexTrack--;


        }
    }
    return array;
}

console.log(insertionSort(array));