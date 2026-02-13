let socket;

function connectToUnity(ip, onOpen, onMessage) {
    socket = new WebSocket(`ws://${ip}:8080/game`);

    socket.onopen = onOpen;
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        onMessage(data);
    };
    
    socket.onclose = () => {
        UI.showScreen('screen-login');
        document.getElementById('status-bar').innerText = "Status: Getrennt";
    };
}

function sendToUnity(type, value) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type, value, ts: Date.now() }));
    }
}