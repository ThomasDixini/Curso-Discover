## Distâncias ABSOLUTAS

São fixas e não alteram seu valor.

unidade     Nome            Equivalência

cm      Centímetros         1cm = 96px/2.54in
in      Inches(polegadas)   1in = 2.54 = 96px
px      Pixels              1px = 1/96 of 1in


* O mais comum é 'px'
* Não recomendado a usar 'cm'

## Distâncias RelativaS

São relativas a outros valores , pode ser o elemento pai, root ou tamanho de tela

* benefícios: Maior adaptação a diferentes telas

Unidade

em      Relativo ao tamanho da fonte pai 
rem     Relativo ao tamanho da font raiz (root/html)
vw      1% da viewport width. (1% da largura do que está sendo mostrado)
vh      1% da viewport height. (1% da altura do que está sendo mostrado)



Exemplos: 


<div>
    <p></p>
</div>


div {
    font-size: 30px;
}

p {
    font-size: 2em;       // Logo será 2x maior que a font pai(div). Valor = 60px
}

p {
    font-size: 2rem;       // Logo será 2x maior que a font root(html) que é por padrão 16px
}