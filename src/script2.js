document.addEventListener("DOMContentLoaded", function () {

   



    const win = document.getElementById('win');
    const lose = document.getElementById('lose');

    

    const test = document.getElementById('test');
    const question1 = document.getElementById('question1');
    const score = document.getElementById('score');

    
    const questions = [
        { question: "O que te permite olhar por uma parede?", answer: "janela" },
        { question: "Antes de descobrirem o Monte Everest, qual era a maior montanha do mundo?", answer: "monte everest" },
        { question: "Como se chama o policial que se olha no espelho?", answer: "Policial civil" },
        { question: "Qual a cura para caspa?", answer: "calvice" },
        { question: "Qual  a fórmula da  água?", answer: "h2o" }
    ];


    
    let lives = 5;
    let currentQuestion = 0;

    
    function showNextQuestion() {
        if (currentQuestion < questions.length && lives > 0) {
            const questionElement = document.getElementById("question");
            questionElement.textContent = questions[currentQuestion].question;
            document.getElementById("result").textContent = "";
            document.getElementById("answer").value = ""; 
        } else {
            
            const questionElement = document.getElementById("question");
            questionElement.textContent = "Jogo concluído!";

            
            const resultElement = document.getElementById("result");
            if (lives === 0) {
                resultElement.textContent = "Você perdeu! Suas vidas acabaram.";

            } else {
                resultElement.textContent = "Você ganhou! Parabéns!" 
                test.style.display = 'none';
                question1.style.display = 'none';
                score.style.display = 'none';
                win.style.display = 'block';
            }
        }
    }

    
    function checkAnswer() {
        if (lives === 0) {
            test.style.display = 'none';
            question1.style.display = 'none';
            score.style.display = 'none';
            lose.style.display = 'block';
            return; 
        }

        const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
        const correctAnswer = questions[currentQuestion].answer.toLowerCase();

        const resultElement = document.getElementById("result");
        if (userAnswer === correctAnswer) {
            resultElement.textContent = "Resposta correta!";
        } else {
            resultElement.textContent = "Resposta incorreta! Você perdeu 1 vida.";
            lives--;
            document.getElementById("score").textContent = "Vidas: " + lives;
        }

        
        if (userAnswer === correctAnswer) {
            currentQuestion++;
            if (lives > 0) {
                setTimeout(showNextQuestion, 1000); 
            } else {
                showNextQuestion();
            }
        }
    }

    
    document.getElementById("submit").addEventListener("click", checkAnswer);

   
    showNextQuestion();
});
