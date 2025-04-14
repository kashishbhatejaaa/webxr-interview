
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const questionList = document.getElementById("questionList");

  toggleBtn.addEventListener("click", function () {
    if (questionList.style.display === "none" || questionList.style.display === "") {
      questionList.style.display = "block";
      toggleBtn.textContent = "Hide Interview Questions";
    } else {
      questionList.style.display = "none";
      toggleBtn.textContent = "Show Interview Questions";
    }
  });

  const items = document.querySelectorAll(".question-item");
  items.forEach(item => {
    item.addEventListener("click", () => {
      alert(`You selected: "${item.textContent}"`);
    });
  });
});

