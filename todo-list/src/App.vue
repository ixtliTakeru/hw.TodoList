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
      <div class="todo-container">
        <Toolbar />
        <TodoList />
      </div>
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
