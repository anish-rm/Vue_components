Vue.component('todo-list',{
    template : '#todo-list-template',
    data() {
        return{
            completed : false
        }
    }
})



new Vue({
    el:'#app'
})


// Note :
// when you need to pass HTML
// or other markup to a component, use SLOTS

// When you need to pass data
// to a component use PROPS