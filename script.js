document.addEventListener('DOMContentLoaded', function () {
    const interviewer = document.getElementById('interviewer');
    const questions = [
        "What is your greatest strength?",
        "What is your biggest weakness?",
        "Why do you want to work here?",
        "Where do you see yourself in five years?",
        "Why should we hire you?"
    ];
    
    interviewer.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * questions.length);
        alert(questions[randomIndex]);
    });
});
