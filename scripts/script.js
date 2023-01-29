window.onload = () => {
    relogio.appendChild(display);
    relogio.appendChild(footer);
}


const relogio = document.querySelector(".relogio");

//cria uma div e aciciona a classe display
const display = document.createElement("div");
display.classList.add("display"); 

//cria a tag footer
const footer = document.createElement("footer");

//Cria o link do github e adiciona na tag footer 
const myLink = '<a href="https://github.com/hitalloazevedo" target="_blank">Hitallo Azevedo</a>'
footer.innerHTML = "Criado por " + myLink;


const atualizar_horas = () => {
    var data = new Date();

    var horario = corrigir_horario(data.getHours()) + ":" + corrigir_horario(data.getMinutes()) + ":" +corrigir_horario(data.getSeconds());

    display.textContent = horario
}

function corrigir_horario(n){
    if (n < 10){
        n = "0" + n;
    }
    return n
}

atualizar_horas()
setInterval(atualizar_horas, 1000)
