import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todolist', () => {

  // data structure
  //   [ {uuid: int, 
  //      title: "string", 
  //      date: "string", 
  //      content: [ "String" ], 
  //      isComplete: boolean, 
  //      isImportant: boolean} ]

  const todoList = ref([])

  function addTodo(todo) {
    console.log("todo", todo)
    todoList.value.push({
      uuid: todoList.value.length,
      title: todo.title,
      date: Date.now(),
      content: todo.content,
      isCompleted: todo.isComplete,
      isImportant: todo.isImportant
    })
    console.log("todoList", todoList)
    console.log("todoList:length", todoList.value.length)
  }

  function deleteTodo(uuid) {
    const targetIndex = todoList.value.findIndex((todo) => todo.uuid == uuid);
    todoList.value.splice(targetIndex, 1);
  }

  function updateTodo(modifiedTodo) {
    const targetTodo = todoList.value.find((todo) => todo.uuid == modifiedTodo.uuid);
    console.log("targetTodo", targetTodo)

    targetTodo.title = modifiedTodo.title
    targetTodo.content = modifiedTodo.content
    targetTodo.isImportant = modifiedTodo.isImportant
    targetTodo.isCompleted = modifiedTodo.isCompleted
  }

  function updateImpotant(uuid) {
    console.log("updateImpotant", uuid)
    const updateTarget = todoList.value.find((todo) => todo.uuid == uuid);
    console.log("updateImpotant", updateTarget)
    updateTarget.isImportant = !updateTarget.isImportant
  }

  function updateCompleted(uuid) {
    console.log("updateCompleted", uuid)
    const updateTarget = todoList.value.find((todo) => todo.uuid == uuid);
    updateTarget.isCompleted = true
  }

  return { todoList, addTodo, deleteTodo, updateTodo, updateImpotant, updateCompleted }
})
