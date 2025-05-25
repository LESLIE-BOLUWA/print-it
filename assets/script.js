const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
//  ETAPE 2 : ajout des events listenner sur les flèches

let currentSlideIndex = 0; // (permet de savoir quelle image est affichée actuellement)

const arrowRight = document.getElementById("arrowRight");
const arrowLeft = document.getElementById("arrowLeft");

arrowLeft.addEventListener("click", function (events) {
  console.log("clic sur la flèche gauche");
  //ETAPE: 5 : Dynamiser à gauche

  currentSlideIndex--;
  //ETAPE 6 : si on arrive à la fin du tableau, on revieent à la fin
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1; // -1 car on commence à 0
  }
  // Recupérer le slide avec l'index
  const slide = slides[currentSlideIndex];

  //changer l'image
  const imageElement = document.querySelector(".banner-img");
  imageElement.setAttribute("src", `./assets/images/slideshow/${slide.image}`); // ou + slide.image

  //changer le texte
  const textElement = document.querySelector("#banner p");
  textElement.innerHTML = slide.tagLine;

  // changer le dot selected
  const activeDot = document.querySelector(".dot_selected");
  activeDot.classList.remove("dot_selected");

  const allDots = document.querySelectorAll(".dot");
  const newActiveDot = allDots[currentSlideIndex];
  newActiveDot.classList.add("dot_selected");
});

arrowRight.addEventListener("click", function (events) {
  console.log("clic sur la flèche droite");

  //ETAPE 4 : Dynamiser à droite

  currentSlideIndex++;
  //ETAPE 6 : si on arrive à la fin du tableau, on revient au début

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  // Recupérer le slide avec l'index
  const slide = slides[currentSlideIndex];

  //changer l'image
  const imageElement = document.querySelector(".banner-img");
  imageElement.setAttribute("src", `./assets/images/slideshow/${slide.image}`); // ou + slide.image

  //changer le texte
  const textElement = document.querySelector("#banner p");
  textElement.innerHTML = slide.tagLine;

  // changer le dot selected
  const activeDot = document.querySelector(".dot_selected");
  activeDot.classList.remove("dot_selected");

  const allDots = document.querySelectorAll(".dot");
  const newActiveDot = allDots[currentSlideIndex];
  newActiveDot.classList.add("dot_selected");
});

//  ETAPE 3 : ajout des bullet points
//const dots = document.querySelector(".dots");

//const dot1 = document.createElement("span");
//dot1.classList.add("dot");
//dot1.classList.add("dot_selected");
//dots.appendChild(dot1);

//const dot2 = document.createElement("span");
//dot2.classList.add("dot");
//dots.appendChild(dot2);

//const dot3 = document.createElement("span");
//dot3.classList.add("dot");
//dots.appendChild(dot3);

//const dot4 = document.createElement("span");
//dot4.classList.add("dot");
//dots.appendChild(dot4);

// ajouter le dot selected sur l'image selectionnée
//document.querySelector(".dot_selected").classList.remove("dot_selected");
//document
// .querySelectorAll(".dot")
//[currentSlideIndex].classList.add("dot_selected");

//   on peut aussi utiliser une boucle pour créer les dots

const dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");

  if (i === 0) {
    dot.classList.add("dot_selected");
  }

  dots.appendChild(dot);
}
