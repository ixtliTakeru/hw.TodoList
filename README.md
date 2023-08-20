# hw.TodoList

This is a todo list that my first try to do a work about frontend.

### Requirement:
1. 新增、完成、刪除 task
2. 可以改變卡片順序
3. 可將卡片標示星號 
4. 以此設計稿去延伸排版，實現基本的 RWD   
   [Design Reference from Dribbble](https://dribbble.com/shots/20568094-Project-Management-Dashboard)
![image](https://github.com/ixtliTakeru/hw.TodoList/blob/main/screenshot/design_ref.png?raw=true)

### Studying Part: Total *12hr*
- 4hr: html, css, js
- 1hr: vue3 - Get Start
- 1hr: vue3 - ref, reactive, computed
- 1hr: vue3 - components / props / emit
- 1hr: vue3 - Composition API 共用邏輯 / Composables
- 1hr: vue3 - v-model 資料的雙向綁定 / 自訂義組件的資料綁定
- 1hr: vue3 - pinia
- 0.5hr: vue3 - axois
- 1hr: vue3 - Naive UI
- 1.5hr: RWD

### Implement Part: Total *25hr*
- 0.5hr:   
  Env setup: vscode, vue3, node.js 
- 2hr:   
  實作layout，但是還是有些屬性錯誤   
  ```依照設計圖，先劃分大區塊的layout該怎麼排列，並且每個layout都對應並實作一個component。這邊遇到的問題有兩個，分別是1.css的display參數的使用，所以在block跟flex間卡住一些時間。2.設定background color想看大區塊的效果，但是一直會有margin的出現，最後發現是vue project的main.css的預設值在搞鬼```  
- 1hr:   
  修正layout + 實作header layout   
  ```修正layout的寬度設定，並且將畫面分成sidebar, header, toolbar, todolist和personal。先實作Header裡面Project name```   
- 1hr:   
  實作sidebar svg icon
- 1hr:   
  加入elment-plus，實作el-dialog範例。   
  ```尋找建立dialog的方式，最後使用elment-plus套件。跟著範例先建立一個公版的dialog，並且可以透過Add todo按鈕觸發顯示```
- 1.5hr:   
  實作add todo dialog,然後使用 pinia儲存todolist。   
  ```將el-dialog公版改成add todo dialog，並且加上對應的欄位。資料儲存的部分先採用local storage的方式，套件是Pinia，當add todo dialog的submot按下，會存到todolist.js的全域變數裡```
- 1hr:   
  研究拖移要如何實作(vue-grid-layout / vuedraggable)
- 2hr:   
  實作drag功能：vuedraggable   
  ```也是先範例開始改成需要的樣子，遇到最大問題是是一直都只有橫向，還以為這套件無法支援grid，最後再多方嘗試修改css後解決了```
- 6hr:   
  實作todo cardview layout(星號排版 無法並排)   
  ```實作星號點擊並且綁定isImportant的data，但是這部分有跟more icon有些layout問題```
  使用heroicon   
  sidebar/toolbar icon與layout調整   
  把sidebar icon加上hover effect   
  實作右邊personl layout的部分(name, selfie)   
  todolist 實作updateImportant跟deleteTodo功能   
  加上filter的dropdown   
  el-dropdown不會使用    
  ```filter的dropdown因為el-dropdown還不會使用，所以先用最傳統的select跟option方式實作```
- 1hr:   
  Time period     
  ```新增todo的時候使用Date.now()加入timestamp，顯示的時候也是透過Date.now()取得當下timestamp。兩者相減之後，在透過period轉換成可讀性高的幾秒(分)前```
- 1hr:   
  delete/edit dropdown   
  ```學會如何使用el-dropdown，並且綁定在todo card的more btn上觸發```   
       change removeTodo args from index to uuid   
  ```原本todolist.js是利用index做edit/remove/important/completed。因為現在todolist component會將todlist再做處理後顯示，並且還有draggable的功能，避免之後有相關index的issue，改為用uuid處理```
- 1.5hr:      
  實作edit todo dialog，以及編輯功能
  ```與add todo dialog相同方式處理UI。Data方面是透過tempdata的綁定，最後再傳給todolist.js的updatTodo進行更新```
  實作updateCompleted功能
  ```直接傳uuid給todolist.js的updateCompleted處理```
- 1hr:   
  personal page 統計頁面，   
  ```統計頁面是將todolist依照不同狀態做個統計，分成all, in progress, important, completed。Layout是這邊使用el-row跟el-col去實作表格狀態的layout。```
- 0.5hr:   
  加入delete跟complete的confirm dialog(ElMessageBox)   
- 2.5hr:   
  透過emit跟props 在組件中傳值，將toolbar裡的filter dropdown與todolist串接整合。       
  ```因為filter做在toolbar complnent裡，然後todolist是另一個component，所以我一開始在找如何讓值再同層的component傳遞，但是似乎沒有這樣的做法，大多都是透過emit(子傳父)或是props（父傳子）。所以最後我透過 toolbar component將選擇的filter傳到app component(子傳父)。再從app component傳到todolist component（父傳子）。todolist component裡面接收的props是個reactive變數，所以直接整合在displayTodoList()。這邊有發生emit not defined的問題小卡住了一下```
- 2hr:   
  Support RWD 寬度小於600px(mobile device)    
```首先了解RWD的用途跟目的後，去思考該怎麼實作。最先遇到的問題就是這個版面的RWD該變成什麼樣子。但是這部分其實沒有一訂的規則。參考了大部分的作法，有將橫向排列的layout item變成直向：也有些事縮小圖案跟字體或是內容縮減；也有些針對不同的寬再做一版layout。```   
```最後我決定先設定一個寬度600px，小於這寬度視為mobile直向。實作部分：Header裏面的project跟todolist透過flex-warp把它從橫向排列改為直向；新增todo的按紐文字，從add a new todo縮減為add並且縮減其寬度；右方personal的處理方式，則是重新設計一個直向的版面，提供在600px時，做切換；Add todo dialog方面，原本以為也可以透過css一起處理，但是el-dialog怎麼改就是不為所動。最後的解決方案是新增一個ref變數dialogWidth，在Vue的lifecycle裡新增一個resize監聽器，再透過document.body.clientWidth取得當下個screen size，再把css的邏輯用js寫出來，給dialogWidth，這樣el-dialog也可以有rwd的效果。```

  
### Screenshot
- 切版   
![image](https://github.com/ixtliTakeru/hw.TodoList/blob/main/screenshot/screenshot-1.png?raw=true)
  
- 實作dialog範例
![image](https://github.com/ixtliTakeru/hw.TodoList/blob/main/screenshot/screenshot-2.png?raw=true)
  
- 實作Add todo dialog
  ![image](https://github.com/ixtliTakeru/hw.TodoList/blob/main/screenshot/screenshot-3.png?raw=true)
    
- 實作todo card
  ![image](https://github.com/ixtliTakeru/hw.TodoList/blob/main/screenshot/screenshot-4.png?raw=true)
    
- 實作Draggable
  ![image](https://github.com/ixtliTakeru/hw.TodoList/blob/main/screenshot/screenshot-5.png?raw=true)

- 實作filter & personal part   
  ![image](https://github.com/ixtliTakeru/hw.TodoList/blob/main/screenshot/screenshot-7.png?raw=true)
  
- 實作RWD
  ![image](https://github.com/ixtliTakeru/hw.TodoList/blob/main/screenshot/screenshot-6.png?raw=true)
  
  
### Future imporvement:
- 可以整合雲端服務達到Cloud Stroage功能
- 整合/整理Css讓它更簡潔有系統
- RWD應該在最一開始切版時候就要考慮
- Add/edit todo dialog需要做資料的驗證
