<script setup>
import { ref, computed, defineEmits} from 'vue'

import { Bars4Icon, BeakerIcon, Cog6ToothIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/outline'
import { Squares2X2Icon } from '@heroicons/vue/24/solid'

// setup default selectedFilter value => "inprogress"
const selectedFilter = ref("inprogress")
const filterDropdownItems = [
    {
        key: 0,
        title: "All",
        value: "all"
    },
    {
        key: 1,
        title: "In progress",
        value: "inprogress"
    },
    {
        key: 2,
        title: "Important",
        value: "important"
    },
    {
        key: 3,
        title: "Completed",
        value: "completed"
    }
]

// emit filter to parent components
const emit = defineEmits(["selectedFilter"])
function onSelectChanged() {
    console.log("onSelectChanged", selectedFilter.value);
    // emit to App.Vue 
    emit("selectedFilter", selectedFilter.value)
}
</script>

<template>
    <div class="flex flex-row items-center justify-between pt-5 ml-10 mr-10 h-15">
        <div class="flex">
            <Squares2X2Icon class="w-6 h-6 mr-4 stroke-2 stroke-black hover:stroke-white hover:rounded-full hover:bg-black hover:p-0.5 hover:object-cover" />
            <Bars4Icon class="w-6 h-6 mr-4 stroke-2 stroke-black hover:stroke-white hover:rounded-full hover:bg-black hover:p-0.5 hover:object-cover" />
        </div>
        <div>
            <p class="text-gray-500 text-md">Filter</p>
            <select class="-ml-1 font-bold text-black bg-transparent border-transparent border-none text-md" @change="onSelectChanged()" v-model="selectedFilter">
                <option v-for="item in filterDropdownItems" v-bind:key="item.key" :value="item.value">
                    {{ item.title }}
                </option>
            </select>
        </div>
    </div>
</template>

<!-- use tailwind css to replace below css style-->
<style scoped>
.app-toolbar {
    height: 60px;
    display: flex;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: gray;
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