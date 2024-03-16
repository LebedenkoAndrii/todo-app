document.addEventListener("DOMContentLoaded", function () {
  const selectAll = document.getElementById("select_all");
  const selectActive = document.getElementById("select_active");
  const selectCompleted = document.getElementById("select_completed");

  selectAll.addEventListener("click", function () {
    const tasks = document.querySelectorAll(".list-item");
    const list = document.querySelector(".list");
    if (!list || list.children.length === 0) {
      alert("List is empty");
    } else {
      tasks.forEach(function (task) {
        task.classList.remove("hidden");
      });
    }
  });

  selectActive.addEventListener("click", function () {
    const inactiveTask = list.querySelector(
      ".list-item[data-status='inactive']"
    );
    const tasks = document.querySelectorAll(".list-item");

    if (!inactiveTask) {
      alert("List of active tasks is empty");
    } else if (inactiveTask) {
      tasks.forEach(function (task) {
        const status = task.getAttribute("data-status");

        if (status === "inactive") {
          task.classList.remove("hidden");
        } else {
          task.classList.add("hidden");
        }
      });
    }
  });

  selectCompleted.addEventListener("click", function () {
    const tasks = document.querySelectorAll(".list-item");

    const activeTask = list.querySelector(".list-item[data-status='active']");

    if (!activeTask) {
      alert("List of completed tasks is empty");
    } else if (activeTask) {
      tasks.forEach(function (task) {
        const status = task.getAttribute("data-status");

        if (status === "active") {
          task.classList.remove("hidden");
        } else {
          task.classList.add("hidden");
        }
      });
    }
  });
});
