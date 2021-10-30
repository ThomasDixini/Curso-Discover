## Manipulando Estilos com JS

    - Primeiro tem que pegar o Elemento.

    Exemplo:

    const element = document.querySelector('h1')

    element.style.backgroundColor = "#FFDDEE"


# classList

    - Mostra a lista de classes que o elemento contém ao todo.

    classList.add('classe') → Adiciona uma Classe
    classList.remove('classe') → Remove uma Classes
    classList.toggle('classe') → Adiciona uma classe se não tiver ela, Remove 
    a classe se tiver Ela. Funciona como um On/Off.

    const element = document.querySelector('body')

    element.classList.add('green')

    console.log(element.classList)
    element.classList.remove('active')
    element.classList.toggle('active')