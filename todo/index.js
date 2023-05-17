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

        let taskEach=document.querySelectorAll(".taskEach")
        let editButtons = document.querySelectorAll(".edit");
        for (let j = 0; j < editButtons.length; j++) {
            editButtons[j].onclick = function () {
                ;
                input.value = editButtons[j].previousElementSibling.value;
                // editButtons[j].parentNode.remove();
                editButtons[j].previousElementSibling.value=input.value;
        }

        let deleteButtons = document.querySelectorAll(".remove");
        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].onclick = () => {
                deleteButtons[i].parentNode.remove();

            }
        }

    }
}

}
