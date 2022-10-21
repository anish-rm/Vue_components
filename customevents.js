let PlanComponent ={
    props : {
        id : {
            type : Number,
            required : true
        },
        name : {
            type :String,
            required : true
        },
        content :{
            type : String,
            default : 'Content goes here',
            required : true
        },
        selectedPlan :{
            type : String,
        }
    },
    template:'#plan-template',
    data(){
        return{
            
        }
    },
    methods:{
        select(){
            this.$emit('selected',this.name,this.id)
        }
    },
    computed:{
        isSelected(){
            return(this.selectedPlan === this.name)
        }
    }
}


let PlanPickerComponent = {
    template : '#plan-picker-template',
    // now we can use components option to register our plan componnt locally
    components : {
        // key is the name of the comp and value is the options object
        plan : PlanComponent
    },
    data(){
        return{
            plans:[{id:0,name:'The Single',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at perspiciatis et. Odio, error laborum. Quidem earum nostrum voluptatem voluptatibus!'},
            {id:1,name:'The Curious',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at perspiciatis et. Odio, error laborum. Quidem earum nostrum voluptatem voluptatibus!'},
            {id:2,name:'The Addict'}],
            selname : null,
            selid : 0,
            isSelected : false
        }
    },
    methods : {
        selected(nam,idd){
            this.selname = nam;
            this.selid = idd;
            if(this.selname === this.plans[this.selid].name){
                this.isSelected = true
            }
        }
    },
}


new Vue({
    el : '#app',
    components : {
        'plan-picker' : PlanPickerComponent
    }
})