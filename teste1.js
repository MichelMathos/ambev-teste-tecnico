/*
1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
    (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
    ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

function isPerfectSquare(x) {
    if (x < 0) return false;
    let s = Math.sqrt(x);
    return s === Math.floor(s);
}

function isFibonacci(num) {
    // Um número é Fibonacci se e somente se um (ou ambos) dos seguintes valores é um quadrado perfeito:
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}

function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Informe um número: ', (input) => {
        const num = parseInt(input);

        if (isNaN(num)) {
            console.log('Por favor, insira um número válido.');
        } else {
            if (isFibonacci(num)) {
                console.log(`O número ${num} pertence à sequência de Fibonacci.`);
            } else {
                console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
            }
        }

        rl.close();
    });
}

main();
