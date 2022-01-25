
var url = new URL(window.location.href);

getScore();

function getScore () {
    let score = "Undefined";
    if(url.searchParams.has("score")) {
        score = url.searchParams.get("score");
    }
    let scoreSpan = document.getElementById('score');
    console.log(score);
    scoreSpan.innerHTML = score;
}