<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/SideBar.vue'
import Header from './components/Header.vue'
import Toolbar from './components/Toolbar.vue'
import TodoList from './components/TodoList.vue'
import Personal from './components/Personal.vue'

</script>

<template>
  <div class="app-container">
    <Sidebar />
    <div class="app-content">
      <Header />
      <Toolbar />
      <TodoList />
    </div>
    <Personal />
  </div>

</template>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding: 10px;
  display: flex;
  overflow: hidden;
}

.app-content {
  width: 100%;
  height: 100%;
  background-color: tomato;
  overflow: hidden;
  min-height: auto;
}
</style>
