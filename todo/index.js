let addButton = document.querySelector("#addBtn");
addButton.addEventListener("click", addTask);

function addTask(){
    let input=document.querySelector("#addText");
    let tasks=document.querySelector("#tasks");
    if(input.value.length == 0){
        alert("Please enter title of a task to continue.")
    }
    else{
        tasks.innerHTML=`
        <div class="taskEach">
          <input type="text" class="task taskText">
          <button class="remove button">&times;</button>
        </div> 
        `
    }
}