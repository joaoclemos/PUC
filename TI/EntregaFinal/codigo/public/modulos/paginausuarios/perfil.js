document.addEventListener('DOMContentLoaded', async () => {
    // Verifica se o usuário está autenticado
    const usuarioCorrente = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
    if (!usuarioCorrente || !usuarioCorrente.id) {
        alert('Usuário não autenticado');
        window.location.href = '/modulos/login/login.html';
        return;
    }

    // Carrega dados completos do usuário
    const usuario = await carregarUsuario(usuarioCorrente.id);
    if (usuario) {
        exibirDadosUsuario(usuario);
        sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuario));
    }

    // Configura as abas
    document.querySelectorAll('.aba').forEach(aba => {
        aba.addEventListener('click', () => {
            const abaId = aba.getAttribute('data-aba');
            alternarAba(abaId);
            
            switch(abaId) {
                case 'posts':
                    carregarPostsUsuario(usuarioCorrente.id);
                    break;
                case 'comentarios':
                    carregarComentariosUsuario(usuarioCorrente.id);
                    break;
                case 'favoritos':
                    carregarFavoritosUsuario(usuarioCorrente.id);
                    break;
            }
        });
    });

    // Carrega conteúdo inicial (Meus Posts)
    carregarPostsUsuario(usuarioCorrente.id);

    // Botão editar perfil
    document.getElementById('btnEditarPerfil').addEventListener('click', () => {
        window.location.href = 'editar_perfil.html';
    });
});

async function carregarUsuario(usuarioId) {
    try {
        const response = await fetch(`http://localhost:3000/usuarios/${usuarioId}`);
        return await response.json();
    } catch (error) {
        console.error('Erro ao carregar usuário:', error);
        return null;
    }
}

function exibirDadosUsuario(usuario) {
    if (!usuario) return;

    document.getElementById('nomeUsuario').textContent = usuario.nome;
    document.getElementById('bioUsuario').textContent = usuario.bio || 'Sem biografia';

    const fotoPerfil = document.getElementById('fotoPerfil');
    if (usuario.perfil) {
        fotoPerfil.src = usuario.perfil;
        fotoPerfil.alt = `Foto de perfil de ${usuario.nome}`;
    } else {
        fotoPerfil.src = 'https://via.placeholder.com/150';
    }
}

async function carregarPostsUsuario(usuarioId) {
    try {
        const response = await fetch(`http://localhost:3000/post?autor_id=${usuarioId}`);
        if (!response.ok) {
            throw new Error('Erro ao carregar posts');
        }
        const posts = await response.json();
        exibirPosts(posts);
    } catch (error) {
        console.error('Erro ao carregar posts:', error);
        document.getElementById('conteudoPosts').innerHTML = '<p>Erro ao carregar posts. Tente novamente mais tarde.</p>';
    }
}

function exibirPosts(posts) {
    const container = document.getElementById('conteudoPosts');
    container.innerHTML = '';

    if (!posts || posts.length === 0) {
        container.innerHTML = '<p class="sem-conteudo">Você ainda não criou nenhum post</p>';
        return;
    }

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post-item';
        postElement.innerHTML = `
            <h3><a href="../exibirPost/detalhes_post.html?id=${post.id}">${post.titulo}</a></h3>
            <div class="post-meta">
                <span>Categoria: ${post.categoria}</span>
                <span>${new Date(post.data_de_criacao).toLocaleDateString('pt-BR')}</span>
            </div>
        `;
        container.appendChild(postElement);
    });
}

async function carregarComentariosUsuario(usuarioId) {
    try {
        const response = await fetch(`http://localhost:3000/comentarios?usuario_id=${usuarioId}`);
        const comentarios = await response.json();
        exibirComentarios(comentarios);
    } catch (error) {
        console.error('Erro ao carregar comentários:', error);
        exibirComentarios([]);
    }
}

function exibirComentarios(comentarios) {
    const container = document.getElementById('conteudoComentarios');
    container.innerHTML = '';

    if (!comentarios || comentarios.length === 0) {
        container.innerHTML = '<p class="sem-conteudo">Nenhum comentário encontrado</p>';
        return;
    }

    comentarios.forEach(comentario => {
        const comentarioElement = document.createElement('div');
        comentarioElement.className = 'post-item';
        comentarioElement.innerHTML = `
            <p>${comentario.texto}</p>
            <div class="post-meta">
                <span>Post ID: ${comentario.post_id}</span>
                <span>${new Date(comentario.data).toLocaleDateString('pt-BR')}</span>
            </div>
        `;
        container.appendChild(comentarioElement);
    });
}

async function carregarFavoritosUsuario(usuarioId) {
    try {
        const response = await fetch(`http://localhost:3000/usuarios/${usuarioId}`);
        const usuario = await response.json();
        const favoritosIds = usuario.favoritos || [];
        
        if (favoritosIds.length === 0) {
            exibirFavoritos([]);
            return;
        }
        
        const posts = await Promise.all(
            favoritosIds.map(id => 
                fetch(`http://localhost:3000/posts/${id}`)
                    .then(res => res.json())
                    .catch(() => null)
            )
        );
        
        // Filtra posts válidos
        const postsValidos = posts.filter(post => post !== null);
        exibirFavoritos(postsValidos);
    } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
        exibirFavoritos([]);
    }
}

function exibirFavoritos(posts) {
    const container = document.getElementById('conteudoFavoritos');
    container.innerHTML = '';

    if (!posts || posts.length === 0) {
        container.innerHTML = '<p class="sem-conteudo">Nenhum post favoritado</p>';
        return;
    }

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post-item';
        postElement.innerHTML = `
            <h3><a href="../exibirPost/detalhes_post.html?id=${post.id}">${post.titulo}</a></h3>
            <div class="post-meta">
                <span>Categoria: ${post.categoria}</span>
                <span>${new Date(post.data_de_criacao).toLocaleDateString('pt-BR')}</span>
            </div>
        `;
        container.appendChild(postElement);
    });
}

function alternarAba(abaId) {
    // Atualiza abas
    document.querySelectorAll('.aba').forEach(aba => {
        aba.classList.remove('ativa');
    });
    document.querySelector(`[data-aba="${abaId}"]`).classList.add('ativa');
    
    // Atualiza conteúdo
    document.querySelectorAll('.conteudo-aba').forEach(conteudo => {
        conteudo.classList.remove('ativa');
    });
    document.getElementById(`conteudo${abaId.charAt(0).toUpperCase() + abaId.slice(1)}`).classList.add('ativa');
}