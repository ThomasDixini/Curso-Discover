## SVG

    É uma marcação, estilo HTML, mas não é para textos, e sim para fazer imagens.
    Possuimos elementos para gerar formas.

   # Para entender melhor:
     - Imagem rasterizada(pixelada) x Imagem Vetorizada

   #  Benefícios
        - Mais leve
        - Mais detalhada
        - Maior acessibilidade e SEO
        - Pode ser editada via CSS e atributos

   # Desvantagens
        - Pode ser mais complicada de trabalhar
        - Quanto mais complexa a imagem, mais trabalho para o navegador.
        - Navegadores mais antigos, não possuem suporte a essa tag

   # Para fotografias ainda utilize imagem rasterizada


   EXEMPLOS: 

   <svg width="500" height="500">
        <circle 
         cx="100" 
         cy="100"
         r="40" 
         stroke-width="4" 
         stroke="red" 
         fill="blue"> </circle>

    </svg>  
 

# Ou poder importar arquivos .svg

<img src="./ball.svg" alt="Imagem Vetorizada">

