"use strict";
/**
 * Created by Damola on 2017-09-23.
 */
let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function () {

    return {

        current: this.from,
        last: this.to,
        next(){
            if(this.current<=this.last){
                return {done:false, value:this.current++};
            }
            else{
                return {done:true};
            }

        }


    };
};
alert(Array.from(range, num => num**3));