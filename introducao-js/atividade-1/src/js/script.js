const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const result = calculeIMC(weight,height)
    console.log(result);
    
    const imcValue = document.getElementById('value');
    imcValue.textContent = result;

    if(result > 0){
        const imcInfo = document.getElementById('imc-information');
        imcInfo.style.display = 'block';
    }
});

function calculeIMC(weight, height){
    return (weight / (height * height)).toFixed(2);
}

console.log(calculeIMC(80, 1.60))
