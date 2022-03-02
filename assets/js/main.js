const relogio = document.querySelector('.relogio');
const start = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let seconds = 0;
let timer;

function getTimeSeconds(seconds){
    let data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    });
}

function startRelogio(){
    timer = setInterval(function(){
        seconds++;
        relogio.innerHTML = getTimeSeconds(seconds);
    }, 1000);
}

document.addEventListener('click',function(e){
    const element = e.target;

    if(element.classList.contains('iniciar')){ 
        clearInterval(timer);
        startRelogio();
    };

    if(element.classList.contains('pausar')){
        clearInterval(timer);
    };

    if(element.classList.contains('zerar')){
        relogio.innerHTML = '00:00:00';
        seconds = 0;
        clearInterval(timer);
    };
});
