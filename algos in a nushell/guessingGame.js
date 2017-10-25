'use strict';
/**
 * Created by Damola on 2017-10-17.
 */
function turnsToGuessANumber(number, low, high){

    let turns = 0;
    let mid;
    while(low<=high){
        turns++;
        mid = (high +low)/2;
        if(mid == +number){
            return turns;
        }
        else if(mid < number){
            low = mid + 1;

        }
        else{
            high = mid-1;
        }
    }
    return turns;
}

