// Tema 2
const openBtn1 = document.querySelector("#openBtn1");
const closeBtn1 = document.querySelector("#closeBtn1");
const dialog1 = document.querySelector("#dialog1");

openBtn1.addEventListener("click", (e) =>  {
  e.preventDefault();
  dialog1.showModal();
});

closeBtn1.addEventListener("click", () => {
  dialog1.close();
});

// Tema 3
const openBtn2 = document.querySelector("#openBtn2");
const closeBtn2 = document.querySelector("#closeBtn2");
const dialog2 = document.querySelector("#dialog2");

openBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  dialog2.showModal();
});

closeBtn2.addEventListener("click", () => {
  dialog2.close();
});

// Tema 4
const openBtn3 = document.querySelector("#openBtn3");
const closeBtn3 = document.querySelector("#closeBtn3");
const dialog3 = document.querySelector("#dialog3");

openBtn3.addEventListener("click", (e) => {
  e.preventDefault();
  dialog3.showModal();
});

closeBtn3.addEventListener("click", () => {
  dialog3.close();
});

// Tema 5
const openBtn4 = document.querySelector("#openBtn4");
const closeBtn4 = document.querySelector("#closeBtn4");
const dialog4 = document.querySelector("#dialog4");

openBtn4.addEventListener("click", (e) => {
  e.preventDefault();
  dialog4.showModal();
});

closeBtn4.addEventListener("click", () => {
  dialog4.close();
});
