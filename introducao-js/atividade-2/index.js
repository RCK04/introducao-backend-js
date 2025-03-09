const prompt = require('prompt-sync')();
// Numéro de notas por cada matéria
const numNotas = 3;
/**
 * Recebe 3 notas válidas (entre 0 e 10) do usuário
 * @returns {number[]} um array contendo 3 notas válidas
 */
const capturaNotas = () => {
    let notas = [];
    for (let i = 0; i < numNotas; i++){
        const nota = +prompt(`${i + 1} - Digite a nota: `);
        while(isNaN(nota)|| nota < 0 || nota > 10){
            console.log("Nota inválida! Digite um valor entre 0 e 10");
            nota = +prompt(`${i + 1} - Digite a nota: `);
        }
        notas.push(nota);
        
    }

    return notas;
};

/**
 * Calcula a média das notas fornecidas
 * @param {number[]} notas - Um array contendo as notas da matéria 
 * @returns {number} - A média das notas
 */
const calcularMedia = (notas) => {
    let media = 0;
    notas.forEach((nota) => {
        media += nota;
    })

    return media / notas.length;
}

/**
 * Verifica o número de faltas do usuário e esse número precisa ser positivo
 * @returns {number} - O número de faltas do aluno
 */
const calcularFaltas = () => {
    const faltas = +prompt("Digite o número de faltas: ");
    while(isNaN(faltas) || faltas < 0){
        console.log("Digite um valor positivo");
        faltas = +prompt("Digite o número de faltas: ");
    }

    return faltas;
};

// Número de matemárias
let numMaterias = 0;
// Nome do aluno
const aluno = prompt("Digite o nome do(a) aluno(a): ");
// Array de matérias
const materias = [];
let continuar = true;

// Enquanto continuar for true, irá repetir
while(continuar){
    // Adicionar nome da matéria
    let materia = prompt("Digite o nome da matéria: ");
    // Receber notas
    let notas = capturaNotas();
    // Verificar média
    let media = calcularMedia(notas);
    // Número de faltas
    let faltas = calcularFaltas();
    let situacao = "";

    // Caso o número de faltas seja maior que 5 seŕa reprovado por faltas
    if(faltas > 5){
        situacao = "Reprovado(a) por faltas";

    // Caso a média seja maior igual a 6 o aluno é aprovado
    } else if(media >= 6){
        situacao = "Parabéns! Você foi aprovado(a)";

    // Caso contrário irá para recuperação
    } else{
        console.log(`Voce irá para recuperação em ${materia}`);
        // Verificar notas na recuperação
        let recuperacao = capturaNotas();
        // Obter média das notas da recuperação
        let mediaRecuperacao = calcularMedia(recuperacao);
        // Se essa média for maior que 6 é aprovado, caso contrário é reprovado
        if(mediaRecuperacao >= 6){
            situacao = "Parabéns! Aprovado(a) após a recuperação";
        } else {
            situacao = "Infelizmente você foi reprovado(a)";
        }
    }

    // Chamar nosso array de materias e fazer um push com os resultados obtidos
    materias.push({
        materia: materia,
        notas: notas,
        media: media,
        faltas: faltas,
        situacao: situacao
    });

    numMaterias++;
    // Se o número de matérias for menor que 3 irá retornar a mensagem no console
    if(numMaterias < 3){
        console.log("Você precisar adicionar no mínimo 3 matérias!")
    } else {
        let adicionar = prompt("Deseja adicionar outra matéria? (sim / não): ").toLowerCase();
        if(adicionar !== "sim"){
            continuar = false;
        }
    }
}
// Resultado no console
console.log("\nResultados:");
console.log(`Aluno(a): ${aluno}`);
materias.forEach((materia) => {
    console.log(`\nMatéria: ${materia.materia}`);
    console.log(`Notas: ${materia.notas.join(', ')}`);
    console.log(`Média: ${materia.media.toFixed(2)}`);
    console.log(`Faltas: ${materia.faltas}`);
    console.log(`Status: ${materia.situacao}`);
});
