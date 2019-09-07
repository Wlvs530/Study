var app1 = new Vue({
    el:'#app-1',
    data:{
        Message:'Hello,World!',
    }
});

var app2 = new Vue({
    el:'#app-2',
    data:{
        Message:'Page Landed At ' + new Date().toLocaleString(),
    }
});

var app3 = new Vue({
    el:'#app-3',
    data:{
        Seen:true,
    }
});

var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
            { text:'Study JavaScript' },
            { text:'Study Vue' },
            { text:'Study Project' },
        ]
    }
});

var app5 = new Vue({
    el:'#app-5',
    data:{
        Message:'Hello,Vue.js!'
    },
    methods:{
        reverseMessage:function()
        {
            this.Message = this.Message.split('').reverse().join('');
        }
    }
});

var app6 = new Vue({
    el:'#app-6',
    data:{
        Message:'Hello,Vue.js!'
    },
});

Vue.component('todo-item',{
    template:'<li>This is a todo</li>'
});

var app7 = new Vue({
    el:'#app-7',
});

Vue.component('todo-item1',{
    props:['todo'],
    template:'<li>{{ todo.text }}</li>',
});

var app8 = new Vue({
    el:'#app-8',
    data:{
        groceryList:[
            {id:0,text:'Vegetable'},
            {id:1,text:'Cheese'},
            {id:2,text:'Milk'},
        ]
    }
});

var app9 = new Vue({
    el:'#app-9',
    data:{
        Message : 'Not Click',
    }
});

var app10 = new Vue({
    el:'#app-10',
    data:{
        rawHtml : '<span style=\"color:blue\">Change Color</span>',
    }
});