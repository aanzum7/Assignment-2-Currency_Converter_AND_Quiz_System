var myQuestions = [
    {
        question: "In which year did Maradona score a goal with his hand?",
        answers: {
            a: '1982',
            b: '1986',
            c: '1990'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the national sport in Japan?",
        answers: {
            a: 'Cricket',
            b: 'FootBall',
            c: 'Sumo Wrestling'
        },
        correctAnswer: 'c'
    },
    {
        question: "How many minutes is a rugby match?",
        answers: {
            a: '80 minutes',
            b: '90 minutes',
            c: '45 minutes'
        },
        correctAnswer: 'a'
    }
    ,
    {
        question: "In which country were the first Olympic Games held?",
        answers: {
            a: 'Grece',
            b: 'German',
            c: 'Italy'
        },
        correctAnswer: 'a'
    },
    {
        question: "How matches did Mohammed Ali lose in his career?",
        answers: {
            a: '3',
            b: '1',
            c: '2'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the nickname of the Belgian national soccer team?",
        answers: {
            a: 'Red Devil',
            b: 'White Shark',
            c: 'Red Hunter'
        },
        correctAnswer: 'a'
    },
    {
        question: "Which ball is worth the most points in English snooker?",
        answers: {
            a: 'The Red ball',
            b: 'The White ball',
            c: 'The Black ball'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is the name of the Barcelona football stadium ?",
        answers: {
            a: 'Bernabeu',
            b: 'Camp Nou',
            c: 'Allianz arena'
        },
        correctAnswer: 'b'
    },
    {
        question: "How many players are on each side of the net in beach volleyball?",
        answers: {
            a: 'Two',
            b: 'Twenty',
            c: 'Twenty Two'
        },
        correctAnswer: 'a'
    },
    {
        question: "Who has the most ucl goal?",
        answers: {
            a: 'Leo Messi',
            b: 'Neymar jr',
            c: 'Cristiano Ronaldo'
        },
        correctAnswer: 'c'
    },
    {
        question: "Who has the Ballon d-or ?",
        answers: {
            a: 'Leo Messi',
            b: 'Cristiano Ronaldo',
            c: 'Both'
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}