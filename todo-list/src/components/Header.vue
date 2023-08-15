<script setup>
import { computed, ref } from 'vue'
import 'element-plus/es/components/message/style/css'
import { useTodoListStore } from "../stores/todolist.js"

// TodoListStore
const todoListStore = useTodoListStore()
const addTodoEvent = (todo) => {
    todoListStore.addTodo(todo)
}

// addTodoDialog
const dialogVisible = ref(false)

// new todo
const tempTodo = ref({
    title: "",
    content: "",
    isComplete: false,
    isImportant: false
})

// TODO: should create a new temp tode when dialog show
function resetTempTodo() {
    tempTodo.value.title = "";
    tempTodo.value.content = "";
    tempTodo.value.isComplete = false;
    tempTodo.value.isImportant = false;
}

// TODO: shuld check title and content are empty or not before add 
function checkInputContent() {
}

</script>

<template>
    <div class="app-header">
        <div>
            <span class="project">Project</span>
            <span class="project-name">Todo List</span>
        </div>

        <el-button @click="dialogVisible = true" class="add-todo-btn">
            Add a new todo
        </el-button>

        <el-dialog v-model="dialogVisible" title="Add a new todo" width="30%">
            <el-form>
                <el-form-item label="Title" >
                    <el-input v-model="tempTodo.title"></el-input>
                </el-form-item>
                <el-form-item label="Content" >
                    <el-input type="textarea" :rows="4" v-model="tempTodo.content"></el-input>
                </el-form-item>
                <el-form-item label="Star" >
                    <el-checkbox v-model="tempTodo.isImportant">is important</el-checkbox>
                </el-form-item>

            </el-form>

            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">
                        Cancel
                    </el-button>
                    <el-button type="primary" @click="dialogVisible = false, addTodoEvent(tempTodo), resetTempTodo()">
                        Add
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<style scoped>
.app-header {
    height: 60px;
    background-color: white;
    display: flex;
    margin: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.project {
    font-size: 30px;
    line-height: 32px;
    font-weight: 700;
    margin: 10px;
    color: black;
    background-color: transparent;
}

.project-name {
    font-size: 30px;
    line-height: 32px;
    font-weight: 500;
    color: gray;
    background-color: transparent;
}

.add-todo-btn {
    height: 40px;
    width: 160px;
    font-size: 18px;
    color: white;
    background-color: rgba(85, 182, 243, 0.7);
    box-shadow: none;
    border: none;
    border-radius: 24px;
    margin-right: 10px;
    padding: 10px;
}

.add-todo-btn:focus,
.add-todo-btn:hover {
    background-color: rgb(57, 149, 180, 0.7);
    box-shadow: none;
    border: none;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>