<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
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

// RWD for dialog width(listen window event)
const dialogWidth = ref("40%")
onMounted(() => {
    window.addEventListener("resize", handleWindowSizeChange);
});

onUnmounted(() => {
    window.removeEventListener("resize", handleWindowSizeChange);
});
const handleWindowSizeChange = () => {
    console.log(document.body.clientWidth)
    let screenWidth = document.body.clientWidth
    if (screenWidth > 600)    
        dialogWidth.value = "40%"
    else
        dialogWidth.value = "400px"
}

</script>

<template>
    <div class="app-header">
        <div class="project-info">
            <div class="project">Project</div>
            <div class="project-name">Todo List</div>
        </div>

        <!-- add todo btn -->
        <el-button @click="dialogVisible = true" class="add-todo-btn">
            Add <span>&nbsp;a new todo</span>
        </el-button>

        <!-- add todo dialog -->
        <el-dialog v-model="dialogVisible" title="Add a new todo" :width="dialogWidth" style="border-radius: 20px;"
            :show-close="false">
            <!-- <el-form label-width="100px" :label-position="left" status-icon :rules="rules"> -->
            <el-form label-width="100px" label-position="left">
                <el-form-item label="Title">
                    <el-input v-model="tempTodo.title"></el-input>
                </el-form-item>
                <el-form-item label="Content">
                    <el-input type="textarea" :rows="4" v-model="tempTodo.content" />
                </el-form-item>
                <el-form-item label="Important">
                    <el-switch v-model="tempTodo.isImportant" />
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
    margin-left: 10px;
    color: black;
    background-color: transparent;
}

.project-name {
    font-size: 30px;
    line-height: 32px;
    font-weight: 500;
    margin-left: 10px;
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

.project-info {
    display: flex;
    align-items: center;
}

/* screen width less than 600px (for mobile device) */
@media (max-width:600px) {
    .add-todo-btn {
        width: 70px;
    }

    .add-todo-btn span {
        display: none;
    }

    .project-info {
        display: block;
    }

    .project {
        font-size: 20px;
    }

    .project-name {
        font-size: 20px;
    }
}
</style>