function verificarIdade() {
    let msg = window.document.getElementById('msg');
    let foto = window.document.getElementById('foto');
    let fsexo = window.document.getElementsByName('sexo')
    let idade = window.document.getElementById('idade')

    let idadeNum = Number(idade.value)
    let data = new Date();
    let anoAtual = data.getFullYear();
    soma = anoAtual - idadeNum;

    if (soma <= 0 || idadeNum > anoAtual) {
        alert('Você digitou algo errado! Tente novamente.')
    } else {
        if (soma >= 0 && soma < 14) {
            if (fsexo[0].checked) {
                msg.innerHTML = `Detectamos um Homem de ${soma} anos!`
                foto.innerHTML = `<img src="img/CriancaMasculino.png" alt="Imagem da manha">`
            } else {
                msg.innerHTML = `Detectamos uma Mulher de ${soma} anos!`
                foto.innerHTML = `<img src="img/CriancaFeminino.png" alt="Imagem da manha">`
            }
        }else if (soma >= 14 && soma < 18) {
            if (fsexo[0].checked) {
                msg.innerHTML = `Detectamos um Homem de ${soma} anos!`
                foto.innerHTML = `<img src="img/AdolescenteMasculino.png" alt="Imagem da manha">`
            } else {
                msg.innerHTML = `Detectamos uma Mulher de ${soma} anos!`
                foto.innerHTML = `<img src="img/AdolescenteFeminino.png" alt="Imagem da manha">`
            }
        }else if (soma >= 18 && soma < 60) {
            if (fsexo[0].checked) {
                msg.innerHTML = `Detectamos um Homem de ${soma} anos!`
                foto.innerHTML = `<img src="img/AdultoMasculino.png" alt="Imagem da manha">`
            } else {
                msg.innerHTML = `Detectamos uma Mulher de ${soma} anos!`
                foto.innerHTML = `<img src="img/AdultoFeminino.png" alt="Imagem da manha">`
            }
        }else if (soma >= 60) {
            if (fsexo[0].checked) {
                msg.innerHTML = `Detectamos um Homem de ${soma} anos!`
                foto.innerHTML = `<img src="img/IdosoMasculino.png" alt="Imagem da manha">`
            } else {
                msg.innerHTML = `Detectamos uma Mulher de ${soma} anos!`
                foto.innerHTML = `<img src="img/IdosaFeminino.png" alt="Imagem da manha">`
            }
        }      
    }
}