function getTasks(){
return JSON.parse(localStorage.getItem('@Gostasks')) || [];
}

function setTasks(tasks){
    localStorage.setItem('@Gostasks',JSON.stringify(tasks))
}