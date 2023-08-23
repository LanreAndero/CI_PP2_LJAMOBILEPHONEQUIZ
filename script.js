// Quiz Variables
const questions = [
    {
        question: "Question 1: Which company is credited with inventing the first mobile phone?",
        options: {
            a: "Nokia",
            b: "Motorola",
            c: "Apple",
            d: "Samsung"
        },
        correctAnswer: "b"
    },

    {
        question: "Question 2: What does 'SMS' stand for in mobile technology?",
        options: {
            a: "Short Mobile Service",
            b: "Simple Messaging System",
            c: "Short Message Service",
            d: "System Message Service"
        },
        correctAnswer: "c"
    },

    {
        question: "Question 3: Which mobile phone component converts sound into electrical signals and vice versa?",
        options: {
            a: "GPS",
            b: "Camera",
            c: "Speaker",
            d: "Microphone"
        },
        correctAnswer: "d"
    },

    {
        question: "Question 4: What is the purpose of a mobile phone's 'Airplane Mode'?",
        options: {
            a: "Disable wireless communication",
            b: "Enhance battery life",
            c: "Enable Wi-Fi calling",
            d: "Activate Bluetooth"
        },
        correctAnswer: "a"
    },

    {
        question: "Question 5: What is the term for a mobile phone's unique numerical identifier used by cellular networks?",
        options: {
            a: "IP Address",
            b: "MAC Address",
            c: "IMEI Number",
            d: "SIM Card"
        },
        correctAnswer: "c"
    },

    {
        question: "Question 6: Which mobile operating system is known for its open-source nature?",
        options: {
            a: "IOS",
            b: "Android",
            c: "Windows Phone",
            d: "BlackBerry OS"
        },
        correctAnswer: "b"
    },

    {
        question: "Question 7: What is the purpose of a mobile phone's 'Do Not Disturb' mode?",
        options: {
            a: "Activate voice assistant",
            b: "Dim the screen",
            c: "Boost network signal",
            d: "Restrict incoming calls"
        },
        correctAnswer: "d"
    },

    {
        question: "Question 8: What technology allows wireless charging of mobile phones?",
        options: {
            a: "Infrared",
            b: "Ultrasonic",
            c: "Qi Wireless",
            d: "NFC"
        },
        correctAnswer: "c"
    },

    {
        question: "Question 9: Which mobile phone feature allows you to unlock your device using your fingerprint?",
        options: {
            a: "Facial Recognition",
            b: "Touch ID",
            c: "Voice Command",
            d: "Iris Scanner"
        },
        correctAnswer: "b"
    },

    {
        question: "Question 10: Which mobile phone feature allows you to determine your phone's location on a map?",
        options: {
            a: "Geotagging",
            b: "Geofencing",
            c: "Geolocation",
            d: "GPS"
        },
        correctAnswer: "d"
    },

    {
        question: "Question 11: Which mobile phone brand introduced the concept of a 'modular' phone design?",
        options: {
            a: "LG",
            b: "Motorola",
            c: "HTC",
            d: "Sony"
        },
        correctAnswer: "a"
    },

    {
        question: "Question 12: What does 'LTE' stand for in the context of mobile networks?",
        options: {
            a: "Long Transmission Efficiency",
            b: "Low-Temperature Emission",
            c: "Long-Term Evolution",
            d: "Light-Transmission Enhancement"
        },
        correctAnswer: "c"
    },

    {
        question: "Question 13: Which mobile phone feature allows you to identify a caller before answering the call?",
        options: {
            a: "Caller ID",
            b: "Speed Dial",
            c: "Voicemail",
            d: "Call Waiting"
        },
        correctAnswer: "a"
    },

    {
        question: "Question 14: What is the purpose of a mobile phone's 'Haptic Feedback'?",
        options: {
            a: "Provide visual notifications",
            b: "Create vibrations for tactile feedback",
            c: "Generate holographic displays",
            d: "Enhance audio quality"
        },
        correctAnswer: "b"
    },

    {
        question: "Question 15: What does 'MMS' stand for in mobile technology?",
        options: {
            a: "Multimedia Messaging Service",
            b: "Mobile Media Storage",
            c: "Mobile Mail Service",
            d: "Multimedia Music System"
        },
        correctAnswer: "a"
    },

    {
        question: "Question 16: What is the purpose of a mobile phone's 'Silent Mode'?",
        options: {
            a: "Amplify incoming calls",
            b: "Disable all notifications and sounds",
            c: "Activate vibration for all alerts",
            d: "Maximize speaker volume"
        },
        correctAnswer: "b"
    },

    {
        question: "Question 17: What does 'HDR' stand for in the context of mobile phone cameras?",
        options: {
            a: "High-Definition Resolution",
            b: "Hyper-Depth Recording",
            c: "High Dynamic Range",
            d: "Human-Digital Rendering"
        },
        correctAnswer: "c"
    },

    {
        question: "Question 18: Which mobile phone feature enables you to see a preview of a message without opening it?",
        options: {
            a: "Quick Reply",
            b: "Peek and Pop",
            c: "Swipe to Archive",
            d: "Threaded Messaging"
        },
        correctAnswer: "b"
    },

    {
        question: "Question 19: What does 'AR' stand for in the context of mobile technology?",
        options: {
            a: "Augmented Reality",
            b: "App Reality",
            c: "Advanced Rendering",
            d: "Artificial Recognition"
        },
        correctAnswer: "a"
    },

    {
        question: "Question 20: What is the primary purpose of a mobile phone's 'Proximity Sensor'?",
        options: {
            a: "Measure ambient temperature",
            b: "Detect screen touches",
            c: "Adjust screen brightness based on lighting conditions",
            d: "Disable touch input when the phone is held to the ear during a call"
        },
        correctAnswer: "d"
    },

];

let startTime;

const answeredQuestions = [];
const questionText = document.getElementById("question-text");
const optionA = document.getElementById("option-a");
const optionB = document.getElementById("option-b");
const optionC = document.getElementById("option-c");
const optionD = document.getElementById("option-d");
const submitButton = document.getElementById("next-button");
const feedbackContainer = document.getElementById("feedback-container");

let currentQuestionIndex = 0;
let correctAnswers = 0;

function displayQuestion(questionIndex) {
  if (questionIndex === 0) {
        startTime = new Date();
  }  
  const currentQuestion = questions[questionIndex];
  questionText.textContent = currentQuestion.question;
  optionA.textContent = currentQuestion.options.a;
  optionB.textContent = currentQuestion.options.b;
  optionC.textContent = currentQuestion.options.c;
  optionD.textContent = currentQuestion.options.d;

  // Reset colors
  optionA.style.color = "initial";
  optionB.style.color = "initial";
  optionC.style.color = "initial";
  optionD.style.color = "initial";
}

function showFeedback(isCorrect, message) {
  if (isCorrect) {
    feedbackContainer.textContent = "Correct!";
    feedbackContainer.style.color = "green";
  } else if (message) {
    feedbackContainer.textContent = message;
    feedbackContainer.style.color = "red";
  } else {
    const currentQuestion = questions[currentQuestionIndex];
    feedbackContainer.textContent = `Incorrect answer. The correct answer is: ${currentQuestion.options[currentQuestion.correctAnswer]}`;
    feedbackContainer.style.color = "red";
  }
}

const prevButton = document.getElementById("prev-button");
const skipButton = document.getElementById("skip-button");
const finalResult = document.getElementById("final-result");

function updateNavigationButtons() {
  prevButton.disabled = currentQuestionIndex === 0;
  skipButton.disabled = currentQuestionIndex === questions.length - 1;
}

function previousButton() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
    updateNavigationButtons();
  }
}

function skipBtn() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
    updateNavigationButtons();
  }
}

const resetButton = document.getElementById("reset-button");

function rstButton() {
  window.location.reload(); // This will refresh the web page
}

function confirm() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
    feedbackContainer.textContent = "You have to answer this question to continue.";
    feedbackContainer.style.color = "red";
    return; // No answer selected
  }

  const currentQuestion = questions[currentQuestionIndex];

  // Check if the question has already been answered
  if (answeredQuestions.includes(currentQuestionIndex)) {
    showFeedback(false, "You have already answered this question.");
    return;
  }

  // Mark the question as answered and disable the submit button
  answeredQuestions.push(currentQuestionIndex);
  submitButton.disabled = true;

  const isCorrect = selectedAnswer.value === currentQuestion.correctAnswer;

  if (isCorrect) {
    correctAnswers++;
  }

  showFeedback(isCorrect);

  // Color the selected answer
  if (selectedAnswer.value === "a") {
    optionA.style.color = isCorrect ? "green" : "red";
  } else if (selectedAnswer.value === "b") {
    optionB.style.color = isCorrect ? "green" : "red";
  } else if (selectedAnswer.value === "c") {
    optionC.style.color = isCorrect ? "green" : "red";
  } else if (selectedAnswer.value === "d") {
    optionD.style.color = isCorrect ? "green" : "red";
  }

  // Increment the question index
  currentQuestionIndex++;

  if (currentQuestionIndex >= questions.length) {
    // Calculate total time spent
    const endTime = new Date();
    const totalTimeInMillis = endTime - startTime;
    const totalTimeInSeconds = totalTimeInMillis / 1000;

    // Hide quiz-related elements
    questionText.style.display = "none";
    optionA.style.display = "none";
    optionB.style.display = "none";
    optionC.style.display = "none";
    optionD.style.display = "none";
    submitButton.style.display = "none";
    feedbackContainer.style.display = "none";
    prevButton.style.display = "none";
    skipButton.style.display = "none";

    // Calculate final score and display it
    const finalScore = (correctAnswers / questions.length) * 100;
    const totalCorrectAnswers = correctAnswers;

    // Display completion message with total time spent
    const completionMessage = document.getElementById("completion-message");
    completionMessage.textContent = `Congratulations! You have completed the quiz in ${totalTimeInSeconds.toFixed(2)} seconds.`;
    completionMessage.style.display = "block";

    finalResult.textContent = `Total Correct Answers: ${totalCorrectAnswers} / ${questions.length}\nFinal Score: ${finalScore.toFixed(2)}%`;
    finalResult.style.display = "block";
    resetButton.style.display = "block";

    // Show reset button
    resetButton.style.display = "block";
  } else {
    displayQuestion(currentQuestionIndex);
    updateNavigationButtons();
    submitButton.disabled = false; // Enable submit button for the next question
  }
}

// Initialize the quiz
displayQuestion(currentQuestionIndex);
updateNavigationButtons();