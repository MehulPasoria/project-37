var gamemeState;
var contestantCount;
var database;
var quiz;
var question;
var contestant ;

function setup(){
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
