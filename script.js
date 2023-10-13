//These are the questions and answers below
const questions = [
    {
        question: "Which describes selection sort?",
        answers: [
            {text: "compares adjacent elements and swaps them if they are incorrect", correct: false},
            {text: "repeatedly inserts elements into a sorted subarray", correct: false},
            {text: "repeatedly finds the smallest element and swaps it with the first element", correct: true},
            {text: "recursively splits the array in half and merges them back together in sorted order", correct: false},
        ]
    },
    {
        question: "Which describes bubble sort?",
            answers: [
            {text: "repeatedly inserts elements into a sorted subarray", correct: false},
            {text: "compares adjeacent elements and swaps them if they are incorrect", correct: true},
            {text: "recursively splits the array in half and merges them back together in sorted order", correct: false},
            {text: "recursively partitions an array around a pivot element", correct: false},
        ]
    },
    {
        question: "Which describles merge sort?",
        answers: [
            {text: "recursively partitions an array around a pivot element", correct: false},
            {text: "compares adjacent elements and swaprs  them if they are incorrect", correct: false},
            {text: "repeatedly inserts elements into a sorted subarray", correct: false},
            {text: "recursively splits the array in half and merges them back together in sorted order", correct: true},
        ]
    },
    {
        question: "Which describes insertion sort?",
        answers: [
            {text: "repeatedly inserts elements into a sorted subarray", correct: true},
            {text: "recursively splits the array in half and merges them back together in sorted order", correct: false},
            {text: "compares adjacent elements and swaps them if they are incorrect", correct: false},
            {text: "repeatedly find the smallest element and swaps it with the first element", correct: false},
        ]
    },
    {
        question: "Which describes quick sort?",
        answers: [
            {text: "recursively splits the array in half and merges them back together", correct: false},
            {text: "repeatedly finds the smallest element and swaps it with the first element", correct: false},
            {text: "recusively partitions an array around a pivot element", correct: true},
            {text: "repeatedly inserts elements into a sorted subarray", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nextButton");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + ':' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");        //creates the button
        button.innerHTML = answer.text          //adds the text from the answer text
        button.classList.add("btn");                            //gives it the classname btn
        answerButton.appendChild(button);
    })
}


startQuiz();