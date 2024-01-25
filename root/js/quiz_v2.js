const questions = [
    { question: 'Qual è la tua idea di vacanza ideale?', answers: ['Rilassarsi su una spiaggia o in un luogo tranquillo.', 'Esplorare nuove avventure e luoghi emozionanti.', 'Visitare musei, biblioteche e luoghi culturali di interesse.', 'Trascorrere del tempo in compagnia in luoghi accoglienti e romantici.'], scores: [1, 2, 3, 4] },
    { question: 'Cosa preferisci fare nel tempo libero?', answers: ['Leggere un libro o guardare serie tv in tranquillità.', 'Provare attività adrenaliniche e sport estremi.', 'Apprendere cose nuove.', 'Rilassarmi con le persone che amo.'], scores: [1, 2, 3, 4] },
    { question: 'Quale genere di film preferisci?', answers: ['Commedie.', 'Azione e avventura.', 'Documentari.', 'Romantici.'], scores: [1, 2, 3, 4] },
    { question: 'Qual è il tuo luogo ideale per una cena romantica?', answers: ['Un pic-nic al tramonto.', 'Un ristorante con vista panoramica.', 'Un bistrot con piatti gourmet.', 'Una cena casalinga.'], scores: [1, 2, 3, 4] },
    { question: 'Cosa prediligi nelle tue relazioni?', answers: ['Condividere momenti di tranquillità.', 'Fare nuove conoscenze e provare nuove attività insieme.', 'Partecipare a discussioni profonde e stimolanti.', 'Creare legami stabili e confortevoli.'], scores: [1, 2, 3, 4] }
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
        let personalityResult = '';
            if (totalScore < 10) {
                personalityResult = 'Opzione 1';
            } else if (totalScore < 15) {
                personalityResult = 'Opzione 2';
            } else if (totalScore < 20) {
                personalityResult = 'Opzione 3';
            } else {
                personalityResult = 'Opzione 4';
            }
        
        questionText.innerText = 'Il tuo risultato è: ' + personalityResult;
        answerButtons.innerHTML = '';

        const resultButton = document.getElementById('result-button');
        resultButton.style.display = 'block';

        resultButton.addEventListener('click', () => {
        alert("NOTIFICA DI  PROVA");
    });
}
startQuiz();
        