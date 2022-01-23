document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById('deviceready').classList.add('ready');
    
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
