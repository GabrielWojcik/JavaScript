//array contendo 5 elementos
// [0] [1] [2] [3] [4] indices posição do elemento no array
// valores em um array:
// [12] [24][36] [48][52]
// detalhes
// possuem tamanho infinito ,podemos colocar qualquer tipo de dado
//Forma 1
var alunos = new Array('Cristina','Ricardo','Lucas','Maria','Sofia');
// console.log(alunos);

//Forma 2 [RECOMENDADA]
var notas = [1, 5, 7, 8];
// console.log(notas);
if(notas[5]==undefined){
    notas[5] = 54;
}
// console.log(notas[5]);//undefined
// console.log(notas[6]);//undefined
// console.log(notas[7]);//undefined
// console.log(notas[8]);//undefined
// console.log(notas[9]);//10

// console.log(notas[5] == undefined);//undefined

// Criando um array vazio
//var dados = [];
//console.log(dados);

// Fazendo acesso ao valor de um indice
//console.log(notas[2]);

//Alterando o valor apartir do indice
// notas[2] = 20;
// console.log(notas);

//Atenção ao acessaor um valor com um indice que não existe
// notas[9]=10; //nao existe


// Inserindo elementos no final do array
var nomes = ['Paula','Maria','julia'];
// console.log(nomes);

nomes.push('Vanessa'); // insere o valor no final do arrays
// console.log(nomes);

//  Tamanho do array
// console.log(nomes.length); // 4
var tam = nomes.length;

// console.log(tam); 

//  Ordernar os dados de array
var alunos = ['Vera','Lucia','Pedro','Fernanda','Mario','AnA','Carla'];
// console.log(alunos);
// alunos.sort(); //  Ordenando array de strings
// console.log(alunos);

var precos = [123.87, 43.98,88.0,1];
// console.log(precos);
// precos.sort(); // sort considera sempre em strings
// console.log(precos);
precos.sort(function(a ,b){return a - b;});
//console.log(precos);
var idades = [5,1,8,12,44,78];
//console.log(idades);
idades.sort(function(a,b){return a - b;});
//console.log(idades);

// Deletando dados de um array
delete idades[3];
//console.log(idades);

idades[3] = 12;
//console.log(idades);

//idades.splice(3, 1); // A partir do indice 3, delete um elemento. Forma recomnedada para deletar um indice do array.
//console.log(idades);

//idades.splice(3, 0, 56, 89); // A partir do indice 3, não delete nenhum, mas adicione 56, 89.
//console.log(idades);

//idades.splice(3, 1, 23); // A  partir do indice 3, apaga 1 e adiciona 23
//console.log(idades);
// idades[3] = 23;

// Iterar em um array
for(var i =0; i<idades.length;i++){
    //console.log(idades[i]);
}

//Removendo elemenstos da ultima posição do array
//idades.pop(); //Remove e retorna p ultimo elemento de um array
//console.log(idades);

//var ret = idades.pop();
//console.log(ret);
//console.log(idades);

// Removendo o primeiro elemento de um array
//idades.shift(); // remove e retorna o ultimo elemento de um array
//console.log(idades);

//var ret = idades.shift();
//console.log(ret);
//console.log(idades);

// Inserindo elementos no inicio de um array
//idades.unshift(99);
//console.log(idades);

// Retorna um novo array a partir do indice informado
//var novo = idades.slice(3);
//console.log(novo);

//var novo = idades.slice(1, 2); // a partir do indice 1, pegue até o indice 2 sem inclui-lo
//console.log(novo);

var pares = [2,4,6,8,10];
var impares = [1,3,5,7,9];

var rest = pares.concat(impares); // concatena os dois arrays
//console.log(rest);

rest = impares.concat(pares);
//console.log(rest);

rest.sort(function(a,b){return a-b});
//console.log(rest);


// 4 x 4
var tabuleiro = [[1 ,2, 3, 4],  [5, 6, 7, 8],    [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(tabuleiro);
console.log(tabuleiro[0][0]); // linha 0 coluna 0
console.log(tabuleiro[2][2]); // linha 2 coluna 2





