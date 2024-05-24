let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
let k = 0;

app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal() {
  createText(
    "Welcome to my Terminal. You can get to know more about me over here"
  );
  await delay(1500);
  createText("Type help to see the list of commands avaiable in this terminal");
  await delay(500);
  new_line();
}

function new_line() {
  k += 1;
  const p = document.createElement("p");
  p.setAttribute("class", "path");
  p.textContent = ">>> user@RohanNair-Terminal -% ";
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  if (k > 1) {
    input.focus();
  }
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {
  const value = document.querySelector("input").value;
  if (value === "help" || value === "help ") {
    trueValue(value);

    createCode("-  skills", "The programming skills in my arsenal.");
    createCode("-  about me", "A small writeup about me.");
    createCode("-  fav hobby", "A peek at my favourite hobby.");
  } else if (value === "about me" || value === "about me ") {
    trueValue(value);
    createText(
      "I am a undergrad Computer Science Student at the University of Toronto. I am deeply interested in revolutionzing tecnhnology in the space of Computer Vision and LLMs. I also love to work with projects as a front-end developer."
    );
  } else if (value === "fav hobby" || value === "fav hobby ") {
    createText("I love to play tennis in my free time with my brother.");
  } else if (value === "skills" || value === "skills ") {
    trueValue(value);
    createCode("FrontEnd: ", "HTML, CSS, JavaScript, React Web/Native");
    createCode("Backend:", "NodeJS, MySQL, MonogDB");
    createCode("Other Programming Languages:", "Python, Java, C, Assembly");
    createCode("Other:", "Tensorflow / Keras, Pandas, PyGame, JavaFX");
  } else {
    falseValue(value);
  }
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const mensagem = document.createElement("h4");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `Given command: ${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error");
  const mensagem = document.createElement("h4");
  mensagem.setAttribute("class", "error");
  mensagem.textContent = `Invalid command: ${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname) {
  const p = document.createElement("p");

  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
