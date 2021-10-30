## Pseudo Elements

Pode se criar elementos HTML através do próprio CSS
Obrigatório a propriedade CONTENT, e pode se combinar com pseudo-classes

::before → Cria antes

::after → Cria Depois

::first-line → Somente a primeira Linha


p::before{
    content: "<<<<<"
}

p::after{
    content: "<<FIM<<"
}

p::first-line{
    background-color: #999;
}

p:nth-of-type(3)::first-line{
    background-color: #ddd;
}