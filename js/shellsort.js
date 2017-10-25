'use strict';
/**
 * Created by Damola on 2017-10-06.
 */
let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
let gaps = [1,4,10,23,57,132,301,701,1750].reverse();
function shellsort(array){
    for(let agap of gaps){
        for(let i = agap;i<array.length; i++){
            let temp = array[i];
            console.log(`temp: ${temp} gap: ${agap} i:${i}`);
            let j;
            for(j = i; j >= agap && array[j-agap] > temp; j-=agap){
                console.log(`j:${j}`);
                console.log(`preswap: ${array}`);
                array[j] = array[j-agap];
                console.log(`postswap 1: ${array}`);
            }
            array[j] = temp;
            console.log(`postswap 2: ${array}`);
        }

    }
    return array;
}
console.log(shellsort(array));
