// Forma 1

function somar1(num1, num2){
    return num1 + num2;

}
console.log(somar1(4,6));

// Forma 2

let somar2 = function(num1, num2){
    return num1 + num2;
}
console.log(somar2(4,6));

// Forma 3
let somar3 = somar1;
console.log(somar3(4,6));

// Arrow Function
let somar4 = (num1, num2) => {
    return num1 + num2;
}

console.log(somar4(4,6));

/*
Atenção:
Caso a sua funçao tenha apenas 1 parametro de entrada e executa apenas uma linha ,
voce pode simplificar ainda mais usando Arrow Function
*/
let dobrar = valor => valor * 2;
console.log(dobrar(10));

function mensagem1(){
    console.log('Mensagem');
}
mensagem1();

const msg = () => console.log('MENSAGEMSSS');
msg();