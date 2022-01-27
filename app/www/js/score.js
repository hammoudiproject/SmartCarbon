// Ajout de la fonction de reset avec le bouton "Reset"
document.getElementById("reset").addEventListener("click", handleReset);
// Ajout de la fonction de share avec le bouton "Share"
document.getElementById("share").addEventListener("click", handleShare);
// Ajout de la fonction de back avec le bouton "Back"
document.getElementById("back").addEventListener("click", handleBackButton);
// Redirige vers la page de questions quand l'utilisateur utilise le bouton back de son téléphone
document.addEventListener("backbutton", handleBackButton, false);

// Id de l'utilisateur
let id;

// Récupération du localStorage
let storage = window.localStorage;

// Score de l'ensemble des utilisateurs
let scores = null;

// Utilisateur actuel
let user;

// Valeur qui définit si les questions sont terminées ou non
let finished = storage.getItem("finished");

// Récupération de l'id et de l'ensemble des scores des utilisateurs
handleGetSession();

// Fonction de récupération de l'id et de l'ensemble des scores des utilisateurs
function handleGetSession() {
	id = storage.getItem("id");
	requeteScores().then(function (response) {
		createScores(response);
	})
};

// Récupération des scores sur la BDD externe
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

// Récupération du score de l'utilisateur actuel
function createScores(response) {
	for (let sc of response) {
		if (sc.idUser == id) user = sc;
	}
	getStats(response);
}

// Redirige vers questions.html si l'utilisateur n'a pas fini toute les questions,
// vers no-questions.html sinon
function handleBackButton() {
	if (finished == "true") {
		window.location.href = "./no-questions.html";
	} else {
		window.location.href = "./questions.html";
	}
}

// Fonction d'affichage de l'ensemble des statistiques concernant l'utilisateur sur la vue
function getStats(response) {
	// Récupération et affichage du score, du footprint et du pourcentage
	document.getElementById("score").innerHTML = user.score;
	let footprint = (parseInt(user.score) / 7.5).toFixed(1);
	document.getElementById("footprint").innerHTML = footprint;
	let stat = 100 - ((response.indexOf(user) + 1) / response.length * 100);
	document.getElementById("percent").innerHTML = stat.toFixed(1);
	// Calcul et affichage de la barre de curseur
	let bar = document.getElementById("bar");
	bar.style.width = stat.toFixed(1) + "%";
	let categorie = document.getElementById("category");
	let score = parseInt(user.score);
	// Spécification de la catégorie de pollueur de l'utilisateur
	if (score < 51) {
		categorie.innerHTML = "Small Polluter";
		categorie.style.backgroundColor = "green";
		bar.style.backgroundColor = "green";
	} else if (score < 81) {
		categorie.innerHTML = "Average Polluter";
		categorie.style.backgroundColor = "yellow";
		categorie.style.color = "black";
		bar.style.backgroundColor = "yellow";
	} else {
		categorie.innerHTML = "Hard Polluter";
		categorie.style.backgroundColor = "red";
		bar.style.backgroundColor = "red";
	}
}

// Reset les données stockées en local (sauf les questions et les réponses pour éviter de
// tout devoir recharger)
function handleReset() {
	// Défini le jeu comme non terminé
	storage.setItem("finished", false);
	// Suppression de l'id et du nombre de questions répondues
	storage.removeItem("nbQuestionsAsked");
	storage.removeItem("id");
	// Redirection vers index.html
	window.location.href = "./index.html";
}

// Fonction permettant d'afficher un pop-up sous android et de copier
// dans le presse papier un lien de partage avec le score de l'utilisateur courant
function handleShare() {
	navigator.notification.alert(
		'You can now share your score with your friends! 🥳',
		function () {},
		'Sharing link copied',
		'Thank You! 👍'
	);
	cordova.plugins.clipboard.copy("https://smartcarbon.chipmnk.dev/share/share.html?score=" + user.score);
}