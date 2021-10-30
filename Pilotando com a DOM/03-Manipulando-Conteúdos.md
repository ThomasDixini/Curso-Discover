## Manipulando Conteúdos

# textContent e innerText

    - Manipula o texto através da seleção
    Exemplo: 

    const element = document.querySelector('h1')
    element.textContent = "Hello, world!"

# innerHtml 

    - Bem parecido com os outros dois exemplos, a diferença
    é que você pode usar tags HTML nele.

    Exemplos:

    const element = document.querySelector('h1')

    element.innerHtml = "Hello, <bold> world! </bold>"

# Value 

    - Manipula um valor dentro de uma tag <input>

    Exemplo:

        const element = document.querySelector('input')
        element.value = "Anything"


# Manipulando Atributos
    - Você pode atribuir(set), pegar(get) e remover(remove) Atributos.

    SETAR → setAttribute('atributo','Conteudo do Atributo')
    PEGAR → getAttribute('Atributo')
    REMOVER → removeAttribute('Atributo')


    Exemplo:


        const element = document.querySelector('h1')

            element.setAttribute('id','Titulo')

                console.log(element)

                console.log(element.getAttribute('id'))

            element.removeAttribute('class')

