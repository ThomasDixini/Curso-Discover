## Pseudo Classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico

Exemplo: O elemento está com o ponteiro do mouse em cima dele

Pseudo-classes começam com ':' seguido da 'Pseudo-Classe'
:pseudo-class-name

# :first-child

Seleciona o primeiro filho de um elemento

ul li:first-child {
    background-color:gray;
}

# :nth-of-type()

Pegue o elemento pelo número que você colocar.

ul li:nth-of-type(3){
    font-size: 2rem;
}

# :nth-child()

article p:nth-child(3){
    font-weight: bold;
}

# :nth-child 'odd' e 'even' 

    odd → Para números Ímpares
    even → Para números Pares

    article p:nth-child(odd){
    font-weight: bold;
    background: #999999;
    }

    article p:nth-child(even){
        color:white;
        background: #000;
    }

# :hover e :focus    

:hover → Muda o estilo quando passa o mouse em cima

:focus Bem parecido, mas é mais usado em 'inputs'


a:hover {
    color: red;
}

input:focus {
    border-color:blue;
}

# Atributos

:required → Quando o elemento tiver o atributo 'required' alterará o estilo

input:required {
    border-color: red;
}

:disabled → Quando o elemento tiver o atributo 'disabled' alterará o estilo

input:disabled {
    background-color:red;
}

## HELP

No MDN Web Docs