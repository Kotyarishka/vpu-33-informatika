const elements = document.querySelectorAll(".container-grid__item");

elements.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("show");

    const content = element.querySelector(".container-grid__item--content");

    //calculate the height of the content
    const contentHeight = content.scrollHeight;

    //set the height of the content
    if (element.classList.contains("show")) {
      content.style.height = `${contentHeight}px`;
    } else {
      content.style.height = 0;
    }
  });
});
