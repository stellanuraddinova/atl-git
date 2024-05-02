const backToTopButton = document.querySelector(".back-to-top");

backToTopButton.addEventListener("click", function (e) {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
