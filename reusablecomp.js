Vue.component('plan-picker',{
    template : '#plan-picker-template',
    // this data is like vue instance data for the child of this comp
    data(){
        return{
            plans:[{id:1,name:'The Single',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at perspiciatis et. Odio, error laborum. Quidem earum nostrum voluptatem voluptatibus!'},
            {id:2,name:'The Curious',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at perspiciatis et. Odio, error laborum. Quidem earum nostrum voluptatem voluptatibus!'},
            {id:3,name:'The Addict'}]
        }
    }
})

Vue.component('plan',{
    // props : ['name','content'],
    // instead of using props like above below is best practice
    props : {
        name : String,
        // we can also write like below by giving default value
        content :{
            type : String,
            default : 'Content goes here',
            required : true
        }
    },
    template:'#plan-template'
})

var app = new Vue({
    el:'#app',
    data : {
        
    }
})