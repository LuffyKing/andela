"use strict";
/**
 * Created by Damola on 2017-10-16.
 */
let app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue!',
    }
});
let date = new Date();
let app2 = new Vue({
    el:'#app2',
    data:{
        message:`You loaded this page on ${date.toLocaleString()}`,
    }
});
let app3 = new Vue({
    el:"#app3",
    data:{
        seen:true,
    }
});

let app4 = new Vue({
    el: '#app4',
    data:{
        todos:[
            {text:'Learn Javascript'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ]
    }
});

let app5 = new Vue({
    el:'#app5',
    data:{
        message:'Hello Vue'
    },
    methods:{
        reverseMessage(){
            this.message = this.message.split('').reverse().join('');
        }
    }
});

let app6 = new Vue({
    el:'#app6',
    data:{
        message:'Hello Vue!'
    }
});
Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
});

let app7 = new Vue({
    el:'#app7',
    data:{
        groceryList:[
            {id:0, text:'Vegetables'},
            {id:1, text:'Cheese'},
            {id:2, text:'Whatever else humans are supposed to eat'},
        ]
    }
});
