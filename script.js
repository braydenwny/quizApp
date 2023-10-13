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
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + ':' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");        //creates the button
        button.innerHTML = answer.text          //adds the text from the answer text
        button.classList.add("btn");                            //gives it the classname btn
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;          //adds the true or false from our answers array to the button dataset
        }
        button.addEventListener("click", selectAnswer);
    })
}

function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct ==="true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score += 1;
    }else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {      //for each button it will check the dataset, if true it will add the class name correct, then it will disable the button, then it will display the next button
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";        //should display the next button
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        currentQuestionIndex ++
        if(currentQuestionIndex < questions.length){
            showQuestion();  
        }else{
            resetState();
            questionElement.innerHTML = "Your Score is: " + score + " out of " + questions.length + ".";
            nextButton.innerHTML = "Restart Quiz?";
            nextButton.style.display = "block";
        }
        
    }else{
        startQuiz()
    }
    
})

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){                             //goes through the answer buttons deleting them
        answerButton.removeChild(answerButton.firstChild);              
    }
}

startQuiz();