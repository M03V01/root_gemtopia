const questions = [
    { question: 'Qual è la tua idea di vacanza ideale?', answers: ['Rilassarsi su una spiaggia o in un luogo tranquillo', 'Esplorare nuove avventure e luoghi emozionanti', 'Visitare musei, biblioteche e luoghi culturali di interesse', 'Trascorrere del tempo in compagnia in luoghi accoglienti e romantici'], scores: [1, 2, 3, 4] },
    { question: 'Cosa preferisci fare nel tempo libero?', answers: ['Leggere un libro o guardare serie tv in tranquillità', 'Provare attività adrenaliniche e sport estremi', 'Apprendere cose nuove', 'Rilassarmi con le persone che amo'], scores: [1, 2, 3, 4] },
    { question: 'Quale genere di film preferisci?', answers: ['Commedie', 'Azione e avventura', 'Documentari', 'Romantici'], scores: [1, 2, 3, 4] },
    { question: 'Qual è il tuo luogo ideale per una cena romantica?', answers: ['Un pic-nic al tramonto', 'Un ristorante con vista panoramica', 'Un bistrot con piatti gourmet', 'Una cena casalinga'], scores: [1, 2, 3, 4] },
    { question: 'Cosa prediligi nelle tue relazioni?', answers: ['Condividere momenti di tranquillità', 'Fare nuove conoscenze e provare nuove attività insieme', 'Partecipare a discussioni profonde e stimolanti', 'Creare legami stabili e confortevoli'], scores: [1, 2, 3, 4] }
  ];
  
let currentQuestionIndex = 0;
let totalScore = 0;
  
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
  
function startQuiz() {
showQuestion(questions[currentQuestionIndex]);
}
  
function showQuestion(question) {
    questionText.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = answer;
        button.addEventListener('click', () => selectAnswer(index, question.scores));
        answerButtons.appendChild(button);
    });
    }
    
    function selectAnswer(index, scores) {
    totalScore += scores[index];
    currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            showResult();
        }
    }

    function showResult() {
        let personalityClass = '';
        let personalityResult = '';
        let personalityTitle = '';
        if (totalScore < 10) {
            personalityClass = 'dreamstrict';
            personalityTitle = 'Dreamstrict';
            personalityResult = 'La Gemma Blu scorre nelle tue vene, sei una persona nata per sognare!';
        } else if (totalScore < 15) {
            personalityClass = 'intrepidaria';
            personalityTitle = 'Intrepidaria';
            personalityResult = 'La Gemma Gialla scorre nelle tue vene, sei una persona nata per l\'avventura!';
        } else if (totalScore < 20) {
            personalityClass = 'genius-hill';
            personalityTitle = 'Genius-hill';
            personalityResult = 'La Gemma Viola scorre nelle tue vene, sei una persona nata per apprendere!';
        } else {
            personalityClass = 'cuddlehood';
            personalityTitle = 'Cuddlehood';
            personalityResult = 'La Gemma Rosa scorre nelle tue vene, sei una persona nata per amare!';
        }

        const section = document.querySelector('#quiz-container');
        section.classList.remove('.backgroundFuxia');
        section.classList.add(personalityClass);

        const quizContainer = document.getElementById('quiz-container');
        quizContainer.style.background = 'none';
        quizContainer.classList.add(personalityClass);

        questionText.innerHTML = '<br>Appartieni a:<br><br> <h2>' + personalityTitle + '<br><br></h2>' + personalityResult;
        answerButtons.innerHTML = '';

        const resultButton = document.getElementById('result-button');
        resultButton.style.display = 'block';

        section.style.background = '';
        section.style.backgroundImage = '';

        resultButton.addEventListener('click', () => {

    });
}
startQuiz();
