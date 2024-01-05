document
  .getElementById("right-arrow")
  .addEventListener("click", () => slide("right"));
document
  .getElementById("left-arrow")
  .addEventListener("click", () => slide("left"));

let currentIndex = 0;

function slide(direction) {
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  const slider = document.getElementById("slider");
  const children = Array.from(slider.children).filter(
    (child) => child.tagName === "IMG"
  );

  if (direction === "right") {
    currentIndex++;
  } else {
    currentIndex--;
  }

  if (currentIndex === 0) {
    leftArrow.classList.add("hide-arrow");
    rightArrow.classList.remove("hide-arrow");
  }
  if (currentIndex > 0) {
    leftArrow.classList.remove("hide-arrow");
  }
  if (currentIndex === children.length - 1) {
    rightArrow.classList.add("hide-arrow");
  }

  children.forEach((child, index) => {
    if (index === currentIndex) {
      child.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  });
}
