let inputBox = document.getElementById("in");
const listContainer = document.getElementById("list-container");

function addTask() {

    if (inputBox.value === '') {
        alert("You Must Write Something!");
    } 
    else {

        let li = document.createElement("li");

        li.innerHTML = inputBox.value;

        listContainer.appendChild(li);

        let span = document.createElement("span");

        span.innerHTML = "\u00d7";

        li.appendChild(span);
    }

    inputBox.value = "";
}

// Check task or delete task
listContainer.addEventListener("click", function(e) {

    // Check/uncheck task
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }

    // Delete task
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }

});