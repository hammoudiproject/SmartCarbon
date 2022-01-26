let responseButtons = document.getElementsByClassName("response");
for (let button of responseButtons) {
    button.addEventListener("click", handleResponse);
}
document.addEventListener("backbutton", handleBackButton, false);
document.getElementById("score-button").addEventListener("click", handleScoreButton);

let storage = window.localStorage;

let questions;

let reponses;

let score;

let id;
let nbQuestionsAsked;

handleGetSession();

handleVisibility();

getQuestion();

function handleGetSession() {
    score = 0;
    id = storage.getItem("id");
    questions = JSON.parse(storage.getItem("questions"));
    reponses = JSON.parse(storage.getItem("reponses"));
    nbQuestionsAsked = storage.getItem("nbQuestionsAsked");
    if (nbQuestionsAsked == null) {
        nbQuestionsAsked = 0;
        storage.setItem("nbQuestionsAsked", nbQuestionsAsked);
    }
};

function getQuestion() {
    if (questions != null && nbQuestionsAsked > questions.length - 1) {
        storage.setItem("finished", true);
        window.location.href = "./no-questions.html"
        return;
    }
    storage.setItem("finished", false);
    let currentQuestion = questions[nbQuestionsAsked];
    document.getElementById("question").innerHTML = currentQuestion.content;
    document.getElementById("question").value = currentQuestion.id;
    let categorie = document.getElementById("categorie");
    categorie.innerHTML = currentQuestion.categorie;
    switch (categorie.innerHTML) {
        case "HOUSING":
            categorie.style.backgroundColor = "green";
            categorie.style.color = "white";
            break;
        case "TRANSPORT":
            categorie.style.backgroundColor = "#708090";
            categorie.style.color = "white";
            break;
        case "FOOD":
            categorie.style.backgroundColor = "red";
            categorie.style.color = "white";
            break;
        case "ENERGY":
            categorie.style.backgroundColor = "yellow";
            categorie.style.color = "black";
            break;
        case "MATERIEL PURCHASES":
            categorie.style.backgroundColor = "#800000";
            categorie.style.color = "white";
            break;
        default:
            categorie.style.backgroundColor = "white";
            categorie.style.color = "black";
            break;
    }
    let responseButtons = document.getElementsByClassName("response");
    let idxButton = 0;
    for (let reponse of reponses) {
        if (reponse.idQuestion == currentQuestion.id) {
            responseButtons[idxButton].innerHTML = reponse.content;
            responseButtons[idxButton].value = reponse.value;
            idxButton++;
        }
    }
    for (let button of responseButtons) {
        if (button.innerHTML == "") {
            button.innerHTML = "Remplissage";
            button.style.visibility = "hidden";
        }
    }
    document.getElementById("image").src = "data:image/png;base64," + currentQuestion.image;
}

function handleResponse(e) {
    nbQuestionsAsked++;
    score += parseInt(e.target.value);
    console.log(score);
    storage.setItem("nbQuestionsAsked", nbQuestionsAsked);
    handleVisibility();
    getQuestion();
}

function handleVisibility() {
    let noAccessTip = document.getElementById("no-access");
    let scoreButton = document.getElementById("score-button");
    if (nbQuestionsAsked >= 10) {
        noAccessTip.style.visibility = "hidden";
        scoreButton.disabled = false;
    } else {
        noAccessTip.style.visibility = "visible";
        scoreButton.disabled = true;
    }
}

function handleBackButton() {
    new Promise((resolve, reject) => {
        fetch("https://smartcarbon.chipmnk.dev/addScoreToUser.php?idUser=" + id + "&score=" + score, {
            method: "GET"
        }).then((response) => {
            if (response.ok || response.status == 404) {
                window.location.href = "./home.html";
            } else reject(response.statusText);
        }).catch((error) => reject(error));
    });
}

function handleScoreButton() {
    requeteServeur("addScoreToUser.php?idUser=" + id + "&score=" + score).then(function (response) {
        window.location.href = "./score.html";
    })
}

function requeteServeur(route) {
    return new Promise((resolve, reject) => {
        fetch("https://smartcarbon.chipmnk.dev/" + route, {
                method: "GET"
            }).then((response) => {
                if (response.ok || response.status == 404) resolve(response);
                else reject(response.statusText);
            }).then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}