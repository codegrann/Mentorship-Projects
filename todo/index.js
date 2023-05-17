let addButton = document.querySelector("#addBtn");
addButton.addEventListener("click", addTask);


function addTask() {
    let input = document.querySelector("#addText");
    let tasks = document.querySelector("#tasks");


    if (input.value.length == 0) {
        alert("Please enter title of a task to continue.")
    }
    else {
        tasks.innerHTML += `
        <div class="taskEach">
          <input type="text" class="task taskText" value="${input.value}" readonly>
          <button class="button edit">edit</button>
          <button class="remove button">&times;</button>
        </div> 
        `;
        input.value = "";

        // let taskEach = document.querySelectorAll(".taskEach")
        let editButtons = document.querySelectorAll(".edit");
        editButtons.forEach((editButton) => {
            editButton.onclick = function () {
                input.value = editButton.previousElementSibling.value;
                // editButton.parentNode.remove();
            }
        })

        let deleteButtons = document.querySelectorAll(".remove");
        deleteButtons.forEach((deleteButton)=>
            {
                deleteButton.onclick = () => {
                    deleteButton.parentNode.remove();
    
                }
            }
        ) 

    }
}

