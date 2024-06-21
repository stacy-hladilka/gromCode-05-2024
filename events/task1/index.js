const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");
const eventList = document.querySelector(".events-list");

const logTarget = (text, color) => {
  const eventListElem = document.querySelector(".events-list");
  const span = document.createElement("span");
  span.innerText = text;
  span.style.color = color;
  span.style.marginLeft = "8px";
  eventListElem.append(span);
};

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "grey");
const logGreyP = logTarget.bind(null, "P", "grey");
const logGreySpan = logTarget.bind(null, "SPAN", "grey");

divElem.addEventListener("click", logGreyDiv, true);
divElem.addEventListener("click", logGreenDiv);

pElem.addEventListener("click", logGreyP, true);
pElem.addEventListener("click", logGreenP);

spanElem.addEventListener("click", logGreySpan, true);
spanElem.addEventListener("click", logGreenSpan);

const clear = document.querySelector(".clear-btn");
const remove = document.querySelector(".remove-handlers-btn");
const attach = document.querySelector(".attach-handlers-btn");

clear.addEventListener("click", () => {
  eventList.innerHTML = "";
});

remove.addEventListener("click", () => {
  divElem.removeEventListener("click", logGreyDiv, true);
  divElem.removeEventListener("click", logGreenDiv);
  pElem.removeEventListener("click", logGreyP, true);
  pElem.removeEventListener("click", logGreenP);
  spanElem.removeEventListener("click", logGreySpan, true);
  spanElem.removeEventListener("click", logGreenSpan);
});

attach.addEventListener("click", () => {
  divElem.addEventListener("click", logGreyDiv, true);
  divElem.addEventListener("click", logGreenDiv);

  pElem.addEventListener("click", logGreyP, true);
  pElem.addEventListener("click", logGreenP);

  spanElem.addEventListener("click", logGreySpan, true);
  spanElem.addEventListener("click", logGreenSpan);
});

clear.addEventListener("click", () => {
  eventList.innerHTML = "";
});
