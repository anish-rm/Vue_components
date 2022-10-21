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