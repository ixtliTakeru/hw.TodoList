<script setup>
import { ref, computed, reactive, defineProps } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import { storeToRefs } from 'pinia'
import { useTodoListStore } from '../stores/todolist.js'
import { EllipsisHorizontalIcon, StarIcon } from '@heroicons/vue/24/outline'
import { StarIcon as SolidStarIcon } from '@heroicons/vue/24/solid'

// get data/function by pinia
const todoListStore = useTodoListStore()
// for data
const { todoList } = storeToRefs(todoListStore)
// for function
const { deleteTodo, updateTodo, updateImpotant, updateCompleted} = todoListStore
console.log("todoList.length", todoList.value.length)
console.log("todoList", todoList.value)

// filter by all, inprogress, important and completed
const displayTodoList = computed(() => {
    console.log("displayTodoList", props.filter)
    switch (props.filter) {
        case "all":
            return todoList.value
            break;
        case "all":
            return todoList.value.filter(t => t.isCompleted === false)
            break;
        case "important":
            return todoList.value.filter(t => (t.isCompleted === false && t.isImportant === true))
            break;   
        case "completed":
            return todoList.value.filter(t => t.isCompleted === true)
            break;
        default:    
            return todoList.value.filter(t => t.isCompleted === false)
            break;
    }
})

// calculate time period from create date to now and convert it to readable wording
const period = computed(() => (createdDate) => {
    const now = Date.now()
    // console.log("now", now)
    // console.log("createdDate", createdDate)

    var seconds = Math.floor((now - createdDate) / 1000);

    var interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }

    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }

    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }

    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }

    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
})

// more btn dropdown
const handleMoreBtnCommand = (command) => {
    // ElMessage(`click on item ${command.event}, ${command.target}`)
    console.log("handleMoreBtnCommand", `click: ${command.event}, ${command.target}`)
    switch (command.event) {
        case moreDropdownItems[0].value:
            displayEditTodoDialog(command.target)
            break;
        case moreDropdownItems[1].value:
            // two writing style:
            // 1. Pass func "updateCompleted()" to handleCompleted
            handleCompleted(function(){ updateCompleted(command.target) })
            break;
        case moreDropdownItems[2].value:            
            // 2. pass value "comment.target" to handleDelete
            handleDelete(command.target)
            break;
        default:
            console.log("doNothing");
    }
}

const moreDropdownItems = [
    {
        key: 0,
        title: "Edit",
        value: "edit"
    },
    {
        key: 1,
        title: "Completed",
        value: "completed"
    },
    {
        key: 2,
        title: "Delete",
        value: "delete"
    }
]

// editTodoDialog
const editDialogVisible = ref(false)
const tempTodo = ref({
    uuid: 0,
    title: "",
    content: "",
    isImportant: false,
    isCompleted: false,
})
function displayEditTodoDialog(uuid) {
    const targetTodo = todoList.value.find((todo) => todo.uuid == uuid);
    tempTodo.value.uuid = targetTodo.uuid
    tempTodo.value.title = targetTodo.title
    tempTodo.value.content = targetTodo.content
    tempTodo.value.isImportant = targetTodo.isImportant

    editDialogVisible.value = true
}

function submitEditTodo() {
    console.log("submitEditTodo", tempTodo)
    //Notice: need use tempTodo.value not tempTodo 
    updateTodo(tempTodo.value)
}

// confirm dialog when complete and delete todo
const handleCompleted = (done) => {
  ElMessageBox.confirm('Are you sure to complete this todo?')
    .then(() => {
        done()
    })
    .catch(() => {
      // catch error
    })
}

const handleDelete = (uuid) => {
  ElMessageBox.confirm('Are you sure to delete this todo?')
    .then(() => {
        deleteTodo(uuid)
    })
    .catch(() => {
      // catch error
    })
}

// receive value from App.vue(parent component)
const props = defineProps ({
    filter: {
        type: String,
        default: "inprogress"
    }
})



</script>

<template>
    <div>
        <VueDraggableNext class="app-todolist" :list="todoList" :disabled="true">
            <!-- using v-for to render list with two args (todo and index) -->
            <div v-for="(todo, index) in displayTodoList" :key="todo.uuid" class="todo-cardview">
                <div class="todo-cardview-header">
                    <p class="todo-cardview-title">{{ todo.title }}</p>
                    <p class="todo-cardview-content">{{ todo.content }}</p>
                </div>
                <!-- display staricon not checkbox -->
                <div class="todo-cardview-footer">
                    <div>
                        <p class="todo-cardview-period"> {{ period(todo.date) }} </p>
                    </div>
                    <div>
                        <!-- Todo: should find the solution by checkbox, use a workaround(v-if, v-else) now -->
                        <SolidStarIcon v-if="todo.isImportant" class="star-icon" @click="updateImpotant(todo.uuid)" />
                        <StarIcon v-else class="star-icon" @click="updateImpotant(todo.uuid)" />
                        <!-- more dropdown list -->
                        <el-dropdown @command="handleMoreBtnCommand">
                            <EllipsisHorizontalIcon class="more-function-icon" />
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <!-- if you want to pass more than two args, wrap it to object -->
                                    <el-dropdown-item v-for="more in moreDropdownItems"
                                        :command="{ event: more.value, target: todo.uuid }">{{
                                            more.title }}</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </VueDraggableNext>

        <!-- edit todo dialog -->
        <el-dialog v-model="editDialogVisible" title="Edit todo" width="30%" style="border-radius: 20px;"
            :show-close="false">
            <el-form label-width="100px" label-position="left">
                <el-form-item label="Title">
                    <el-input v-model="tempTodo.title"></el-input>
                </el-form-item>
                <el-form-item label="Content">
                    <el-input type="textarea" :rows="4" v-model="tempTodo.content"></el-input>
                </el-form-item>
                <el-form-item label="Important">
                    <el-switch v-model="tempTodo.isImportant" />
                </el-form-item>
                <el-form-item label="Completed">
                    <el-switch v-model="tempTodo.isCompleted" />
                </el-form-item>
            </el-form>

            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="editDialogVisible = false">
                        Cancel
                    </el-button>
                    <el-button type="primary" @click="editDialogVisible = false, submitEditTodo(tempTodo)">
                        Submit
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<style scoped>
.app-todolist {
    height: 100%;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 220px);
}

.todo-cardview {
    width: 200px;
    height: 200px;
    border-radius: 16px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
}

.todo-cardview-header {
    margin: 20px;
}

.todo-cardview-footer {
    margin: 20px;
    display: flex;
    justify-content: space-between;
}

.todo-cardview-title {
    width: 160px;
    color: black;
    size: 20px;
    font-weight: bold;
    word-wrap: break-word;
}

.todo-cardview-content {
    color: black;
    width: 160px;
    size: 14px;
    word-wrap: break-word;
}

.todo-cardview-period {
    color: blueviolet;
    font-size: 10px;
}

.checkbox-container {
    display: flex;
    flex-direction: column;
}

.star-checkbox input {
    opacity: 0;
    width: 0;
    height: 0;
}

.star-checkbox label {
    width: 24px;
    height: 24px;
    cursor: pointer;
    stroke: black;
}

.star-checkbox input:checked+label svg {
    fill: gold;
    transition: 0.2s;
}

.star-icon {
    width: 24px;
    height: 24px;
    color: gold;
}

.more-function-icon {
    width: 24px;
    height: 24px;
    color: black;
}

.more-function-icon:hover,
.more-function-icon:checked {
    color: gray;
}

.drag-box .items {
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 20px;
    margin-bottom: 20px;
    background: #e3e3e3;
    border-radius: 8px;
}
</style>