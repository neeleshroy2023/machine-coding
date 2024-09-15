import "./styles.css";

const input = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const result = document.getElementById("result");

let taskList = [];

addTodoButton.addEventListener("click", function (e) {
  e.stopPropagation();
  e.preventDefault();
  let resultHtml = "";
  taskList.push({
    id: Math.floor(Math.random() * 10000000),
    value: input.value,
  });
  taskList.forEach((task) => {
    resultHtml += `<li>${task.value}</li><button class="delete" data-id=${task.id}>Delete</button>`;
  });
  result.innerHTML = resultHtml;
});

window.addEventListener("click", function (e) {
  if (e.target && e.target.dataset && e.target.dataset.id) {
    let resultHtml = "";
    taskList = taskList.filter(
      (task) => task.id !== Number(e.target.dataset.id)
    );
    taskList.forEach((task) => {
      resultHtml += `<li>${task.value}</li><button class="delete" data-id=${task.id}>Delete</button>`;
    });
    result.innerHTML = resultHtml;
  }
});
