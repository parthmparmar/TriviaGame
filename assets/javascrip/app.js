var selected_question;
var timer;
var seconds = 30;
var correct = 0;
var incorrect = 0;
var question_count = 0;
var check_timer;
var check_on;

var play_btn = $(".play_btn");
var play_card = $(".play_card");
var game_card = $(".game_card");
var question = $("#question");
var a = $("#a");
var b = $("#b");
var c = $("#c");
var d = $("#d");
var answers = $(".answers");
var seconds_display = $("#seconds_display");
var question_status = $(".status");
var results_card = $(".results-card");
var results = $("#results");
var check_card = $(".check-card");
var check_question = $(".question_check");
var check_answer = $(".answer_check");
var next_question = $(".next_question");

function startup() {
    correct = 0;
    seconds = 30;
    incorrect = 0;
    question_count = 0;
    active_questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    results_card.addClass("off");
};

function random_question() {
    var item = (Math.floor(Math.random()*active_questions.length));
    selected_question = active_questions[item];
    active_questions.splice(item, 1);
    return selected_question;
};

function display_question(){

    if(question_count == total_questions){
        results_card.removeClass("off");
        game_card.addClass("off");
        check_card.addClass("off");
        play_card.removeClass("off");
        results.text("You correctly answered " + correct + " questions out of " + total_questions + " questions.  Percentage: " + (correct / total_questions).toFixed(2)*100 + " %");
    }
    else{
        check_on = false; 
        var selected_question = random_question();
        question.text(selected_question.question);
        check_question.text(selected_question.question);
        var ans_key = selected_question.answer;
        seconds_display.text("Remaining Time: " + seconds + " sec")
        a.text(selected_question.a)
        b.text(selected_question.b)
        c.text(selected_question.c)
        d.text(selected_question.d)
        check_answer.text("Answer: "+($("#"+ans_key).text()));
        question_status.text("");
        question_count++;
        check_card.addClass("off");
        game_card.removeClass("off");
        start_timer();
    }
};

function start_timer() {
    seconds = 30;
    timer = setInterval(one_second, 1000);
};

function one_second() {
    seconds--;
    seconds_display.text("Remaining Time: " + seconds + " sec");
    if(seconds < 1){
        seconds = 30;
        incorrect++;
        question_status.text("Time's Up!")
        check_display();
    }
};

function check_display(){
    clearInterval(timer);
    seconds = 30;
    check_card.removeClass("off");
    game_card.addClass("off");
    check_on = true;
    check_timer = setTimeout(display_question, 3000);
};

// on click events

play_btn.on("click", function() {
    play_card.addClass("off");
    game_card.removeClass("off");
    startup();
    display_question();
});

answers.on("click", function(){
    var answer_selected = $(this).attr("id")
    if (answer_selected == selected_question.answer){
        correct++;
        question_status.text("Correct!");
        check_display();
    }
    else {
        incorrect++;
        question_status.text("Incorrect :-(");
        check_display();
    }
});

next_question.on("click", function(){
    if(check_on){
    console.log("test")
    clearInterval(check_timer);
    display_question();
    }
})



// objects for question and options info


q1 = {
    question: "In which U.S. state is the show set?",
    a: "Illinois",
    b: "Indiana",
    c: "Ohio",
    d: "California",
    answer: "b"
};
q2 = {
    question: "What role did the Duffer Brothers have in the making of 'Stranger Things'?",
    a: "Writing",
    b: "Casting",
    c: "Costume Design",
    d: "Acting",
    answer: "a"
};
q3 = {
    question: "In what year does the first season take place?",
    a: "1981",
    b: "1988",
    c: "1983",
    d: "1985",
    answer: "c"
};
q4 = {
    question: "How old is Will Byers when he disappears?",
    a: "10 years old",
    b: "11 years old",
    c: "12 years old",
    d: "13 years old",
    answer: "c"
};
q5 = {
    question: "Which character does Millie Bobby Brown play?",
    a: "Barb",
    b: "Eleven",
    c: "Joyce",
    d: "Nancy",
    answer: "b"
};
q6 = {
    question: "To prepare the child actors for their parts, the Duffer Brothers required them to watch which film?",
    a: "The Goonies",
    b: "Star Wars",
    c: "Jaws",
    d: "Stand by Me",
    answer: "d"
};
q7 = {
    question: "Natalia Dyer plays which of the show's characters?",
    a: "Karen",
    b: "Eleven",
    c: "Joyce",
    d: "Nancy",
    answer: "d"
};
q8 = {
    question: "Which of the show's characters is affected by cleidocranial dysplasia?",
    a: "Dustin",
    b: "Mike",
    c: "Will",
    d: "Billy",
    answer: "a"
};
q9 = {
    question: "What skill does Jonathan Byers have?",
    a: "Plumbing",
    b: "Photography",
    c: "Writing",
    d: "Dancing",
    answer: "b"
};
q10 = {
    question: "The boys in the show like to meet to play which game?",
    a: "Atari",
    b: "Monopoly",
    c: "Dungeons & Dragons",
    d: "Nintendo",
    answer: "c"
};
var active_questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var total_questions = active_questions.length;