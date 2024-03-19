let inputTextarea = document.getElementById("input-new-task");
let newTaskButton = document.querySelector(".btn-new-task");
let newTaskCreator = document.querySelector(".new-task");
newTaskCreator.hidden = true;
let inputDetails = ["input-new-task", "category", "deadline", "priority"];
let getDetails = {};
let addButton = document.getElementById("btn-validate");
let category = document.getElementById("category");
let deadline = document.getElementById("dealine");
let priority = document.getElementById("priority");
let btnCategory = document.getElementById("btn-category");
let btnDeadline = document.getElementById("btn-dealine");
let btnPriority = document.getElementById("btn-priority");


function switchDisplay(element) {
    element.hidden = !element.hidden;
};

function switchClassVisible(element) {
    let el = document.getElementById(element);
    el.classList.toggle("visible");
    console.log("change")
};

// btnCategory.addEventListener("click", (e) => {
//     e.preventDefault();
//     switchClassVisible(btnCategory);
// });

function buttonDetailsTask(buttonId, inputId) {
    // Display of details buttons
    document.getElementById(buttonId).addEventListener("click", (e) => {
        e.preventDefault();
        switchClassVisible(buttonId);
        switchClassVisible(inputId);
    });
}


document.getElementById("btn-cancel").addEventListener("click", (e) => {
    e.preventDefault();
    // Erase textarea input
    document.getElementById("input-new-task").value = "";
    // Revert the buttons back to their original state
    ["category", "deadline", "priority"].forEach(item => {
        document.getElementById(item).style.display = "none";
        document.getElementById("btn-" + item).style.display = "inline-block";
        document.getElementById(item).value = "";
    });
    switchDisplay(newTaskCreator);
    switchDisplay(newTaskButton);
});



newTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    // Hide new task button and display creation menu
    switchDisplay(newTaskCreator);
    switchDisplay(newTaskButton);
});

function getDetailsValue() {
    // Get input values
    for (let i = 0; i < inputDetails.length; ++i) {
    getDetails[i] = document.getElementById(inputDetails[i]).value;
    }
    console.log(getDetails); // remove it later
}


addButton.addEventListener("click", (e) => {
    e.preventDefault();
    getDetailsValue();
    switchDisplay(newTaskCreator);
    switchDisplay(newTaskButton);
    });


function newList() {

}