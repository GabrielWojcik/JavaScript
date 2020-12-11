/*
Funcionarios
    nome,
    sobrenome,
    email,
    cpf,
    função,
    registro

Clientes
    nome,
    sobrenome,
    email,
    cpf,
    renda

Funções
    descrição
    salário
*/

class Funcao{
    constructor(descricao, salario){
        this.descricao = descricao;
        this.salario = salario;
    }
    get descricao(){
        return this._descricao;
    }
    set descricao(descricao){
        this._descricao = descricao
    }
    get salario(){
        return this._salario;
    }
    set salario(salario){
        this._salario = salario;
    }
}

class Pessoa{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }
    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }
    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }
    get email(){
        return this._email;
    }
    set email(email){
        this._email = email;
    }
    get cpf(){
        return this._cpf;
    }
    set cpf(cpf){
        this._cpf = cpf;
    }
    // Metodos extras
    get nome_completo(){
        return this._nome + ''+ this._sobrenome;
    }
    set nome_completo(nome_completo){
        //transforma a string em um array onde cada elemento do array será as partes da string por espaço
        nome_completo = nome_completo.split(' ');

        // Remove  e retorna o elemento da posição 0 do array
        this._nome = nome_completo.shift();

        // Junta os elementos do array em uma string separando cada elemento por espaço
        this._sobrenome = nome_completo.join(' ');
    }
    imprimir_dados(){
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}
// Exteds herança 
class Funcionario extends Pessoa{
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome,sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }
    get funcao(){
        return this._funcao;
    }
    set funcao(funcao){
        this._funcao = funcao;
    }
    get registro(){
        return this._registro;
    }
    set registro(registro){
        this._registro = registro;
    }
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome,sobrenome,cpf,email);
        this._renda = renda;
    }
    get renda(){
        return this._renda;
    }
    set renda(renda){
        this._renda = renda;
    }
}

/*
const c1 = new Cliente('Felicity', ' Jones', 'felicity@gmail.com', '123.410.123.10', 5645.11);
const c2 = new Cliente('Angelina', 'Joliee', 'angelinajolie@gmail.com','126.454.123.12',8000);
console.log(c1);
console.log(c2);
console.log(c1.nome_completo);
console.log(c2.nome_completo);
c1.nome_completo = 'Xuxa Meneguel';

console.log(c1);
c2.imprimir_dados();
*/
const programador = new Funcao('Programador', 4888.54);
const suporte = new Funcao('Suporte', 2799);

//console.log(programador);
//console.log(suporte);

const f1 = new Funcionario('Pedro','Silva','pedro@gmail.com','910.335.104.24',programador,'F90FF');
const f2 = new Funcionario('Maria','AnA','ana@gmail.com','104.409.839.24',suporte,'RFADA');
console.log(f1);
console.log(f2);

console.log(f1.funcao.salario);
f1.imprimir_dados();
