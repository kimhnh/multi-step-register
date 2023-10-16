// buttons
const btnStepOne = document.getElementById('btnStepOne');
const btnStepTwo = document.getElementById('btnStepTwo');
const btnStepThree = document.getElementById('btnStepThree');

// card divs
const cardOne = document.getElementById('cardOne');
const cardTwo = document.getElementById('cardTwo');
const cardThree = document.getElementById('cardThree');
const cardFinal = document.getElementById('cardFinal');
const flashMessage = document.querySelector('.flash-message');

// elements
const heading = document.querySelector('.header');
const name = document.getElementById('name');
const email = document.getElementById('email');
const nameSubmit = document.getElementById('nameSubmit');
const emailSubmit = document.getElementById('emailSubmit');

///////////////////////////////////////////////////////////////

// todo list:
// 1. add logic to step 2: if any checkbox is checked ... else flash error message
// 2. logic for step label (progress indicator)
// 3. disable query to show in url
// 4. refine CSS (this should be last)
// 5. email input (right now you can bypass it without even having @) -- come back to this later

///////////////////////////////////////////////////////////////

// Step 1: Name&Email
btnStepOne.addEventListener('click', function (e) {
  e.preventDefault();
  if (name.value && email.value) {
    cardOne.classList.add('hidden');
    cardTwo.classList.remove('hidden');
    nameSubmit.textContent = name.value; // must have code here to dynamically change in step 3
    emailSubmit.textContent = email.value;
  }
});

// Step 2: Interests - require css update (flash message if nothing is checked)
btnStepTwo.addEventListener('click', function (e) {
  e.preventDefault();
  cardTwo.classList.add('hidden');
  cardThree.classList.remove('hidden');
  let checkedValues = document.querySelectorAll('[type="checkbox"]:checked');
  let printValues = Array.from(checkedValues, (el) => el.value);

  // dynamically create lis by looping through an array
  for (let i = 0; i < printValues.length; i++) {
    let list = document.createElement('li');
    list.textContent = printValues[i];
    document.getElementById('interestList').appendChild(list);
  }
});

// Step 3: Summary
btnStepThree.addEventListener('click', function (e) {
  e.preventDefault();
  cardThree.classList.add('hidden');
  cardFinal.classList.remove('hidden');
});

// Logic to add checked values into an array (for loop)
//inside event listener
// displayChecked();
// console.log(checkedValues);

// let checkedValues = [];

// function displayChecked() {
//   checkedValues = [];
//   let checked = document.querySelectorAll('[type="checkbox"]:checked');
//   for (let i = 0; i < checked.length; i++) {
//     checkedValues.push(checked[i].value);
//   }
// }
