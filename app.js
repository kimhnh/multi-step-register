// buttons
const btnStepOne = document.getElementById('btnStepOne');
const btnStepTwo = document.getElementById('btnStepTwo');
const btnStepThree = document.getElementById('btnStepThree');

// card divs
const cardOne = document.getElementById('cardOne');
const cardTwo = document.getElementById('cardTwo');
const cardThree = document.getElementById('cardThree');
const cardFinal = document.getElementById('cardFinal');

// elements
const heading = document.querySelector('.header');
const name = document.getElementById('name');
const email = document.getElementById('email');
const nameSubmit = document.getElementById('nameSubmit');
const emailSubmit = document.getElementById('emailSubmit');
const softwareDev = document.getElementById('software-dev');
const ux = document.getElementById('ux');
const graphic = document.getElementById('graphic');

///////////////////////////////////////////////////////////////

// todo list:
// 1. add flash message for error (div in html)
// 2. logic for step label (progress)
// 3. disable url to show query from our form submission
// 4. refine CSS (this should be last)

///////////////////////////////////////////////////////////////

// Step 1: Name&Email (flash message logic)
btnStepOne.addEventListener('click', function (e) {
  e.preventDefault();
  if (name.value && email.value) {
    cardOne.style.display = 'none';
    cardTwo.style.display = 'flex';
    nameSubmit.textContent = name.value; // must have code here to dynamically change in step 3
    emailSubmit.textContent = email.value;
  } else {
    console.log('Something went wrong. Please try again.');
  }
});

// Step 2: Interests (requires css update)
btnStepTwo.addEventListener('click', function (e) {
  e.preventDefault();
  cardTwo.style.display = 'none';
  cardThree.style.display = 'flex';
});

// Step 3: Summary
btnStepThree.addEventListener('click', function (e) {
  e.preventDefault();
  cardThree.style.display = 'none';
  cardFour.style.display = 'flex';
});
