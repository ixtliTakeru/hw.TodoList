import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todolist', () => {

  // data structure
  //   [ {id: int, 
  //      title: "string", 
  //      date: "string", 
  //      content: [ "String" ], 
  //      isComplete: boolean, 
  //      isImportant: boolean} ]

  const todoList = ref([{}])

  //   const sortBy = computed(() => {})

  function addTodo(todo) {
    console.log("todo", todo)
    todoList.value.push({
      uuid: todoList.value.length,
      title: todo.title,
      date: todo.date,
      content: todo.content,
      isComplete: todo.isComplete,
      isImportant: todo.isImportant
    })
    console.log("todoList", todoList)
    console.log("todoList:length", todoList.value.length)
  }

  function deleteTodo(index) {
    todoList.value.splice(index, 1);
  }

  function updateTodo() {

  }

  return { todoList, addTodo, deleteTodo, updateTodo }
})
