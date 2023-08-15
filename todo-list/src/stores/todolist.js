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

  const todoList = ref([])

  //   const sortBy = computed(() => {})

  // calculate time perios from now to create date and format it to "{min} mins ago".
  // const timePeriod = computed((createdDate) => {
  //   const now = Date.now()
  //   return now - createdDate
  // })

  function addTodo(todo) {
    console.log("todo", todo)
    todoList.value.push({
      uuid: todoList.value.length,
      title: todo.title,
      date: Date.now(),
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

  function updateTodo(index, updateTodo) {
    const updateTarget = todoList.value.at(index)
    console.log("updateTarget", updateTarget)
  }

  function updateImpotant(index) {
    console.log("updateImpotant", index)
    const updateTarget = todoList.value.at(index)
    console.log("updateImpotant", updateTarget)
    updateTarget.isImportant = !updateTarget.isImportant
  }

  return { todoList, addTodo, deleteTodo, updateTodo, updateImpotant }
})
