let map = new Map();
/**
 * Created by Damola on 2017-09-23.
 */
/*
map.set('1', 'str1');
map.set(1,'num1');
map.set(true, 'bool1');
let user = {name:"John"};
let visitsCountMap = new Map();
visitsCountMap.set(user, 123);
alert(map.get(true));
alert(visitsCountMap.get(user));
let newMap = new Map([['1', 'str1'],[1, 'num1'],[true, 'bool1']]);
alert(newMap.get('1'));
for(let entry of newMap.entries()){
    alert(entry[0]);
    alert(entry[1]);
}
    */
/*
map = new Map([['john',200],['monk',400],['time', 900]]);
map.forEach(value => alert(value**2));
alert(map);
let set = new Set();

let john = {name:'John'};
let pete = {name:'Pete'};
let car = {name:'long'};

set.add(john);
set.add(pete);
set.add(car);
for(let user of set){
    alert(user.name);
}

set = new Set([['jon',900],['long',900],['po',9000]]);
for(let entry of set.keys()){
    alert(entry);
}
 */
let aWeakMap = new WeakMap();
let jon = {name:'Jon'};
aWeakMap.set(jon,'lol');
jon = null;
alert(aWeakMap.valueOf());