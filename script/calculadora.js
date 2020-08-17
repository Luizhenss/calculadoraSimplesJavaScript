var valor

function botao(num) {
    valor = document.calc.visor.value += num
}

function reset() {
    document.cal.visor.value = ''
}

function calcule() {
    resultado = eval(valor)
    document.calc.visor.value = resultado.toLocaleString('pt-br')
}