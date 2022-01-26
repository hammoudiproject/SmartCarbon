document.getElementById("start").addEventListener("click", handleCreateSession);

let storage = window.localStorage;

function handleCreateSession() {
    let finished = storage.getItem("finished");
    if (!storage.id) {
        let id = generateId(40);
        storage.setItem("id", id);
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
        if (finished == "true") {
            window.location.href = "./no-questions.html";
        } else {
            window.location.href = "./questions.html";
        }
    }
};

function generateId(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}