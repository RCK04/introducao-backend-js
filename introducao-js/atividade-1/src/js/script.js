// Selecionar formulário pelo ID
const form = document.getElementById('form');
// Adicionando eventListener no formulário ao ser enviado o form
form.addEventListener('submit', (e) => {
    // Previnir o recarregamento da página ao clicar no botão
    e.preventDefault();

    // Variáveis para obter os valores de peso e altura
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validação
    if(weight <= 0 || height <= 0 || !weight || !height || weight > 600 || height > 2.6){
        alert("Insira valores válidos nos campos de Peso e Altura.");
        return;
    }

    // Calcular o IMC
    const result = calculateIMC(weight,height)

    // Variável que recebe o elemento com ID value
    const imcValue = document.getElementById('value');
    // Exibir no elemento de ID value o valor obtido na variável result
    imcValue.textContent = result;

    // Variável que recebe o elemento de ID imc-information
    const imcInfo = document.getElementById('imc-information');
    // Torna visível na tela
    imcInfo.style.display = 'block';

    // Variável que recebe o elemento de ID desc-value
    const imcDescription = document.getElementById('desc-value');
    // Exibir a descrição na tela com base no valor da variável result
    imcDescription.textContent = description(result);

});

// Função com o cálculo do IMC
function calculateIMC(weight, height){
    return (weight / (height * height)).toFixed(2);
};

// Função que descreve o resultado do IMC
function description(result){
    if(result < 18.5){
        return 'Abaixo do peso';
    } else if(result < 24.9){
        return 'Peso normal';
    } else if(result < 29.9){
        return 'Sobrepeso';
    } else {
        return 'Obesidade';
    }
};

// Testes no console para exemplos
console.log(calculateIMC(80, 1.60), description(calculateIMC(80,1.60)));
console.log(calculateIMC(89, 1.87), description(calculateIMC(89, 1.87)));
console.log(calculateIMC(68, 1.52), description(calculateIMC(68, 1.52)));

