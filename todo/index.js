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
        let deleteButtons = document.querySelectorAll(".remove");
        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].onclick = function () {
                deleteButtons[i].parentNode.remove();

            }
        }

    }
}


