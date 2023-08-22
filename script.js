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
        b: "Short Message Service",
        c: "Simple Messaging System",
        d: "System Message Service"
      },
      correctAnswer: "b"
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
        a: "Enhance battery life",
        b: "Enable Wi-Fi calling",
        c: "Activate Bluetooth",
        d: "Disable wireless communication"
      },
      correctAnswer: "d"
    },

    {
      question: "Question 5: Which mobile network technology succeeded 3G?",
      options: {
        a: "4G",
        b: "5G",
        c: "2G",
        d: "LTE"
      },
      correctAnswer: "a"
    },

    {
      question: "Question 6: Which mobile phone brand features the 'Pixel' series?",
      options: {
        a: "Samsung",
        b: "LG",
        c: "Google",
        d: "Sony"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 7: What is the term for a mobile phone's unique numerical identifier used by cellular networks?",
      options: {
        a: "IP Address",
        b: "MAC Address",
        c: "IMEI Number",
        d: "SIM Card"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 8: Which mobile operating system is known for its open-source nature?",
      options: {
        a: "IOS",
        b: "Windows Phone",
        c: "Android",
        d: "BlackBerry OS"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 9: What is the purpose of a mobile phone's 'Do Not Disturb' mode?",
      options: {
        a: "Activate voice assistant",
        b: "Restrict incoming calls",
        c: "Dim the screen",
        d: "Boost network signal"
      },
      correctAnswer: "b"
    },

    {
      question: "Question 10: What technology allows wireless charging of mobile phones?",
      options: {
        a: "Infrared",
        b: "Ultrasonic",
        c: "Qi Wireless",
        d: "NFC"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 11: Which mobile phone feature allows you to unlock your device using your fingerprint?",
      options: {
        a: "Facial Recognition",
        b: "Voice Command",
        c: "Touch ID",
        d: "Iris Scanner"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 12: Which mobile phone brand uses the slogan 'Never Settle'?",
      options: {
        a: "Sony",
        b: "OnePlus",
        c: "HTC",
        d: "Motorola"
      },
      correctAnswer: "b"
    },

    {
      question: "Question 13: What is the primary purpose of a mobile phone's 'Gorilla Glass'?",
      options: {
        a: "Enhance battery life",
        b: "Improve camera quality",
        c: "Provide impact and scratch resistance",
        d: "Enable wireless charging"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 14: What is the name of Apple's virtual assistant?",
      options: {
        a: "Siri",
        b: "Alexa",
        c: "Cortana",
        d: "Google Assistant"
      },
      correctAnswer: "a"
    },

    {
      question: "Question 15: Which mobile phone brand is associated with the 'Exynos' line of processors?",
      options: {
        a: "Qualcomm",
        b: "MediaTek",
        c: "Samsung",
        d: "Apple"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 16: Which mobile phone feature allows you to determine your phone's location on a map?",
      options: {
        a: "Geotagging",
        b: "Geofencing",
        c: "Geolocation",
        d: "GPS"
      },
      correctAnswer: "d"
    },

    {
      question: "Question 17: What does 'IP' stand for in the context of waterproof and dustproof ratings for mobile phones?",
      options: {
        a: "Ingress Protection",
        b: "Internal Processor",
        c: "Internet Protocol",
        d: "Integrated Protection"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 18: Which mobile phone brand is known for its 'Mi' series?",
      options: {
        a: "OnePlus",
        b: "Xiaomi",
        c: "Oppo",
        d: "Vivo"
      },
      correctAnswer: "b"
    },

    {
      question: "Question 19: What is the term for software that displays advertisements on a mobile phone?",
      options: {
        a: "AdSense",
        b: "AdBlocker",
        c: "Adware",
        d: "Advertising"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 20: What does 'RAM' stand for in the context of mobile phones?",
      options: {
        a: "Random Application Memory",
        b: "Reliable Access Memory",
        c: "Random Access Memory",
        d: "Read-Only Memory"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 21: Which mobile phone brand introduced the concept of a 'modular' phone design?",
      options: {
        a: "LG",
        b: "Motorola",
        c: "HTC",
        d: "Sony"
      },
      correctAnswer: "a"
    },

    {
      question: "Question 22: What is the primary purpose of a mobile phone's 'Notification Center'?",
      options: {
        a: "Launch applications",
        b: "Store contacts",
        c: "Manage notifications",
        d: "Monitor battery usage"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 23: Which mobile phone feature uses infrared to enable devices to communicate and exchange data?",
      options: {
        a: "Bluetooth",
        b: "NFC",
        c: "Infrared Port",
        d: "Wi-Fi"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 24: Which mobile phone brand is known for its 'ZenFone' series?",
      options: {
        a: "Sony",
        b: "Motorola",
        c: "Huawei",
        d: "ASUS"
      },
      correctAnswer: "d"
    },

    {
      question: "Question 25: What is the maximum resolution of a Full HD mobile phone screen?",
      options: {
        a: "720p",
        b: "1080p",
        c: "1440p",
        d: "4K"
      },
      correctAnswer: "b"
    },

    {
      question: "Question 26: Which mobile phone feature allows you to navigate through the device's interface?",
      options: {
        a: "Accelerometer",
        b: "Gyroscope",
        c: "Touchscreen",
        d: "Proximity Sensor"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 27: What does 'LTE' stand for in the context of mobile networks?",
      options: {
        a: "Long Transmission Efficiency",
        b: "Low-Temperature Emission",
        c: "Long-Term Evolution",
        d: "Light-Transmission Enhancement"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 28: Which mobile phone brand is associated with the 'EMUI' user interface?",
      options: {
        a: "OnePlus",
        b: "Huawei",
        c: "Xiaomi",
        d: "Oppo"
      },
      correctAnswer: "b"
    },

    {
      question: "Question 29: What is the primary purpose of a mobile phone's 'App Store'?",
      options: {
        a: "Make phone calls",
        b: "Manage system settings",
        c: "Download and install applications",
        d: "Charge the battery"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 30: Which mobile phone feature allows you to share data between devices by tapping them together?",
      options: {
        a: "Bluetooth",
        b: "Wi-Fi Direct",
        c: "NFC",
        d: "Infrared"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 31: What is the main purpose of a mobile phone's 'Night Mode' feature?",
      options: {
        a: "Increase screen brightness at night",
        b: "Enhance gaming performance",
        c: "Reduce blue light emission for better sleep",
        d: "Activate a flashlight for dark environments"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 32: Which mobile phone feature allows you to identify a caller before answering the call?",
      options: {
        a: "Caller ID",
        b: "Speed Dial",
        c: "Voicemail",
        d: "Call Waiting"
      },
      correctAnswer: "a"
    },

    {
      question: "Question 33: Which mobile phone brand introduced the concept of a foldable smartphone?",
      options: {
        a: "Apple",
        b: "Samsung",
        c: "OnePlus",
        d: "Sony"
      },
      correctAnswer: "b"
    },

    {
      question: "Question 34: What is the purpose of a mobile phone's 'Haptic Feedback'?",
      options: {
        a: "Provide visual notifications",
        b: "Create vibrations for tactile feedback",
        c: "Generate holographic displays",
        d: "Enhance audio quality"
      },
      correctAnswer: "b"
    },

    {
      question: "Question 35: What is the term for the number of pixels displayed per inch on a screen?",
      options: {
        a: "Pixel Density",
        b: "Resolution Ratio",
        c: "Pixel Pitch",
        d: "Screen Intensity"
      },
      correctAnswer: "a"
    },

    {
      question: "Question 36: What is the term for the network of interconnected devices that can communicate without the need for cellular service?",
      options: {
        a: "Wi-Fi Direct",
        b: "Mesh Network",
        c: "P2P Connection",
        d: "Satellite Network"
      },
      correctAnswer: "b"
    },

    {
      question: "Question 37: What does 'MMS' stand for in mobile technology?",
      options: {
        a: "Multimedia Messaging Service",
        b: "Mobile Media Storage",
        c: "Mobile Mail Service",
        d: "Multimedia Music System"
      },
      correctAnswer: "a"
    },

    {
      question: "Question 38: Which mobile phone component is responsible for processing the device's data and executing commands?",
      options: {
        a: "Battery",
        b: "RAM",
        c: "GPS",
        d: "Camera"
      },
      correctAnswer: "b"
    },

    {
      question: "Question 39: What is the purpose of a mobile phone's 'Silent Mode'?",
      options: {
        a: "Amplify incoming calls",
        b: "Disable all notifications and sounds",
        c: "Activate vibration for all alerts",
        d: "Maximize speaker volume"
      },
      correctAnswer: "b"
    },

    {
      question: "Question 40: Which mobile phone brand is known for its 'Razr' flip phone series?",
      options: {
        a: "Nokia",
        b: "LG",
        c: "Motorola",
        d: "Sony"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 41: What does 'HDR' stand for in the context of mobile phone cameras?",
      options: {
        a: "High-Definition Resolution",
        b: "Hyper-Depth Recording",
        c: "High Dynamic Range",
        d: "Human-Digital Rendering"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 42: Which mobile phone feature enables you to see a preview of a message without opening it?",
      options: {
        a: "Quick Reply",
        b: "Peek and Pop",
        c: "Swipe to Archive",
        d: "Threaded Messaging"
      },
      correctAnswer: "b"
    },

    {
      question: "Question 43: What does 'AR' stand for in the context of mobile technology?",
      options: {
        a: "Augmented Reality",
        b: "App Reality",
        c: "Advanced Rendering",
        d: "Artificial Recognition"
      },
      correctAnswer: "a"
    },

    {
      question: "Question 44: Which mobile phone brand is associated with the 'ColorOS' user interface?",
      options: {
        a: "Oppo",
        b: "Vivo",
        c: "OnePlus",
        d: "Xiaomi"
      },
      correctAnswer: "a"
    },

    {
      question: "Question 45: What is the term for a mobile phone's ability to run multiple applications simultaneously?",
      options: {
        a: "Multitasking",
        b: "Split Screen",
        c: "Dual App Mode",
        d: "Parallel Execution"
      },
      correctAnswer: "a"
    },

    {
      question: "Question 46: Which mobile phone feature allows you to access the internet using nearby Wi-Fi networks?",
      options: {
        a: "Mobile Hotspot",
        b: "Cellular Data",
        c: "Wi-Fi Calling",
        d: "Wi-Fi Connectivity"
      },
      correctAnswer: "c"
    },

    {
      question: "Question 47: What is the name of the technology that enables mobile phones to identify songs playing in the background?",
      options: {
        a: "SoundMatch",
        b: "Music Recognition",
        c: "TuneDetect",
        d: "SongFind"
      },
      correctAnswer: "b"
    },

    {
      question: "Question 48: Which mobile phone brand is known for its 'Earpods' or wireless earphones?",
      options: {
        a: "Sony",
        b: "JBL",
        c: "Bose",
        d: "Apple"
      },
      correctAnswer: "d"
    },

    {
      question: "Question 49: What is the primary purpose of a mobile phone's 'Proximity Sensor'?",
      options: {
        a: "Measure ambient temperature",
        b: "Detect screen touches",
        c: "Adjust screen brightness based on lighting conditions",
        d: "Disable touch input when the phone is held to the ear during a call"
      },
      correctAnswer: "d"
    },

    {
      question: "Question 50: Which mobile phone brand is associated with the 'Snapdragon' line of processors?",
      options: {
        a: "MediaTek",
        b: "Qualcomm",
        c: "Samsung",
        d: "NVIDIA"
      },
      correctAnswer: "b"
    },

];

let startTime;

const answeredQuestions = [];
const questionText = document.getElementById("question-text");
const optionA = document.getElementById("option-a");
const optionB = document.getElementById("option-b");
const optionC = document.getElementById("option-c");
const optionD = document.getElementById("option-d");
const submitButton = document.getElementById("submit-button");
const feedbackContainer = document.getElementById("feedback-container");

let currentQuestionIndex = 0;
let correctAnswers = 0;

function displayQuestion(questionIndex) {
  if (questionIndex === 0) {
    startTime = new Date();
  }
}

function displayQuestion(questionIndex) {
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
    feedbackContainer.textContent = "Incorrect answer. Please try again.";
    feedbackContainer.style.color = "red";
  }
}

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const finalResult = document.getElementById("final-result");

function updateNavigationButtons() {
  prevButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = currentQuestionIndex === questions.length - 1;
}

prevButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
    updateNavigationButtons();
  }
});

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
    updateNavigationButtons();
  }
});

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
  window.location.reload(); // This will refresh the web page
});

resetButton.addEventListener("click", () => {
  // Reset variables and UI elements
  currentQuestionIndex = 0;
  correctAnswers = 0;
  finalResult.style.display = "none";
  questionText.style.display = "block";
  optionA.style.display = "block";
  optionB.style.display = "block";
  optionC.style.display = "block";
  optionD.style.display = "block";
  submitButton.style.display = "block";
  feedbackContainer.style.display = "block";
  prevButton.style.display = "inline-block";
  nextButton.style.display = "inline-block";
  resetButton.style.display = "none";
  displayQuestion(currentQuestionIndex);
  updateNavigationButtons();
});

submitButton.addEventListener("click", () => {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
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
    nextButton.style.display = "none";

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

});

// Initialize the quiz
displayQuestion(currentQuestionIndex);
updateNavigationButtons();