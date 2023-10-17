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
const name = document.getElementById('name');
const email = document.getElementById('email');
const nameSubmit = document.getElementById('nameSubmit');
const emailSubmit = document.getElementById('emailSubmit');
const circleOne = document.getElementById('circleOne');
const circleTwo = document.getElementById('circleTwo');
const circleThree = document.getElementById('circleThree');
const stepCount = document.getElementById('stepCount');

///////////////////////////////////////////////////////////////
// TO DO LIST:

// 1. disable query to show in url
// 2. refine CSS (this should be last)
// 3. email input
// 4. add refresh button?
///////////////////////////////////////////////////////////////

// Step 1: Name&Email
btnStepOne.addEventListener('click', function (e) {
  e.preventDefault();
  if (name.value && email.value) {
    nextStep(cardOne, cardTwo, 'completed', 'active', 'step-circle', 2);
    nameSubmit.textContent = name.value; // must have code here to dynamically change in step 3
    emailSubmit.textContent = email.value;
  }
});

// Step 2: Interests
btnStepTwo.addEventListener('click', function (e) {
  e.preventDefault();
  let checkedValues = document.querySelectorAll('[type="checkbox"]:checked');
  let printValues = Array.from(checkedValues, (el) => el.value);

  if (printValues.length > 0) {
    nextStep(cardTwo, cardThree, 'completed', 'completed', 'active', 3);

    // dynamically create lis by looping through an array
    for (let i = 0; i < printValues.length; i++) {
      let list = document.createElement('li');
      list.textContent = printValues[i];
      document.getElementById('interestList').appendChild(list);
      flashMessage.classList.add('hidden');
    }
  } else {
    flashMessage.classList.remove('hidden');
  }
});

// Step 3: Summary
btnStepThree.addEventListener('click', function (e) {
  e.preventDefault();
  nextStep(cardThree, cardFinal, 'completed', 'completed', 'completed', 3);
});

// Functions
function nextStep(previousCard, activeCard, statusA, statusB, statusC, count) {
  previousCard.classList.add('hidden');
  activeCard.classList.remove('hidden');
  circleOne.classList.add(statusA);
  circleTwo.classList.add(statusB);
  circleThree.classList.add(statusC);
  stepCount.textContent = count;
}

//location.reload();
