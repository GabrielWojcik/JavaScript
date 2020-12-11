
const curso = {
    nome: 'Programação em Js',
    horas: 25,
    preco: 27.99
}
//console.log(curso);
//console.log(typeof(curso));

//console.log(Object.keys(curso));

//console.log(Object.values(curso)); //somente os valores


//console.log(Object.entries(curso));

//Object.entries(curso).forEach(par =>{ /chave e valor
  //  console.log(`${par[0]}: ${par[1]}}`);
//});

//Object.entries(curso).forEach(([chave, valor]) =>{     //chave e valor
    //console.log(`${chave}: ${valor}`); 
//});

// Definindo uma propriedade
/*
Object.defineProperty(curso, 'publicacao',{
    enumerable: true, //chave normal // false fica invisivel
    writable: false, //pode atualizar o valor? // false nao, true sim
    value: '07/12/2020'
});
console.log(curso);

// Se tentar fazer alteração nao será possivel pois o Writable está em False

const outro = {}

Object.defineProperties(outro, '', {

});*/

/*
Object.freeze(curso); //freeze congela, nao permite a escrita

curso.nome = 'Dança da garrafa';
console.log(curso);*/

const usuarios = [
    {nome: 'Aline moraes', empresa: 'Geek University'},
    {nome: 'Gabriel Wojcik', empresa: 'Google'},
    {nome: 'Felipe xavier', empresa: 'Sony'}
]
//console.log(usuarios);

// GERA UMA TABELA ALTOMATICAMENTE
console.table(usuarios);
