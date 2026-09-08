// CONFIG.JS - Configurações do jogo
const CONFIG = {
    COLORS: [
        '#FF1F8A', // Vermelho
        '#1F8FFF', // Azul
        '#2ECC71', // Verde
        '#F39C12', // Laranja
        '#9B59B6', // Roxo
        '#E74C3C', // Vermelho Escuro
        '#3498DB', // Azul Claro
        '#1ABC9C', // Ciano
        '#F1C40F', // Amarelo
        '#E67E22', // Laranja Escuro
        '#95A5A6', // Cinza
        '#34495E'  // Cinza Escuro
    ],
    
    PLAYER_SIZE: 20,
    GAME_WIDTH: 1200,
    GAME_HEIGHT: 800,
    
    SPEED: 3,
    KILL_COOLDOWN: 25000, // 25 segundos
    KILL_DISTANCE: 60,
    REPORT_DISTANCE: 40,
    
    TASKS_COUNT: 12,
    GAME_DURATION: 300, // 5 minutos
    
    ROLES: {
        CREWMATE: 'Tripulante',
        IMPOSTOR: 'Impostor'
    },
    
    MAP_LOCATIONS: [
        { name: 'Cafeteria', x: 200, y: 200 },
        { name: 'Medbay', x: 800, y: 150 },
        { name: 'Elétrica', x: 100, y: 600 },
        { name: 'Segurança', x: 400, y: 700 },
        { name: 'Sala de Motores', x: 1000, y: 600 },
        { name: 'Laboratório', x: 600, y: 400 },
        { name: 'Ar Reprocessador', x: 200, y: 500 }
    ]
};

let gameState = {
    currentScreen: 'mainMenu',
    gameStarted: false,
    players: [],
    impostors: [],
    deadPlayers: [],
    tasksDone: 0,
    gameTime: CONFIG.GAME_DURATION,
    gameRunning: false,
    selectedCharacter: null,
    discussionTime: 60,
    votedOut: null
};

let settings = {
    playerCount: 8,
    impostorCount: 1,
    discussionSpeed: 60
};
