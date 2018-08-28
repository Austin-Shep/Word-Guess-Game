//global variables===================

let wordBank = ['stark', 'greyjoy', 'baratheon', 'tyrell' ,'florent' ,'cerwyn' ,'clegane' ,'lannister' ,'payne' ,'stokeworth' ,'targaryen' ,'estermont' ,'martel' ,'blackfyre' ,'arryn' ,'bolton' ,'umber' ,'yronwood' ,'dayne' ,'frey' ,'seaworth' ,'royce' ,'corbray' ,'baelish' ,'redwyne' ,'trant' ,'swann' ,'ironmaker' ,'harlaw'];
randNum = Math.floor(Math.random() * wordBank.length);
var randWord = wordBank[randNum]; 
wordBank.splice(randNum,1);

var wins = 0;
var loss = 0;
var guessesLeft = '';
var underscores = '';

//global functions===================
    //start game -- log word and reset
// $('#startButton').on('click', function(){
//     console.log(randWord);
//     guessesLeft = 9;
//     $('#guessesLeft').text(guessesLeft);
// });
    //generate underscores based on value of randWord
generateUnderScores = () =>{
    for(var i = 0; i < randWord.length; i++){
        if(randWord.charAt(i)){
            $(underScores).append(' _ ');
        }

    };
    $('#underScores').append(underScores);
};

$('#startButton').on('click', function(){
    console.log(randWord);
    guessesLeft = 9;
    $('#guessesLeft').text(guessesLeft);
    generateUnderScores();
});