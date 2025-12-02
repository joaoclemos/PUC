var API_URL = '/post';
let postList = document.getElementById("post-list");
const filterCategoria = document.getElementById("filter-categoria");
const filterTags = document.getElementById("filter-tags");
const filterTitulo = document.getElementById("filter-titulo");

let allPosts = [];

async function carregarPosts() {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        allPosts = posts;
        renderizarPosts(posts);
    } catch (error) {
        postList.innerHTML = "<p>Erro ao carregar os posts.</p>";
        console.error(error);
    }
}

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
    <h3><a  href="detalhes_post.html?id=${post.id}" >${post.titulo || 'Sem título'}</a></h3>
    <div class="post-conteudo">${post.conteudo}</div>
    <small><strong>Categoria:</strong> ${post.categoria}</small><br />
    <small><strong>Tags:</strong> ${post.tags.join(", ")}</small><br />
    ${post.imagens_url.map(url => `<img src="${url}" style="width:100px;margin:5px;">`).join("")}
    <br />
    <br />
  `;
        postList.appendChild(div);
    });
}

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

filterCategoria.addEventListener("input", aplicarFiltros);
filterTags.addEventListener("input", aplicarFiltros);
filterTitulo.addEventListener("input", aplicarFiltros);

carregarPosts();
