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
    <div class="app-personal-mobile">
        <div style="width: 100%; justify-content: center; display: flex;">
            <img src="@/assets/nara.png" alt="profile image" class="selfie" style="width: 40px; height:40px">
        </div>

        <div style="width: 100%; justify-content: center; display: flex; margin-top:20px; flex-wrap: wrap;">
            <p class="hello-text" style="font-size:14px">Hello</p>
            <p class="username-text" style="font-size:14px"> {{ userName }} </p>
        </div>

        <el-col style="margin:10px;">
            <el-col :span="24">
                <p class="statistics-title">All</p>
                <el-row class="statistics-amount-containter">
                    <div class="statistics-indicator"></div>
                    <a class="statistics-amount"> {{ all }} </a>
                </el-row>
            </el-col>

            <el-col :span="24">
                <p class="statistics-title">In Progress</p>
                <el-row class="statistics-amount-containter">
                    <div class="statistics-indicator"></div>
                    <a class="statistics-amount"> {{ inProgress }} </a>
                </el-row>
            </el-col>

            <el-col :span="24">
                <p class="statistics-title">Important</p>
                <el-row class="statistics-amount-containter">
                    <div class="statistics-indicator"></div>
                    <a class="statistics-amount"> {{ important }} </a>
                </el-row>
            </el-col>

            <el-col :span="24">
                <p class="statistics-title">Completed</p>
                <el-row class="statistics-amount-containter">
                    <div class="statistics-indicator"></div>
                    <a class="statistics-amount"> {{ completed }} </a>
                </el-row>
            </el-col>
        </el-col>


        <div style="width: 100%; justify-content: center; display: flex; margin-top:20px; flex-wrap: wrap;">
            <p class="hello-text" style="font-size:14px">Activity</p>
            <p class="username-text" style="font-size:14px">Feed</p>
        </div>
    </div>    


    <div class="app-personal">
        <div class="icon-group">
            <el-button :icon="MagnifyingGlassIcon" class="icon" circle />
            <el-button :icon="MusicalNoteIcon" class="icon" circle />
            <el-button :icon="BellIcon" class="icon" circle />
        </div>

        <div class="info-card">
            <el-row>
                <el-col :span="14">
                    <div class="grid-content" style="height: 80px; align-items: center; display: flex;">
                        <div style="margin-left: 20px;">
                            <p class="hello-text">Hello</p>
                            <p class="username-text"> {{ userName }} </p>
                        </div>
                    </div>
                </el-col>

                <el-col :span="10">
                    <div class="grid-content" style="height: 80px; justify-content: center; display: flex;">
                        <img src="@/assets/nara.png" alt="profile image" class="selfie">
                    </div>
                </el-col>
            </el-row>Ï
        </div>

        <div class="statistics-card">
            <el-row>
                <el-col :span="12">
                    <p class="statistics-title">All</p>
                    <el-row class="statistics-amount-containter">
                        <div class="statistics-indicator"></div>
                        <a class="statistics-amount"> {{ all }} </a>
                    </el-row>
                </el-col>

                <el-col :span="12">
                    <p class="statistics-title">In Progress</p>
                    <el-row class="statistics-amount-containter">
                        <div class="statistics-indicator"></div>
                        <a class="statistics-amount"> {{ inProgress }} </a>
                    </el-row>
                </el-col>
            </el-row>Ï
            <el-row>
                <el-col :span="12">
                    <p class="statistics-title">Important</p>
                    <el-row class="statistics-amount-containter">
                        <div class="statistics-indicator"></div>
                        <a class="statistics-amount"> {{ important }} </a>
                    </el-row>
                </el-col>

                <el-col :span="12">
                    <p class="statistics-title">Completed</p>
                    <el-row class="statistics-amount-containter">
                        <div class="statistics-indicator"></div>
                        <a class="statistics-amount"> {{ completed }} </a>
                    </el-row>
                </el-col>
            </el-row>Ï
        </div>

        <div class="activity-card">
            <el-row>
                <el-col :span="14">
                    <div class="grid-content" style="height: 80px; align-items: center;display: flex;">
                        <div style="margin-left: 20px;">
                            <p class="hello-text">Activity</p>
                            <p class="username-text"> Feed </p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<style scoped>
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

.statistics-title {
    font-size: 14px;
    color: gray;
}

.statistics-amount {
    font-size: 24px;
    color: black;
}

.statistics-amount-containter {
    align-items: center;
    display: flex;
}

.statistics-indicator {
    height: 25px;
    width: 5px;
    background-color: blueviolet;
    margin-right: 10px;
}

.v-center-h-center {
    display: flex;
    /* h-center */
    justify-content: center;
    /* v-center */
    align-items: center;
}

/* screen width less than 1250px (for tablet) */


/* screen width less than 600px (for mobile device) */
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
}
</style>