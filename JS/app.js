const reviewsCons = document.querySelectorAll(".review-individual-container");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const dot = document.querySelector(".dot");


rightArrow.addEventListener("click", () => {
  const activeReview = document.querySelector(".active-review-container");
  const activeDot = document.querySelector(".active-dot");

  if (activeReview && activeDot) {
    activeDot.classList.remove("active-dot");
    activeReview.classList.remove("active-review-container");

      const nextDot = activeDot.nextElementSibling;
      const nextReview = activeReview.nextElementSibling;

    nextDot.classList.add("active-dot");
    nextReview.classList.add("active-review-container");

    if (nextReview.classList.contains("invisible-container")) {
      nextReview.classList.remove("active-review-container");
      nextReview.previousElementSibling.classList.add(
        "active-review-container"
      );
    }
  }
});

leftArrow.addEventListener("click", () => {
  const activeDot = document.querySelector(".active-dot");
  const activeReview = document.querySelector(".active-review-container");

  if (activeReview && activeDot) {
    activeDot.classList.remove("active-dot");
    activeReview.classList.remove("active-review-container");

    const nextDot = activeDot.previousElementSibling;
    const nextReview = activeReview.previousElementSibling;

    nextDot.classList.add("active-dot");
    nextReview.classList.add("active-review-container");
  }
});
