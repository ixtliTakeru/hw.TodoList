<script setup>
import { ref, computed } from 'vue'

import { Bars4Icon, BeakerIcon, Cog6ToothIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/outline'
import { Squares2X2Icon } from '@heroicons/vue/24/solid'

function handleClick() {
    console.log("handleClick", handleClick);
}

// setup default selectedFilter value => "all"
const selectedFilter = ref ("all")
const filterDropdownItems = [
    {
        key: 0,
        title: "All",
        value: "all"
    },
    {
        key: 1,
        title: "Important",
        value: "important"
    },
    {
        key: 2,
        title: "Completed",
        value: "completed"
    }
    ]

function onSelectChanged() {
    console.log("onSelectChanged", selectedFilter.value);
    // TODO: emit to TodoList.Vue 
}

</script>

<template>
    <div class="app-toolbar">
        <div>
            <Squares2X2Icon class="icon" />
            <Bars4Icon class="icon" />
        </div>
        <div>    
            <p style="color:gray; font-size: 12px;">Filter</p>
            <select class="filter-dropdown-select" @change="onSelectChanged()" v-model="selectedFilter">
                <option v-for="item in filterDropdownItems" v-bind:key="item.key" :value="item.value" class="filter-dropdown-option">
                    {{ item.title }}
                </option>
            </select>        
        </div>
    </div>
</template>

<style scoped>
.app-toolbar {
    height: 60px;
    display: flex;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 20px;
    border-radius: 32px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.icon {
    width: 24px;
    height: 24px;
    color: black;
    margin-right: 16px;
}

.icon:hover,
.icon:checked {
    stroke: white;
    background-color: black;
    border-radius: 50%;
    object-fit: cover;
    padding: 5px;
}

.filter-dropdown-select {
    border: none;
    border-color: transparent;
    font-size: 14px;
    font-weight: bold;
    background-color: transparent;
    margin-left: -4px;
}
.filter-dropdown-select:active,
.filter-dropdown-select:after {
    border: none;
    border-color: transparent;
}

.filter-dropdown-option {
    border: none;
    font-size: 14px;
}
</style>