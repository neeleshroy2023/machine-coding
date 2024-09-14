const starContainer = document.getElementById("stars");
const stars = Array.from(starContainer.children);

window.addEventListener("click", (e) => {
  if (starContainer.contains(e.target)) {
    stars.forEach((star, index) => {
      if (index + 1 <= e.target.dataset.id) {
        star.classList.add("filled");
      } else {
        star.classList.remove("filled");
      }
    });
  }
});

window.addEventListener("mouseover", (e) => {
  if (starContainer.contains(e.target)) {
    stars.forEach((star, index) => {
      if (index + 1 <= e.target.dataset.id) {
        star.classList.add("hover-filled");
      } else {
        star.classList.remove("hover-filled");
      }
    });
  }
});

window.addEventListener("mouseout", () => {
  stars.forEach((star) => {
    star.classList.remove("hover-filled");
  })
})