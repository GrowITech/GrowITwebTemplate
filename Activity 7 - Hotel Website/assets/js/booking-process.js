// Start: Multi-Form pages

const nextBtn = document.querySelector(".nextBtn");
const slidePage = document.querySelector(".slidePage");
const nextBtn2 = document.querySelector(".nextBtn2");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

let max = 2;
let current = 1;

nextBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-36%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});

nextBtn2.addEventListener("click", () => {
  slidePage.style.marginLeft = "-71%";
  bullet[current - 1].classList.add("active");
  bullet[3 - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressCheck[3 - 1].classList.add("active");
  current += 1;
});

//1st Payment Section
const input1 = document.querySelector(".f-field1");
const input2 = document.querySelector(".f-field2");
const input3 = document.querySelector(".f-field3");
const input4 = document.querySelector(".f-field4");
let btnSHow = document.querySelector(".display");

function checkInputs() {
  return (
    input1.value !== "" &&
    input2.value !== "" &&
    input3.value !== "" &&
    input4.value !== ""
  );
}

function toggleSubmitButton() {
  if (checkInputs()) {
    btnSHow.style.display = "block";
  } else {
    btnSHow.style.display = "none";
  }
}

input1.addEventListener("input", toggleSubmitButton);
input2.addEventListener("input", toggleSubmitButton);
input3.addEventListener("input", toggleSubmitButton);
input4.addEventListener("input", toggleSubmitButton);

//2nd Payment Section
const input5 = document.querySelector(".f-field5");
const input6 = document.querySelector(".f-field6");
const input7 = document.querySelector(".f-field7");
let btnSHow2 = document.querySelector(".display2");

function checkInputs2() {
  return input5.value !== "" && input6.value !== "" && input7.value !== "";
}

function toggleSubmitButton2() {
  if (checkInputs2()) {
    btnSHow2.style.display = "block";
  } else {
    btnSHow2.style.display = "none";
  }
}

input5.addEventListener("input", toggleSubmitButton2);
input6.addEventListener("input", toggleSubmitButton2);
input7.addEventListener("input", toggleSubmitButton2);
