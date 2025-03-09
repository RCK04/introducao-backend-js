const prompt = require('prompt-sync')();

const numNotas = +prompt("Quantas notas deseja adicionar? ");
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
};

const calcularMedia = (notas) => {
    let media = 0;
    // const soma = notas.reduce((acumalador, nota) => acumalador + nota, 0);
    // return soma / notas.length;
    notas.forEach((nota) => {
        media += nota;
    })

    media /= notas.length;

    return media;
}


const calcularFaltas = () => {
    const faltas = +prompt("Digite o número de faltas: ");
    while(isNaN(faltas) || faltas < 0){
        console.log("Digite um valor positivo");
        faltas = +prompt("Digite o número de faltas: ");
    }

    return faltas;
};

const aluno = prompt("Digite o nome do(a) aluno(a): ");
const materias = [];
let continuar = true;

while(continuar){
    let materia = prompt("Digite o nome da matéria: ");
    let notas = capturaNotas();
    let media = calcularMedia(notas);
    let faltas = calcularFaltas();

    materias.push({
        materia: materia,
        notas: notas,
        media: media,
        faltas: faltas,
        situacao: (media >= 6 && faltas <= 5) ? "Parabéns! Você foi aprovado(a)" : "Reprovado!"
    });

    let adicionar = prompt("Deseja adicionar outra matéria? (sim / não): ").toLowerCase();
    if(adicionar !== "sim"){
        continuar = false;
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
// let notas = [];
// const numNotas = +prompt("Quantas notas deseja adicionar? ");
// let media = calcularMedia(notas);
// notas = [];
// return media;

// const media1 = capturaNotas();
// if(media1 >= 6){
//     console.log("");
//     console.log(`Aluno aprovado com média: ${media1}`)
//     console.log("");
// } else{
//     console.log("");
//     console.log(`Aluno não aprovado com média: ${media1}`);
//     console.log(`Encaminhando para recuperação`);
//     console.log("");

//     const media2 = capturaNotas();

//     if(media2 >= 6){
//         console.log("");
//         console.log(`Aluno aprovado com média: ${media2}`)
//         console.log("");
//     } else{
//         console.log("");
//         console.log(`Aluno reprovado com média: ${media2}`);
//         console.log("");
//     }
// }
