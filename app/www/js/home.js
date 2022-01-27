// Crée la session quand l'utilisateur clique sur le bouton start
document.getElementById("start").addEventListener("click", handleCreateSession);

// Récupération du localStorage
let storage = window.localStorage;

// Crée ou récupère la session dans le localStorage
function handleCreateSession() {
    // Détecte si l'utilisateur a déjà répondu à l'ensemble des questions
    let finished = storage.getItem("finished");
    // Si l'id n'est pas dans le localStorage, le génère
    if (!storage.id) {
        let id = generateId(40);
        storage.setItem("id", id);
        // Crée l'utilisateur dans la BDD avec le nouvel id puis redirige vers
        // la page questions
        new Promise((resolve, reject) => {
            fetch('https://smartcarbon.chipmnk.dev/createUser.php?idUser=' + id, {
                method: 'GET'
            }).then((response) => {
                if (response.ok || response.status == 404) {
                    if (finished == "true") {
                        window.location.href = "./no-questions.html";
                    } else {
                        window.location.href = "./questions.html";
                    }
                } else reject(response.statusText);
            }).catch((error) => reject(error));
        });
    } else {
        // Si l'utilisateur a fini, le redirige vers la page no-questions.html
        // Sinon vers questions.html
        if (finished == "true") {
            window.location.href = "./no-questions.html";
        } else {
            window.location.href = "./questions.html";
        }
    }
};

// Fonction de génération d'un id aléatoire avec des numéros et caractères
function generateId(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}