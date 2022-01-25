document.addEventListener("deviceready", onDeviceReady, false);

onDeviceReady();

function onDeviceReady() {    
    let storage = window.localStorage;
    
    if(!storage.questions || !storage.reponses) {
        requeteServeur("getQuestions.php").then(function(response) { 
            createQuestions(response);
            requeteServeur("getReponses.php").then(function(response) { 
                    createReponses(response);
                    window.location.href = "./home.html";
            })
        })
    } else {
        window.location.href = "./home.html";
    }
    
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
    
    function createQuestions(json) {
        questions = [];
        for(let question of json) {
            let q = {
                id: question.id,
                content: question.content,
                categorie: question.categorie,
                image: question.image,
            }
            questions.push(q);
        }
        storage.setItem("questions", JSON.stringify(questions));
    }
    
    function createReponses(json) {
        reponses = [];
        for(let reponse of json) {
            let r = {
                id: reponse.id,
                content: reponse.content,
                value: reponse.value,
                idQuestion: reponse.idQuestion,
            };
            reponses.push(r);
        }
        storage.setItem("reponses", JSON.stringify(reponses));
    }
}