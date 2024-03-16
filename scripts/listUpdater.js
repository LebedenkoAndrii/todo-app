document.addEventListener("DOMContentLoaded", () => {
  const formInput = document.getElementById("form_input");
  const formButton = document.getElementById("form_button");
  const countOfItems = document.getElementById("count-of-items");
  const clearBtn = document.getElementById("clear_btn");
  const listContainer = document.querySelector(".list-container");
  const emptyContainer = document.querySelector(".empty-container");
  const list = document.getElementById("list");

  formButton.addEventListener("click", function (event) {
    event.preventDefault();
    const todoText = formInput.value;

    if (todoText.length === 0) {
      alert("Enter text in text field");
    } else {
      addListItem();
    }
  });

  const observer = new MutationObserver(function (mutationsList) {
    mutationsList.forEach(function (mutation) {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        updateItemCount();
      }
    });
  });

  const observerConfig = { childList: true };
  observer.observe(list, observerConfig);

  function updateItemCount() {
    const tasks = list.querySelectorAll(".list-item");
    let incompleteCount = 0;

    tasks.forEach(function (task) {
      const status = task.getAttribute("data-status");

      if (status !== "active") {
        incompleteCount++;
      }
    });

    countOfItems.textContent = `${incompleteCount} items left`;

    if (tasks.length === 0) {
      emptyContainer.classList.remove("hidden");
      listContainer.classList.add("hidden");
    } else {
      emptyContainer.classList.add("hidden");
      listContainer.classList.remove("hidden");
    }
  }

  list.addEventListener("change", function (event) {
    if (event.target.type === "checkbox") {
      updateItemCount();
    }
  });

  clearBtn.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".list-item");
    const activeTask = list.querySelector(".list-item[data-status='active']");

    if (!activeTask) {
      alert("List of completed tasks is empty");
    } else if (activeTask) {
      tasks.forEach(function (task) {
        const status = task.getAttribute("data-status");

        if (status === "active") {
          task.remove();
        }
      });
    }
    updateItemCount();
  });

  function addListItem() {
    const todoText = formInput.value;

    const listItem = document.createElement("div");
    listItem.setAttribute("data-status", "inactive");
    listItem.classList.add("list-item");

    const listItemLabel = document.createElement("label");
    listItemLabel.classList.add("list-item-label");

    const labelInput = document.createElement("input");
    labelInput.setAttribute("type", "checkbox");
    labelInput.setAttribute("id", "checkbox");

    listItemLabel.appendChild(labelInput);

    const labelSpan = document.createElement("span");
    labelSpan.classList.add("check-circle");
    listItemLabel.appendChild(labelSpan);

    listItem.appendChild(listItemLabel);

    const listItemText = document.createElement("li");
    listItemText.classList.add("list-item-text");
    listItemText.innerText = todoText;

    listItem.appendChild(listItemText);

    const listItemButton = document.createElement("button");
    listItemButton.classList.add("list-item-btn");
    listItemButton.addEventListener("click", () => {
      listItem.remove();
      updateItemCount();
    });

    const buttonImg = document.createElement("img");
    buttonImg.setAttribute("src", "./assets/icons/icon-cross.svg");
    listItemButton.appendChild(buttonImg);

    listItem.appendChild(listItemButton);

    list.appendChild(listItem);

    formInput.value = "";
    updateItemCount();

    labelInput.addEventListener("change", () => {
      if (labelInput.checked) {
        listItemText.style.textDecoration = "line-through";
        listItemText.style.opacity = "0.5";
        listItem.setAttribute("data-status", "active");
      } else {
        listItemText.style.textDecoration = "none";
        listItemText.style.opacity = "1";
        listItem.setAttribute("data-status", "inactive");
      }
    });

    listItemText.addEventListener("click", () => {
      labelInput.checked = !labelInput.checked;
      if (labelInput.checked) {
        listItemText.style.textDecoration = "line-through";
        listItemText.style.opacity = "0.5";
        listItem.setAttribute("data-status", "active");
      } else {
        listItemText.style.textDecoration = "none";
        listItemText.style.opacity = "1";
        listItem.setAttribute("data-status", "inactive");
      }
      updateItemCount();
    });
  }
});
