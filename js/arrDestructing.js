/**
 * Created by Damola on 2017-09-23.
 */
/*
let arr = ['Ilya', 'Kantor'];
let [firstName, surname] = arr;
alert(firstName);
alert(surname);
let [,,...last] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(last);
let [a, b, c] = "abcde";
let user = {};
[user.age, user.car] = '23 Porsche'.split(' ');
alert(Object.keys(user));
for(let [key, value] of Object.entries(user)) alert(`${key}:${value}`);

let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let vars;
({vars} = options);
alert(vars.width);
// we pass object to function
let options = {
    title: "My menu",
    items: ["Item1", "Item2"],
    height: 1000,
};

let options = {
    title: "My menu",
    items: ["Item1", "Item2"],
    height: 1000,
};
// ...and it immediately expands it to variables
function showMenu({title = "Untitled", width: w = 200, height = 100, items:[]}) {
    // title, items – taken from options,
    // width, height – defaults used
    alert( title + ' ' + w + ' ' + height ); // My Menu 100 200
    alert( items ); // Item1, Item2
}
showMenu(options);
 */
let newDate = new Date('2017-01-01');
alert(newDate);                                 