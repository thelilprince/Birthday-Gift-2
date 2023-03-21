let films = document.querySelectorAll(".films__film img");
let filmsLength = films.length;
let imgs = [];

const modal = document.querySelector(".modal");
const element = document.querySelector(".modal__film");

for (let i = 1; i <= filmsLength; i++) {
    let location = `./imgs/img${i}.jpeg`;
    imgs.push(location);
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

let shuffledImgs = shuffle(imgs);

films.forEach(function (film, index) {
  film.setAttribute("src", shuffledImgs[index]);

  film.addEventListener("click", function () {
      modal.classList.add("is-active");
      document.querySelector(".modal__film img").src = film.src;
  });
});

window.onclick = function (event) {
  if (event.target == modal) {
      modal.classList.remove("is-active");
      document.querySelector(".modal .modal__film").src = "";
  }
};

VanillaTilt.init(element, {
  reverse: true,
  perspective: 2000,
  glare: true,
  "max-glare": 0.5,
  "glare-prerender": false,
  gyroscope: true,
  gyroscopeMinAngleX: -10,
  gyroscopeMaxAngleX: 10,
  gyroscopeMinAngleY: -10,
  gyroscopeMaxAngleY: 10
});

let confetti = new Confetti("intro");
confetti.setCount(1000);
confetti.setSize(1);
confetti.setPower(250);
confetti.setFade(false);
confetti.destroyTarget(true);

document.querySelector(
".modal__film .js-tilt-glare .js-tilt-glare-inner"
).style.backgroundImage = "";
