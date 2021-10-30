## Criar e Adicionar Elementos na Página

# createElement

     - Cria o Elemento

     const div = document.createElement('div');

# append, prepend e insertBefore

    - append → cria o elemento depois dos outros elementos

        const div = document.createElement('div');
            div.innerHTML =" <br><b>Hello World </b> "

            const corpo = document.querySelector('body')

            corpo.append(div)


    - prepend → cria o elemento antes dos outros elementos

        const div = document.createElement('div');
            div.innerHTML =" <br><b>Hello World </b> "

            const corpo = document.querySelector('body')



            corpo.prepend(div)

    
    - inserBefore → cria o elemento no meio dos elementos

        const div = document.createElement('div');
            div.innerHTML =" <br><b>Hello World </b> "

            const corpo = document.querySelector('body');
            const script = corpo.querySelector('script');



            corpo.insertBefore(div, script)