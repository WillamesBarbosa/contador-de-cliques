var contador = 0;
let tela = document.getElementById('tela');

function somar(){
    contador = contador + 1;
    tela.value = `${contador}`
}

function resetar(){
    contador = 0;
    tela.value = `${contador}`
}

function subtrair(){
    contador = contador - 1
    if(contador <= 0){
        contador = 0;
    }
    tela.value = `${contador}`

}
