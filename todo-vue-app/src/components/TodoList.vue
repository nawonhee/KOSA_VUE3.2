<template>
    <div class="row">
        <div class="col">
            <ul class="list-group">
                <TodoListItem v-for="todo in todolist" :key="todo.id" :todo="todo" @del="del" @upd="upd"/>         
            </ul>
        </div>
    </div>
</template>

<script>
    import TodoListItem from "./TodoListItem.vue"
    export default{
        name: "TodoList",
        components : {TodoListItem},
        props:["todolist"],
        methods:{
            del(id){
                this.$emit("del",id);
            },
            upd(id){
                this.$emit("upd",id);
            }
        }
    }
</script>
