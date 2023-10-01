function contagem() {
    let msg = window.document.getElementById('msg');
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')

    let inicioNum = Number(inicio.value)
    let fimNum = Number(fim.value)
    let passoNum = Number(passo.value)

    msg.innerHTML = " "
    if (inicio.value.trim() === "" || fim.value.trim() === "" || passo.value.trim() === "") {
        msg.innerHTML = `Impossível contar!`
        alert('Você digitou algo errado! Tente novamente.')
    } else {
        if (passoNum <= 0) {
            passoNum = 1;
            alert('Passo inválido, considerando como passo 1')
        }
        if (inicioNum < fimNum){
            for (let i = inicioNum; i <= fimNum; i += passoNum) {
                msg.innerHTML += `${i} 👉`;
            }
            msg.innerHTML += '🚩'
        } else {
            for (let i = inicioNum; i >= fimNum; i -= passoNum) {
                msg.innerHTML += `${i} 👉`;
            }
            msg.innerHTML += '🚩'
        }
    }
    
    
}