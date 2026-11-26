# Pokédex

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Pokédex feita com HTML, CSS e JavaScript puro. Você digita o nome ou o número de um Pokémon e ela mostra a imagem, o número, o nome, o peso e os tipos, buscando os dados na [PokéAPI](https://pokeapi.co/).

🔗 **Ver online:** https://santosmiqueias.github.io/Projeto-Pokedex/

## Funcionalidades

- Busca por **nome** (`pikachu`) ou **número** (`25` ou `025`; os zeros à esquerda são removidos)
- Imagem do Pokémon (sprite; se não houver, a arte oficial; se nada existir, uma pokébola)
- Peso convertido para quilos
- Tipos com a cor de cada um (fogo, água, planta etc.)
- Mensagens de "Carregando..." e "Pokémon não encontrado!", e botão desativado durante a busca

## O que pratiquei

- Consumo de API REST com `fetch` e `async/await`
- Tratamento de erros com `try/catch/finally`
- Manipulação do DOM e geração de elementos a partir dos dados da API

## Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/santosmiqueias/Projeto-Pokedex.git
   ```
2. Abra o arquivo `index.html` no navegador.

Não precisa instalar nada. É preciso estar conectado à internet, porque os dados vêm da PokéAPI.

## Estrutura

```
index.html    página e formulário de busca
style.css     estilos do card e cores
script.js     busca na PokéAPI e exibição do resultado
pokebola.png  imagem reserva
```

## Licença

Código sob a licença [MIT](LICENSE).
