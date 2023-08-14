<script setup>
import { computed, ref } from 'vue'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import { useTodoListStore } from "../stores/todolist.js"

// TodoListStore
const todoListStore = useTodoListStore()
const newId = computed (() => {
    return todoListStore.todoList.values.length + 1
})
const addTodoEvent = (todo) => {
    todoListStore.addTodo(todo)
}

// addTodoDialog
const dialogVisible = ref(false)

// new todo
const tempTodo = ref({
    uuid: 0,
    title: "hi",
    date: 123,
    content: "Hello World",
    isComplete: Boolean(Math.round(Math.random())),
    isImportant: true
})
</script>

<template>
    <div class="app-header">
        <div>
            <span class="project">Project</span>
            <span class="projectName">Todo List</span>
        </div>

        <el-button text @click="dialogVisible = true">
            Add a new todo
        </el-button>

        <el-dialog v-model="dialogVisible" title="Add a new todo" width="30%">
            <el-form>
                <el-form-item label="Title" :label-width="formLabelWidth">
                    <el-input v-model="tempTodo.title"></el-input>
                </el-form-item>
                <el-form-item label="Content" :label-width="formLabelWidth">
                    <el-input type="textarea" :rows="4" v-model="tempTodo.content"></el-input>
                </el-form-item>
                <el-form-item label="Star" :label-width="formLabelWidth">
                    <el-checkbox v-model="tempTodo.isImportant">is important</el-checkbox>
                </el-form-item>

            </el-form>

            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">
                        Cancel
                    </el-button>
                    <el-button type="primary" @click="dialogVisible = false, addTodoEvent(tempTodo)">
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
    align-items: center;
}

.project {
    font-size: 30px;
    line-height: 32px;
    font-weight: 700;
    margin: 10px;
    color: black;
    background-color: transparent;
}

.projectName {
    font-size: 30px;
    line-height: 32px;
    font-weight: 500;
    color: gray;
    background-color: transparent;
}

.addTodoBtn {
    font-size: 12px;
    color: white;
    background-color: rgba(143, 201, 237, 0.7);
    box-shadow: none;
    border: none;
    border-radius: 20px;
    margin-right: 10px;
    padding: 10px;
    font-weight: 700;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>