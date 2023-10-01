function tabuada() {
    let numero = window.document.getElementById('numero');
    let caixa = window.document.getElementById('caixa');
    
    let resNumero = Number(numero.value)

    caixa.innerHTML = " "
    if (numero.value.trim() === ""){
        alert('Erro! Digite um numero.')
    } else {
        let tabuada = 10
        for (let i=0; i<=tabuada; i++) {
            let item = document.createElement('option')
            soma = i * resNumero;
            item.innerHTML += `${resNumero} x ${i} = ${soma}\n`
            caixa.appendChild(item)
        }
    }
}