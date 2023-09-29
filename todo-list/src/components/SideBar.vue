<script setup>
import { TrashIcon, ArrowTrendingUpIcon, CurrencyDollarIcon, UserIcon, CalendarIcon, RectangleGroupIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline'
</script>

<!-- ref: https://www.youtube.com/watch?v=pfaSUYaSgRo -->
<template>
    <div class="flex flex-col items-center justify-between w-20 mr-2">
        <div>
            <img src = "../assets/logo.svg" alt="" class="w-12 h-12 mt-4 mb-4"/>

            <RectangleGroupIcon class="sidebar-icon"/>
            <ArrowTrendingUpIcon class="sidebar-icon"/>
            <CalendarIcon class="sidebar-icon"/>
            <UserIcon  class="sidebar-icon"/>
            <CurrencyDollarIcon  class="sidebar-icon"/>
        </div>
        
        <div>
            <ArchiveBoxIcon class="sidebar-icon"/>
            <TrashIcon class="sidebar-icon"/>
        </div>
    </div>
</template>

<!-- use tailwind css to replace below css style-->
<style scoped>
.app-sidebar {
    width: 80px;
    background-color: white;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.icon {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: black;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 6px;
}
.icon:hover,
.icon:checked {
    stroke: white;
    background-color: black;
    border-radius: 50%;
    object-fit: cover;
    padding: 5px;
}
</style>