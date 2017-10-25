/**
 * Created by Damola on 2017-09-22.
 */
function makeUser(id, name,money=100){
    return {
        id,
        name,
        money,
        toString(){return `name: ${this.name}  id: ${this.id} money: ${this.money}`},
    };
}
let users = [
    makeUser('1', 'Oyindamola Aderinwale'),
    makeUser('2', 'Oyindamola'),
    makeUser('3', 'Oyindamola Sword'),
    makeUser('4', 'Aderinwale'),
    1234
];

//let user = users.find(item => item.id ==2);
//let anArr = users.filter(item => item.id<4);
//alert(anArr);
/*
let results = users.map(function (item,index,array) {
    if (Object.prototype.toString.call(item) == '[object Object]') {
        item.money *= 2;
        alert(`${item}, ${Object.prototype.toString.call(item)}`);

    }
    return item;
});
alert(results);
*/
/*
let aResult = users.map((item)=>item.name);
alert(aResult);
let arr = [1,23,6,7,8123,0,934,67];
arr.sort((a,b)=>a-b);
alert(arr);
alert(arr.join(';;'));
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result);
arr.forEach(item => alert(item**2));
alert(arr);
alert(arr.some(item => item>300));
alert(arr.every(item => isFinite(item)));

function sum() {
   let anArr = Array.from(arguments);
   return anArr.reduce((sum, current) => sum + +current, 0);
}
function summing(input) {
    alert(sum(...input.split('+')));
}
while(true) {
    let ans = prompt('What numbers do you want to add?', '1+1');
    let addCheck = /[^\d\+]/;
    if(ans) {
        if (!(addCheck.test(ans)) && ans.includes('+')) {
            summing(ans);

        }
        else {
            alert('Only + and numbers are allowed, also make sure numbers are added by +.')
        }
    }
    else{
        break;
    }
}

function sortLetters(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
function removeDuplicates(word){
    let alphaNumsArray = word.match(/[a-zA-Z]/g);


    alphaNumsArray.sort(sortLetters);
    let uniqueSet = new Set(alphaNumsArray);
    let duplicates = alphaNumsArray.length - uniqueSet.size;
    let uniques = [...uniqueSet].reduce((strOut, current) => strOut + current, '');

    return{
        uniques,
        duplicates
    };
}
*/
function even(item, index, array) {
    if(item%2==0){
        return true
    }
    else{
        return false
    }
}
function odd(item, index, array) {
    if(item%2!=0){
        return true
    }
    else{
        return false
    }

}
function mySort(nums) {


    let allNumbers = nums.filter(item => isFinite(item)).map(item =>Math.floor(item));
    let evenNumbers = allNumbers.filter(even);
    let oddNumbers = allNumbers.filter(odd);
    oddNumbers.sort((a, b) => a - b);
    evenNumbers.sort((a, b) => a - b);
    return oddNumbers.concat(evenNumbers);




}
