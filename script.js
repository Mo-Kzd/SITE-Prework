// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
// var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;

// var to count the mistakes
var mistakes = 0;

// var for the clock
var timeLeft = 0;
var elem;
var timerId;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakes = 0;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  //generating random pattern
  generatePatterns();
  
  clueHoldTime = 1000;
  
  // Initialize the clock
  if(timeLeft <= 0 || timeLeft != 60) {
  timeLeft = 60;
  elem = document.getElementById('clock');
  timerId = setInterval(countdown, 1000);
  }
  
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  // clear the clock
  clearInterval(timerId);
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function generatePatterns() {
  for(let i = 0; i < 7; i++) {
    pattern[i] = getRandomInt(8);
  }
}



function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

// Sound Synthesis Functions
const freqMap = {
  // adjust the map to the real vale for key
  1: 261.6,
  2: 293.66,
  3: 329.63,
  4: 349.23,
  5: 392.00,
  6: 440.00,
  7: 493.88,
  8: 523.25
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    //update the clueHoldTime to increase the difficulties for users
    clueHoldTime -= 20;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame() {
  stopGame();
  alert("Game Over. You won!")
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    mistakes++;
    if(mistakes == 3){
          loseGame();
    } else {
      alert("you make "+mistakes+" miskatke(s), you have chance to get 2 mistakes");
    }
  }
}    



function countdown() {
  if (timeLeft == -1) {
     clearTimeout(timerId);
     loseGame();
  } else {
      elem.innerHTML = 'You have '+timeLeft + ' seconds remaining to finish the GAME';
      timeLeft--;
      }
}