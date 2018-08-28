//Global variables 
//=================================================

let wordBank = ['stark', 'greyjoy', 'baratheon', 'tyrell' ,'florent' ,'cerwyn' ,'clegane' ,'lannister' ,'payne' ,'stokeworth' ,'targaryen' ,'estermont' ,'martel' ,'blackfyre' ,'arryn' ,'bolton' ,'umber' ,'yronwood' ,'dayne' ,'frey' ,'seaworth' ,'royce' ,'corbray' ,'baelish' ,'redwyne' ,'trant' ,'swann' ,'ironmaker' ,'harlaw'];
randNum = Math.floor(Math.random() * wordBank.length);
var randWord = wordBank[randNum]; 
wordBank.splice(randNum,1);
var docWins = document.getElementById('wins');
var docLoss = document.getElementById('loss');
var docWrongLetter = document.getElementById('wrongLetter');
var docGuessesLeft = document.getElementById('guessesLeft');
var docUnderScores = document.getElementById("underScores");
var userGuesses = [];
var wrongGuess = [];
var underScores = [];
var hintBox;
var wins = 0;
var loss = 0;
var guessesLeft = 9;
//Functions
//==================================================
//start breaking up your functions.
//should generate a random word
document.getElementById('startButton').onclick = function(){
    console.log(randWord);
    generateUnderScores();
    guessesLeft = 9;
    docWrongGuess = [];
}

//should generate underscore based on word length
generateUnderScores = () => {
    for(var i = 0; i < randWord.length; i++ ){
        underScores.push(" _ ");
    }
    //should write the underscores to the html doc
    docUnderScores.textContent = underScores;
    return underScores;
}

//functions relating to Keystrokes
document.addEventListener("keypress", (event) => {
   var keyword = String.fromCharCode(event.keyCode);
    
   if(randWord.indexOf(keyword) > -1) {
        //correct guess
        userGuesses.push(keyword);
        //replace
        underScores[randWord.indexOf(keyword)] = keyword;
        underScores[randWord.lastIndexOf(keyword)] = keyword;
        docUnderScores.textContent = underScores;        
   }
    else if(randWord){
        //wrong guess
        wrongGuess.push(keyword);
        docWrongLetter.textContent = wrongGuess;
        guessesLeft--;
    }
        docGuessesLeft.textContent = guessesLeft;

//win conditions
    if(underScores == userGuesses){
        alert("you win");
        docWins[0].innerHTML = wins + 1;
    }else if(guessesLeft == 0){
        alert("you lose! try again?");
        loss++;
    }
    docWins.textContent = wins;
    docLoss.textContent = loss;
    
});





    

