// not all components need to be global like plan component is a child of another comp. It need not be global it can be declared local inside plan-picker component
//once we register comp locally it cannot be use outside. In this example it is registered locally inside plan-picker it cannot be used elsewhere
let PlanComponent ={
    props : {
        name : {
            type :String,
            required : true
        },
        content :{
            type : String,
            default : 'Content goes here',
            required : true
        }
    },
    template:'#plan-template'
}


// Vue.component('plan-picker',{
//     template : '#plan-picker-template',
//     // now we can use components option to register our plan componnt locally
//     components : {
//         // key is the name of the comp and value is the options object
//         plan : PlanComponent
//     },
//     data(){
//         return{
//             plans:[{id:1,name:'The Single',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at perspiciatis et. Odio, error laborum. Quidem earum nostrum voluptatem voluptatibus!'},
//             {id:2,name:'The Curious',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at perspiciatis et. Odio, error laborum. Quidem earum nostrum voluptatem voluptatibus!'},
//             {id:3,name:'The Addict'}]
//         }
//     }
// })



// we can also register the above comp locally
//since it has no parent we can register it in vue instance
let PlanPickerComponent = {
    template : '#plan-picker-template',
    // now we can use components option to register our plan componnt locally
    components : {
        // key is the name of the comp and value is the options object
        plan : PlanComponent
    },
    data(){
        return{
            plans:[{id:1,name:'The Single',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at perspiciatis et. Odio, error laborum. Quidem earum nostrum voluptatem voluptatibus!'},
            {id:2,name:'The Curious',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at perspiciatis et. Odio, error laborum. Quidem earum nostrum voluptatem voluptatibus!'},
            {id:3,name:'The Addict'}]
        }
    }
}


new Vue({
    el : '#app',
    components : {
        'plan-picker' : PlanPickerComponent
    }
})