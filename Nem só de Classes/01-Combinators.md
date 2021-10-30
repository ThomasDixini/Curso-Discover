## Combinators

    vai procurar uma tag h2 dentro de article que está dentro de body 
    e aplicar o css

# Exemplo: 
body div ul{
    color: red;
}

######################################################################
## Child Combinator

    vai procurar uma tag 'ul' que é filha de uma 'div' que é filha do 'body'
 
# Exemplo: 

body > div > ul{
    color: red;
}
######################################################################
## Adjacent sibling Combiantor  ' + '

    Vai pegar o  primeiro 'irmão' de 'h1' 

# Exemplo: 

ul + ol {
    color:blue;
}
######################################################################

## General sibling Combinator ' ~ ' 

    Pega todos os 'irmãos' do 'h1' 
 
# Exemplo: 

ul ~ ol {
    color:blue;
}
######################################################################

# Selecionando através de atributos

div + div[id="seg-div"]{
    color:blue;
}