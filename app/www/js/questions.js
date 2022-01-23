var responseButtons = document.getElementsByClassName('response');
for(var button of responseButtons) {
    button.addEventListener('click', handleResponse);
}

let images = ["img/1.png", "img/2.png", "img/3.png"]

let questions = ["Question 1", "Question 2", "Question 3"];

let reponses = [
    ["Réponse 1.1", "Réponse 1.2", "Réponse 1.3"],
    ["Réponse 2.1", "Réponse 2.2", "Réponse 2.3"],
    ["Réponse 3.1", "Réponse 3.2", "Réponse 3.3"]
];

getQuestion();

function getQuestion() {
    var rd = Math.floor(Math.random() * 3);
    document.getElementById('question').innerHTML = questions[rd];
    var responseButtons = document.getElementsByClassName('response');
    for(var button in responseButtons) {
        responseButtons[button].innerHTML = reponses[rd][button];
    }
    document.getElementById("image").src = images[rd];
}

function handleResponse(e) {
    console.log("Réponse: " + e.target.id);
    getQuestion();
}