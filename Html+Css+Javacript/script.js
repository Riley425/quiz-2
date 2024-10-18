const users = {
    'Riley6784': 'password1',
    'Cici4571': 'password2'
};

const quizzes = {
    quiz1: [
        {question: "(1) Which Instrument Is Percussion", answers: ["Drumkit", "Guitar", "Bass", "Keyboard", "Vocals"], correct: 0},
        {question: "(2) Which instrument is not a rythm instrument", answers: ["Keyboard", "Trumpet", "Guitar", "Drumkit", "Bass"], correct: 1},
        {question: "(3) Which time signiture is a polyrythm", answers: ["3/4", "4/4", "2/4", "2/2", "2/3"], correct: 4},
        {question: "(4) Whats the most used time signiture in Rock music", answers: ["8/8", "6/8", "4/4", "3/4", "2/4"], correct: 2},
        {question: "(5) What is the most important scale", answers: ["Diatonic Scale", "Pentatonic Scale", "C Major Scale", "Minor Scale", "Major Scale"], correct: 4},
        {question: "(6) How many strings does a standard bass have", answers: ["6", "4", "5"], correct: 1},
        {question: "(7) What Saxaphone is the lowest pitched", answers: ["Soprano", "Alto", "Tenor", "Baritone"], correct: 3},
        {question: "(8) How many Rack toms does a standard drumkit have", answers: ["4", "3", "1", "2", "5"], correct: 1},
        {question: "(9) How many keys does a full size piano have", answers: ["90", "70", "66", "88", "58"], correct: 3},
        {question: "(10) How many strings does a standard guitar have", answers: ["5", "12", "6", "4"], correct: 2}
    ],
    quiz2: [
        {question: "(1) What is the distance between two notes called?", answers: ["Interval", "Tempo", "Harmony", "Dynamics",], correct: 0},
        {question: "(2) Which of these is a symbol that raises a note by a half step?", answers: ["Flat", "Sharp", "Natual", "Fermata"], correct: 1},
        {question: "(3) How many beats does a quarter note get in 4/4 time?", answers: ["1/2 beat", "1 beat", "2 beat", "3 beat"], correct: 1},
        {question: "(4) Which of the following notes is NOT part of the C Major scale?", answers: ["E", "F", "G#", "B"], correct: 2},
        {question: "(5) What is the key signature of G major?", answers: ["1 Flat", "1 Sharp", "No Sharp or Flat", "2 Flat"], correct: 1},
        {question: "(6) What does forte (f) mean in music?", answers: ["Play softly", "Play loudly", "Gradualy get louder", "Gradualy get softer"], correct: 1},
        {question: "(7) A chord that consists of the root, third, and fifth notes of a scale is called a:", answers: ["Triad", "Arpeggio", "Cadence", "Scale"], correct: 0},
        {question: "(8) Which of these time signatures means there are 3 beats per measure?", answers: ["2/4", "3/4", "4/4", "6/8"], correct: 1},
        {question: "(9) In musical notation, what does a dot after a note indicate?", answers: ["Decreases the note's duration by half", "Adds one beat to the note", "Increases the note's duration by half", "Repeats the note"], correct: 2},
        {question: "(10) What is the term for gradually speeding up the tempo of a piece?", answers: ["Ritardando", "Accelerando", "Staccato", "Legato"], correct: 2}
    ]
};

let currentQuiz = null;
let currentUser = null;

function login() {
    const username = document.getElementById('username').value;
    if (users[username]) {
        currentUser = username;
        document.getElementById('user-name').textContent = username;
        showPage('home-page');
    } else {
        alert('Invalid username!');
    }
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

function startQuiz(quizId) {
    currentQuiz = quizId;
    const quiz = quizzes[quizId];
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';
    quiz.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h3>${q.question}</h3>
            <div class="answers">
                ${q.answers.map((answer, i) => `<label><input type="radio" name="q${index}" value="${i}"> ${answer}</label>`).join('')}
            </div>
        `;
        questionsContainer.appendChild(questionDiv);
    });
    showPage('quiz-page');
}

function submitQuiz() {
    const quiz = quizzes[currentQuiz];
    let score = 0;
    quiz.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    const percentage = (score / quiz.length) * 100;
    document.getElementById('score').textContent = `You got ${score} out of ${quiz.length} correct (${percentage}%)`;
    showPage('results-page');
}

function goHome() {
    showPage('home-page');
}
