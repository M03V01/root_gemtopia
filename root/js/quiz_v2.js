const questions = [
    { question: 'Quale é il tuo lavoro?', answers: ['Giardiniere', 'Insegnante', 'Designer', 'Mago'], scores: [1, 2, 3, 4] },
    { question: 'Come descriveresti il tuo stato d animo di solito?', answers: ['Triste', 'Vivace', 'Assonnato', 'Sportivo'], scores: [1, 2, 3, 4] },
    { question: 'Dove trascorri le tue vacanze?', answers: ['Mare', 'Montagna', 'Cittá', 'Lago'], scores: [1, 2, 3, 4] },
    { question: 'Qual é il tuo animale preferito?', answers: ['Gatto', 'Cane', 'Canarino', 'Unicorno'], scores: [1, 2, 3, 4] },
    { question: 'Qual è il tuo fiore preferito?', answers: ['Tulipano', 'Rosa', 'Margherita', 'Girasole'], scores: [1, 2, 3, 4] }
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
        