const formular = document.getElementById('formular');
const resultado = document.getElementById('resultado');

formular.addEventListener('submit', function(event){
    event.preventDefault();

    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);

    if (isNaN(lado1) || isNaN(lado2) || lado1 <= 0 || lado2 <= 0) {
        resultado.textContent = 'Por favor, insira valores válidos para largura e comprimento.';
    } else {
        const area = lado1 * lado2;
        resultado.textContent = `A área do terreno é ${area} m².`;
    }

});
