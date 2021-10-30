// Tipos de Dados

let string,number,boolean,undefinedi,typeArray,myObject,nulo

string = 'Thomás'
number = 19
boolean = true

typeArray = [
    0,
    1,
    2,
    3,
    "Thomas",
    "Jovem",
    {},
    () => {return função},
    {type:"array"}
            ]

myObject = {
    name: "Thomás",
    age: 19,
    correr: () => {
        return name + " está correndo"
    }

}

nulo = null


// Váriaveis var, let e const

// var é uma declaração de variavel global, sofre o hoisting
// let e const são variaveis locais, não sofrem o hoisting
// nomear variaveis sempre com camelCase e dar signigicado aos nomes

// Declaration assignment var

let variable  // → Só a declaração, faz com que ela fique "undefined"

console.log(variable)

variable = "Anything Value" // Agora sim ela recebeu algum valor

console.log(variable)



// Concatenando e Interpolando

console.log(`Here have ${variable}`)  // Interpolação

console.log(variable + " in any Local")  // Concatenação

// Objects

const person = {
    name: "Thomás",
    age: 19,
    pular: function(){
        return "Pulando"
    },
    hair: "Black",
    talents: {
        play: "Experiente",
        sleep: "Constantemente",
    }
}

console.log(person.name + " " + person.age)

console.log(person.talents.play)


// Arrays

const meuArray = ["Thomás", 19, () => { return "Bonito"}, {name: "meuArray[0]", age: "Não sabe"}]

console.log(meuArray)

console.log(meuArray[1])

console.log(meuArray[2]())  // Executa a função que está dentro do Array

console.log(meuArray[3].name)


// Functions

function sayMyName(name){           // Ela assim sofre o hoisting
    return name
}


console.log(sayMyName("Nome da Função"))


// Exemplo hoisting com Função

console.log(runFunc("Im Running"))

function runFunc(run){
    return run
}



// Arrow Function

() => {}   // Atalho para uma Função


// Callback Function

// Pode se chamar uma função, tendo seu argumento outra função   Ex:

const writePhrase = (param) => {
    return param()
}

console.log(writePhrase((frase) => {
    frase = "Aqui vai uma frase"
    return frase
}))


// Funções Construtoras

function Car(tipo,pot) {
    this.tipo = tipo
    this.cilindradas = pot
}


const bmw = new Car("Esportivo",300)

console.log(bmw.tipo)


// Type conversion

let any = "195"

Number(any)
console.log(Number(any))

// Contando caracteres

let anything = "Vários Caracteres"

console.log(anything.length)

let num = 1594

console.log(String(num).length)

// Casas decimais

num = 15487.51564645

console.log(num.toFixed(2).replace(".",","))

//Maiúsculas e Minúsculas  toUpperCase()  toLowerCase()


// Separando String

let myNameArray = "Thomás Emanue Brito Dixini"
myNameArray = myNameArray.split(" ")

console.log(myNameArray)

let nameWithUnderline = myNameArray.join("_")

console.log(nameWithUnderline)


// Encontrando palavras em uma frase

let theFrase = "Alguma frase qualquer"

console.log(theFrase.includes("frase"))


// Strings para Arrays 

let toArray = "Nami"

console.log(Array.from(toArray))


// Manipulando array

let techs = ["Html","css","Js"]

// Adicionar um item no fim
techs.push("nodejs")
console.log(techs)

// Adicionar no Começo
techs.unshift("Elixir")
console.log(techs)

//Remover do fim
techs.pop()
console.log(techs)

//Remover do Início
techs.shift()
console.log(techs)

//Pegando somente alguns elementos do array
console.log(techs.slice(1,3))

//Remover varios elementos do array
//techs.splice(1,3)
console.log(techs)

//Encontrar a posição de um elemento no array
let index = techs.indexOf("css")
console.log(index)



    


