'use strict';
/**
 * Created by Damola on 2017-10-07.
 */
function swap(array, firstElement, secondElement){
    let temp =  array[firstElement];
    array[firstElement] = array[secondElement];
    array[secondElement] = temp;
}
function selectionSort(array){
    for(let index=0; index<array.length-1; index++){
        let min = index;
        for(let indexTrav=index+1; indexTrav<array.length; indexTrav++){
            if(array[min]> array[indexTrav]) {
                console.log(`${array[min]}, ${array[indexTrav]}`);
                min = indexTrav;
            }


        }
        console.log(`${array[min]}`);
        if(index!==min){
            console.log(`preswap: ${array}`);
            swap(array, min,index);
            console.log(`postswap: ${array}`);
        }


    }
    return array;
}
let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(selectionSort(array));