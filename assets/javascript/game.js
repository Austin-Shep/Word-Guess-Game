//Global variables 
//=================================================

let wordBank = ['Stark', 'Greyjoy', 'Baratheon', 'Tyrell' ,'Florent' ,'Cerwyn' ,'Clegane' ,'Lannister' ,'Payne' ,'Stokeworth' ,'Targaryen' ,'Estermont' ,'Martel' ,'Blackfyre' ,'Arryn' ,'Bolton' ,'Umber' ,'Yronwood' ,'Dayne' ,'Frey' ,'Seaworth' ,'Royce' ,'Corbray' ,'Baelish' ,'Redwyne' ,'Trant' ,'Swann' ,'Ironmaker' ,'Harlaw'];
var docWins = document.getElementById('wins');
var docLoss = document.getElementById('loss');
var docWrongLetter = document.getElementById('wrongLetter');
var docGuessesLeft = document.getElementById('guessesLeft');
var docUnderScores = document.getElementById("underScores");
var userGuesses = [];
var underScores = [];
var randWord = "";
var hintBox;

//Functions
//==================================================

//should generate a random word
document.getElementById('startButton').onclick = function(){
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randWord);
    generateUnderScores();
}

//should generate underscore based on word length
generateUnderScores = () => {
    for(var i = 0; i < randWord.length; i++ ){
        underScores.push("_");
    }
    //should write the underscores to the html doc
    docUnderScores.textContent = underScores;
}




    

