let todo = document.querySelector(".todo");
let filters = document.querySelector(".filters");
let actions = document.querySelector(".actions");
let wordCounter = document.querySelector("#count-of-items");
let clearButton = document.querySelector("#clear_btn");

if (matchMedia) {
  let screen = window.matchMedia("(max-width: 1170px)");
  screen.addEventListener("change", () => {
    if (screen.matches) {
      todo.insertBefore(filters, actions.nextSibling);
    } else {
      actions.appendChild(filters);
    }
  });

  if (screen.matches) {
    todo.insertBefore(filters, actions.nextSibling);
  } else {
    actions.appendChild(filters);
  }
}

actions.insertBefore(filters, wordCounter.nextSibling);

actions.appendChild(clearButton);
