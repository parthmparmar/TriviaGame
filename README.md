# TriviaGame

## Deployed Link
https://parthmparmar.github.io/TriviaGame/

## Game Rules
  1. Player clicks "Play Game" to start game
  2. Player has 30 seconds to select the right answer to the question displayed
  3. If player selects the right answer, he/she/they get a point
  4. if the play does not make a selection in 30 seconds or selects the wrong answer, he/she/they get the answer wrong

## How it works
  - on "Play Game" button, a random question for the list of active questions is selected and displayed on the page
  - timer counts down for 30 secs
  - When one of the answer options is selected it is checked agains the answer in the question object
  - If the selection is correct, a point is added to the player
  - if the seleciton is incorrect or if the time runs out, no points are given
  - once all the questions are displayed the game ends and the results are displayed

  ### What was used
    Math.Random - was used to select a random question (ramdon item in an array of objects)
    splice - to remove selected question from arry of questions
    addClass, removeClass - to add and remove class "off" (off has the css property of display: none)
    JQuery - DOM minipulation, show / hide and change text
    setInterval - to have the counter go down by 1 (30 seconds limit)
    setTimeout - pause game for 3 seconds to show if user got question correct or incorrect
    objects - to store question, 4 options, and correct answer
