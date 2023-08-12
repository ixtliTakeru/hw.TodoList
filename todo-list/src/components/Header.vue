<script setup>
import { ref } from 'vue'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'


const dialogVisible = ref(false)

const handleClose = () => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}

// data structure
//   [ {id: int, 
//      title: "string", 
//      date: "string", 
//      content: [ "String" ], 
//      isComplete: boolean, 
//      isImportant: boolean} ]
const eventList = [{}];

function fakeData() {
    for (let i = 0; i < 10; i++) {
        eventList.push({
            uuid: i,
            title: Math.floor(Math.random() * 1000),
            date: i++,
            comments: ["Hello World", "Happy Vue.js"],
            isComplete: Boolean(Math.round(Math.random())),
            isImportant: Boolean(Math.round(Math.random()))
        });
    }
}

function addTodo() {

}

fakeData()
console.log("fakeDate", eventList)

</script>

<template>
    <div class="app-header">
        <div>
            <span class="project">Project</span>
            <span class="projectName">Todo List</span>
        </div>
        <button class="addTodoBtn" @click="addTodo">Add a new todo</button>
        
        <el-button text @click="dialogVisible = true">
            click to open the Dialog
        </el-button>
        <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
            <span>This is a message</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">
                        Cancel
                    </el-button>
                    <el-button type="primary" @click="dialogVisible = false">
                        Confirm
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<style scoped>
.app-header {
    height: 60px;
    background-color: white;
    display: flex;
    margin: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-items: center;
}

.project {
    font-size: 30px;
    line-height: 32px;
    font-weight: 700;
    margin: 10px;
    color: black;
    background-color: transparent;
}

.projectName {
    font-size: 30px;
    line-height: 32px;
    font-weight: 500;
    color: gray;
    background-color: transparent;
}

.addTodoBtn {
    font-size: 12px;
    color: white;
    background-color: rgba(143, 201, 237, 0.7);
    box-shadow: none;
    border: none;
    border-radius: 20px;
    margin-right: 10px;
    padding: 10px;
    font-weight: 700;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>