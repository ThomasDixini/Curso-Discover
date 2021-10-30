/*

<= Aula 1 =>

<script src="./scripts.js"></script> → Usado para chamar o arquivo js no HTML


*/

/*

<= Aula 2 =>

// Comentário de uma linha

/* Comentário
    Multilinha
*/

/*

<= Aula 3 =>

String

"" // Aspas Duplas
'' // Aspas Simples
`` // Crase → Para multilinha

*/

/*

<= Aula 4 =>

Number

33 // Inteiros
50.6 // Reais - Float
NaN  // Not a Number
Infinity  // Infinto Obs: Tem que ter o "I" maiúsculo

*/

/*

<= Aula 5 =>

Boolean

    * Dois valores
        true // verdadeiro
        false // falso

*/

/*

<= Aula 6 =>

- Undefined
    * indefinido
        → Algo que não existe

- null
    * nulo
    * Objeto que não possui nada dentro
    * diferente de indefinido
    * Existe mas não tem algo dentro
*/

/*

<= Aula 7 =>

- Object
    * Objeto
        → Propriedades / Atributos
        → Funcionalidades / Métodos / Ação

        Sintaxe do Objeto

    {propriedade: "valor"}

    Exemplos:
        
        console.log({
    name: "Thomás",
    idade: 19,
    andar: function(){
        console.log("Andar")
    }
})


*/

/*

<= Aula 8 =>

- Arrays [Vetores]
    * Lista
    * Agrupamentos de Dados
    
    Exemplos:

    console.log([
    "Mayk",
    18,
    "Thomás",
    'Emanuel'

])

["Leite","Ovos","Manteiga","Sabão"]

*/

/*

<= Aula 9 =>

- Tipos de Dados / Data types
    * Primitive / Primitive Value
    * Structural
    * Structural Primitive

# Primitivos

        → Number
        → String
        → Undefined
        → Boolean
        → Symbol
        → BigInt

# Structural

        * Object
            → Array
            → Set
            → Map
            → Date
            → ...

        * Functions
    
# Structural Primitive

        * null


*/

/* 

<= Aula 10 =>

- Variavéis
    * Nomes simbólicos para receber algum valor
    * Atalhos de Código
    * Identificadores
    * 3 palavras reservadas para criar variáveis:
        → var 
        → let
        → const  (Não pode mudar seu valor)

        Exemplos:
            var clima = "Quente"
            console.log(clima)

            let chuva = "Forte"
            console.log(chuva)

            const texto = "ABC"
            console.log(texto)


*/

/*

<= Aula 11 =>

- Scope

    * var é global e também local
    * Hoisting / Elevação
    
        

    console.log("Existe x antes do bloco?", x)

    {
        var x = 0
    }

    console.log('Existe x depois do bloco?', x)


        Hoisting
            ↓

        (var x) Parte não visível 

    console.log("Existe x antes do bloco?", x)

    {
         x = 0
    }

    console.log('Existe x depois do bloco?', x)

*/

/*

<= Aula 12 =>

- Let e Const só funcionam no escopo em que elas forem criadas, elas são locais.

*/

/* 

<= Aula 13 =>

    * Declaration var name
    * Assignment name = "ThomásS"


var name = "Thomás"
var boolean = true
var idade = 19
var fatalError = undefined


console.log(typeof(name))
console.log(typeof(boolean))
console.log(typeof(idade))
console.log(typeof(fatalError))

var Name = "Tho"
var name = "João"

console.log(name)
console.log(Name)


let name, age, isHuman


age = 189
isHuman = true

console.log("O " + name + " tem " + age + " anos")

console.log(`O ${name} tem ${age} anos`)



const people = {
    name: "Thomás",
    age: 19,
    experience: true,
    peso: 80 + "Kg"
}

console.log(`O ${people.name} tem ${people.age} anos. ${people.peso}`)



const animals = [
    'Lion',
    'Monkey',
    'Bird',
    'Dog',
    {
        name: "Cat",
        age: 32
    }
]

console.log(animals[0])

console.log(animals[2])

console.log(animals.length)

console.log(animals[4].name)

console.log(animals[4])

*/

var weight

console.log(typeof(weight))

// let name = "Thomás"
// let numero = 19
// let salario = 1170.68
// let condiçao = true

const student = {
    name:  "Thomás",
    numero:  19,
    salario:  1170.68,
    condiçao: true
    
}

//console.log(`${student.name} de idade ${student.numero} anos, tem salário de ${student.salario}$`)

let students = [
    student
]




const student1 = {
    name:  "Jonas",
    numero:  22,
    salario:  1170.68,
    condiçao: true
    
}

/*students = [
    student,
    student1
]
*/

students[1] = student1

console.log(students)


console.log(a)
var a = 1
