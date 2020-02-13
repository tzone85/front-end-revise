var pics = [
  "img/ab1adf729e39c484d3489fc8486b807e.jpg",
  "img/catAndMouse.jpg",
  "img/cute-cat-white-silk-cushion-cover-by-stybuzz-cute-cat-white-silk-cushion-cover-by-stybuzz-rtdg0m.jpg",
  "img/images.jpeg",
  "images-2.jpeg",
  "images-3.jpeg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 0;
btn.addEventListener("click", function () {

    if (counter > 5) {
        counter = 0;
        console.log('yeey');
    }
    img.src = pics[counter];
    counter += 1;
    console.log(counter);
});