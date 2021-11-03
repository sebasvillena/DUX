/*--------------------------------------------------*/
//sección de preguntas
const questions = [
    
    [
        { name: "agua", ruta:"images/agua.jpg", correct: true, alt:"Water bottle", comentario:
        "It's recomended to take enough water for at least a day. Remember to save bottles for your whole family!"},
        { name: "juguete", ruta: "images/juguete.jpg", correct: false, alt:"Rubix cube toy", comentario:
        "Toys are fun, but they aren't a priority during emergencies."},
        { name: "silla", ruta: "images/silla.jpg", correct: false, alt:"Chair", comentario: 
        "Chairs (and other furniture) are too heavy to take with you during emergencies!"},          
    ],
    [
        { name: "vela", ruta: "images/vela.jpg", correct: true, alt:"Candles", 
        comentario:"Remember to take something to light them up, like lighters or matches!"},
        { name: "planta", ruta:"images/planta.jpg", correct: false, alt:"Plant", 
        comentario:"Sadly, plants aren't a priority during emergencies."},
        { name: "pelota-futbol", ruta: "images/pelota-futbol.jpg", correct: false, alt:"Football ball", 
        comentario:"Toys are fun, but they aren't a priority during emergencies."}          
    ],
    [
        {name:"botiquin", ruta: "images/botiquin.jpg", correct: true, alt:"First aid kit", 
        comentario: "First aid kits are very important. Remember to have one prepared with all you could need in case of emergencies."},
        {name:"basura", ruta: "images/basura.jpg", corect: false, alt: "Trash can", 
        comentario: "Trash cans aren't important during emergencies."},
        {name:"escoba", ruta:"images/escoba.jpg", correct: false, alt: "Broom", 
        comentario: "Broom's arent important during emergencies."}
    ],
    [
        {name:"DNI", ruta:"images/dni.jpg", correct:true, alt:"Important documentation", 
        comentario:"Remember to take all the important documentation of your family! It's recomended to store them in waterproof bags to prevent any damages."},
        {name:"Oso de peluche", ruta:"images/osoPeluche.jpg", correct: false, alt:"Teddy bear", 
        comentario:"Toys and teddy bears arent important in case of emergencies. If there is enough time and space, you can take one or two with you, though."},
        {name:"Licuadora", ruta:"images/licuadora.jpg", correct: false, alt:"Blender", 
        comentario:"Appliances aren't important during emergencies."}
    ],
    [
        {name:"Linterna", ruta:"images/linterna.jpg", correct:true, alt:"Flashlight", 
        comentario:"Don't forget to take extra charged batteries with you!"},
        {name:"Anillo", ruta:"images/anillo.jpg", correct:false, alt:"Ring", 
        comentario:"Jewelry isn't important during an emergency."},
        {name:"Guitarra", ruta:"images/guitarra.jpg", correct:false, alt:"Guitar", 
        comentario:"Musical instruments aren't useful during an emergency."}
    ]
]

/*-------- PUNTAJES ---------*/
var puntaje = 0;
var puntaje_opcion_correcta = 10;
var puntaje_opcion_incorrecta = -5;
var puntaje_aux;

var configuration_menu_previous;
document.getElementById("option-arrastrar-imagen").checked=true
//Traigo los elementos del menú principal
const settingsButton = document.getElementById("settings-btn");
const helpButton = document.getElementById("help-btn");
const showIntroButton = document.getElementById("start-btn");
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

//Traigo los elementos de la pantalla de introduccion al juego
const introContainer = document.getElementById("game-introduction-container")
const startButton = document.getElementById("game-start-button")
const gameBackButton2 = document.getElementById("game-back-btn2")
//Seteo comportamiento a los botones
startButton.addEventListener('click', showGame)
gameBackButton2.addEventListener('click', gameBack)

//obtiene las preguntas y las mezcla
var shuffledQuestions, currentQuestionIndex
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0

//Traigo los elementos de la pantalla de fin de nivel
const nextLvlContainer = document.getElementById("game-lvl-score-container");
const reintentarButton = document.getElementById("game-reintentar-btn");
//Seteo comportamiento de los botones para reintentar
reintentarButton.addEventListener('click', retryLevel)

function getAnswerData(otherName){
    var answer = shuffledQuestions[currentQuestionIndex-1].find( ({name}) => name == otherName)
    return answer
}

//Traigo los elementos de la pantalla de pausa
const pauseContainer = document.getElementById("game-pause-container")
const gameBackButton = document.getElementById("game-back-btn")
const unpauseButton = document.getElementById("game-unpause-btn")
const configButton = document.getElementById("config-from-pause-button")
//Seteo comportamiento de los botones para abrir y cerrar la pantalla
gameBackButton.addEventListener('click', gameBack)
configButton.addEventListener('click', showSettingsFromPauseButton)
unpauseButton.addEventListener('click', gameUnpause)
//mover aca el boton de ir al menu y eso (aun no va)


//Traigo los elementos de la pantalla de juego
const gameContainer = document.getElementById("game-container")
const pauseButton = document.getElementById("game-pause-btn")
//Seteo comportamiento de los botones para abrir y cerrar la pantalla
//showIntroButton.addEventListener('click', showGame)
showIntroButton.addEventListener('click', showGameIntro)
pauseButton.addEventListener('click', gamePause)
//inicio el juego con un set de imagenes
nextQuestion()

const gameOverMainMenuButton = document.getElementById("game-main-menu")
gameOverMainMenuButton.addEventListener("click", gameOverMenu)
function gameNextLevel(answer){
    if (answer.correct){
        puntaje_aux = puntaje_opcion_correcta 
        gameSuccess()
    } else {
        puntaje_aux = puntaje_opcion_incorrecta
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
    document.getElementById("cartel-titulo").innerHTML = "Careful!"
    document.getElementById("imagen-resultado").src = "images/opcion-incorrecta.png"

    messageContainer = document.getElementById("mensaje-container")
    
    messageContainer.classList.remove("hide")
    messageContainer.classList.add("message-container-warning")
}


function gameSuccess(){
    //Código para mostrar cartel de success, en el futuro cuando tengamos la variable global
    //con el nivel actual, tendríamos que setear ese texto en vez de este placeholder
    document.getElementById("cartel-titulo").innerHTML = "Very good!"
    document.getElementById("imagen-resultado").src = "images/opcion-correcta.png"

    messageContainer = document.getElementById("mensaje-container")
    messageContainer.classList.remove("hide")
    messageContainer.classList.add("message-container-success")
}

function nextLevel(){
    puntaje = puntaje + puntaje_aux;
    self.nextQuestion();
    showGameAgain()
}

function retryLevel(){
    messageContainer.classList.remove("message-container-success")
    messageContainer.classList.remove("message-container-warning")
    showGameAgain()
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
    }else{
        document.getElementById("game-siguiente-btn-container").classList.remove("hide")
        document.getElementById("game-finalizar-btn-container").classList.add("hide")
    }
    messageContainer = document.getElementById("mensaje-container")
    messageContainer.classList.add("hide")
    messageContainer.classList.remove("message-container-success")
    messageContainer.classList.remove("message-container-warning")
    document.getElementById("cartel-titulo").innerHTML = ""
    document.getElementById("cartel-texto").innerHTML = ""    
    document.getElementById("img_option_default").checked = true
}

function newImageSet(question){
    shuffledOptions = question.sort(() => Math.random() - .5)
    document.getElementById("img1").src = question[0].ruta
    document.getElementById("img1").alt = question[0].alt
    document.getElementById("img1").name = question[0].name
    document.querySelector("form").elements.img_option_1.nextElementSibling.innerHTML = question[0].alt.charAt(0).toUpperCase() + question[0].alt.toLowerCase().slice(1)
    document.getElementById("img2").src = question[1].ruta
    document.getElementById("img2").alt = question[1].alt
    document.getElementById("img2").name = question[1].name
    document.querySelector("form").elements.img_option_2.nextElementSibling.innerHTML = question[1].alt.charAt(0).toUpperCase() + question[1].alt.toLowerCase().slice(1)
    document.getElementById("img3").src = question[2].ruta
    document.getElementById("img3").alt = question[2].alt
    document.getElementById("img3").name = question[2].name
    document.querySelector("form").elements.img_option_3.nextElementSibling.innerHTML = question[2].alt.charAt(0).toUpperCase() + question[2].alt.toLowerCase().slice(1)
    
}


function enableAccessibility(){
    document.getElementById("game-select-option-btn-container").classList.remove("hide")
    for(let i=1; i<4; i++){
        document.getElementById("img_option_" + i).classList.remove("hide")
        document.getElementById("img" + i +"_container").classList.remove("draggable")
    }
    document.querySelector("form").elements.img_option_1.nextElementSibling.classList.remove("hide")
    document.querySelector("form").elements.img_option_2.nextElementSibling.classList.remove("hide")
    document.querySelector("form").elements.img_option_3.nextElementSibling.classList.remove("hide")
    document.getElementById("imgBag").classList.add("hide")
}

function disableAccessibility(){
    document.getElementById("game-select-option-btn-container").classList.add("hide")
    for(let i=1; i<4; i++){
        document.getElementById("img_option_" + i).classList.add("hide")
        document.getElementById("img"+ i +"_container").classList.add("draggable")
    }
    document.querySelector("form").elements.img_option_1.nextElementSibling.classList.add("hide")
    document.querySelector("form").elements.img_option_2.nextElementSibling.classList.add("hide")
    document.querySelector("form").elements.img_option_3.nextElementSibling.classList.add("hide")
    document.getElementById("imgBag").classList.remove("hide")
}


/*----------------------------------------------------------------------------------*/
//Funciones para intercambiar pantallas

document.getElementById("game-select-option-btn").addEventListener("click", function(){
    elementos = document.querySelector("form").elements
    console.log(elementos)
    if(elementos[1].checked){
        console.log(1)
        gameNextLevel(getAnswerData(elementos[1].previousElementSibling.previousElementSibling.name))
    }else if(elementos[2].checked){
        console.log(2)
        gameNextLevel(getAnswerData(elementos[2].previousElementSibling.previousElementSibling.name))
    }else if (elementos[3].checked){
        console.log(3)
        gameNextLevel(getAnswerData(elementos[3].previousElementSibling.previousElementSibling.name))
    }
})

function gameOverMenu(){
    menuContainer.classList.remove('hide')
    document.getElementById("finDeJuego-conatiner").classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    puntaje = 0
    nextQuestion()
}

function showFinish(){
    puntaje = puntaje + puntaje_aux;
    nextLvlContainer.classList.add("hide")
    document.getElementById("puntaje-fin-juego").innerHTML = "Your final score is " + puntaje
    document.getElementById("finDeJuego-conatiner").classList.remove("hide")
}

function showGameIntro(){
    menuContainer.classList.add('hide')
    introContainer.classList.remove('hide')
}

function showGame(){
    menuContainer.classList.add('hide')
    introContainer.classList.add('hide')
    gameContainer.classList.remove('hide')
}

function gameBack(){
    menuContainer.classList.remove('hide')
    introContainer.classList.add('hide')
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

function showSettingsFromPauseButton(){
    configuration_menu_previous = "Pausa"
    pauseContainer.classList.add('hide')
    showSettings()
}

function showSettings(){
menuContainer.classList.add('hide')
settingsContainer.classList.remove('hide')
}

function settingsBack(){
    if(document.getElementById("option-seleccionar-imagen").checked){
        enableAccessibility()
    }else{
        disableAccessibility()
    }
    if (configuration_menu_previous == "Pausa"){
        pauseContainer.classList.remove('hide')
    } else {
        menuContainer.classList.remove('hide')
    }
    configuration_menu_previous = "";
    settingsContainer.classList.add('hide')
}

function cambiarPantallaPuntajeNivel(){
    gameContainer.classList.add('hide')
    nextLvlContainer.classList.remove('hide')
}

function showGameAgain(){
    gameContainer.classList.remove('hide')
    nextLvlContainer.classList.add('hide')
}