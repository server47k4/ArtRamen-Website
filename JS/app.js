const reviewsCons = document.querySelectorAll(".review-individual-container");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const dot = document.querySelector(".dot");

// Reviews Slider Small Screen Sizes
let counter = 0;
rightArrow.addEventListener("click", () => {
  if (counter < 3) {
    counter++;

    // Gets the elements that have the active class
    const activeReview = document.querySelector(".active-review-container");
    const activeDot = document.querySelector(".active-dot");

    // Removes the active class from the elements that have it
    activeDot.classList.remove("active-dot");
    activeReview.classList.remove("active-review-container");

    // Gets the next sibling of the element that has the active class
    const nextDot = activeDot.nextElementSibling;
    const nextReview = activeReview.nextElementSibling;

    // Adds the active class to the next sibling
    nextDot.classList.add("active-dot");
    nextReview.classList.add("active-review-container");

    // Removes the active class from the invisible container and adds it to the previous sibling
    if (nextReview.classList.contains("invisible-container")) {
      nextReview.classList.remove("active-review-container");
      nextReview.previousElementSibling.classList.add(
        "active-review-container"
      );
    }
  }
});

leftArrow.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    
    // Gets the elements that have the active class
    const activeDot = document.querySelector(".active-dot");
    const activeReview = document.querySelector(".active-review-container");

    // Removes the active class from the elements that have it
    activeDot.classList.remove("active-dot");
    activeReview.classList.remove("active-review-container");

    // Gets the previous sibling of the element that has the active class
    const previousDot = activeDot.previousElementSibling;
    const previousReview = activeReview.previousElementSibling;

    // Adds the active class to the previous sibling
    previousDot.classList.add("active-dot");
    previousReview.classList.add("active-review-container");
  }
});
