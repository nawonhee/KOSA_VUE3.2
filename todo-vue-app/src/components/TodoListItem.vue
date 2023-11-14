<template>
    <li class="list-group-item "
        :class="todo.completed? 'list-group-item-success': ''"
    >
    <!--이벤트 전파 중지    : e.stopPropagation()  v-on:click.stop
        기본이벤트처리 중지 : e.preventDefault()   v-on:click.prevent
    -->
    <span class="pointer"
          @click="upd"
          v-bind:class="todo.completed? 'todo-done' :''"
    >{{todo.todo}}{{todo.completed? '(완료)': ''}}</span>
    <span class="float-end badge bg-secondary pointer"
        @click="del"
    >삭제</span>
    </li>
</template>

<script>
    export default{
        name: "TodoListItem",
        props:["todo"],
        methods:{
            del(id){
                this.$emit("del".this.todo.id);
            },
            upd(id){
                this.$emit("upd",this.todo.id);
            }
        }
    }
</script>

<style scoped>
.todo-done {
    text-decoration: line-through;
}
.pointer {
    cursor: pointer;
}
</style>