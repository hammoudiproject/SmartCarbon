document.getElementById("reset").addEventListener("click", handleReset);
document.getElementById("share").addEventListener("click", handleShare);
document.getElementById("back").addEventListener("click", handleBackButton);
document.addEventListener("backbutton", handleBackButton, false);


let id;
let nbQuestionsAsked;

let storage = window.localStorage;

let scores = null;

let user;
let finished = storage.getItem("finished");

handleGetSession();

function handleGetSession() {
  id = storage.getItem("id");
  nbQuestionsAsked = storage.getItem("nbQuestionsAsked");
  requeteScores().then(function (response) {
    createScores(response);
  })
};

function requeteScores() {
  return new Promise((resolve, reject) => {
    fetch('https://smartcarbon.chipmnk.dev/getUsers.php', {
        method: 'GET'
      }).then((response) => {
        if (response.ok || response.status == 404) return response.json();
        else reject(response.statusText);
      }).then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function createScores(response) {
  for(let sc of response) {
    console.log(sc);
    if(sc.idUser == id) user = sc;
  }
  getStats(response);
}

function handleBackButton() {
  if (finished == "true") {
    window.location.href = "./no-questions.html";
  } else {
    window.location.href = "./questions.html";
  }
}

function getStats(response) {
  document.getElementById("score").innerHTML = user.score;
  let footprint = (parseInt(user.score) / 7.5).toFixed(1);
  document.getElementById("footprint").innerHTML = footprint;
  // let a = response.indexOf(user) + 1;
  // let b = response.length;
  let stat = 100 - ((response.indexOf(user) + 1) / response.length * 100);
  document.getElementById("percent").innerHTML = stat.toFixed(1);
  let bar = document.getElementById("bar");
  bar.style.width = stat.toFixed(1) + "%";
  let categorie = document.getElementById("category");
  if(footprint < 26) {
    categorie.innerHTML = "Small Polluter";
    categorie.style.backgroundColor = "green";
    bar.style.backgroundColor = "green";
  } else if(footprint <51) {
    categorie.innerHTML = "Average Polluter";
    categorie.style.backgroundColor = "yellow";
    categorie.style.color = "black";
    bar.style.backgroundColor = "yellow";
  } else if(footprint > 80) {
    categorie.innerHTML = "Hard Polluter";
    categorie.style.backgroundColor = "red";
    bar.style.backgroundColor = "red";
  }
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
    function () {},
    'Sharing link copied',
    'Thank You!'
  );
  cordova.plugins.clipboard.copy("https://smartcarbon.chipmnk.dev/share/share.html?score=" + user.score);
}