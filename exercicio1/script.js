const formular = document.getElementById('formular');
const resultado = document.getElementById('resultado');

formular.addEventListener('submit', function(event){
    event.preventDefault();

    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);

    if (verificaValores(lado1, lado2)) {
        resultado.textContent = 'Por favor, verifique a inserção dos seus dados.';
    } else {
        const area = calcular(lado1, lado2);
        result(area);
    }

});

verificarValores = function(valor1, valor2) {
    if (isNaN(valor1) || isNaN(valor2) || valor1 <= 0 || valor2 <= 0) {
        resultado.textContent = 'Por favor, insira valores válidos para largura e comprimento.';
    }
}

calcular = function(value1, value2) {
    return value1 * value2;
}

result = function(area) {
    return resultado.textContent = `A área do terreno é ${area} m².`;
}
