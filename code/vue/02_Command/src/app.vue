<template>
    <div>
        <pre>
    常用指令
    * v-text
    * v-html
    * v-if
    * v-show
    * v-model
        </pre>
        v-text
        <div  v-text="Text"></div>
        <hr/>
        v-html
        <div  v-html="Html"></div>
        <hr/>
        v-if
        <div v-if="Condition">Show</div>
        <div v-else>Hide</div>
        <hr/>
        v-show
        <div v-show="isShow" style="width:300px;height:50px;background-color:green"></div>
        <hr/>
        v-model<br/>
        {{model}}<br/>
        <input type="text" v-model="model">
        <hr/>
        v-bind:class
        <div v-bind:class="Color">ColorBackgound</div>
        <div :class="Color2">ColorBackgound</div>
        
        <div>
            <ul>
                <li v-for="(stu,index) in Students"
                    :key="index" 
                    :class="Color3[stu.score]">
                    {{stu.name}}
                </li>
            </ul>
        </div>
        <hr/>
        v-on<br/>
        <button v-on:click="Condition=!Condition;isShow=!isShow">点击1</button>
        <button v-on:click="BtnClick">点击2</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            Text : '我是v-text!',
            Html : `
                <ul>
                    <li>Java</li>
                    <li>C#</li>
                    <li>C++</li>
                    <li>{{Text}}   //// 不支持加表达式</li>
                <ul>
            `,
            Condition : true,
            isShow : false,
            model : 'InputText',
            Color:'red small',
            Color2:{green:true,big:true},
            Students : [
                {name:'张1',score:'A'},
                {name:'张2',score:'C'},
                {name:'张3',score:'B'},
                {name:'张4',score:'A'},
                {name:'张5',score:'C'},
                {name:'张6',score:'B'},
            ],
            Color3:{'A':'red small','B':'green small'},
            Click : true
        }
    },
    methods : {
        BtnClick(){
            this.Condition=!this.Condition;
            this.isShow=!this.isShow;
            this.Click = !this.Click;
            if( this.Click){
                this.Color2 = {blue:true,small:true};
                this.Color3 = {'A' : 'powderblue small','B' : 'palevioletred small'};
            }else{
                this.Color2 = {green:true,big:true};
                this.Color3 = {'A':'red small','B':'green small'};
            }
        }
    }
}
</script>

<style>
    .small{
        width:  200px;
        height: 20px;
    }
    .big{
        width:  200px;
        height: 40px;
    }
    .red {
        background-color: red;
    }
    .green {
        background-color: green;
    }
    .blue {
         background-color: blue;
    }
    .palevioletred{
        background-color: palevioletred;
    }
    .powderblue{
        background-color:powderblue;
    }
</style>>