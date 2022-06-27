const questionContainer = document.querySelector(".click-event");

const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");

const response = document.querySelector("p");
const mousemove = document.querySelector(".mousemove");

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

window.addEventListener("mousemove", (e) => {
  mousemove.style.top = e.pageY + "px";
  mousemove.style.left = e.pageX + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
});

questionContainer.addEventListener("mouseleave", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 1)";
});

response.addEventListener("mouseover", () => {
  let deg = 12;
  response.style.transform = `rotate(${deg}deg)`;
  deg += 12;
  deg = 0;
});

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "Enter") ring(e.key);
});

// Scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 99) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// Form events

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}<h4/>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

// load Event

window.addEventListener("load", () => {
  console.log("Document chargé !");
});

//----------------------------------------
// For Each
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

// addEventListener Vs onclick

// Bubling => fin
document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 !");
  },
  false
);

// UseCapture => se déclenche immédiatement
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);
