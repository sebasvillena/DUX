/*--------------------------------------------------*/
//sección de preguntas
const questions = [
    
    [
        { name: "agua", ruta:"images/agua.jpg", correct: true, alt:"Botella de agua", comentario:"¡Es buena idea llevar agua para mantenernos hidratados!"},
        { name: "juguete", ruta: "images/juguete.jpg", correct: false, alt:"Juguete cubo de rubik", comentario:"Los juguetes son divertidos, pero no son realmente una prioridad en las emergencias."},
        { name: "silla", ruta: "images/silla.jpg", correct: false, alt:"Silla", comentario: "¡Las sillas (y otros muebles) son muy pesados para llevarlos!"}            
    ],
    [
        { name: "vela", ruta: "images/vela.jpg", correct: true, alt:"Velas", comentario:"¡Las velas son muy útiles, con ellas podemos ver de noche!"},
        { name: "planta", ruta:"images/planta.jpg", correct: false, alt:"Plantas o macetas", comentario:"Lamentablemente, las plantas no son realmente una prioridad durante las emergencias."},
        { name: "pelota-futbol", ruta: "images/pelota-futbol.jpg", correct: false, alt:"Pelota de futbol", comentario:"Los juguetes son divertidos, pero no son realmente una prioridad en las emergencias."}            
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
var shuffledQuestions, currentQuestionIndex
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0

//Traigo los elementos de la pantalla de fin de nivel
const nextLvlContainer = document.getElementById("game-lvl-score-container");

function getAnswerData(otherName){
    console.log(otherName)
    var answer = shuffledQuestions[currentQuestionIndex-1].find( ({name}) => name == otherName)
    console.log(answer)
    return answer
}

//Traigo los elementos de la pantalla de pausa
const pauseContainer = document.getElementById("game-pause-container")
const gameBackButton = document.getElementById("game-back-btn")
const unpauseButton = document.getElementById("game-unpause-btn")
//Seteo comportamiento de los botones para abrir y cerrar la pantalla
gameBackButton.addEventListener('click', gameBack)
unpauseButton.addEventListener('click', gameUnpause)
//mover aca el boton de ir al menu y eso (aun no va)


//Traigo los elementos de la pantalla de juego
const gameContainer = document.getElementById("game-container")
const pauseButton = document.getElementById("game-pause-btn")
//Seteo comportamiento de los botones para abrir y cerrar la pantalla
startButton.addEventListener('click', showGame)
pauseButton.addEventListener('click', gamePause)
//inicio el juego con un set de imagenes
nextQuestion()

const gameOverMainMenuButton = document.getElementById("game-main-menu")
gameOverMainMenuButton.addEventListener("click", gameOverMenu)
function gameNextLevel(answer){
    if (answer.correct){
        gameSuccess()
    } else {
        gameWarning()
    }
    document.getElementById("cartel-texto").innerHTML = answer.comentario

    nextButton = document.getElementById("game-siguiente-btn")
    nextButton.addEventListener("click", nextLevel)

    self.cambiarPantallaPuntajeNivel();  
}

function gameWarning(){
    //Código para mostrar cartel de error, en el futuro cuando tengamos la variable global
    //con el nivel actual, tendríamos que setear ese texto en vez de este placeholder
    document.getElementById("cartel-titulo").innerHTML = "¡Cuidado!"
    messageContainer = document.getElementById("mensaje-container")
    messageContainer.classList.remove("hide")
    messageContainer.classList.add("message-container-warning")
}


function gameSuccess(){
    //Código para mostrar cartel de success, en el futuro cuando tengamos la variable global
    //con el nivel actual, tendríamos que setear ese texto en vez de este placeholder
    document.getElementById("cartel-titulo").innerHTML = "¡Muy bien!"
    messageContainer = document.getElementById("mensaje-container")
    messageContainer.classList.remove("hide")
    messageContainer.classList.add("message-container-success")
}

function nextLevel(){
    self.nextQuestion();
    gameContainer.classList.remove('hide')
    nextLvlContainer.classList.add('hide')
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
    document.getElementById("img1").name = question[0].name
    document.getElementById("img2").src = question[1].ruta
    document.getElementById("img2").alt = question[1].alt
    document.getElementById("img2").name = question[1].name
    document.getElementById("img3").src = question[2].ruta
    document.getElementById("img3").alt = question[2].alt
    document.getElementById("img3").name = question[2].name
}

/*----------------------------------------------------------------------------------*/
//Funciones para intercambiar pantallas

function gameOverMenu(){
    menuContainer.classList.remove('hide')
    console.log(currentQuestionIndex)

    document.getElementById("finDeJuego-conatiner").classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
console.log(currentQuestionIndex)
nextQuestion()
}

function showFinish(){
    nextLvlContainer.classList.add("hide")
    document.getElementById("finDeJuego-conatiner").classList.remove("hide")
}

function showGame(){
    menuContainer.classList.add('hide')
    gameContainer.classList.remove('hide')
}

function gameBack(){
    menuContainer.classList.remove('hide')
    pauseContainer.classList.add('hide')
}

function gamePause(){
    pauseContainer.classList.remove('hide')
    gameContainer.classList.add('hide')
}

function gameUnpause(){
    gameContainer.classList.remove('hide')
    pauseContainer.classList.add('hide')
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

function cambiarPantallaPuntajeNivel(){
    gameContainer.classList.add('hide')
    nextLvlContainer.classList.remove('hide')
}