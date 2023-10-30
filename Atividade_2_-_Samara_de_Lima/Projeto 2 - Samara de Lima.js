// Questâo 1
let n = 20
if (n >= 18) {
    console.log ("Você é maior de idade")
} else {
  console.log ("Você é menor de idade")  
}

// Questâo 2
let diadasemana = 4
switch (diadasemana) {
    case dia = 1:
        console.log ("Domingo") 
        break;

        case dia = 2:
        console.log ("Segunda-Feira")
        break;

        case dia = 3:
        console.log ("Terça-Feira")
        break;

        case dia = 4:
        console.log ("Quarta-Feira")
        break;

        case dia = 5:
            console.log ("Quinta-Feira")
            break;

            case dia = 6:
            console.log ("Sexta-Feira")
            break;

            case dia = 7:
                console.log ("Sábado")
                break;

    default:
        console.log ("Dia da semana inválido")
        break;
}

//Questâo 3
let number = 9
if (number % 2  == 0) {
    console.log ('Par')
} else {
    console.log ('Ímpar')
}

//Questâo 4
let preçodoproduto = 50
let quantidadecomprada = 5
let total = quantidadecomprada * preçodoproduto
const desconto = 10/100
let descontonacompra = total * desconto

if (total >=100) {
    console.log (total - desconto)
} else {
    console.log (total)
}

// Questâo 5
let numero = 6
if ( numero >0 ) {
    console.log ('Positivo')
} else if (n == 0 ) {
    console.log ('Igual a zero')
} else 
console.log ('Negativo')


