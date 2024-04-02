'use strict';

// Buttons
const btnOne = document.querySelector('.btn--one');
const btnTwo = document.querySelector('.btn--two');
const btnThree = document.querySelector('.btn--three');

// Elements
const cardContainer = document.querySelector('.container');
const flashMessage = document.querySelector('.flash');
const list = document.querySelector('.list');
const steps = document.querySelectorAll('.card');
const stepsContainer = document.querySelector('.step');
const stepText = document.querySelector('.step__text');

// User Input Elements
const inputName = document.getElementById('name');
const email = document.getElementById('email');
const nameSubmit = document.getElementById('name__submit');
const emailSubmit = document.getElementById('email__submit');

// Step Value
let curStep = 0;
const maxStep = steps.length - 1;

// Functions
function createCircleSteps() {
  steps.forEach((_, i) => {
    if (i < steps.length - 1)
      stepsContainer.insertAdjacentHTML(
        'beforeend',
        `<div class="step--circle" data-step="${i}"></div>`
      );
  });
}

function activateCircle(step) {
  const current = document.querySelector(`.step--circle[data-step="${step}"]`);
  const circles = document.querySelectorAll('.step--circle');

  if (curStep === 0) current.classList.add('active');

  if (curStep > 0 && curStep < 3) {
    current.previousElementSibling.classList.remove('active');
    current.previousElementSibling.classList.add('completed');
    current.classList.add('active');
  }

  if (curStep === 3) {
    circles.forEach((el) => {
      el.classList.remove('active');
      el.classList.add('completed');
    });
  }
}

function displayNextCard(current) {
  // 1. select parent (div) of e.target
  const parentEl = current.closest('.card');

  // 2. add/remove 'hidden' class
  parentEl.classList.add('hidden');
  parentEl.nextElementSibling.classList.remove('hidden');

  // 3. circle
  curStep++;
  activateCircle(curStep);

  //4. step text
  stepText.textContent = `Step ${curStep === maxStep ? maxStep : curStep + 1} of ${maxStep}`;
}

function init() {
  createCircleSteps();
  activateCircle(curStep);
  stepText.textContent = `Step ${curStep + 1} of ${maxStep}`;

  // initial condition: all but first child add 'hidden' class
  steps.forEach((el) => el.classList.add('hidden'));
  cardContainer.firstElementChild.classList.remove('hidden');
}
init();

// Event Delegation
cardContainer.addEventListener('click', function (e) {
  // Step 1: Name & Email
  if (e.target === btnOne) {
    e.preventDefault();
    if (inputName.value && email.value) {
      nameSubmit.textContent = inputName.value; // must have code here to dynamically change in step 3
      emailSubmit.textContent = email.value;

      displayNextCard(e.target);
    }
  }

  // Step 2: Interests
  if (e.target === btnTwo) {
    e.preventDefault();
    const checkedValues = document.querySelectorAll('[type="checkbox"]:checked');
    const printValues = Array.from(checkedValues, (el) => el.value);

    // dynamically create lis by looping through an array
    if (printValues.length > 0) {
      printValues.forEach((el) => {
        list.insertAdjacentHTML('beforeend', `<li>${el}</li>`);
      });
      flashMessage.classList.add('hidden');
      displayNextCard(e.target);
    } else {
      flashMessage.classList.remove('hidden');
    }
  }

  // Step 3: Summary
  if (e.target === btnThree) {
    e.preventDefault();
    displayNextCard(e.target);
  }
});
