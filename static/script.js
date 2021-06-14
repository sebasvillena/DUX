const settingsButton = document.getElementById("settings-btn");
const helpButton = document.getElementById("help-btn");
const startButton = document.getElementById("start-btn");
const menuContainer = document.getElementById("menu-container")

const settingsContainer = document.getElementById("settings-container");
const settingsBackButton = document.getElementById("settings-back-btn");
settingsButton.addEventListener('click', showSettings)
settingsBackButton.addEventListener('click', settingsBack)

const helpContainer = document.getElementById("help-container");
const helpBackButton = document.getElementById("help-back-btn");
helpButton.addEventListener('click', showHelp)
helpBackButton.addEventListener('click', helpBack)


const gameContainer = document.getElementById("game-container")
const gameBackButton = document.getElementById("game-back-btn")
startButton.addEventListener('click', showGame)
gameBackButton.addEventListener('click', gameBack)
const successButton = document.getElementById("game-success-btn")
successButton.addEventListener("click", gameSuccess)
const warningButton = document.getElementById("game-wrong-btn")
warningButton.addEventListener('click', gameWarning)





function gameWarning(){
    document.getElementById("cartel-titulo").innerHTML = "Cuidado!"
    document.getElementById("cartel-texto").innerHTML = "Le pifiaste"
    messageContainer = document.getElementById("mensaje-container")
    messageContainer.classList.remove("hide")
    messageContainer.classList.add("message-container-warning")
    nextButton = document.getElementById("game-siguiente-btn")
    nextButton.addEventListener("click", nextQuestion)
}


function gameSuccess(){
    document.getElementById("cartel-titulo").innerHTML = "Muy bien!"
    document.getElementById("cartel-texto").innerHTML = "Mensaje de por qué es correcto"
    messageContainer = document.getElementById("mensaje-container")
    messageContainer.classList.remove("hide")
    messageContainer.classList.add("message-container-success")
    nextButton = document.getElementById("game-siguiente-btn")
    nextButton.addEventListener("click", nextQuestion)
}



function nextQuestion(){
    messageContainer = document.getElementById("mensaje-container")
    messageContainer.classList.add("hide")
    messageContainer.classList.remove("message-container-success")
    messageContainer.classList.remove("message-container-warning")
    document.getElementById("cartel-titulo").innerHTML = ""
    document.getElementById("cartel-texto").innerHTML = ""
}

function showGame(){
    menuContainer.classList.add('hide')
    gameContainer.classList.remove('hide')
}

function gameBack(){
    menuContainer.classList.remove('hide')
    gameContainer.classList.add('hide')
}

function showHelp(){
    menuContainer.classList.add('hide')
    helpContainer.classList.remove('hide')
    }
    
    function helpBack(){
        menuContainer.classList.remove('hide')
        helpContainer.classList.add('hide')
    }

function showSettings(){
menuContainer.classList.add('hide')
settingsContainer.classList.remove('hide')
}

function settingsBack(){
    menuContainer.classList.remove('hide')
    settingsContainer.classList.add('hide')
}