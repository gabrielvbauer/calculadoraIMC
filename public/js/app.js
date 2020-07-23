let weight = document.getElementById("weight")
let height = document.getElementById("height")
const button = document.getElementById('calc')
const res = document.getElementById('res')
let imc

button.addEventListener('click', calcIMC)

function calcIMC() {
    imc = weight.value / (height.value * 2)

    formularResposta()
}

function formularResposta() {
    res.innerHTML = ''
    let respText = document.createElement('p')
    respText.setAttribute('class', 'center')
    respText.innerHTML = imc
    res.appendChild(respText)
}