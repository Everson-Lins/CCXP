const ingressos = [];


function addRedBorder (id){

    element = document.querySelector(`#${id})`);
    element.style.border = "5px solid red";
}


function highlightCard (selector){

    var element = document.querySelector(selector);
    element.classList.toggle("cardHighlight");
}

function checkKeyBoardCode(){

    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        // Alert the key name and key code on keydown
        alert(`Tecla pressionada ${name} \r\n Key code: ${code}`);
    }, false);
}

function addKeyboardEventListener(){

    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        if(code == 'Digit1') {
            ingresso1.classList.toggle("cardHighlight");
            ingresso2.classList.remove("cardHighlight");
            ingresso3.classList.remove("cardHighlight");
            ingresso4.classList.remove("cardHighlight");
        }

        if(code == 'Digit2') {
            ingresso1.classList.remove("cardHighlight");
            ingresso2.classList.toggle("cardHighlight");
            ingresso3.classList.remove("cardHighlight");
            ingresso4.classList.remove("cardHighlight");
        }

        if(code == 'Digit3') {
            ingresso1.classList.remove("cardHighlight");
            ingresso2.classList.remove("cardHighlight");
            ingresso3.classList.toggle("cardHighlight");
            ingresso4.classList.remove("cardHighlight");
        }
        
        if(code == 'Digit4') {
            ingresso1.classList.remove("cardHighlight");
            ingresso2.classList.remove("cardHighlight");
            ingresso3.classList.remove("cardHighlight");
            ingresso4.classList.toggle("cardHighlight");
        } 
    }, false);
}

 selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("cardSelected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}

 showSeletectCards = () => {
    if(ingressos.length > 0) alert ("Ingressos Selecionados:" + ingressos);
}
//checkKeyBoardCode();


addKeyboardEventListener();
