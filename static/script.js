/*--------------------------------------------------*/
//sección de preguntas
const questions = [
    
    [
        { name: "agua", ruta:"images/agua.jpg", correct: true, alt:"Botella de agua"},
        {name: "juguete", ruta: "images/juguete.jpg", correct: false, alt:"Juguete cubo de rubik"},
        { name: "silla", ruta: "images/silla.jpg", correct: false, alt:"Silla"}            
    ],
    [
        {name: "vela", ruta: "images/vela.jpg", correct: true, alt:"Velas"},
        { name: "planta", ruta:"images/planta.jpg", correct: false, alt:"Plantas o macetas" },
        { name: "pelota-futbol", ruta: "images/pelota-futbol.jpg", correct: false, alt:"Pelota de futbol"}            
    ]
]

//Traigo los elementos del menú principal
const settingsButton = document.getElementById("settings-btn");
const helpButton = document.getElementById("help-btn");
const startButton = document.getElementById("start-btn");
const menuContainer = document.getElementById("menu-container")

//traigo los elementos de la pantalla de configuración
const settingsContainer = document.getElementById("settings-container");
const settingsBackButton = document.getElementById("settings-back-btn");
//Seteo comportamiento de los botones para abrir y cerrar la pantalla
settingsButton.addEventListener('click', showSettings)
settingsBackButton.addEventListener('click', settingsBack)

//Traigo los elementos de la pantalla de ayuda
const helpContainer = document.getElementById("help-container");
const helpBackButton = document.getElementById("help-back-btn");
//Seteo comportamiento de los botones para abrir y cerrar la pantalla
helpButton.addEventListener('click', showHelp)
helpBackButton.addEventListener('click', helpBack)



//obtiene las preguntas y las mezcla
let shuffledQuestions, currentQuestionIndex
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0


//Traigo los elementos de la pantalla de juego
const gameContainer = document.getElementById("game-container")
const gameBackButton = document.getElementById("game-back-btn")
//Seteo comportamiento de los botones para abrir y cerrar la pantalla
startButton.addEventListener('click', showGame)
gameBackButton.addEventListener('click', gameBack)
//inicio el juego con un set de imagenes
nextQuestion()
//traigo dos botones creados para ver el funcionamiento de los carteles de error/success
const successButton = document.getElementById("game-success-btn")
successButton.addEventListener("click", gameSuccess)
const warningButton = document.getElementById("game-wrong-btn")
warningButton.addEventListener('click', gameWarning)





function gameWarning(){
    //Código para mostrar cartel de error, en el futuro cuando tengamos la variable global
    //con el nivel actual, tendríamos que setear ese texto en vez de este placeholder
    document.getElementById("cartel-titulo").innerHTML = "Cuidado!"
    document.getElementById("cartel-texto").innerHTML = "La opción no es la correcta"
    messageContainer = document.getElementById("mensaje-container")
    messageContainer.classList.remove("hide")
    messageContainer.classList.add("message-container-warning")
    nextButton = document.getElementById("game-siguiente-btn")
    nextButton.addEventListener("click", nextQuestion)
}


function gameSuccess(){
    //Código para mostrar cartel de success, en el futuro cuando tengamos la variable global
    //con el nivel actual, tendríamos que setear ese texto en vez de este placeholder
    document.getElementById("cartel-titulo").innerHTML = "Muy bien!"
    document.getElementById("cartel-texto").innerHTML = "Mensaje de por qué es correcto"
    messageContainer = document.getElementById("mensaje-container")
    messageContainer.classList.remove("hide")
    messageContainer.classList.add("message-container-success")
    nextButton = document.getElementById("game-siguiente-btn")
    nextButton.addEventListener("click", nextQuestion)
}


function nextQuestion(){
    //Código que limpia las propiedades del cartel, en el futuro, tiene que obtener una
    //nueva pregunta y tendría que ponerla en pantalla
    newImageSet(shuffledQuestions[currentQuestionIndex])
    currentQuestionIndex = currentQuestionIndex + 1
    if(shuffledQuestions.length < currentQuestionIndex + 1){
        document.getElementById("game-siguiente-btn-container").classList.add("hide")
        document.getElementById("game-finalizar-btn-container").classList.remove("hide")
        finishButton = document.getElementById("game-finalizar-btn")
        finishButton.addEventListener("click", showFinish)
    }
    messageContainer = document.getElementById("mensaje-container")
    messageContainer.classList.add("hide")
    messageContainer.classList.remove("message-container-success")
    messageContainer.classList.remove("message-container-warning")
    document.getElementById("cartel-titulo").innerHTML = ""
    document.getElementById("cartel-texto").innerHTML = ""
}

function newImageSet(question){
    shuffledOptions = question.sort(() => Math.random() - .5)
    document.getElementById("img1").src = question[0].ruta
    document.getElementById("img1").alt = question[0].alt
    document.getElementById("img2").src = question[1].ruta
    document.getElementById("img2").alt = question[1].alt
    document.getElementById("img3").src = question[2].ruta
    document.getElementById("img3").alt = question[2].alt
}

/*----------------------------------------------------------------------------------*/
//Funciones para intercambiar pantallas

function showFinish(){
    gameContainer.classList.add("hide")
    document.getElementById("finDeJuego-conatiner").classList.remove("hide")
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


