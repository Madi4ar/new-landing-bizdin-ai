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
  const iframe = document.querySelector("iframe");
  iframe.src = iframe.src;
  document.querySelector(".popup").classList.add("hidden");
};

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  for (let link of links) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 100;
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  }
});
