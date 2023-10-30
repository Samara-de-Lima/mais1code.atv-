//Exercicios sobre funções

//Questão 1
function soma(numero1, numero2) {
    var resultado = numero1 + numero2;
    return resultado;
  }
var resultado = soma(5 , 3);
console.log(resultado)

//Questão 2
function maiorNumero(n1, n2, n3) {
    var maior = n1; 
    if (n2 > maior) {
      maior = n2; 
    }
    if (n3 > maior) {
      maior = n3; 
    }
    return maior;
  }
  var resultado = maiorNumero(5, 12, 8);
console.log(resultado); 

//Questão 3
function inverterString(texto) {
    var textoInvertido = texto.split('').reverse().join('');
    return textoInvertido;
  }
  var textoOriginal = 'Olá, mundo!';
var textoInvertido = inverterString(textoOriginal);
console.log(textoInvertido); 

//Questão 4
function contarVogais(texto) {
    texto = texto.toLowerCase();
var vogais = 'aeiou'; 
var contador = 0;
    for (var i = 0; i < texto.length; i++) {
      if (vogais.indexOf(texto[i]) !== -1) {
        contador++;
      }
    }
    return contador;
  }
var texto = "Fluminense";
var numeroDeVogais = contarVogais(texto);
console.log(numeroDeVogais);

//Questão 5
function multiplicarArray(array, multiplicador) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
      resultado.push(array[i] * multiplicador);
    }
    return resultado;
  }
var numeros = [1, 2, 3, 4, 5];
var multiplicador = 2;
var novoArray = multiplicarArray(numeros, multiplicador);
console.log(novoArray);

//Questão 6
function factorialize(number) {
    if (number < 0) 
          return -1;
    else if (number == 0) 
        return 1;
    else {
        return (number * factorialize(number - 1));
    }
  }
  console.log (factorialize(5));

  //Questão 7
  function mediaArray(array) {
    if (array.length === 0) {
      return "O array está vazio, não é possível calcular a média.";
    }
var soma = 0;
    for (var i = 0; i < array.length; i++) {
      soma += array[i];
    } 
  var media = soma / array.length;
    return media;
  }
var numeros = [2, 4, 6, 8, 10];
var resultado = mediaArray(numeros);
console.log(resultado);

//Questão 8
function contarPalavras(frase) {
var palavras = frase.split(' ');
    palavras = palavras.filter(function(palavra) {
      return palavra.trim() !== '';
    });
    return palavras.length;
  }
  var frase = 'Oi, sou um teste';
var numeroDePalavras = contarPalavras(frase);
console.log(numeroDePalavras);
  
//Questão 9
function gerarNumeroAleatorio(minimo, maximo) {
var numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return numeroAleatorio;
  }
var numeroAleatorio = gerarNumeroAleatorio(1, 100);
console.log(numeroAleatorio);

//Questão 10
function verificarPrimo(numero) {
    if (numero <= 1) {
      return 'Falso';
    }
    for (var i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return 'Falso'; 
      }
    }
    return 'Verdadeiro'; 
  }
var numero = 13;
var Primo = verificarPrimo(numero);
console.log(Primo); 

//Exercicios sobre Objetos

//Questão 1
var pessoa = {
    nome: 'Márcio',
    idade: 30,
    cidade: 'Rio de Janeiro'
  };
console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);
console.log("Cidade: " + pessoa.cidade);

//Questão 2
function mostrarInfo(pessoa) {
    console.log("Nome: " + pessoa.nome);
    console.log("Idade: " + pessoa.idade);
    console.log("Cidade: " + pessoa.cidade);
  }
  var pessoa = {
    nome: "Malu",
    idade: 22,
    cidade: 'Madureira'
  };
  mostrarInfo(pessoa);

  //Questão 3 
  var produto = {
    nome: 'Tênis',
    preço: 450.00,
    estoque: 110
  };
console.log('Nome: ' + produto.nome);
console.log('Preço: $' + produto.preço.toFixed(2)); 
console.log('Quantidade em Estoque: ' + produto.estoque);

//Questão 4
function calcularTotal(produto) {
    return produto.preço * produto.quantidadeEstoque;
  }
  var produto = {
    nome: 'Meias',
    preço: 10.00,
    quantidadeEstoque: 75
  };
  var total = calcularTotal(produto);
  console.log('Valor Total: $' + total.toFixed(2));

  //Questão 5
  var carro = {
    marca: 'Volvo',
    modelo: 'X60',
    ano: 2023,
  exibirInformacoes: function() {
      console.log("Marca: " + this.marca);
      console.log("Modelo: " + this.modelo);   
  console.log("Ano: " + this.ano);
    }
  };
  carro.exibirInformacoes();

  //Questão 6
  function contarPropriedades(objeto) {
    var contador = 0;
    for (var propriedade in objeto) {
      if (objeto.hasOwnProperty(propriedade)) {
        contador++;
      }
    }
    return contador;
  }
  var pessoa = {
    nome: 'Felipe',
    idade: 35,
    cidade: 'Nova Iguaçu'
  };
  var numeroDePropriedades = contarPropriedades(pessoa);
  console.log("Número de Propriedades: " + numeroDePropriedades); 

  //Questão 7
  var aluno = {
    nome: 'Melissa',
    notas: [9.0, 8.0, 9.2, 6.8],
    calcularMedia: function() {
      var total = 0;
      for (var i = 0; i < this.notas.length; i++) {
        total += this.notas[i];
      }
      var media = total / this.notas.length;
      return media;
    }
  };
  var media = aluno.calcularMedia();
  console.log("Média das Notas: " + media.toFixed(2)); 

  //Questão 8
  function clonarObjeto(objeto) {
    return { ...objeto };
  }
  var objetoOriginal = { nome: 'Lulli', idade: 25, cidade: 'Niterói' };
  var objetoClone = clonarObjeto(objetoOriginal);
  console.log(objetoOriginal); 
  console.log(objetoClone); 

  //Questão 9
  var estoque = {
    produtos: {}, 
    adicionarProduto: function(nomeProduto, quantidade) {
      if (this.produtos.hasOwnProperty(nomeProduto)) {
        this.produtos[nomeProduto] += quantidade;
      } else {
        this.produtos[nomeProduto] = quantidade;
      }
    },
    exibirQuantidade: function(nomeProduto) {
      if (this.produtos.hasOwnProperty(nomeProduto)) {
        return this.produtos[nomeProduto];
      } else {
        return 'O produto não encontrado no estoque';
      }
    }
  };
  estoque.adicionarProduto('Camisetas', 50);
estoque.adicionarProduto('Calças', 30);
console.log(estoque.exibirQuantidade('Camisetas')); 
console.log(estoque.exibirQuantidade('Calças')); 
console.log(estoque.exibirQuantidade('Sapatos')); 

//Questão 10
function ordenarObjetos(arrayDeObjetos, propriedade) {
    arrayDeObjetos.sort(function(a, b) {
      return a[propriedade] - b[propriedade];
    });
  }
  var pessoas = [
    { nome: 'Bruna', idade: 30 },
    { nome: 'Luiza', idade: 25 },
    { nome: 'Benício', idade: 35 }
  ];
  ordenarObjetos(pessoas, "idade");
  console.log(pessoas);
  

    
    

