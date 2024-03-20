let dayliesBar = document.querySelector(".icon-daylies");
let dayliesTask = document.querySelector(".daylies-task");
let dayliesStripe = document.querySelectorAll(".daylies-toggle");
let btn = document.querySelector(".toggle");
let icon = btn.querySelector(".fa-chevron-up");
let progressBar = document.querySelector(".progress");

dayliesBar.addEventListener("click", () => {
  dayliesTask.hidden
    ? (dayliesTask.hidden = false)
    : (dayliesTask.hidden = true);
});

btn.addEventListener("click", () => {
  if (icon.classList.contains("fa-chevron-up")) {
    icon.classList.replace("fa-chevron-up", "fa-chevron-down");
  } else {
    icon.classList.replace("fa-chevron-down", "fa-chevron-up");
  }
});

for (stripe of dayliesStripe) {
  stripe.addEventListener("click", (e) => {
    if (e.target.classList.contains("completed")) {
      e.target.classList.remove("completed");
    } else {
      e.target.classList.add("completed");
    }
    updateProgress();
  });
}

function updateProgress() {
  const completedTasks = document.querySelectorAll(
    ".daylies-task .completed"
  ).length;
  const totalTasks = document.querySelectorAll(".daylies-task li").length;
  const progressPercentage = (completedTasks / totalTasks) * 100;
  progressBar.style.width = progressPercentage + "%";
}

