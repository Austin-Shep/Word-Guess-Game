//global variables===================

let wordBank = ['stark', 'greyjoy', 'baratheon', 'tyrell' ,'manderly' ,'lannister' ,'oakheart' ,'stokeworth' ,'targaryen' ,'bolton' ,'martel' ,'arryn' ,'tully' ,'crakehall' ,'karstark' ,'royce' ,'cerwyn' ,'swyft' ,'plumm' ,'trant' ,'tarly','hightower'];
let hint = ['Winter is Coming', 'We do not Sow', 'Ours is the Fury', 'Growing Strong', 'Defenders of the White Knife' ,'Hear Me roar','Our roots go deep','Proud to be Faithful','Fire and Blood','Our Blades are Sharp','Unbowed, Unbent, Unbroken','High as Honor', 'Family, Duty, Honor','None So Fierce', 'The Sun of Winter', 'We Remember','Honed and Ready','Awake! Awake!','Come Try Me', 'So End Our Foes','First in Battle', 'We Light The Way']
var randWord = '';
var wins = 0;
var loss = 0;
var guessesLeft = '';
var underScores = [];
var userGuesses = [];
var wrongGuess = [];
var guessesLeft = 0;

//global functions===================
//generate random word and hint==
generateWord = () =>{
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)]; 
    underScores = [];   
    var selector = wordBank.indexOf(randWord);
    $('#hintBox').html(hint[selector])
};

//generate underscores based on value of randWord ==
generateUnderScores = () =>{
    for( i = 0; i < randWord.length; i++){       
      underScores.push(' _ ');
    };
    return underScores;
};

//writes the previously generated underscores to the jumbotron ==
writeUnderScores = () => {
    $('#underScores').html(underScores);
};

//to figure out wins/loss ==
scoreBoard = () => {
    if((underScores.join('')) == randWord){
        alert('you win!');
        wins ++;
        $('#wins').html(wins);
    }else if(guessesLeft == 0){
        alert('game over');
        loss++;
        $('#loss').html(loss);

    }
};



//start game -- generate new word, log word, and reset tries/wrongs, writes underscores,
$('#startButton').on('click', function(){
    console.log(randWord);
    generateWord();
    generateUnderScores();
    writeUnderScores();
    $('#wrongLetter').empty();
    guessesLeft = 15;
    $('#guessesLeft').text(guessesLeft);
});

//key press shenanigens==
document.addEventListener("keyup", (event) => {
    var keyword = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(keyword);

    if(randWord.indexOf(keyword) > -1) {
        //if the keystroke is correct..
        userGuesses.push(keyword);
        //..replace the underscore with keystroke==
        underScores[randWord.indexOf(keyword)] = keyword;
        underScores[randWord.lastIndexOf(keyword)] = keyword;
        //rewrite the underscores to incorperate the new letters==
        writeUnderScores();
    }else if(randWord.indexOf(keyword) <= -1){
        //incorrect guess==
        $('#wrongLetter').append(keyword);
        if(guessesLeft > 0){
            guessesLeft--;
        };
    };
        scoreBoard();
        $('#guessesLeft').html(guessesLeft);
});
    
        