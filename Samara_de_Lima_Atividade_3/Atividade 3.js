// Lista de exercicios para estrutura de repetição

// Questão 1
for (let i=0; i <= 100; i = i + 2) { 
    console.log (i)
}

//Questão 2
var somadosquadrados = 0

for (let quadrado = 1; quadrado <= 50; quadrado++) {
    somadosquadrados += (quadrado) **2
} console.log (somadosquadrados)

//Questão 3 
let nA = 0
let nB = 1
let nC = 0
let fibonacci = ''
fibonacci += nA + '' + nB

for (let contador = 1; contador <= 16; contador++) {
    nC = nA + nB
    fibonacci = '' + nC
    nA = nB
    nB = nC
} console.log (fibonacci)

// Questão 4
var primos = 1
for (let i = 1; i <= 20; i++) {
    var contador = 0
    for (let j = 2; j <= 20; j++) {
        if (i % j == 0) { contador++ }
    }
    if (contador == 1) {
        primos *= i
    }
} console.log(primos)

// Questão 5 
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log ('Buzz'); 
    } else {
        console.log (i);
    }
}

//Quesão 6
let a = 0
let b = 1
for (let i = 0; i < 20; i++) {
    console.log(a);

    let proximoTermo = 2 * b + a;
    a = b;
    b = proximoTermo
}

//Questão 8
const linhasDaPiramide = 5;
for (let i = 1; i <= linhasDaPiramide; i++) {
    let linha = '';
    for (let j = 1; j <= i; j++) {
        linha += i;
    }
    console.log(linha);
}

//Questão 9
var numero = 4
let numeroA = 0
let numeroB = 1
let numeroC = 0
let fib = ''

fibonacci += numeroA + '' + numeroB

for (let contador = 1; numeroC <= numero; contador++) {
    numeroC = numeroA + numeroB
    fibonacci = " " + numeroC
    numeroA = numeroB
    numeroB = numeroC
}
console.log(fibonacci)

//Questão 10
var pi = 0 
var NumeroDeTermos = 5000

for(let i = 0; i <NumeroDeTermos; i++){
    let numerador = 4 * (-1)**i
    let denominador = 2 * i +1
    pi += numerador / denominador
}
console.log(pi)

//Lista de exercicios sobre Array

//Questão 1
const cores = ["Rosa", "Azul", "Verde", "Amarelo", "Roxo"];
console.log(cores);

// Questão 2
const numeros = [6, 78, 23, 56, 89, 34, 67, 9];
let maiorNumero = numeros[0]; 
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}
console.log(maiorNumero);

//Questão 3
const frutas = ["Banana", "Acerola", "Maçã"];
frutas.push ( "Uva", "Ameixa")
console.log(frutas)

//Questão 4
const medias = [7, 4, 8, 2];
var somaDasMedias = 0
var mediafFinal = 0

for (var i = 0;i < medias.length; i++){
    somaDasMedias += medias[i]
    
}
mediaFinal = somaDasMedias/medias.length
console.log(mediaFinal)

//Questão 5
const numeross = [7, 47, 6, 28, 4];
numeross.sort(function(a, b) {
    return a - b;
});
console.log(numeross);

//Questão 6
const palavras = ["Lapa", "Ipanema", "Méier", "Madureira", "Copacabana"];
let palavraMaisLonga = "";
for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > palavraMaisLonga.length) {
        palavraMaisLonga = palavras[i];
    }
}
console.log(palavraMaisLonga);

//Questão 7
const numbers = [10, 47, 8, 74, 23];
const numerosPares = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numerosPares.push(numbers[i]);
    }
}
console.log(numerosPares);

//Questão 8
const nomes = ["Alice", "Luiza", "Sofia", "Louis", "Caio"];
const nomeVerificado = "Jonas";
if (nomes.includes(nomeVerificado)) {
    console.log(nomeVerificado + " está presente no array.");
} else {
    console.log(nomeVerificado + " não está presente no array.");
}

//Questão 9
const numerosss = [99, 5, 38, 3, 27];
const numerosMaioresQue10 = numerosss.filter(function(numerosss) {
    return numerosss > 10;
});
console.log(numerosMaioresQue10);

//Questão 10
const numerostotais = [13, 5, 14, 3, 29, 9, 11, 31];
let somaDosNumerosImpares = 0;
for (let i = 0; i < numerostotais.length; i++) {
    if (numerostotais[i] % 2 !== 0) {
        somaDosNumerosImpares += numerostotais[i];
    }
}
console.log(somaDosNumerosImpares);
