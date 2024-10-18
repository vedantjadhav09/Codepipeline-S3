
let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NaCl"],
        correctAnswer: "H2O"
    },
    {
        question: "Which continent is the Sahara Desert located on?",
        options: ["Africa", "Asia", "Australia", "South America"],
        correctAnswer: "Africa"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the capital city of Japan?",
        options: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
        correctAnswer: "Hydrogen"
    },
    {
        question: "How many continents are there on Earth?",
        options: ["7", "6", "5", "8"],
        correctAnswer: "7"
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Lion", "Elephant", "Tiger", "Giraffe"],
        correctAnswer: "Lion"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Which gas do plants primarily use for photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correctAnswer: "Carbon Dioxide"
    }
];

// Function to shuffle the questions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the questions before displaying
shuffle(questions);

function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question-title").innerText = `Question ${currentQuestionIndex + 1}: ${questionData.question}`;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Clear previous options

    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => selectAnswer(option, questionData.correctAnswer);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById("score").innerText = score;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        document.getElementById("question-container").innerHTML = "<h2>Quiz Completed!</h2>";
    }
}

// Initialize the first question
showQuestion();
