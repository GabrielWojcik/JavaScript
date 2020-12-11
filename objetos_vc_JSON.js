/*
JSON - JavaScript Object Notation -TEXTO


*/
const curso = {
    nome: 'programação em java script',
    horas: 27,
    preco(){
        return this.horas * 0.67
    }
}
/*
console.log(curso); // OBJETO JAVA SCRIPT
console.log(curso.preco());
console.log(typeof(curso));
*/

// Convertendo o objeto JavaScript para JSON
/*
const json = JSON.stringify(curso);
console.log(json); //JSON
console.log(typeof(json));

//AS CHAVES DE UM JSON FICAM ENTRE ASPAS DUPLAS

// Convetendo de JSON para objeto JavaScript
const obj = JSON.parse(json);
console.log(obj);
console.log(typeof(obj));*/

//const json_errado = "{'nome': 'Programação em JavaScript', 'preço':27.99 }";
const json_corrigido = '{"nome": "Programação em JavaScript", "preço":27.99 }';
console.log(json_corrigido);
console.log(typeof(json_corrigido));

const novo_obj = JSON.parse(json_corrigido);
console.log(novo_obj);
console.log(typeof(novo_obj));