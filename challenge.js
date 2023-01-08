// In the js file, you must add the following functionalities:
// Create an empty array : const tasks = [];
const tasks = [];
let taskId = 0;
//Create a function called addTask(). 
// As soon as the user clicks on the button
//check that the input is not empty,
//then add it to the array (ie. add the text of the task)
//then add it to the DOM, below the form (in the <div class="listTasks"></div>) 
//Each new task added should have (starting from left to right - check
//Each new task added should have (starting from left to right - 
//out the image at the top of the page)

function addTask(){
        if(document.getElementsByTagName("task").value ===""){
            return;
        }
        tasks.push({
            task_id:taskId,
            text:document.getElementById("task").value,
        });
        taskId++
        
 // add it to the DOM, below the form (in the <div class="listTasks"></div>) .
  const listTasks = document.querySelector('.listTasks');
  const task = document.createElement('div');
  task.innerHTML = `
    <input type="checkbox" data-task-id="${taskId - 1}"> ${document.getElementById('task').value}
    <button class="delete-button">X</button>
  `;
  listTasks.appendChild(task);

  // clear the input field
  document.getElementById('task').value = '';
}

document.getElementById('form').addEventListener('add', (event) => {
  event.preventDefault();
  addTask();
});

const doneTask = (event) => {
  // get the task_id of the clicked task
  const taskId = event.target.dataset.taskId;

  // find the task object in the array and update its done property
  const task = tasks.find((task) => task.task_id == taskId);
  task.done = !task.done;

  // update the style of the task in the DOM
  if (task.done) {
    event.target.parentElement.style.textDecoration = 'line-through';
    event.target.parentElement.style.color = 'red';
  } else {
    event.target.parentElement.style.textDecoration = 'none';
    event.target.parentElement.style.color = 'black';
  }
}

document.querySelector('.listTasks').addEventListener('click', (event) => {
  if (event.target.matches('input[type="checkbox"]')) {
    doneTask(event);
  }
});

const deleteTask = (event) => {

  const taskId = event.target.parentElement.querySelector('input[type="checkbox"]').dataset.taskId;

  // we find the task object in the array 
  const taskIndex = tasks.findIndex((task) => task.task_id == taskId);
  tasks.splice(taskIndex, 1);

  // we remove the task from the DOM
  event.target.parentElement.remove();
}
           
    

