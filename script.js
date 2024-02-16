const images = document.querySelectorAll(".image");

function clickHandler() {
  let imgSrc = this.src;
  document.querySelector(".item_img").src = imgSrc;
}

images.forEach(function (element) {
  element.addEventListener("click", clickHandler);

  element.dataset.hidden = "false";
});

const btn = document.querySelector(".item_btn");

btn.addEventListener("click", function () {
  images.forEach(function (element) {
    element.removeEventListener("click", clickHandler);
  });
  btn.style.visibility = "hidden";

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      if (this.dataset.hidden === "false") {
        this.style.opacity = "0";
        this.dataset.hidden = "true";
      } else {
        this.style.opacity = "1";
        this.dataset.hidden = "false";
      }
    });
  });
});
