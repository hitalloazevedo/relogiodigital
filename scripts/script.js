function atualizar_horas(){
    var data = new Date();
    var display = document.querySelector(".display")

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
