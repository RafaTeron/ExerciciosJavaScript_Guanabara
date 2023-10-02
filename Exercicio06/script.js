let list = []
let caixa = window.document.getElementById('caixa');
let msg = window.document.getElementById('msg')
let msgMaior = window.document.getElementById('msgMaior')
let msgMenor = window.document.getElementById('msgMenor')
let somando = window.document.getElementById('somando')
let media = window.document.getElementById('media')
let numero = window.document.getElementById('numero');



function inNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    return l.includes(Number(n));
}

function adicionar() {
    let resNumero = Number(numero.value)

    if (inNumero(resNumero) && !inLista(resNumero, list)) {
        list.push(resNumero)
        let item = document.createElement('option')
        item.innerHTML += `O número ${resNumero} foi adicionado.`
        caixa.appendChild(item)
    } else {
        alert("Erro! Valor invalido ou ja encontrado na lista.")
    }
    numero.value = ''
    numero.focus()

}

function finalizar() {
    if (list.length == 0) {
        alert('Adicione numero na lista.')
    } else {
        let maior = Number.NEGATIVE_INFINITY;
        let menor = Number.POSITIVE_INFINITY;
        let soma = 0
        for (let pos in list) {
            soma += list[pos]
            if (list[pos] > maior) {
                maior = list[pos]
            }
            if (list[pos] < menor) {
                menor = list[pos]
            }
        }
        let mediaSoma = soma / list.length;
        msg.innerHTML = ''
        msg.innerHTML += `<p>Ao todo, temos ${list.length} números cadastrados.</p>`
        msg.innerHTML += `<p>O maior valor na lista é: ${maior}.</p>`
        msg.innerHTML += `<p>O menor valor na lista é: ${menor}.</p>` 
        msg.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        msg.innerHTML += `<p>A media dos valores digitados é ${mediaSoma}.</p>`
    }
   
}

function reiniciar() {
    list = []
    caixa.innerHTML = ''
    msg.innerHTML = ''
    msgMaior.innerHTML = ''
    msgMenor.innerHTML = ''
    somando.innerHTML = ''
    media.innerHTML = ''
}