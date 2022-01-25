let responseButtons = document.getElementsByClassName("response");
for(let button of responseButtons) {
    button.addEventListener("click", handleResponse);
}
document.addEventListener("backbutton", handleBackButton, false);
document.getElementById("score-button").addEventListener("click", handleScoreButton);

let images = ["img/house.png", "img/heating.png", "img/faucets.png"]

let questions = ["Question 1", "Question 2", "Question 3"];

let categories = ["House", "Holidays", "Food"];

let reponses = [
    ["Réponse 1.1", "Réponse 1.2", "Réponse 1.3"],
    ["Réponse 2.1", "Réponse 2.2", "Réponse 2.3"],
    ["Réponse 3.1", "Réponse 3.2", "Réponse 3.3"]
];

let storage = window.localStorage;

let id;
let nbQuestions;

handleGetSession();

handleVisibility();

getQuestion();

function handleGetSession() {
    id = storage.getItem("id");
    nbQuestions = storage.getItem("nbQuestions");
    if(nbQuestions == "NaN") {
        nbQuestions = 0;
        storage.setItem("nbQuestions", nbQuestions);
    }
};

function getQuestion() {
    let rd = Math.floor(Math.random() * 3);
    document.getElementById("question").innerHTML = questions[rd];
    let categorie = document.getElementById("categorie");
    categorie.innerHTML = categories[rd];
    switch (categories[rd]) {
        case "House":
            categorie.style.backgroundColor = "green";
            break;
        case "Holidays":
            categorie.style.backgroundColor = "blue";
            break;
        case "Food":
            categorie.style.backgroundColor = "red";
            break;
        default:
            categorie.style.backgroundColor = "white";
            break;
    }
    let responseButtons = document.getElementsByClassName("response");
    for(let button in responseButtons) {
        responseButtons[button].innerHTML = reponses[rd][button];
    }
    document.getElementById("image").src = images[rd];
}

function handleResponse(e) {
    console.log("Réponse: " + e.target.id);
    nbQuestions++;
    storage.setItem("nbQuestions", nbQuestions);
    handleVisibility();
    getQuestion();
}

function handleVisibility() {
    let noAccessTip = document.getElementById("no-access");
    let scoreButton = document.getElementById("score-button");
    if(nbQuestions >= 10) {
        noAccessTip.style.visibility = "hidden";
        scoreButton.disabled = false;
    } else {
        noAccessTip.style.visibility = "visible";
        scoreButton.disabled = true;
    }
}

function handleBackButton() {
    window.location.href = "./questions.html";
}

function handleScoreButton() {
    window.location.href = "./score.html";
}