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