

/*function createPhrases() {
    console.log("Hello World")
    console.log("Sejam muito Bem-vindos")
    console.log("Aos códigos do Thomás")
}

createPhrases()
createPhrases()
createPhrases()
createPhrases()
createPhrases()
createPhrases()
*/



/*const sum = function(n1, n2) {
        console.log(n1 + n2)
}

sum(2, 3)

function subtrate(n1, n2) {
        console.log(n1 - n2)

        return 0;
}

subtrate(20,10)

*/



/*
const sum = function(n1,n2) {
    let total = n1+n2
    return total
}

var number1 = 10
var number2 = 50

console.log(`O número 1 é: ${number1}`)
console.log(`O número 2 é: ${number2}`)
console.log(`A soma deles é: ${sum(number1,number2)}`)



let study

function createThink(){
    study = "Estudando"

    return study
}
let na = "Hello World"
console.log(study)
console.log(createThink(study))
console.log(study)




const dizerNome = (name) => {
    console.log(name)
}
dizerNome("Thomas")




function sayMyName(name) {
    console.log("Antes de executar a callback")

    name()

    console.log("Depois de executar a callback")
}

sayMyName(
    () => {
        console.log("Estou na callback")
    }
)



function Person(name,age,city){
    this.name = name
    this.age = age
    this.city = city
    this.andar = function() {
        return this.name + " Está Andando"
    }
    this.vector = ["Olá","Hello"]
}

const thomas = new Person("Thomas",19,"Três Pontas")

console.log(thomas.vector[0])


function Animals(raça,cor,patas){
    this.raça = raça
    this.cor = cor
    this.patas = patas
    this.morder = () => {
        return "Mordendo"
    }
}

let dog = new Animals()

console.log(dog.morder())



console.log(Number("9") + 5)
console.log("9" + Boolean(5))


let word,number

word = "Algomuito grandemesmocara"
number = 1234.56

console.log(word.length)
console.log(String(number).length)



let number = 34589.568974

console.log(number.toFixed(3).replace(".",",") + "$")


let word = "thomas é dahora"

console.log(word.toUpperCase())

word = "VISH TESTANDO SÓ"

console.log(word.toLowerCase())

word.t




let phrase = "I love you baby!"
let myArray = phrase.split(" ")
let phraseWithUnderline = myArray.join("_")

console.log(phraseWithUnderline)



let phrase = "I love you baby!"
console.log(phrase.includes("baby"))

phrase = "I love you baby!"
console.log(phrase.includes("Baby"))





/*
let otherArray = new Array(1,2,3)


console.log(otherArray)


let aArray = ["a" , {type: "array"} , () => {return "alo"}]

console.log(aArray.length)

console.log(aArray[2]())   // Executando a função do array
console.log(aArray[1].type)



let word = "manipulation"

console.log(Array.from(word))

let age = 16

const canDrive = age >= 18 ? 'Can drive' : "Can't Drive"
console.log(canDrive)


let wolf = 'alpha'
 
wolf += ' ' + 2

console.log(wolf)



function calculate(number1,operator,number2){
let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;

    }

    return result
}

console.log(calculate(4,'+',4))


function sayMyName(name){
    if(name === ""){
            throw new Error()
    }

    console.log("After Function")
}

try{
    sayMyName("")
} catch(e){
    console.log(e)
}



for(let i = 0; i < 10; i++){
    console.log(i)
}




const person = {
    age: 30,
    weight: 88.6,
}


for(let propriedade in person){


    let name = "Thomás"
    let names = ["João","Luiz","Gabriel"]

    for(let name of names){
        console.log(`${name}: ${person[propriedade]} `)
    }



}










function transform(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = (score < 90) && (score >= 80)
    let scoreC = (score < 80) && (score >= 70)
    let scoreD = (score < 70) && (score >= 60)
    let scoreE = (score < 60) && (score >= 50)
    let scoreF = (score < 50) && (score >= 0)

    let scoreFinal;

    if(scoreA){
        scoreFinal = "A"
    } else if(scoreB){
        scoreFinal = "B"
    } else if(scoreC){
        scoreFinal = "C"
    } else if(scoreD){
        scoreFinal = "D"
    } else if(scoreE){
        scoreFinal = "E"
    } else if(scoreF){
        scoreFinal = "F"
    } else {
        throw scoreFinal = new Error().stack;
    }
    
    return scoreFinal
}

try {
    transform(score)

}catch(e){
    console.log(e)
}

console.log(transform(88))



let family = {
    incomes: [3000,1170,1170],
    dispeses: [400,1000,600,420],
}

function familyExpenses() {
  
    let revenues 
    let expenses 
    let totalRevenues = 0
    let totalExpenses = 0
    let response

    for ( revenues of family.incomes){
        totalRevenues += revenues
    }

    for( expenses of family.dispeses){
        totalExpenses += expenses
    }

    response = totalRevenues - totalExpenses

    return response
}

console.log(familyExpenses())

function toUp(word) {
        wordUpper = word.toUpperCase()
        return wordUpper
}

function transformTemperature(temp) {

  

    const celsiuExist = temp.toUpperCase().includes('C')
    const farenheitExist = temp.toUpperCase().includes('F')

    let toCelsius
    let toFarenheit

    if(celsiuExist){
        let arrayTemperature = temp.split('C')
        let tempCelsius = arrayTemperature[0]
        Number(tempCelsius)

        toFarenheit = tempCelsius * 9/5 + 32
        return toFarenheit + 'F'

    } else if (farenheitExist){
        let arrayTemperature = temp.split('F')
        let tempFarenheit = arrayTemperature[0]
        Number(tempFarenheit)

        toCelsius = (tempFarenheit - 32) * 5/9 
        return toCelsius + 'C'
        
    }


}


console.log(transformTemperature('150C'))


*/

/*
Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title:"O homem mais rico da Babilônia",
                author:"George S. Clason",
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: " Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: " Stephen R. Covey",
            }, 
        ],
    },
]

const totalCategorys = booksByCategory.length

for(let category of booksByCategory){
    console.log(`Total de livros da categoria: `+ category.category)
    console.log(category.books.length)

    
}

function countAuthors() {
    let authors = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ",authors.length)
}   

countAuthors(booksByCategory)

function booksOfAuthors(author) {
    let books = []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
            }
        }

        console.log(`Livros do autor ${author}: ${books.join(", ")}`)
    }

 booksOfAuthors("Augusto Cury")











