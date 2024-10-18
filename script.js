let currentQuestionIndex = 0;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;

const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "NaCl"],
    correctAnswer: "H2O",
  },
  {
    question: "Which continent is the Sahara Desert located on?",
    options: ["Africa", "Asia", "Australia", "South America"],
    correctAnswer: "Africa",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "Mark Twain",
      "William Shakespeare",
      "Jane Austen",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
    correctAnswer: "Tokyo",
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
    correctAnswer: "Hydrogen",
  },
  {
    question: "How many continents are there on Earth?",
    options: ["7", "6", "5", "8"],
    correctAnswer: "7",
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Lion", "Elephant", "Tiger", "Giraffe"],
    correctAnswer: "Lion",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Which gas do plants primarily use for photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    correctAnswer: "Mount Everest",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Skin", "Lungs"],
    correctAnswer: "Skin",
  },
  {
    question: "In which year did World War II end?",
    options: ["1942", "1944", "1945", "1946"],
    correctAnswer: "1945",
  },
  {
    question: "Which element has the chemical symbol 'Fe'?",
    options: ["Fluorine", "Iron", "Lead", "Zinc"],
    correctAnswer: "Iron",
  },
  {
    question: "How many bones are there in the adult human body?",
    options: ["206", "210", "205", "208"],
    correctAnswer: "206",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: "Japan",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: "Ottawa",
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    correctAnswer: "Nitrogen",
  },
  {
    question: "What is the largest planet in our Solar System?",
    options: ["Saturn", "Jupiter", "Neptune", "Earth"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Which language is the most spoken worldwide?",
    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    correctAnswer: "Mandarin Chinese",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1905", "1915", "1920"],
    correctAnswer: "1912",
  },
  {
    question: "Which scientist developed the theory of general relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Marie Curie"],
    correctAnswer: "Albert Einstein",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Fe", "Pb"],
    correctAnswer: "Au",
  },
  {
    question: "Which continent is the Amazon Rainforest located on?",
    options: ["Africa", "Asia", "South America", "Australia"],
    correctAnswer: "South America",
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "6",
  },
  {
    question: "Which fictional city is the home of Batman?",
    options: ["Metropolis", "Gotham", "Star City", "Central City"],
    correctAnswer: "Gotham",
  },
  {
    question: "What is the process by which plants make their food called?",
    options: ["Respiration", "Photosynthesis", "Transpiration", "Osmosis"],
    correctAnswer: "Photosynthesis",
  },
];

document.getElementById("high-score").innerText = `${highScore}`;

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
  document.getElementById("question-title").innerText = `Question ${
    currentQuestionIndex + 1
  }: ${questionData.question}`;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = ""; // Clear previous options

  questionData.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => selectAnswer(option, questionData.correctAnswer);
    optionsContainer.appendChild(button);
  });
}

function selectAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById("score").innerText = `: ${score}`;
        currentQuestionIndex++;
    
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            checkHighScore();
            resetGame();
        }
    } else {
        checkHighScore();
        resetGame();
    }
}

function checkHighScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        document.getElementById("high-score").innerText = ` ${highScore}`;
        alert(`New High Score! Your score is ${score}.`);
    } else {
        alert(`Game Over! Your score is ${score}.`);
    }
}

function resetGame() {
    score = 0;
    currentQuestionIndex = 0;
    shuffle(questions);
    document.getElementById("score").innerText = ` ${score}`;
    showQuestion();
}

// Initialize the first question
showQuestion();
