"use strict";

const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const renderTasks = (tasksList) => {
  const listElem = document.querySelector(".list");

  const listItemsArr = tasksList.map((elem) => {
    const listItemElem = document.createElement("li");
    const listItemInput = document.createElement("input");

    listItemElem.classList.add("list__item");

    listItemInput.type = "checkbox";
    if (elem.done === true) {
      listItemInput.checked = true;
      listItemElem.classList.add("list__item_done");
    } else {
      listItemInput.checked = false;
    }

    listItemInput.classList.add("list__item-checkbox");

    listItemElem.append(listItemInput);
    listItemElem.append(elem.text);

    return listItemElem;
  });
  listElem.append(...listItemsArr);
};

renderTasks(tasks);
