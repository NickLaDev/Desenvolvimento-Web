const correctAnswers = [0, 2, 1, 0, 2];  // Índices das respostas corretas para as 5 perguntas sobre carros

function submitQuiz() {
    let score = 0;
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    const questions = document.querySelectorAll('.question');

    questions.forEach((question, index) => {
        const selectedAnswer = form[`question${index + 1}`].value;
        if (selectedAnswer == correctAnswers[index]) {
            question.classList.add('correct');
            question.classList.remove('incorrect');
            score++;
        } else {
            question.classList.add('incorrect');
            question.classList.remove('correct');
        }
    });

    // Exibir resultado
    resultDiv.style.display = 'block';  // Tornar a área de resultado visível
    resultDiv.innerHTML = `Você acertou ${score} de ${correctAnswers.length} perguntas.`;

    // Aplicar estilos condicionais ao resultado
    if (score === correctAnswers.length) {
        resultDiv.classList.add('correct');
        resultDiv.classList.remove('incorrect');
    } else {
        resultDiv.classList.add('incorrect');
        resultDiv.classList.remove('correct');
    }
}

function resetQuiz() {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.classList.remove('correct', 'incorrect');
    });
    document.getElementById('result').style.display = 'none'; // Esconder resultado
    document.getElementById('quiz-form').reset();
}
