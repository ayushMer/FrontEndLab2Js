//generic object creation
function Question(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
}

//creating array of questions
var questions = [
  new Question(
    "Javascript Supports",
    ["Functions", "XHTML", "CSS", "XML"],
    "Functions"
  ),
  new Question(
    "Which language is used for styling web pages",
    ["Python", "JQuery", "Django", "CSS"],
    "CSS"
  ),
  new Question(
    "What is used for connecting to Database",
    ["PHP", "HTML", "JS", "ALL"],
    "ALL"
  ),
  new Question(
    "Which is not Javascript framework ",
    ["JQuery", "Django", "Python", "NodeJs"],
    "Python"
  ),
  new Question(
    "Javascript can define function",
    ["Anonymously", "Funtion Keyword", "Call back", "ALL"],
    "ALL"
  ),
];
 
function Quiz(questions){
     this.questions=questions;
     this.score=0;
     this.questionIndex=0;
 }
Quiz.prototype.getQuestionByIndex=function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkAnswer=function(userChoice){
 if(userChoice ===this.getQuestionByIndex().answer)
 {
    this.score++;
 }
 this.questionIndex++;
}
Quiz.prototype.isQuizEnded=function(){
    return this.questionIndex===this.questions.length;
}
 

function loadPage() {

  if(quiz.isQuizEnded()){
    showScore();
  }
  else{
    var questElement=document.getElementById("question")
    questElement.innerText = quiz.getQuestionByIndex().question;
    
    var availableChoices=quiz.getQuestionByIndex().choices;
    
      for (i = 0; i < availableChoices.length; i++) {
        var element = document.getElementById("choice" + i);
        element.innerText = availableChoices[i];
        handleOptionButton(availableChoices[i],'btn'+i);
      }
      showProgress();
  }
}

function handleOptionButton(choice,id){
var button=document.getElementById(id);
button.onclick=function(){
    quiz.checkAnswer(choice);
    loadPage();
}
}

function showScore(){
    let x='<h1>Results</h1>';
    x+='<h2>Your score is '+quiz.score+'</h2>';
    x+='<h2>Percentage score is '+(quiz.score/quiz.questions.length)*100+'%</h2>';
    document.getElementById('quiz').innerHTML=x;
}
function showProgress(){
    var ele=quiz.questionIndex+1;
    document.getElementById('progress').innerHTML=`Question ${ele} of ${quiz.questions.length}`;
}
var quiz=new Quiz(questions);
loadPage();
