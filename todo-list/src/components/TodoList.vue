<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoListStore } from '../stores/todolist.js'
import { EllipsisVerticalIcon, StarIcon } from '@heroicons/vue/24/outline'
import { StarIcon as SolidStarIcon} from '@heroicons/vue/24/solid'

// get data/function by pinia
const todoListStore = useTodoListStore()
// for data
const { todoList } = storeToRefs(todoListStore)
// for function
const { deleteTodo, updateTodo, updateImpotant } = todoListStore
console.log("todoList.length", todoList.value.length)
console.log("todoList", todoList.value)

// calculate time period from create date to now and convert it to readable wording
const period = computed(() => (createdDate) => {
    const now = Date.now()
    console.log("now", now)
    console.log("createdDate", createdDate)

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

// function updateTodo() {
// todos.value.push({ id: id++, text: newTodo.value })
// newTodo.value = ''
// }

function removeTodo(index) {
    console.log("removeTodo", index)
    deleteTodo(index)
}

</script>

<template>
    <div class="app-todolist">
        <div v-for="(todo, index) in todoList" :key="todo.uuid" class="todo-cardview">
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
                    <SolidStarIcon v-if="todo.isImportant" class="star-icon" @click="updateImpotant(index)"/>
                    <StarIcon v-else class="star-icon" @click="updateImpotant(index)"/>
                    <EllipsisVerticalIcon class="more-function-icon" @click="removeTodo(index)" />
                </div>
            </div>

        </div>


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
</style>