<template>
    <div class="input-group">
        <input id="msg" type="text" class="form-control" 
                name="msg" 
                placeholder="할일을 여기에 입력!" 
                v-model="todo"
                @keyup.enter="addTodoHandler"
        />
        <span class="btn btn-primary input-group-addon" 
               @click="emit('add')">추가</span>
    </div>
</template>

<script>
    export default{
        name: "TodoInput",

        data(){
            return {
                todo : ""
            }
        },
        addTodoHandler() {
                if (this.todo.length >= 2) {
                    this.$emit('add', {todo:this.todo});                                        
                    this.todo = "";
                }else{
                    alert('할일은 2글자 이상 입력하세요')
                }
            }        
    }
</script>
