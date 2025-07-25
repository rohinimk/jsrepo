#Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project1 Solution Code

`````Javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click',function(e){
    //console.log(e);    
    //console.log(e.target.id);
    
    /*
    switch(e.target.id){
      case "grey":
        body.style.backgroundColor = "grey";
        break;

      case "white":
        body.style.backgroundColor = e.target.id;
        break;        
      
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;

      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;

      default:
        body.style.backgroundColor = e.target.id;
        break;
    }
    */
    body.style.backgroundColor = e.target.id;    
  })
});
`````

## Project2 Solution Code

```Javascript
const form = document.querySelector('form');

//this use case will give you empty value. The value will be filled up as soon as the page loads. We want values whenwe submit / click the button
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = "Please enter a valid height\n";
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML += "Please enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    let bodyweight = 'Overweight';
    if(bmi < 18.6) bodyweight = "Under Weight";
    else if(bmi <= 24.9) bodyweight = 'Normal Range';
    result.innerHTML = `<span>BMIS is : ${bmi} and you are ${bodyweight}</span>`;
  }
});
```

## Project3 Solution Code

`````Javascript
const clock = document.getElementById('clock');


setInterval(function(){
  clock.innerHTML = (new Date()).toLocaleTimeString();
}, 1000);
`````

## Project 4 Solution Code

````Javascript
let randomNumber = parseInt((Math.random() * 100) + 1);

const submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    //console.log("guess: " + `${guess}`)
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a validate number')
  } else if(guess < 1 || guess > 100){
    alert('Please enter a number between 1 and 100')
  } else {
    preGuess.push(guess);
    displayGuess(guess);
    if(numGuess === 11){      
      displayMessage(`Game Over. The random number was: ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  //console.log(`in checkGuess and guess is : ${guess} and randomNumber is : ${randomNumber}`);

  if(guess === randomNumber){
    displayMessage("You guessed it right");
    endGame();
  } else if(guess < randomNumber){
    displayMessage("Number is TOO LOW");
  } else if(guess > randomNumber){
    displayMessage("Number is TOO HIGH");
  }

}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
  //console.log(`in displayMessage: ${message} `);
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start New Game<h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  let newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e)
  { 
    userInput.removeAttribute('disabled');
    randomNumber = parseInt((Math.random() * 100) + 1)
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    startOver.removeChild(p);
    playGame = true;
  });  
}
````
