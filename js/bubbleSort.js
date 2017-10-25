'use strict';
/**
 * Created by Damola on 2017-10-07.
 */
function swap(array, firstElement, secondElement){
    let temp =  array[firstElement];
    array[firstElement] = array[secondElement];
    array[secondElement] = temp;
}
function bubbleSort(array){
    while(true){
        let swapCount = false;
        for(let index=0;index<array.length-1;index++){
            if(array[index]>array[index+1]){
                console.log(`preswap: ${array}`);
                swap(array,index,index+1);
                console.log(`postswap: ${array}`);

                swapCount=true;


            }

        }
        if(!swapCount){
            break;
        }


    }
    return array;


}

let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(bubbleSort(array));