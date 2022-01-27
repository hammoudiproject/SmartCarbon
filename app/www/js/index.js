// Event de Cordova permettant de lancer l'application quand le téléphone est prêt
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Récupération du localStorage
    let storage = window.localStorage;

    // Lock en mode portrait
    screen.orientation.lock("portrait");

    // Si les données ne sont pas chargées, les charger
    // Puis rediriger vers home.html
    if (!storage.questions || !storage.reponses) {
        requeteServeur("getQuestions.php").then(function (response) {
            createQuestions(response);
            requeteServeur("getReponses.php").then(function (response) {
                createReponses(response);
                window.location.href = "./home.html";
            })
        })
    } else {
        window.location.href = "./home.html";
    }

    // Fonction pour envoyer une requête au serveur
    function requeteServeur(route) {
        return new Promise((resolve, reject) => {
            fetch('https://smartcarbon.chipmnk.dev/' + route, {
                    method: 'GET'
                }).then((response) => {
                    if (response.ok || response.status == 404) return response.json();
                    else reject(response.statusText);
                }).then((response) => resolve(response))
                .catch((error) => reject(error));
        });
    }

    // Crée l'ensemble des questions à partir du résultat de la requête serveur en JSON
    // dans le localStorage
    function createQuestions(json) {
        questions = [];
        for (let question of json) {
            // Création des objets JSON
            let q = {
                id: question.id,
                content: question.content,
                categorie: question.categorie,
                image: question.image,
            }
            questions.push(q);
        }
        // Ajout dans le localStorage
        storage.setItem("questions", JSON.stringify(questions));
    }

    // Crée l'ensemble des rérponses à partir du résultat de la requête serveur en JSON
    // dans le localStorage
    function createReponses(json) {
        reponses = [];
        for (let reponse of json) {
            // Création des objets JSON
            let r = {
                id: reponse.id,
                content: reponse.content,
                value: reponse.value,
                idQuestion: reponse.idQuestion,
            };
            reponses.push(r);
        }
        // Ajout dans le localStorage
        storage.setItem("reponses", JSON.stringify(reponses));
    }
}