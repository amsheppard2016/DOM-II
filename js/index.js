const navBar = document.querySelectorAll(".nav-link");
console.log(navBar);

navBar.forEach(aTag => {
  aTag.addEventListener("click", function(event) {
    event.preventDefault();
  });
});

navBar.forEach(aTag => {
  console.log("aTag", aTag);
  aTag.addEventListener("mouseenter", () => {
    aTag.style.backgroundColor = "black";
    aTag.style.color = "white";
  });
});

navBar.forEach(aTag => {
  console.log("aTag", aTag);
  aTag.addEventListener("mouseleave", () => {
    aTag.style.backgroundColor = "white";
    aTag.style.color = "black";
  });
});

const signButton = document.querySelectorAll(".btn");
console.log(signButton);

signButton.forEach(element => {
  console.log("btn element", element);
  element.addEventListener("mousedown", () => {
    element.textContent = "Enjoy Your Trip";
    element.style.color = "white";
  });
});

const busImage = document.querySelector("img");
console.log(busImage);

busImage.addEventListener("auxclick", () => {
  busImage.src =
    "https://images.unsplash.com/photo-1525962898597-a4ae6402826e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
});

const destinations = document.querySelector(".content-pick");
console.log(destinations);
window.addEventListener("resize", () => {
  destinations.style.backgroundColor = "#87D790";
});

const h2 = document.querySelectorAll("h2");
console.log(h2);
h2[2].addEventListener("mouseover", () => {
  h2[2].textContent = "Your Adventure Awaits";
});

const images = document.querySelectorAll("img");
console.log(images);

images[2].addEventListener("mouseover", () => {
  images[2].src =
    "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
});

const parentDestination = document.querySelectorAll(".destination");
const childBtn = document.querySelectorAll(".btn");
const firstParentDestination = parentDestination[0];
const firstChildBtn = childBtn[0];

firstChildBtn.addEventListener("click", event => {
  console.log(event);
  event.target.style.backgroundColor = "#17A2B8";
  event.stopPropagation();
});

firstParentDestination.addEventListener("click", event => {
  console.log("random click event");
  event.target.style.background = "#399343";
});

const pickYourDestination = document.querySelector(".content-destination");
console.log(pickYourDestination);

pickYourDestination.addEventListener("wheel", () => {
  pickYourDestination.style.backgroundColor = "#87D790";
});

const toFunBus = document.querySelector(".intro");

toFunBus.addEventListener("dblclick", () => {
  toFunBus.style.backgroundColor = "#87D790";
});

const text = document.querySelectorAll("p");
console.log(text);
const footerText = text[9];

footerText.addEventListener("mousemove", () => {
  footerText.style.backgroundColor = "gray";
});

footerText.addEventListener("mouseout", () => {
  footerText.style.backgroundColor = "#17A2B8";
});

//mouseout
//mousemove
//dblclick
//wheel
//click
//mouseover
//mouseleave
//resize
//auxclick
//mousedown
