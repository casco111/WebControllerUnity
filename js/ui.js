const UI = {
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    },
    
    updateStatus(text) {
        document.getElementById('status-bar').innerText = "Status: " + text;
    }
};