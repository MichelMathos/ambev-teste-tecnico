/*
2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, 
    seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
*/

// Função para contar a ocorrência da letra 'a' na string
function countLetterA(str) {
    // Cria uma expressão regular para encontrar 'a' ou 'A'
    const regex = /a/gi;
    // Encontra todas as ocorrências e retorna o comprimento do array resultante
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

// Função principal para solicitar a string do usuário e processar a contagem
function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Informe uma string: ', (input) => {
        const count = countLetterA(input);
        console.log(`A letra 'a' ocorre ${count} vez(es) na string.`);
        rl.close();
    });
}

main();

