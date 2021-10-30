/*
function despertador(hourS,minuteS){
    

    
    hourS,minuteS = new Date()

    

    let hourExist = ((hourE.getHours() && hourS) >=0) && ((hourE.getHours() && hourS) < 24)
    let minuteExist = (minuteE.getMinutes() && minuteS) >= 0 ((minuteE.getMinutes() && minuteS) < 60)

    if(!hourExist || !minuteExist){
        throw new Error()
    } 

    let descanso = (hourS,minuteS) => { 
           
        let dataHoje = new Date()

        let data = [{
                    hora: dataHoje.getHours(),
                    minuto: dataHoje.getMinutes()
                    },{
                        hora: hourS,
                        minuto: minuteS
                        }]

           let tempoDeDescanso = (data[1].hora - data[0].hora) + ":" + (data[1].minuto - data[0].minuto)

            return tempoDeDescanso
      }

    return  descanso(hourS,minuteS)

}


try{
    despertador(-2,1)
}catch(error){
    console.log(error)
}

console.log(despertador(19,00))






function decifra(phrase){
    let tamanhoFrase = phrase.length
    let arrayPhrase 

    tamanhoFrase /= 2

    arrayPhrase = Array.from(phrase).reverse()

    for(let char of arrayPhrase){
        console.log(char)
        if(char == tamanhoFrase){
            break
        }
    }

}

let phrase = "Hello world"
let total = phrase.length
let j
let tamanhoFrase = total/2

let myArray = Array.from(phrase).reverse()



console.log(myArray)



for(let i = 0;i < tamanhoFrase;i++){
    console.log(myArray[i])
}

for(j = tamanhoFrase; j <= total;j++){

    if(myArray[j].indexOf("h") === 0){
        myArray[j] = "_"
    }

    console.log(myArray[j])
}

*/
var masc = 0
var fem = 0

function Peoples(altura,sexo){
    this.altura = altura
    this.sexo = sexo
}

let arrayPersons = []

for(let i = 0;i < 2;i++){
    arrayPersons[i] = new Peoples();
    arrayPersons[i].altura = Number(prompt("Qual sua altura?"))
    arrayPersons[i].sexo = String(prompt("Qual seu sexo?"))

    
}
for(let j = 0;j<2;j++){
  
    upper = arrayPersons[j].sexo.toUpperCase()
   arraySexo = Array.from(upper)

}

if(arraySexo[0] == "M"){
    masc++
} else {
    fem++
}

console.log(masc)













