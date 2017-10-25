"use strict";
/**
 * Created by Damola on 2017-10-03.
 */
let arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
function quickSortBasic(array) {
    if (array.length < 2) {
        console.log(array);
        return array;
    }
    else {


        let pivot = array[0];
        console.log(`${array} ${pivot}`);
        let lesser = [];
        let greater = [];
        for (let i = 1; i < array.length; i++) {
                if (array[i] < pivot) {
                    lesser.push(array[i]);
                }
                else {
                    greater.push(array[i]);
                }

        }
        return quickSortBasic(lesser).concat(pivot, quickSortBasic(greater));
    }



}

function swap(array, firstIndex, secondIndex ) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;

}

function quickSort(array, left, right){
    left = left || 0;
    right = right || array.length-1;
    let pivot = partitionHoare(array, left, right);
    if(left < pivot-1){
        console.log(array.slice(left,right+1));
        console.log(array.slice(left,pivot));
        quickSort(array, left, pivot - 1);
    }
    if(right>pivot){
        console.log(array.slice(left,right+1));
        console.log(array.slice(pivot,right+1));
        quickSort(array, pivot, right);
    }
    return array

}

function partitionHoare(array, left, right){
    let fixedLeft = left;
    let fixedRight = right;
    let pivot;
    if (array.slice(left,right+1).length>=3){
        let arr = {
            [array[left]]:left,
            [array[Math.floor((left+right)/2)]]:Math.floor((left+right)/2),
            [array[right]]:right
        };
        console.log(Object.keys(arr));
        console.log(array.slice(left,right+1));
        let keys = Object.keys(arr);
        pivot = arr[keys[1]];
        console.log(keys[1]);

    }
    else{
        pivot = Math.floor((left+right)/2);
    }
    while(left <= right){
        while(array[left] < array[pivot]){
            console.log(`${array[left]} < ${array[pivot]}`);
            left++;
        }

        while(array[right] > array[pivot]){
            console.log(`${array[right]} > ${array[pivot]}`);
            right--;

        }
        if(right => left){
            console.log(`preswap: ${array.slice(fixedLeft,fixedRight+1)}`);
            console.log(`swapped ${array[left]} with ${array[right]}`);
            swap(array, left,right);

            left++;
            right--;
        }

    }
    console.log(array[left]);
    return left;
}
console.log(quickSort(arr));