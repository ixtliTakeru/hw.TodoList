<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserNameStore } from '../stores/userName.js'
import { useTodoListStore } from '../stores/todolist.js'
import { MagnifyingGlassIcon, MusicalNoteIcon, BellIcon } from '@heroicons/vue/24/outline'

// username
const userNameStore = useUserNameStore()
const { userName, setUserName } = storeToRefs(userNameStore)


// statistics
const todoListStore = useTodoListStore()
const { todoList } = storeToRefs(todoListStore)

const all = computed(() => {
    return todoList.value.length
})

const inProgress = computed(() => {
    return todoList.value.filter(t => t.isCompleted === false).length
})

const important = computed(() => {
    return todoList.value.filter(t => t.isImportant === true).length
})

const completed = computed(() => {
    return todoList.value.filter(t => t.isCompleted === true).length
})

</script>

<template>
    <!-- for mobile -->
    <div class="w-24 m-2 sm:hidden">

        <div class="flex justify-center">
            <img src="@/assets/nara.png" alt="profile image" class="w-12 h-12 rounded-full">
        </div>

        <div class="mt-2">
            <div class="text-sm text-center text-black">Hello</div>
            <p class="text-sm font-medium text-center text-black"> {{ userName }} </p>
        </div>

        <div class="grid grid-rows-4 gap-2 mt-5">
            <div>
                <p class="statistics-title">All</p>
                <div class="flex items-center">
                    <div class="statistics-indicator"></div>
                    <a class="statistics-amount"> {{ all }} </a>
                </div>
            </div>

            <div>
                <p class="statistics-title">In Progress</p>
                <div class="flex items-center">
                    <div class="statistics-indicator"></div>
                    <a class="statistics-amount"> {{ inProgress }} </a>
                </div>
            </div>

            <div>
                <p class="statistics-title">Important</p>
                <div class="flex items-center">
                    <div class="statistics-indicator"></div>
                    <a class="statistics-amount"> {{ important }} </a>
                </div>
            </div>

            <div>
                <p class="statistics-title">Completed</p>
                <div class="flex items-center">
                    <div class="statistics-indicator"></div>
                    <a class="statistics-amount"> {{ completed }} </a>
                </div>
            </div>
        </div>


        <div class="mt-5">
            <p class="text-sm text-black">Activity</p>
            <p class="text-sm font-medium text-black">Feed</p>
        </div>
    </div>    

    <!-- for desktop -->
    <div class="hidden sm:block sm:m-2 sm:w-80">
        <div class="flex justify-center w-full mt-2">
            <el-button :icon="MagnifyingGlassIcon" class="mx-2" circle />
            <el-button :icon="MusicalNoteIcon" class="mx-2" circle />
            <el-button :icon="BellIcon" class="mx-2" circle />
        </div>

        <div class="flex items-center h-20 mt-10">
            <div class="w-1/2">
                <div class="ml-5 bg-white">
                    <p class="text-xl text-black">Hello</p>
                    <p class="text-xl font-medium text-black"> {{ userName }} </p>
                </div>
            </div>
            <div class="w-1/2">
                <img src="@/assets/nara.png" alt="profile image" class="object-cover w-20 h-20 rounded-full">
            </div>
        </div>

        <div class="grid grid-cols-2 gap-2 mt-5 ml-5">
            <div>
                <p class="statistics-title">All</p>
                <div class="flex items-center">
                    <div class="statistics-indicator"></div>
                    <a class="statistics-amount"> {{ all }} </a>
                </div>
            </div>

            <div>
                <p class="statistics-title">In Progress</p>
                <div class="flex items-center">
                    <div class="statistics-indicator"></div>
                    <a class="statistics-amount"> {{ inProgress }} </a>
                </div>
            </div>

            <div>
                <p class="statistics-title">Important</p>
                <div class="flex items-center">
                    <div class="statistics-indicator"></div>
                    <a class="statistics-amount"> {{ important }} </a>
                </div>
            </div>

            <div>
                <p class="statistics-title">Completed</p>
                <div class="flex items-center">
                    <div class="statistics-indicator"></div>
                    <a class="statistics-amount"> {{ completed }} </a>
                </div>
            </div>
        </div>

        <div class="mt-5 ml-5">
            <p class="text-xl text-black">Activity</p>
            <p class="text-xl font-medium text-black">Feed</p>
        </div>
    </div>
</template>

<style scoped>
/*
.app-personal {
    width: 400px;
    background-color: white;
    margin: 10px;
    border-radius: 32px;
}

.app-personal-mobile {
    display: none;
    width: 100px;
    background-color: white;
    margin: 10px;
    border-radius: 32px;
    justify-content: center
}

.icon-group {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.icon {
    width: 30px;
    height: 30px;
    fill: none;
    stroke: black;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
    margin-right: 10px;
    margin-left: 10px;
}

.info-card {
    width: 100%;
    margin-top: 40px;
}

.selfie {
    border-radius: 50%;
    object-fit: cover;
    width: 80px;
    height: 80px;
}

.hello-text {
    font-size: 20px;
    color: black;
}

.username-text {
    font-size: 20px;
    font-weight: 700;
    color: black;
}

.statistics-card {
    width: 100%;
    margin: 20px;
}

.activity-card {
    width: 100%;
    margin-top: 20px;
}

.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.statistics-item {
    height: 60px;
}
*/

/* .statistics-title {
    font-size: 14px;
    color: gray;
} 

.statistics-amount {
    font-size: 24px;
    color: black;
} */

/* .statistics-amount-containter {
    align-items: center;
    display: flex;
} */

/* .statistics-indicator {
    height: 25px;
    width: 5px;
    background-color: blueviolet;
    margin-right: 10px;
} */

.v-center-h-center {
    display: flex;
    /* h-center */
    justify-content: center;
    /* v-center */
    align-items: center;
}


/* screen width less than 600px (for mobile device) */
/*
@media (max-width:600px) {
    .app-personal {
        display: none;
    }

    .app-personal-mobile {
        display: block;
    }

    .statistics-title {
        font-size: 12px;
        color: gray;
    }
} */
</style>