const table = document.getElementById("table");
const loadMsg = document.getElementById("load-msg");
const count = document.getElementById("count-tasks");

function updateCount() {
  const allTasks = getTasks();
  count.innerHTML = allTasks.length;
}

updateCount();

function fillTable() {
  const allTasks = getTasks();
  allTasks.forEach(addTask)

  if (allTasks.length === 0) {
    loadMsg.innerHTML = "Você não tem tarefas registradas!";
  } else {
    loadMsg.innerHTML = "";
  }

  updateCount();
}

function addTask(task){
    const tr = document.createElement('tr')
    tr.innerHTML = innerHTMLTask(task)

    table.appendChild(tr)
}

function innerHTMLTask(task) {
  const html = `
        <td>${task.description}</td>
        <td>${task.date}</td>
        <td><a onclick="removeTask(${task.id})" href="#"><i class="fa-solid fa-trash"></i></a></td>
    `;
  return html;
}

function removeTask(id){
    const allTasks = getTasks();
    const taskFilter = allTasks.filter( task => task.id !== id);

    setTasks(taskFilter)
    reload();
}

function reload(){
    table.innerHTML = '';
    fillTable();
}
