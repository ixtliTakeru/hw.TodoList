<script setup>

import { storeToRefs } from 'pinia'
import { useUserNameStore } from '../stores/userName.js'
import { MagnifyingGlassIcon, MusicalNoteIcon, BellIcon } from '@heroicons/vue/24/outline'

const userNameStore = useUserNameStore()
const { userName, setUserName } = storeToRefs(userNameStore)

</script>

<template>
    <div class="app-personal">
        <div class="icon-group">
            <el-button :icon="MagnifyingGlassIcon" class="icon" circle />
            <el-button :icon="MusicalNoteIcon" class="icon" circle />
            <el-button :icon="BellIcon" class="icon" circle />
        </div>

        <div class="info-card">
            <div>
                <p class="hello-text">Hello</p>
                <p class="username-text"> {{ userName }} </p>
            </div>

            <img src="@/assets/nara.png"
                alt="profile image" class="selfie">
        </div>

        <div class="statistics-card">
            <p class="t">statistics card</p>
        </div>

        <div class="activity-card">
            <p class="t">activity card</p>
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
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
}

.selfie {
    border-radius: 50%;
    object-fit: cover;
    width: 70px;
    height: 70px;
    margin-left: 100px;
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
    margin-top: 20px;
}

.activity-card {
    width: 100%;
    margin-top: 20px;
}
</style>