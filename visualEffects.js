// create event listeners for clicks on options A,B,C and D.
answerA.addEventListener("click", ansPopout);
answerB.addEventListener("click", ansPopout);
answerC.addEventListener("click", ansPopout);
answerD.addEventListener("click", ansPopout);
// create event listener for next button to popout question
htmlNext.addEventListener("click", questionPopout);

// create event listeners for each category click and to change its background image
// that will call its respective function to change the image.
htmlGeography.addEventListener("click", geoImage);
function geoImage() {
  htmlQuestion.style.background =
    "url('../Project-1/images/geography.jpg')";
  htmlBody.style.background =
    "url('../Project-1/images/geo-background.jpg')";
  htmlQuestion.style.color = "black";
  htmlQuestion.style.fontSize = "large";
  htmlH1.style.color = "orange";
  answerWhite();
  timerReset();
  nextFlash();
}

htmlScience.addEventListener("click", scienceImage);
function scienceImage() {
  htmlQuestion.style.background =
    "url('../Project-1/images/science.jpg')";
  htmlBody.style.background =
    "url('../Project-1/images/science-background.jpg')";
  htmlQuestion.style.color = "black";
  htmlQuestion.style.fontSize = "large";
  htmlH1.style.color = "black";
  answerWhite();
  timerReset();
  nextFlash();
}

htmlHistory.addEventListener("click", historyImage);
function historyImage() {
  htmlQuestion.style.background =
    "url('../Project-1/images/history.jpg')";
  htmlBody.style.background =
    "url('../Project-1/images/history-background.jpg')";
  htmlQuestion.style.color = "black";
  htmlQuestion.style.fontSize = "large";
  htmlH1.style.color = "bisque";
  answerWhite();
  timerReset();
  nextFlash();
}

htmlSports.addEventListener("click", sportsImage);
function sportsImage() {
  htmlQuestion.style.background =
    "url('../Project-1/images/sport.jpg')";
  htmlBody.style.background =
    "url('../Project-1/images/sport-background.jpg')";
  htmlQuestion.style.color = "black";
  htmlQuestion.style.fontSize = "large";
  htmlH1.style.color = "darkblue";
  answerWhite();
  timerReset();
  nextFlash();
}

htmlTechnology.addEventListener("click", technologyImage);
function technologyImage() {
  htmlQuestion.style.background =
    "url('../Project-1/images/tech.jpg')";
  htmlBody.style.background =
    "url('../Project-1/images/tech-background.jpg')";
  htmlQuestion.style.color = "black";
  htmlQuestion.style.fontSize = "large";
  htmlH1.style.color = "black";
  answerWhite();
  timerReset();
  nextFlash();
}

// create function for answer (display) popout when any of the above options clicked.
function ansPopout() {
  htmlAnswer.classList.remove("popout");
  void htmlAnswer.offsetWidth;
  htmlAnswer.classList.add("popout");
}
// create function for score popout when there is an increase in score.
function scorePopout() {
  htmlScore.classList.remove("popout");
  void htmlScore.offsetWidth;
  htmlScore.classList.add("popout");
}
// create function for question popout when next button is clicked.
function questionPopout() {
  htmlQuestion.classList.remove("popout");
  void htmlQuestion.offsetWidth;
  htmlQuestion.classList.add("popout");
}

// create function to display the answer box green on correct answer
function answerGreen() {
  htmlAnswer.style.backgroundColor = "lightgreen";
}
// create function to display the answer box red on wrong answer
function answerRed() {
  htmlAnswer.style.backgroundColor = "tomato";
}
// create function to display white when categories are changed
function answerWhite() {
  htmlAnswer.style.backgroundColor = "azure";
}

//create function to display timer=0 when categories are changed
function timerReset() {
  htmlTimer.innerHTML = "0";
}
// create a function that flashes the next button after any option is clicked
function nextFlash() {
  htmlNext.classList.remove("flash");
  void htmlNext.offsetWidth;
  htmlNext.classList.add("flash");
}
// create a function that disables flash of next button when the next or new question is displayed
function nextFlashReset() {
  htmlNext.classList.remove("flash");
}
