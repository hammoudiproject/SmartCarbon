
document.getElementById("reset").addEventListener("click", handleReset);
document.getElementById("share").addEventListener("click", handleShare);
document.getElementById("back").addEventListener("click", handleBackButton);
document.addEventListener("backbutton", handleBackButton, false);


let id;
let nbQuestionsAsked;

let storage = window.localStorage;

let score = Math.floor(Math.random() * 50);;
let finished = storage.getItem("finished");

handleGetSession();

getScore();

function handleGetSession() {
  id = storage.getItem("id");
  nbQuestionsAsked = storage.getItem("nbQuestionsAsked");
};

function handleBackButton() {
  if(finished == "true") {
    window.location.href = "./no-questions.html";
  } else {
    window.location.href = "./questions.html";
  }
}

function getScore() {
  document.getElementById("score").innerHTML = "Your carbon footprint is " + score;
}

function handleReset() {
  storage.setItem("finished", false);
  storage.removeItem("nbQuestionsAsked");
  storage.removeItem("id");
  window.location.href = "./index.html";
}

function handleShare() {
  navigator.notification.alert(
    'Sharing link copied to your keyboard !',
    function() {},
    'Sharing link copied',
    'Thank You!'
  );
  cordova.plugins.clipboard.copy("https://smartcarbon.chipmnk.dev/share.html?score=" + score);
}