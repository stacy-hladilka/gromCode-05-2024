const tasks = [
  { id: 1, text: "Buy milk", done: false },
  { id: 2, text: "Pick up Tom from airport", done: false },
  { id: 3, text: "Visit party", done: false },
  { id: 4, text: "Visit doctor", done: true },
  { id: 5, text: "Buy meat", done: true },
];

const listElem = document.querySelector(".list");

const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  const sortedTasks = tasksList.sort((a, b) => a.done - b.done);
  sortedTasks.forEach(({ id, text, done }) => {
    const listItemElem = document.createElement("li");
    listItemElem.classList.add("list__item");
    if (done) {
      listItemElem.classList.add("list__item_done");
    }

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = done;
    checkbox.classList.add("list__item-checkbox");
    checkbox.addEventListener("click", () => {
      updateTaskStatus(id, checkbox.checked);
    });

    const taskLabel = document.createElement("label");
    taskLabel.textContent = text;
    taskLabel.classList.add("list__item-label");

    listItemElem.appendChild(checkbox);
    listItemElem.appendChild(taskLabel);
    listElem.appendChild(listItemElem);
  });
};

const inputElem = document.querySelector(".task-input");
const btnElem = document.querySelector(".create-task-btn");

btnElem.addEventListener("click", createNewTask);

let idCounter = tasks.length + 1;

function createNewTask() {
  const taskText = inputElem.value.trim();

  if (taskText !== "") {
    const newTask = { id: idCounter, text: taskText, done: false };
    tasks.push(newTask);
    idCounter++;

    renderTasks(tasks);

    inputElem.value = "";
  }
}

function updateTaskStatus(id, done) {
  const taskToUpdate = tasks.find((task) => task.id === id);
  if (taskToUpdate) {
    taskToUpdate.done = done;
    renderTasks(tasks);
  }
}

renderTasks(tasks);
