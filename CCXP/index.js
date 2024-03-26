const dias = window.document.getElementById('dia')
const horas = window.document.getElementById('hora')
const minutos = window.document.getElementById('minuto')
const segundos = window.document.getElementById('segundo')

const lancamento = "31 dec 2024"

function countDown(){
    const dataLanc =  new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dias.innerHTML = formatoTempo(finalDias)
    horas.innerHTML = formatoTempo(finalHoras)
    minutos.innerHTML = formatoTempo(finalMinutos)
    segundos.innerHTML = formatoTempo(finalSegundos)
}

function formatoTempo(tempo){
return tempo < 10? `0${tempo}` : tempo;
}

countDown();

setInterval(countDown, 1000)