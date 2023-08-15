<script setup>
import { TrashIcon, ArrowTrendingUpIcon, CurrencyDollarIcon, UserIcon, CalendarIcon, RectangleGroupIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div class="app-sidebar">
        <div>
            <img src = "../assets/logo.svg" alt="" style="margin-bottom: 20px;"/>

            <RectangleGroupIcon class="icon"/>

            <ArrowTrendingUpIcon class="icon"/>

            <CalendarIcon class="icon"/>

            <UserIcon  class="icon"/>

            <CurrencyDollarIcon  class="icon"/>
        </div>

        <div>
            <ArchiveBoxIcon class="icon"/>

            <TrashIcon class="icon"/>
        </div>

    </div>
</template>

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