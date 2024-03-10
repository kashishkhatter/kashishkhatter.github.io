// #is used to select id and . to select class in DOM

let randomNumber= parseInt(Math.random()*10+1); //generates random no between 1-10(+1 isliye kia taki 0 na aya,parse Int decimal remove ka lia and *10 decimal right shift ka lia coz vaisa random 0-1 ka neech deta h)
const submit=document.querySelector('#subt') //selects submit button for action
const userInput=document.querySelector('#guessField') //selects user inputfor action
const guessSlot=document.querySelector('.guesses') //selects array of inputs given
const remaining=document.querySelector('.lastResult') //selects remaining no of inputs
const lowOrHi=document.querySelector('.lowOrHi') //if guess is too high or low
const startOver=document.querySelector('.resultParas') //after 10 tries give res or restart game

const p=document.createElement('p') //game end hona ka baad jo start new game ka msg ayega isliye new element add
let prevGuess=[] //array of guessed nos
let numGuess=1 //conatins kitne guesses hogya

let playGame=true; //as long as ye true h play jab ye false so stop

if(playGame){ //agr game khel skta
    submit.addEventListener('click',function(e){ //on clicking submit perform this fun
     e.preventDefault(); //by default form backend jata we need output so prevent default action
     const guess=parseInt(userInput.value); //user ka inputs ki jo value hogi vo lo(by def as string so parse)
     validateGuess(guess); //send this guess to check validation(sahi input hai ki nhi)
    });
}
function validateGuess(guess){ //input shi diya ha na (alphabet ya -ve nhi)
   if(isNaN(guess)|| guess<1||guess>100){ //not valid input
    alert('Please enter a valid input')
   }
   else{ //if valid input(btw 1-10)
    prevGuess.push(guess);//add to list of prev guesses 
    if(numGuess===11){ //id guesses khtm(exceed 10)
        displayGuess(guess)
        displayMessage(`Game Over. Random number was ${randomNumber}`) //game over bolkr display shi ans
        endGame(); //end the game
    }
    else{ //if remaining guesses
        displayGuess(guess)
        checkGuess(guess) //check kro ki too high or low
    }
   }
}

function checkGuess(guess){ //tells if our guess too high low or correct
   if(guess===randomNumber){ //agr shi guess
    displayMessage(`You guessed it right!`) //display this
    endGame() //end the game
   }
   else if(guess<randomNumber){ //guess less than shi ans
    displayMessage(`Number is too low`);
   }
   else{ //guess more than shi ans
    displayMessage(`Number is too high`);
   }
}

function displayGuess(guess){ //clearing guess after every input,guesses vagara update
     userInput.value="";
     guessSlot.innerHTML+=`${guess},  `; //list of inputs ma guess add krta jao
     numGuess++; //no of guesses badata jao
     remaining.innerHTML=`${11-numGuess}`;//bacha hua guess display
}

function displayMessage(message){ //DOM ma jo changes pr msgs like user input empty krdena for next guess
   lowOrHi.innerHTML=`<h2>${message}</h2>`; 
}

function endGame(){ //terminate game
   userInput.value='' //clean the values
   userInput.setAttribute('disabled','') //user aur input na le paya after end game
   p.classList.add('button') //create a button to start a new game after it ends
   p.innerHTML=`<h2 id="newGame">Start new Game></h2>`
   startOver.appendChild(p) //resuslts section ma hi ye element add krdo
   playGame=false //game will stop
   newGame() //start a new game
}

function newGame(){ //start a new game
 const newGameButton=document.querySelector('#newGame') //game end hona pr jo new game button bnaya vo select
 newGameButton.addEventListener('click',function(e){ //on clicking new game button
    randomNumber= parseInt(Math.random()*10+1); //restart the game and reset all attributes
    prevGuess=[] //vapis 0 guesses
    numGuess=1 //resetting aeverything like before
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled') //disable hatao
    startOver.removeChild(p) //p child containing start new game hatao
    playGame=true //can play
 })
}


