
document.getElementById('reset').addEventListener('click', handleReset);

getScore();

function getScore() {
    var rd = Math.floor(Math.random() * 500);
    document.getElementById('score').innerHTML = "Votre taux d'emprunte carbonne est de " + rd;
}

function handleReset() {
    console.log("reset");
    window.location.href = "./index.html";
}