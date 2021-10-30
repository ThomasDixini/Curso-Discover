## Video e Aúdio

 Atributos:
    - src
    - controls
    - se não funcionar
        → fallback content

    - source
        → src
        → type

<video  
    controls
    preload="auto"
    autoplay
    muted
    loop
    width="200"
    height="100"
    poster="alguma-imagem-de-fundo" // Não tem no audio
    >

    <source
    type="video/mp4"
    src="./01-Video.md"
    >

</video>