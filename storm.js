document.getElementById("right-arrow").addEventListener("click", slide);

function slide() {
  const slider = document.getElementById("slider");
  const children = Array.from(slider.children);
  children.forEach((child) => {
    if (child.tagName === "IMG") {
      child.classList.toggle("image-hide");
    }
  });
}
