// Variáveis globais
let allPosts = [];
const API_URL = 'http://localhost:3000/posts';

// Elementos do DOM
const postList = document.getElementById("post-list");
const filterCategoria = document.getElementById("filter-categoria");
const filterTags = document.getElementById("filter-tags");
const filterTitulo = document.getElementById("filter-titulo");

// Carrega os posts da API
async function carregarPosts() {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        allPosts = posts;
        renderizarPosts(posts);
    } catch (error) {
        console.error("Erro ao carregar posts:", error);
        postList.innerHTML = "<p>Erro ao carregar os posts.</p>";
    }
}

// Renderiza os posts na tela
function renderizarPosts(posts) {
    postList.innerHTML = "";

    if (posts.length === 0) {
        postList.innerHTML = "<p>Nenhum post encontrado.</p>";
        return;
    }

    posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "post-item";
        div.innerHTML = `
            <h3><a href="detalhes_post.html?id=${post.id}">${post.titulo || 'Sem título'}</a></h3>
            <div class="post-conteudo">${post.conteudo}</div>
            <small><strong>Categoria:</strong> ${post.categoria}</small><br />
            <small><strong>Tags:</strong> ${post.tags.join(", ")}</small><br />
            ${post.imagens_url.map(url => `<img src="${url}" class="post-image-thumb">`).join("")}
        `;
        postList.appendChild(div);
    });
}

// Aplica os filtros
function aplicarFiltros() {
    const categoria = filterCategoria.value.toLowerCase();
    const tags = filterTags.value.toLowerCase();
    const titulo = filterTitulo.value.toLowerCase();

    const filtrados = allPosts.filter(post => {
        const categoriaOk = categoria === "" || post.categoria.toLowerCase().includes(categoria);
        const tagsOk = tags === "" || post.tags.some(tag => tag.toLowerCase().includes(tags));
        const tituloOk = titulo === "" || post.titulo.toLowerCase().includes(titulo);
        return categoriaOk && tagsOk && tituloOk;
    });

    renderizarPosts(filtrados);
}

// Inicializa os eventos
function initFiltros() {
    filterCategoria.addEventListener("input", aplicarFiltros);
    filterTags.addEventListener("input", aplicarFiltros);
    filterTitulo.addEventListener("input", aplicarFiltros);
    
    carregarPosts();
}

// Inicia quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", initFiltros);