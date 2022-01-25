document.getElementById("start").addEventListener("click", handleCreateSession);

let storage = window.localStorage;

function handleCreateSession() {
    if(!storage.id) {
        let id = generateId(40);
        storage.setItem("id", id);
    }
    window.location.href = "./questions.html";
};

function generateId(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}