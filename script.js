setTimeout(() => {
  document
    .querySelector("spline-viewer")
    ?.shadowRoot?.querySelector("#logo")
    ?.remove();
}, 10);

document.getElementById("nav-icon1").addEventListener("click", function () {
  this.classList.toggle("open");
  document.querySelector(".nav-block").classList.toggle("!flex");
});

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      document.querySelectorAll(".answer").forEach((answer) => {
        if (answer !== this.nextElementSibling) {
          answer.style.display = "none";
        }
      });
      document.querySelectorAll(".arrow-question").forEach((arrow) => {
        if (arrow !== this.querySelector(".arrow-question")) {
          arrow.classList.remove("rotate-180");
        }
      });

      const answer = this.nextElementSibling;
      const arrow = this.querySelector(".arrow-question");

      if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.classList.remove("rotate-180");
      } else {
        answer.style.display = "block";
        arrow.classList.add("rotate-180");
      }
    });
  });
});

document.querySelector(".open-play").onclick = function () {
  document.querySelector(".popup").classList.remove("hidden");
};

document.querySelector(".close-btn").onclick = function () {
  document.querySelector(".popup").classList.add("hidden");
};
