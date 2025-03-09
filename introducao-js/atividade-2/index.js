const prompt = require('prompt-sync')();

const numNotas = 3;
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

const calcularMedia = (notas) => {
    let media = 0;
    notas.forEach((nota) => {
        media += nota;
    })

    return media / notas.length;
}


const calcularFaltas = () => {
    const faltas = +prompt("Digite o número de faltas: ");
    while(isNaN(faltas) || faltas < 0){
        console.log("Digite um valor positivo");
        faltas = +prompt("Digite o número de faltas: ");
    }

    return faltas;
};

let numMaterias = 0;
const aluno = prompt("Digite o nome do(a) aluno(a): ");
const materias = [];
let continuar = true;

while(continuar){
    let materia = prompt("Digite o nome da matéria: ");
    let notas = capturaNotas();
    let media = calcularMedia(notas);
    let faltas = calcularFaltas();
    let situacao = "";

    if(faltas > 5){
        situacao = "Reprovado(a) por faltas";
    } else if(media >= 6){
        situacao = "Parabéns! Você foi aprovado(a)";
    } else{
        console.log(`Voce irá para recuperação em ${materia}`);
        let recuperacao = capturaNotas();
        let mediaRecuperacao = calcularMedia(recuperacao);

        if(mediaRecuperacao >= 6){
            situacao = "Parabéns! Aprovado(a) após a recuperação";
        } else {
            situacao = "Infelizmente você foi reprovado(a)";
        }
    }

    materias.push({
        materia: materia,
        notas: notas,
        media: media,
        faltas: faltas,
        situacao: situacao
    });

    numMaterias++;
    if(numMaterias < 3){
        console.log("Você precisar adicionar no mínimo 3 matérias!")
    } else {
        let adicionar = prompt("Deseja adicionar outra matéria? (sim / não): ").toLowerCase();
        if(adicionar !== "sim"){
            continuar = false;
        }
    }
}

console.log("\nResultados:");
console.log(`Aluno(a): ${aluno}`);
materias.forEach((materia) => {
    console.log(`\nMatéria: ${materia.materia}`);
    console.log(`Notas: ${materia.notas.join(', ')}`);
    console.log(`Média: ${materia.media.toFixed(2)}`);
    console.log(`Faltas: ${materia.faltas}`);
    console.log(`Status: ${materia.situacao}`);
});
