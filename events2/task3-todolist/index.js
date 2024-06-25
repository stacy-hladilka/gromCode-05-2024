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
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      checkbox.dataset.id = id;

      const changeCheck = (event) => {
        const targetTask = tasksList.find((elem) => {
          return String(elem.id) === event.target.dataset.id;
        });
        targetTask.done = event.target.checked;
        renderTasks(tasksList);
      };

      checkbox.addEventListener("change", changeCheck);

      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here
const newTaskInput = document.querySelector(".task-input");
const createButton = document.querySelector(".create-task-btn");

const renderNewTask = () => {
  const inputText = newTaskInput.value;
  if (inputText === "") {
    return;
  }
  const newTask = { text: inputText, id: Math.random(), done: false };
  tasks.push(newTask);
  renderTasks(tasks);
  newTaskInput.value = "";
};

createButton.addEventListener("click", renderNewTask);
