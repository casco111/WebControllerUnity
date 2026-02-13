function connect() {
    const ip = document.getElementById('ipInput').value;
    
    connectToUnity(
        ip, 
        () => { // Wenn offen
            UI.updateStatus("Verbunden");
            UI.showScreen('screen-lobby');
            UI.showScreen('screen-car-game');
        },
        (data) => { // Wenn Nachricht kommt
            if (data.command === "SWITCH_SCREEN") {
                UI.showScreen(data.target);
            }
        }
    );
}

// Globaler Helfer für Buttons im HTML
function sendAction(name) {
    sendToUnity("action", name);
}
function sendStringAction(value){
    sendToUnity("string", value);
}