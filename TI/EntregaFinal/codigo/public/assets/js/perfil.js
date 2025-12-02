async function carregarPerfil() {
  const perfilNome = document.getElementById('perfil-nome');
  const perfilEmail = document.getElementById('perfil-email');
  const perfilPosts = document.getElementById('perfil-posts');

  if (!usuarioCorrente) {
    alert("Usuário não autenticado.");
    window.location.href = "/modulos/login/login.html";
    return;
  }

  perfilNome.textContent = usuarioCorrente.nome;
  perfilEmail.textContent = usuarioCorrente.email;

  try {
    const response = await fetch('/post');
    const posts = await response.json();

    const userPosts = posts.filter(post => post.criador == parseInt(usuarioCorrente.id));

    userPosts.forEach(post => {
      const li = document.createElement('li');
      li.textContent = post.titulo;
       li.onclick = () => {
        window.location.href = `../post/detalhes_post.html?id=${post.id}`;
      };
      perfilPosts.appendChild(li);
    });
  } catch (error) {
    console.error("Erro ao carregar posts do perfil:", error);
  }
}

// chama após o DOM estar pronto
document.addEventListener('DOMContentLoaded', carregarPerfil);
