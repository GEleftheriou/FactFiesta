let currentQuestionIndex = 0;
let score = 0;
let currentTopic = null;
let countdown; // Variable to store the countdown interval
const questions = {
    history: [
        {
            question: "What year did the Chernobyl disaster occur?",
            answers: ["1989", "1986", "1983", "1981"],
            correctAnswer: "1986"
        },
        {
            question: "What year did the American Civil War end?",
            answers: ["1865", "1861", "1855", "1870"],
            correctAnswer: "1865"
        },
	{
            question: "The Trojan War was a battle between which ancient cities?",
            answers: ["Mikenai & Troj", "Mycenae & Troj", "Mycenae & Troy", "Mikenai & Troy"],
            correctAnswer: "Mycenae & Troy"
        },
        {
            question: "Which empire was famously ruled by Catherine the Great?",
            answers: ["British Empire", "Russian Empire", "Ottoman Empire", "Roman Empire"],
            correctAnswer: "Russian Empire"
        },
        {
            question: "When did the construction of the Great Wall of China begin?",
            answers: ["7th century BC", "6th century BC", "8th century BC", "10th century BC"],
            correctAnswer: "7th century BC"
        },
        {
            question: "Modern-day Istanbul, Turkey, used to be called what when it was the capital of the Byzantine Empire?",
            answers: ["Constantin", "Constantinolopi", "Constantinopoli", "Constantinople"],
            correctAnswer: "Constantinople"
        },
        {
            question: "How old was King Tutankhamun when he died?",
            answers: ["26", "31", "19", "22"],
            correctAnswer: "19"
        },
        {
            question: "What year did the Berlin Wall fall?",
            answers: ["1985", "1989", "1996", "1978"],
            correctAnswer: "1989"
        },
        {
            question: "Who became the youngest person to win a Nobel Peace Prize at age 17 in 2014?",
            answers: ["Malala Yousafzai", "Kailash Satyarthi", "Tawakkol Karman", "Shirin Ebadi"],
            correctAnswer: "Malala Yousafzai"
        },
        {
            question: "What was the global recession that lasted from 2007 to 2009 called?",
            answers: ["The Great Depression", "The Great Global Recession", "The Great Collapse", "The Great Recession"],
            correctAnswer: "The Great Recession"
        }
    ],
    science: [
        {
            question: "What is the chemical symbol for water?",
            answers: ["H2O", "CO2", "O2", "H2"],
            correctAnswer: "H2O"
        },
        {
            question: "What gas do plants absorb from the atmosphere?",
            answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correctAnswer: "Carbon Dioxide"
        },
        {
            question: "Who developed the theory of general relativity?",
            answers: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
            correctAnswer: "Albert Einstein"
        },
        {
            question: "What element did Joseph Priestley discover in 1774?",
            answers: ["Oxygen", "Helium", "Nitrogen", "Hydrogen"],
            correctAnswer: "Oxygen"
        },
        {
            question: "What is it called when you make light change direction by passing it through a lens?",
            answers: ["Reflection", "Refriction", "Retraction", "Refraction"],
            correctAnswer: "Refraction"
        },
        {
            question: "What part of the brain deals with hearing and language?",
            answers: ["Parietal lobe", "Temporal lobe", "Prefrontal lobe", "Frontal lobe"],
            correctAnswer: "Temporal lobe"
        },
        {
            question: "Dolly was the first-ever living creature to be cloned. What type of animal was she?",
            answers: ["Dog", "Goat", "Sheep", "Cow"],
            correctAnswer: "Sheep"
        },
        {
            question: "What is the largest internal organ of the human body?",
            answers: ["Liver", "Brain", "Heart", "Lungs"],
            correctAnswer: "Liver"
        },
        {
            question: "What planet in our solar system has the most gravity?",
            answers: ["Jupiter", "Sun", "Saturn", "Uranus"],
            correctAnswer: "Jupiter"
        },
        {
            question: "What does ‘M’ represent in E=MC2?",
            answers: ["Gravity", "Mass", "Weight", "Energy"],
            correctAnswer: "Mass"
        }
    ],
    geography: [
        {
            question: "What is the capital of Italy?",
            answers: ["Venice", "Florence", "Rome", "Naples"],
            correctAnswer: "Rome"
        },
        {
            question: "Which river flows through London?",
            answers: ["River Severn", "River Trent", "River Thames", "River Great Ouse"],
            correctAnswer: "River Thames"
        },
        {
            question: "How tall is Mount Everest?",
            answers: ["6,849 m", "7,849 m", "8,849 m", "9,849 m"],
            correctAnswer: "8,849 m"
        },
        {
            question: "What is the smallest country in the world?",
            answers: ["Andorra", "Luxembourg", "Vatican City", "Belgium"],
            correctAnswer: "Vatican City"
        },
        {
            question: "What is the highest mountain in Scotland?",
            answers: ["Ben Macdui", "Braeriach", "Ben Nevis", "Cairn Toul"],
            correctAnswer: "Ben Nevis"
        },
        {
            question: "What is the largest canyon in the world?",
            answers: ["Verdon Groge", "Fish River Canyon", "Colca Canyon", "Grand Canyon"],
            correctAnswer: "Grand Canyon"
        },
        {
            question: "How many countries are there in the world?",
            answers: ["105", "145", "195", "245"],
            correctAnswer: "195"
        },
        {
            question: "What is the longest river in the world?",
            answers: ["Amazon River", "Yangtze River", "The Nile", "Yellow River"],
            correctAnswer: "The Nile"
        },
        {
            question: "What percentage of the world population lives in the Northern Hemisphere?",
            answers: ["57%", "67%", "77%", "87%"],
            correctAnswer: "87%"
        },
        {
            question: "In which Australian archipelago can you find Whitehaven Beach?",
            answers: ["Whitsunday Islands", "Lamy Islands", "Buccaneer Islands", "Bonaparte Islands"],
            correctAnswer: "Whitsunday Islands"
        }
    ],
    filmandtv: [
        {
            question: "Which film won the Oscar for Best Picture in 1972?",
            answers: ["Deliverance", "Cabaret", "Taxi Driver", "The Godfather"],
            correctAnswer: "The Godfather"
        },
        {
            question: "What world-famous movie monster turned 50 in 2005?",
            answers: ["Frankenstein", "King Kong", "Mothra", "Godzilla"],
            correctAnswer: "Godzilla"
        },
        {
            question: "Jack and Rose are the main characters from which film?",
            answers: ["Lost in Translation", "The Titanic", "Punch-Drunk Love", "The Way We Were"],
            correctAnswer: "The Titanic"
        },
        {
            question: "Which actor played Jonathan Rivers in \"White Noise\"?",
            answers: ["Michael Keaton", "Jet Li", "Rob Schneider", "Jeff Daniels"],
            correctAnswer: "Michael Keaton"
        },
        {
            question: "What 2005 horror movie did George A. Romero direct?",
            answers: ["Ghost", "Ring", "Jaws", "Land Of The Dead"],
            correctAnswer: "Land Of The Dead"
        },
        {
            question: "When did Coronation Street start?",
            answers: ["1950", "1960", "1970", "1980"],
            correctAnswer: "1960"
        },
        {
            question: "Which one of the following actor wasn’t in Faulty Towers?",
            answers: ["Connie Booth", "John Cleese", "Andrew Sachs", "Julie Andrews"],
            correctAnswer: "Julie Andrews"
        },
        {
            question: "Marry Poppins is a nanny to which family?",
            answers: ["The Barts", "The Franks", "The Banks", "The Danns"],
            correctAnswer: "The Banks"
        },
        {
            question: "What is the name of Jack Sparrow's ship?",
            answers: ["Flying Dutchman", "Black Pearl", "The Jolly Roger", "Jackdaw"],
            correctAnswer: "Black Pearl"
        },
        {
            question: "How many seasons of Futurama were there before it ended in 2003?",
            answers: ["7", "6", "5", "8"],
            correctAnswer: "7"
        }
    ],
    music: [
        {
            question: "Who is the person that replaced Ozzy Osbourne as Black Sabbath \'s lead singer?",
            answers: ["Ronnie James Dio", "Judas Priest", "Dokken", "Whitesnake"],
            correctAnswer: "Ronnie James Dio"
        },
        {
            question: "To consider a band as a Big Band what is the minimum number of musicians to be needed?",
            answers: ["11", "21", "12", "10"],
            correctAnswer: "10"
        },
        {
            question: "In an Orchestra, which is the largest brass section instrument?",
            answers: ["Trumpet", "Tenor", "French horns", "Tuba"],
            correctAnswer: "Tuba"
        },
        {
            question: "The number of strings on a Ukulele is?",
            answers: ["3", "6", "4", "8"],
            correctAnswer: "4"
        },
        {
            question: "The first hispanic to be inducted into the Rock and Roll Hall of Fame is whom?",
            answers: ["Carlos Santana", "Ryan Garcia", "Checo Perez", "Carlos Rodriquez"],
            correctAnswer: "Carlos Santana"
        },
        {
            question: "Name the first person to appear on the cover of the Rolling stones magazine?",
            answers: ["Peter Bowes", "John Lennon", "Richard Gere", "Tom Petty"],
            correctAnswer: "John Lennon"
        },
        {
            question: "Name the oldest member of The Jackson 5?",
            answers: ["Jermaine Jackson", "Michael Jackson", "Randy Jackson", "Jackie Jackson"],
            correctAnswer: "Jackie Jackson"
        },
        {
            question: "What is the first pop music video to release?",
            answers: ["Plutomania", "Man of the woods", "Bohemian Rhapsody", "In my feelings"],
            correctAnswer: "Bohemian Rhapsody"
        },
        {
            question: "Which note does an orchestra tune to?",
            answers: ["E", "A", "D", "C"],
            correctAnswer: "A"
        },
        {
            question: "What is the number of Grammy Awards won by Elvis Presley?",
            answers: ["4", "3", "6", "2"],
            correctAnswer: "3"
        }
    ],
    general: [
        {
            question: "The Plaka is the oldest quarter of which city?",
            answers: ["Athens", "Prague", "Rome", "Vienna"],
            correctAnswer: "Athens"
        },
        {
            question: "What is an axolotl?",
            answers: ["A nerve in the brain", "A multi-axled vehicle", "A type of mortice lock", "A species of salamander"],
            correctAnswer: "A species of salamander"
        },
        {
            question: "The Panama Canal was officially opened by which US president?",
            answers: ["Calvin Coolidge", "Herbert Hoover", "Theodore Roosevelt", "Woodrow Wilson"],
            correctAnswer: "Woodrow Wilson"
        },
        {
            question: "In which opera did Maria Callas make her last appearance at Covent Garden?",
            answers: ["Carmen", "Tosca", "Madame Butterfly", "La Boheme"],
            correctAnswer: "Tosca"
        },
        {
            question: "After Adam, Eve, Cain and Abel who is the next person mentioned in the Bible?",
            answers: ["Enoch", "Jubal", "Lamech", "Zillah"],
            correctAnswer: "Enoch"
        },
        {
            question: "Which country does tennis player Andres Gomez, winner of the 1990 French Championships, come from?",
            answers: ["Ecuador", "Peru", "Portugal", "Spain"],
            correctAnswer: "Ecuador"
        },
        {
            question: "In which ocean is Madagascar?",
            answers: ["Atlantic", "Pacific", "Indian", "Arctic"],
            correctAnswer: "Indian"
        },
        {
            question: "Who was the last wife of Henry VIII?",
            answers: ["Anne of Cleves", "Catherine of Aragon", "Catherine Howard", "Catherine Parr"],
            correctAnswer: "Catherine Parr"
        },
        {
            question: "Which nuts are used to make marzipan?",
            answers: ["Almonds", "Chestnuts", "Hazelnuts", "Walnuts"],
            correctAnswer: "Almonds"
        },
        {
            question: "Who is the only F1 driver to win championships with 4 different teams?",
            answers: ["Jim Clark", "Juan Manuel Fangio", "Alberto Ascari", "Michael Schumacher"],
            correctAnswer: "Juan Manuel Fangio"
        }
    ]
};

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    clearInterval(countdown); // Clear existing countdown if any
    loadQuestion(); // Reloads the initial question after reset
}

function loadQuestion() {
    clearInterval(countdown); // Ensure no previous timers are running when loading a new question
    const urlParams = new URLSearchParams(window.location.search);
    currentTopic = urlParams.get('topic');
    if (!currentTopic || !questions[currentTopic]) {
        console.error('Invalid topic or topic not provided in the URL.');
        window.location.href = 'index.html'; // Redirect to start if the topic is invalid
        return;
    }

    localStorage.setItem('lastTopic', currentTopic);
    const questionData = questions[currentTopic][currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;

    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = ''; // Clear previous answers

    questionData.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => selectAnswer(answer, questionData.correctAnswer);
        answersContainer.appendChild(button);
    });

    setupTimer(30); // Setup timer for 30 seconds per question
}

function setupTimer(duration) {
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = duration; // Display the starting time
    clearInterval(countdown); // Clear any existing timer
    countdown = setInterval(() => {
        duration--;
        timerDisplay.textContent = duration;
        if (duration <= 0) {
            clearInterval(countdown);
            moveToNextQuestion(true); // Pass true to indicate it was a timeout
        }
    }, 1000);
}

function moveToNextQuestion(isTimeout = false) {
    const feedback = document.getElementById('feedback');
    if (isTimeout) {
        feedback.textContent = 'Time out! Moving to next question.';
    } else {
        feedback.textContent = ''; // Clear feedback if moving without timeout
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentTopic].length) {
        loadQuestion();
    } else {
        window.location.href = `results.html?score=${score}`;
    }
}

function selectAnswer(selectedAnswer, correctAnswer) {
    clearInterval(countdown); // Stop the timer when an answer is selected
    const feedback = document.getElementById('feedback');
    feedback.textContent = selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect!';
    score += selectedAnswer === correctAnswer ? 1 : 0;
    setTimeout(() => moveToNextQuestion(), 1000); // Wait a second before moving to the next question, without timeout
}

document.addEventListener('DOMContentLoaded', resetQuiz);



