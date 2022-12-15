const inputDescription = document.getElementById("description");
const inputDate = document.getElementById("date");
const modalCard = document.getElementById("modal");
const btnTasks = document.getElementById("btn-create-task");

function toggleModal() {
  modalCard.classList.toggle("modal-visible");
}

function clearFields(e) {
  inputDate.value = "";
  inputDescription.value = "";
  location.reload();
}

// Verificando se os inputs tem valor e utlização do preventDefault
function createTask(e) {
  e.preventDefault();
  if (!inputDescription.value || !inputDate.value) {
    alert("Preencha todos os campos");
    return;
  }

  //toLocaleDateString - Utilizado para formata o horário conforme o pais.
  //(Math.random() * 10000) Gera um numero aleatório de 0 a 10000
  // Math.floor arredonda o numero.

  const newTask = {
    description: inputDescription.value,
    date: new Date(inputDate.value).toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    }),
    id: Math.floor(Math.random() * 10000),
  };

  const allTasks = getTasks();

  console.log(newTask);

  localStorage.setItem("@Gostasks", JSON.stringify([...allTasks, newTask]));

  toggleModal();
  clearFields();
}

btnTasks.addEventListener("click", createTask);
