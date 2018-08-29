//global variables===================

let wordBank = ['stark', 'greyjoy', 'baratheon', 'tyrell' ,'florent' ,'cerwyn' ,'clegane' ,'lannister' ,'payne' ,'stokeworth' ,'targaryen' ,'estermont' ,'martel' ,'blackfyre' ,'arryn' ,'bolton' ,'umber' ,'yronwood' ,'dayne' ,'frey' ,'seaworth' ,'royce' ,'corbray' ,'baelish' ,'redwyne' ,'trant' ,'swann' ,'ironmaker' ,'harlaw'];
var randWord = '';
var wins = 0;
var loss = 0;
var guessesLeft = '';
var underScores = [];
var userGuesses = [];
var wrongGuess = [];
var guessesLeft = 0;

//global functions===================
generateWord = () =>{
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)]; 
    underScores = [];
}

//generate underscores based on value of randWord
generateUnderScores = () =>{
    for( i = 0; i < randWord.length; i++){       
      underScores.push(' _ ');
    };
    return underScores;
};
writeUnderScores = () => {
    $('#underScores').html(underScores);
};


//start game -- log word and reset tries
$('#startButton').on('click', function(){
    generateWord();
    generateUnderScores();
    writeUnderScores();
    console.log(randWord);
    guessesLeft = 9;
    $('#guessesLeft').text(guessesLeft);
});



document.addEventListener("keyup", (event) => {
    var keyword = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(keyword);

    if(randWord.indexOf(keyword) > -1) {
        //if the keystroke is correct..
        console.log('yes')
        userGuesses.push(keyword);
        //..replace the underscore with keystroke
        underScores[randWord.indexOf(keyword)] = keyword;
        underScores[randWord.lastIndexOf(keyword)] = keyword;
        writeUnderScores();
    }else if(randWord.indexOf(keyword) <= -1){
        $('#wrongletter').append(keyword);
        console.log('no')
        if(guessesLeft > 0){
            guessesLeft--;
        };
    };
        $('#guessesLeft').html(guessesLeft);
        
        if((underScores.join('')) == randWord){
            alert('you win!');
            wins ++;
            $('#wins').html(wins);
        }else if(guessesLeft == 0){
            alert('game over');
            loss++;
            $('#loss').html(loss);

        }
});
        
        