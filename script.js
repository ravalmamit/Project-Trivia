// get the html elements for the options A,B,C,D, categories, question, next, prev,score and answer display.
const answerA = document.querySelector("#optionA");
const answerB = document.querySelector("#optionB");
const answerC = document.querySelector("#optionC");
const answerD = document.querySelector("#optionD");
const answersALL = document.querySelector(".optionsGrid");
const htmlQuestion = document.querySelector("#question");
const htmlAnswer = document.querySelector("#answer");
const htmlScore = document.querySelector("#score");
const htmlTimer = document.querySelector("#timer");
const htmlNext = document.querySelector("#next");
htmlNext.innerHTML = `NEXT`;
// get the html elements for the categories
const htmlGeography = document.querySelector("#geography");
const htmlScience = document.querySelector("#science");
const htmlHistory = document.querySelector("#history");
const htmlSports = document.querySelector("#sports");
const htmlTechnology = document.querySelector("#technology");
const htmlBody = document.querySelector("body");
const htmlH1 = document.querySelector("h1");
// create an original copy of challenges data
let challengesOrig = challenges;
const gameRules = `<br> You will be asked 10 questions. Each question will get 10 secs time and 10 points for every correct answer. To start the quiz, click Next`;
// call the function in the start for all the options click resetted - that is
// no answer options has been clicked
resetOptionClicked();

// initialize the counter for total number of questions for a challenge
let n = 0;
// initialize the counter for total challenges
let chall = 0;
// initialize the score
let scoreValue = 0;
//initialize the click restriction. This value will prevent score to increase on additional clicks on any options.
let clickValue = 0;

// create a question function that will display the question from the challenges array
const question = (n) => {
  htmlQuestion.innerHTML = `Question ${n} of 10: <br><br> ${
    challenges[n - 1].q
  }`;
};

// create a function for option A when clicked
const optionA = (n) => {
  // display the option A for the question when the next function clicked
  answerA.innerHTML = `A. ${challenges[n - 1].a.ans}`;
};

// create a function for option B when clicked
const optionB = (n) => {
  //display the option B for the question when the next function clicked
  answerB.innerHTML = `B. ${challenges[n - 1].b.ans}`;
};

// create a function for option C when clicked
const optionC = (n) => {
  // display the option C for the question when the next function clicked
  answerC.innerHTML = `C. ${challenges[n - 1].c.ans}`;
};

// create a function for option D when clicked
const optionD = (n) => {
  // display the option D for the question when the next function clicked
  answerD.innerHTML = `D. ${challenges[n - 1].d.ans}`;
};

// create a function to return the correct answer for each question from the 4 options
const correctAnswer = (n) => {
  if (challenges[n - 1].a.bool === true) return challenges[n - 1].a.ans;
  else if (challenges[n - 1].b.bool === true) return challenges[n - 1].b.ans;
  else if (challenges[n - 1].c.bool === true) return challenges[n - 1].c.ans;
  else if (challenges[n - 1].d.bool === true) return challenges[n - 1].d.ans;
};

// create a function that will take boolean value from the option functions and the current n value. The function will check if the bool value returned from the option function is true or false.
// if the bool value is false - function will call correcAnswer function and display the correct answer. If the bool value is true - function will display that is correct answer.
const answerDisplay = (n, bool) => {
  if (bool === false) {
    htmlAnswer.innerHTML = `The answer is incorrect. The correct answer is ${correctAnswer(
      n
    )}`;
    answerRed();
  } else if (bool === true) {
    htmlAnswer.innerHTML = `That's the correct answer!!`;
    answerGreen();
    // popout the score display if the answer is correct
    scorePopout();
  }
};

// create function to display blank options when the quiz is not yet start or it is over.
const displayBlankOptions = () => {
  answerA.innerHTML = `A.`;
  answerB.innerHTML = `B.`;
  answerC.innerHTML = `C.`;
  answerD.innerHTML = `D.`;
  htmlAnswer.innerHTML = ``;
};

// create function to disable event listeners for all the options after a single option is clicked
function removeOptionsEventListners() {
  answerA.removeEventListener("click", clickA);
  answerB.removeEventListener("click", clickB);
  answerC.removeEventListener("click", clickC);
  answerD.removeEventListener("click", clickD);
}

// create a function for scores. It takes the bool value from the option functions. If the bool value is true - it will increment the score and if it is false then doesn't update the score.
const score = (bool) => {
  // the score will increase only if the clicked answer is true and number of clicks is 1. The below if statement will then increment the score and reset the number of clicks to 0. So, if a player clicks multiple times
  // the same option, the score will not inadvertantly change.
  if (bool === true && clickValue === 1) {
    scoreValue += 10;
    clickValue = 0;
  }
  // if the wrong option is selected for the answer, that option will send bool=false, the else statement will then reset the number of clicks to 0.
  else if (bool === false) {
    clickValue = 0;
  }
  htmlScore.innerHTML = `Score<br> ${scoreValue}`;
};
// create a timer function
function timer() {
  let timeleft = 10;
  //disable event listener for Next button for or during the time timer is running - user
  // will not have an option to skip the question without selecting any option.
  htmlNext.removeEventListener("click", next);
  let countdown = setInterval(() => {
    htmlTimer.innerHTML = timeleft;
    //create variable for category button if clicked. If any of the category button clicked, the variable will result 1
    isClickCategory =
      isClickGeography ||
      isClickScience ||
      isClickHistory ||
      isClickSports ||
      isClickTechnology;
    // create varaiable for option button if clicked. If any of the option button clicked, the variable will result 1
    isClickOption = isClickA || isClickB || isClickC || isClickD;

    timeleft--;
    if (timeleft < 0) {
      clearInterval(countdown);
      // remove the event listeners from the options
      removeOptionsEventListners();
      //re-enable event listener for Next button if time is up or less than 0
      htmlNext.addEventListener("click", next);
      htmlAnswer.innerHTML = `Time is up for this question, please click Next`;
      answerRed();
      nextFlash();
    }
    // create conditions for the timer to stop if any option is clicked
    else if (isClickOption === 1 && timeleft >= 0) {
      clearInterval(countdown);
      //re-enable event listener for Next button if timer is stopped after option clicked
      htmlNext.addEventListener("click", next);
    } else if (isClickCategory === 1 && timeleft >= 0) {
      clearInterval(countdown);
      htmlTimer.innerHTML = 0;
      htmlNext.addEventListener("click", next);
    }
  }, 1000);
}
// create a function to reset the number of questions and score. Anytime a category is changed
// score to should be reset and also the number of questions
function reset() {
  n = 0; //number of questions
  scoreValue = 0; // current score reset to 0
  htmlScore.innerHTML = `Score<br> ${scoreValue}`; // display the score 0
}

// create a function for next button. Every time the next function is clicked - it will check the current question number (chall) and (n)  - if it is greater than 9 then it exits. If n is less than 9
// then it will call functions in the order - question() and options() to display the question and answers. Also, it will call answerDisplay function to pass on the current value of n & chall. However, answer
// function will not invoke and do anything as it will only be called by option functions.
function next() {
  if (n >= 10) {
    htmlQuestion.innerHTML = `The challenge is over. You scored ${
      (scoreValue / 100) * 100
    }% <br><br> Ready for the next challenge? Select any of the categories and then click Next`;
    displayBlankOptions();
    n = 0;
    scoreValue = 0;
    answerWhite();
  } else {
    nextFlashReset();
    n = n + 1;
    htmlScore.innerHTML = `Score<br> ${scoreValue}`;
    question(n);
    optionA(n);
    optionB(n);
    optionC(n);
    optionD(n);
    timer();
    resetOptionClicked();
    resetCategoryClicked();
    htmlAnswer.innerHTML = ``;
    answerWhite();
    answerDisplay(n);
    //  with every Next clicked, the number of clicks will be reset to 1.
    clickValue = 1;
    //event listener for next is defined in visualEffects.js. Anytime Next is clicked
    // the event should be passed to questionPopout function for popout effect of question.
    questionPopout();
  }
}

// create event listener for the click "Next" button, so that it calls function next()
htmlNext.addEventListener("click", next);

// create function to set a variable "is option clicked" to 0 after any options A,B,C or D is clicked
function resetOptionClicked() {
  isClickA = 0;
  isClickB = 0;
  isClickC = 0;
  isClickD = 0;

  // reset/enable the event listeners for all options
  answerA.addEventListener("click", clickA);
  answerB.addEventListener("click", clickB);
  answerC.addEventListener("click", clickC);
  answerD.addEventListener("click", clickD);
}

// create function to set variable "is any of the category clicked" to 0 after next button is clicked. Timer will be
//reset if player changes the category in between.
function resetCategoryClicked() {
  isClickGeography = 0;
  isClickScience = 0;
  isClickHistory = 0;
  isClickSports = 0;
  isClickTechnology = 0;
}

// create event listener for the click of "Option A", so that it calls function answerDisplay
answerA.addEventListener("click", clickA);
function clickA() {
  isClickA = 1;

  // if the answer is true or false - call the answerDisplay function
  if (challenges[n - 1].a.bool === false || challenges[n - 1].a.bool === true) {
    answerDisplay(n, challenges[n - 1].a.bool);
  }
  // if the answer is true or false- call the score function to update the score or not to update.
  if (challenges[n - 1].a.bool === true) score(challenges[n - 1].a.bool);
  else if (challenges[n - 1].a.bool === false) score(challenges[n - 1].a.bool);
  nextFlash();
}

// create event listener for the click of "Option B", so that it calls function answerDisplay
answerB.addEventListener("click", clickB);
function clickB() {
  isClickB = 1;
  // if the answer is true or false - call the answerDisplay function
  if (challenges[n - 1].b.bool === false || challenges[n - 1].b.bool === true) {
    answerDisplay(n, challenges[n - 1].b.bool);
  }
  // if the answer is true or false- call the score function to update the score or not to update.
  if (challenges[n - 1].b.bool === true) score(challenges[n - 1].b.bool);
  else if (challenges[n - 1].b.bool === false) score(challenges[n - 1].b.bool);
  nextFlash();
}

// create event listener for the click of "Option C", so that it calls function answerDisplay
answerC.addEventListener("click", clickC);
function clickC() {
  isClickC = 1;

  // if the answer is true or false - call the answerDisplay function
  if (challenges[n - 1].c.bool === false || challenges[n - 1].c.bool === true) {
    answerDisplay(n, challenges[n - 1].c.bool);
  }
  // if the answer is true or false- call the score function to update the score or not to update.
  if (challenges[n - 1].c.bool === true) score(challenges[n - 1].c.bool);
  else if (challenges[n - 1].c.bool === false) score(challenges[n - 1].c.bool);
  nextFlash();
}

// create event listener for the click of "Option D", so that it calls function answerDisplay
answerD.addEventListener("click", clickD);
function clickD() {
  isClickD = 1;

  // if the answer is true or false - call the answerDisplay function
  if (challenges[n - 1].d.bool === false || challenges[n - 1].d.bool === true) {
    answerDisplay(n, challenges[n - 1].d.bool);
  }
  // if the answer is true or false- call the score function to update the score or not to update.
  if (challenges[n - 1].d.bool === true) score(challenges[n - 1].d.bool);
  else if (challenges[n - 1].d.bool === false) score(challenges[n - 1].d.bool);
  nextFlash();
}

// create event listener for the category Geography, so that it display 10 question by click on Next button
htmlGeography.addEventListener("click", clickGeography);
function clickGeography() {
  // re-initialize number of questions and score to 0. Whenever a category is changed, the question number should start with 1
  // and score 0
  reset();
  // set variable to 1 if category Geography is clicked
  isClickGeography = 1;
  // swap the challenges array with original copy of challenges
  challenges = challengesOrig;
  htmlQuestion.innerHTML = `Start Geography Quiz ${gameRules}`;
  displayBlankOptions();
  challenges = challenges.filter(function (e) {
    return e.category === "Geography";
  });

  return challenges;
}

// create event listener for the category Science, so that it display 10 question by click on Next button
htmlScience.addEventListener("click", clickScience);
function clickScience() {
  // re-initialize number of questions and score to 0. Whenever a category is changed, the question number should start with 1
  // and score 0
  reset();
  // set variable to 1 if category Science is clicked
  isClickScience = 1;

  // swap the challenges array with original copy of challenges
  challenges = challengesOrig;
  htmlQuestion.innerHTML = `Start Science Quiz ${gameRules}`;
  displayBlankOptions();
  challenges = challenges.filter(function (e) {
    return e.category === "Science";
  });
  //  challenges = challengesS
  return challenges;
}

// create event listener for the category History, so that it display 10 question by click on Next button
htmlHistory.addEventListener("click", clickHistory);
function clickHistory() {
  // re-initialize number of questions and score to 0. Whenever a category is changed, the question number should start with 1
  // and score 0
  reset();
  // set variable to 1 if category History is clicked
  isClickHistory = 1;
  // swap the challenges array with original copy of challenges
  challenges = challengesOrig;
  htmlQuestion.innerHTML = `Start History Quiz ${gameRules}`;
  displayBlankOptions();
  challenges = challenges.filter(function (e) {
    return e.category === "History";
  });
  return challenges;
}

// create event listener for the category Sports, so that it display 10 question by click on Next button
htmlSports.addEventListener("click", clickSports);
function clickSports() {
  // re-initialize number of questions and score to 0. Whenever a category is changed, the question number should start with 1
  // and score 0
  reset();
  // set variable to 1 if category Sports is clicked
  isClickSports = 1;
  // swap the challenges array with original copy of challenges
  challenges = challengesOrig;
  htmlQuestion.innerHTML = `Start Sports Quiz ${gameRules}`;
  displayBlankOptions();
  challenges = challenges.filter(function (e) {
    return e.category === "Sports";
  });
}

// create event listener for the category Technology, so that it display 10 question by click on Next button
htmlTechnology.addEventListener("click", clickTechnology);
function clickTechnology() {
  // re-initialize number of questions and score to 0. Whenever a category is changed, the question number should start with 1
  // and score 0
  reset();
  // set variable to 1 if category Technology is clicked
  isClickTechnology = 1;
  // swap the challenges array with original copy of challenges
  challenges = challengesOrig;
  htmlQuestion.innerHTML = `Start Technology Quiz ${gameRules}`;
  displayBlankOptions();
  challenges = challenges.filter(function (e) {
    return e.category === "Technology";
  });
}
