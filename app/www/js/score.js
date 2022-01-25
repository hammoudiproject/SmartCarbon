
document.getElementById("reset").addEventListener("click", handleReset);
document.getElementById("share").addEventListener("click", handleShare);
document.addEventListener("backbutton", handleBackButton, false);

let id;
let nbQuestions;

let storage = window.localStorage;

handleGetSession();

getScore();

function handleGetSession() {
  id = storage.getItem("id");
  nbQuestions = storage.getItem("nbQuestions");
};

function handleBackButton() {
  window.location.href = "./questions.html";
}

function getScore() {
  let rd = Math.floor(Math.random() * 500);
  document.getElementById("score").innerHTML = "Votre taux d'emprunte carbonne est de " + rd;
}

function handleReset() {
  storage.removeItem("nbQuestions");
  storage.removeItem("id");
  window.location.href = "./index.html";
}

function handleShare() {
  navigator.notification.alert(
    'The sharing link was copied into your clipboard! You can now easily send it to a friend!',
    function() {},
    'Sharing link copied',
    'Nice!'
  );
}