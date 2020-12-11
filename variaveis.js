// Let forma mais moderna de usar variavel em Js.
// Let mantem o escopo local.

//let numero = 42;
//console.log(numero);

//let nome = 'gabriel';
//console.log(nome);


//for(let i =0;i < 5;i++){
    //let valor = i * 3;
    //console.log(valor);
//}

//console.log(valor); //Reference error
//console.log(i); //Reference error

//let numero = 80; // SyntaxError
//console.log(numero);


//let numero = 32; // SyntaxError
//console.log(numero);


// CONST //CONSTANTE!

//const TAXA = 1.44;
//console.log(TAXA);

//let res = 45 * TAXA;
//console.log(res);

//TAXA = 5;
//console.log(TAXA); // TYPE ERROR


// Constante vs Mutação
const curso = {nome: "Programação em JavaScript"};
console.log(curso.nome);

// Não posso alterar o valor de uma constante
//curso = 43; // Erro!

// Podemos realizar mutação em dados  contidos na constante
curso.nome = "Programção em Python"; // Mutação
//console.log(curso);

/*
 Dicas de como declarar variaveis em JavaScript
  - A variavel poderar ser alterada? ( vai variar?) se sim, use let.
  - A variavel sera constante? (não vai variar?) se sim, use const.
*/

const valor = 5;
for(let i =0; i<valor;i++){
    console.log(valor -i);
}







