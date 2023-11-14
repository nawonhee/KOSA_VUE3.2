<template>
<body>
    <div id="app" class="container">
      <!--3. 템플릿 완성-->
      <div class="card card-body bg-light">
        <div classe="title">:: Todolist App</div>
      </div>
      <div class="card card-default card-borderless">
        <div class="card-body">
          <div class="row mb-3">
            <div class="col">
              <TodoInput @click="add"/>
            </div>
          </div>
          <div class="row">
            <div class="col">
                <TodoList :todolist="todolist" @del="del" @upd="upd"/>
            </div>
          </div>
        </div>
      </div>
    </div>
</body>
</template>

<script>
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
export default{
  name : "AppTodo", //필요없지만 써주는 거 권장
  components:{TodoInput, TodoList},
  data(){
    return {
      todo : "", //텍스트박스에 사용자가 입력한 내용과 바인드될 프로퍼티
      todolist: //목록과 바인드될 프로퍼티 
        [{id:1, todo: '내용1', completed: false},
          {id:2, todo: '내용2', completed: true},
          {id:3, todo: '내용3', completed: false}
        ]
    }
  },
  methods:{
    add(e){
      const ids = this.todolist.map(todo=> {return todo.id})
      const maxId = ids.length == 0? 0 : Math.max(...ids)
      this.todolist.push({id:maxId+1, todo: this.todo, completed: false})
      this.$emit("todolist",)
    },

    del(id){
      const index = this.todolist.findIndex((todo)=> {
        return todo.id === id
      })
      this.todolist.splice(index, 1)
    },
    upd(id){
      const index = this.todolist.findIndex((todo)=> {
        return todo.id === id
      })
      this.todolist[index].completed = !this.todolist[index].completed
    }
  }
}

</script>

<style scoped> 
/* scoped 의미 : 이 컴포넌트에서만 쓰일 스타일*/
@import "https://unpkg.com/bootstrap@5.2.3/dist/css/bootstrap.min.css";
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.title {
  text-align: center;
  font-weight: bold;
  font-size: 20pt;
}
.container {
  padding: 10px 10px 10px 10px;
}
.card-borderless {
  border: 0;
  box-shadow: none;
}
</style>