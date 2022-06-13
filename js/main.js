// Declarations
let inputTask = document.getElementById('inputTask');
let addTaskButton = document.getElementById('addTaskButton');
let noTaskDiv = document.getElementById('noTaskDiv');
let taskDiv = document.getElementById('taskDiv');

// Functions
let addTask = () => {
    let taskInfo = inputTask.value;
    if (taskInfo == "" || taskInfo.length < 3 || taskInfo.length > 20) {
        alert("Please Enter Valid Input");
    }
    else {
        noTaskDiv.classList.add('displayNone');
        taskDiv.innerHTML += ` <div class="alert">${taskInfo} <i class=" cancel fas fa-trash"></i><i class=" check fas fa-check"></i> </div> `;
        inputTask.value = "";
    }

}
let del = (e) => {
    let item = e.target;
    if (e.target.classList.contains('cancel')) {
        item.parentElement.remove();
    }
}
let check=(e)=>
{
    let citem=e.target;
    if(e.target.classList.contains('check')){
        
        citem.parentElement.classList.toggle('deco')
    }
}
// Event Listners
addTaskButton.addEventListener('click', addTask);
document.addEventListener('click', del);
document.addEventListener('click',check)

