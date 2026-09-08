// UI.JS - Interface do usuário
function toggleSettings() {
    const settingsScreen = document.getElementById('settingsScreen');
    settingsScreen.classList.toggle('hidden');

    if (!settingsScreen.classList.contains('hidden')) {
        document.getElementById('impostorCount').value = settings.impostorCount;
        document.getElementById('playerCount').value = settings.playerCount;
        updateSettingsDisplay();
    }
}

function toggleCredits() {
    document.getElementById('creditsScreen').classList.toggle('hidden');
}

function updateSettingsDisplay() {
    const impostorInput = document.getElementById('impostorCount');
    const playerInput = document.getElementById('playerCount');

    document.getElementById('impostorDisplay').textContent = impostorInput.value;
    document.getElementById('playerDisplay').textContent = playerInput.value;

    settings.impostorCount = parseInt(impostorInput.value);
    settings.playerCount = parseInt(playerInput.value);

    impostorInput.addEventListener('input', () => {
        document.getElementById('impostorDisplay').textContent = impostorInput.value;
        settings.impostorCount = parseInt(impostorInput.value);
    });

    playerInput.addEventListener('input', () => {
        document.getElementById('playerDisplay').textContent = playerInput.value;
        settings.playerCount = parseInt(playerInput.value);
    });

    const discussionSpeed = document.getElementById('discussionSpeed');
    discussionSpeed.addEventListener('change', () => {
        settings.discussionSpeed = parseInt(discussionSpeed.value);
    });
}

function openChat() {
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('chatScreen').classList.remove('hidden');
    gameState.gameRunning = false;
}

function closeChat() {
    document.getElementById('chatScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    gameState.gameRunning = true;
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (message) {
        const messagesDiv = document.getElementById('chatMessages');
        const msgEl = document.createElement('div');
        msgEl.className = 'chat-message';
        msgEl.innerHTML = `<strong>Você:</strong> ${escapeHtml(message)}`;
        messagesDiv.appendChild(msgEl);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        input.value = '';

        // Respostas de IA
        setTimeout(() => {
            const aiResponses = [
                'Vi algo estranho na elétrica!',
                'Não foi eu, estava fazendo tarefas',
                'Onde você estava?',
                'Viu o corpo onde?',
                'Preciso completar minhas tarefas',
                'Alguém viu o impostor?',
                'Foi suspeito demais!'
            ];

            gameState.players.forEach((player, idx) => {
                if (idx > 0 && !player.isDead && Math.random() > 0.5) {
                    setTimeout(() => {
                        const aiMsg = document.createElement('div');
                        aiMsg.className = 'chat-message';
                        aiMsg.innerHTML = `<strong style="color: ${player.color}">${player.name}:</strong> ${aiResponses[Math.floor(Math.random() * aiResponses.length)]}`;
                        messagesDiv.appendChild(aiMsg);
                        messagesDiv.scrollTop = messagesDiv.scrollHeight;
                    }, 500 + idx * 300);
                }
            });
        }, 300);
    }
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Inicializar quando página carregar
document.addEventListener('DOMContentLoaded', () => {
    initGame();
    
    // Configurar listeners dos sliders
    const impostorInput = document.getElementById('impostorCount');
    const playerInput = document.getElementById('playerCount');

    impostorInput.addEventListener('input', (e) => {
        document.getElementById('impostorDisplay').textContent = e.target.value;
        settings.impostorCount = parseInt(e.target.value);
    });

    playerInput.addEventListener('input', (e) => {
        document.getElementById('playerDisplay').textContent = e.target.value;
        settings.playerCount = parseInt(e.target.value);
    });
});
