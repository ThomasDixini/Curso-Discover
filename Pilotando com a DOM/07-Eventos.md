## Eventos

    - Interações do Usuário com o Objeto
    - Existe vários tipos de eventos.

    → Exemplo: o 'onclick', que é quando o usuário clicar sobre o elemento ele irá executar uma função


## VIA HTML

# HTML


<body>

<h1 
onclick="changeColor()" 
ondblclick="changeColor2()" 
class="bg">

Meu blog

</h1>

</body>


# JavaScript

 function changeColor(){

    let title = document.querySelector('h1');

    title.style.color = "#00FF00"

 }

 function changeColor2(){

    let title = document.querySelector('h1');

    title.style.color = "#0000DD"

 }


 # Eventos de Teclado

        onkeydown → quando a tecla está embaixo dispara a função 
        onkeyup → quando a tecla está em cima dispara a função
        onkeypress → quando a tecla é pressionada dispara a função


    let input = document.querySelector('input');

        input.onkeydown = function() {
            input.style.backgroundColor = "#000000"
        }

        input.onkeyup = function() {
            input.style.backgroundColor = "#0000AA"
        }


## VIA JAVASCRIPT 

# addEventListener('evento', função)


    const body = document.querySelector('body')

        body.addEventListener('click', changeColor)

        function changeColor(){
            body.style.backgroundColor ="#00FF00"
        }

# Outro Método

    let input = document.querySelector('input');

        input.onkeydown = function() {
            input.style.backgroundColor = "#000000"
        }

# Argumento Event

    - Diz que tipo de evento é , e pode ser usado com o prototype, para por exemplo pegar a letra que foi digitada no input

        const input = document.querySelector('input')


            input.onkeypress = function(event) {
                console.log(event)
            }