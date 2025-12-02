// Renderiza um post baseado no seu formato JSON
function renderPostFromJSON(post) {
    const postElement = document.createElement('article');
    postElement.className = 'post';
    postElement.dataset.id = post.id;

    postElement.innerHTML = `
        <h2>${post.titulo}</h2>
        <div class="post-content">
            ${post.conteudo}
        </div>
    `;

    return postElement;
}

// Renderiza todos os posts dentro do container
function renderAllPostsFromJSON(posts, containerElement) {
    containerElement.innerHTML = '';
    posts.forEach(post => {
        containerElement.appendChild(renderPostFromJSON(post));
    });
}

// Executa no carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    fetch('dados.json')
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar dados.json');
            return response.json();
        })
        .then(data => {
            const postsContainer = document.getElementById('postsContainer');
            if (data.post && Array.isArray(data.post)) {
                renderAllPostsFromJSON(data.post, postsContainer);
            } else {
                console.error('Formato inesperado do JSON: falta a chave "post"');
            }
        })
        .catch(error => {
            console.error('Falha ao carregar os posts:', error);
        });
});
