<script setup>
import { ref } from 'vue'
import Sidebar from './components/SideBar.vue'
import Header from './components/Header.vue'
import Toolbar from './components/Toolbar.vue'
import TodoList from './components/TodoList.vue'
import Personal from './components/Personal.vue'

// receive value from Toolbar.vue(child component)
const typeFilter = ref("inprogress")
const filterCallback = (filter) => {
  console.log("filterCallback", filter)
  typeFilter.value = filter
}

</script>

<template>
  <!-- <div class="app-container"> -->
    <div class="flex w-screen h-screen p-2 overflow-hidden bg-white">
    <Sidebar />
    <!-- <div class="app-content"> -->
    <div class="flex flex-col w-full h-full">
      <Header />
      <!-- <div class="todo-container"> -->
      <div class="bg-custom-bg rounded-[24px] grow">
        <!-- receive value from Toolbar.vue(child component) -->
        <Toolbar @selectedFilter="filterCallback"/>
        <!-- send value to TodoList.vue(child component) -->
        <TodoList :filter="typeFilter"/>
      </div>
    </div>
    <Personal />
  </div>
</template>

<!-- use tailwind css to replace below css style-->
<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding: 12px;
  display: flex;
  overflow: hidden;
}

.app-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-height: auto;
}

.todo-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-height: auto;
  background-color: rgba(233, 237, 241, 0.7);
  border-radius: 32px;
}
</style>
