Vue.component('click-counter',{
    // if we type our html code it will be tough becoz it wont autocomplete so we can create a script in html page give it id and refer here
    // template: `
    //     <button @click = count++>{{count}}</button>
    // `,
    template : '#click-counter-template',
    data(){
        return{
            count:0
        }
    }
})

var app = new Vue({
    el:'#app',
    data : {
        
    }
})
