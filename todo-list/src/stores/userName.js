import { ref, readonly } from 'vue'
import { defineStore } from 'pinia'

export const useUserNameStore = defineStore('userName', () => {
    const userName = ref("Takeru")

    function setUserName(name) {
        useUserNameStore.value = name;
    }

    return { userName: readonly(userName), setUserName}
})