
function fotoDoDia() {
    let msg = window.document.getElementById('msg');
    let foto = window.document.getElementById('foto');
    let ola = window.document.getElementById('ola')
    let data = new Date();
    let horaAtual = data.getHours();
    //let horaAtual = 0;  modificar manualmente a hora

    msg.innerHTML = `Agora são ${horaAtual} hrs.`
    if (horaAtual >= 6 && horaAtual < 12) {
        foto.innerHTML = `<img src="img/manha.png" alt="Imagem da manha">`
        ola.innerHTML = `<strong>BOM DIA!!</strong>`
        document.body.style.background = "#fff200ca"
    } else if (horaAtual >= 12 && horaAtual < 18) {
        foto.innerHTML = `<img src="img/tarde.png" alt="Imagem da tarde">`
        ola.innerHTML = `<strong>BOM TARDE!!</strong>`
        document.body.style.background = "#84b10aef"
    } else if (horaAtual >= 18 && horaAtual <= 23) {
        foto.innerHTML = `<img src="img/noite.png" alt="Imagem da noite">`
        ola.innerHTML = `<strong>BOM NOITE!!</strong>`
        document.body.style.background = "#020b37d3"
    } else {
        foto.innerHTML = `<img src="img/madrugada.png" alt="Imagem da madrugada">`
        ola.innerHTML = `<strong>BONS SONHOS!!</strong>`
        document.body.style.background = "#020114"
    }
}