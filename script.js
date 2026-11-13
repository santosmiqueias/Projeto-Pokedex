const input = document.getElementById("inputPokemon");
const botao = document.getElementById("botaoBuscar");
const mensagem = document.getElementById("mensagemErro");
const card = document.getElementById("cardPokemon");
const imagem = document.getElementById("imagemPokemon");
const numero = document.getElementById("numeroPokemon");
const nome = document.getElementById("nomePokemon");
const peso = document.getElementById("pesoPokemon");
const tipos = document.getElementById("tipoPokemon");

const coresTipos = {
    grass: "#78C850",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    bug: "#A8B820",
    normal: "#A8A878",
    poison: "#A040A0",
    ground: "#E0C068",
    fairy: "#EE99AC",
    fighting: "#C03028",
    psychic: "#F85888",
    rock: "#B8A038",
    ghost: "#705898",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    flying: "#A890F0"
};

async function buscarPokemon() {
    let busca = input.value.trim().toLowerCase();

    if (!busca) {
        mostrarMensagem("Digite um nome ou número!");
        return;
    }

    // "025" vira 25, porque a API não aceita zeros à esquerda
    if (/^\d+$/.test(busca)) {
        busca = String(Number(busca));
    }

    card.classList.add("oculto");
    mostrarMensagem("Carregando...");
    botao.disabled = true;

    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(busca)}`);

        if (!resposta.ok) {
            throw new Error("Pokémon não encontrado!");
        }

        const p = await resposta.json();

        imagem.src = p.sprites.front_default || p.sprites.other["official-artwork"].front_default || "pokebola.png";
        imagem.alt = p.name;
        numero.textContent = "#" + p.id;
        nome.textContent = p.name;
        peso.textContent = (p.weight / 10).toFixed(1);

        tipos.innerHTML = p.types
            .map((tipo) => `<span class="tipo" style="background: ${coresTipos[tipo.type.name] || "#777777"}">${tipo.type.name.toUpperCase()}</span>`)
            .join(" ");

        mensagem.classList.add("oculto");
        card.classList.remove("oculto");
    } catch (erro) {
        console.error(erro);
        mostrarMensagem("Pokémon não encontrado!");
    } finally {
        botao.disabled = false;
    }
}

function mostrarMensagem(msg) {
    mensagem.textContent = msg;
    mensagem.classList.remove("oculto");
}

botao.addEventListener("click", buscarPokemon);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !botao.disabled) {
        buscarPokemon();
    }
});
