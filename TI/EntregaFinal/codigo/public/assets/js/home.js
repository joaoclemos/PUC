async function carregarHome() {
  const userLink = document.getElementById('user-name-link');
  const postList = document.getElementById('user-posts-list');

  if (!usuarioCorrente) {
    alert("Usuário não autenticado.");
    window.location.href = "/modulos/login/login.html";
    return;
  }

userLink.innerHTML = `${usuarioCorrente.nome} <a onclick="logoutUser()">❌</a>`;


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
      postList.appendChild(li);
    });
  } catch (error) {
    console.error("Erro ao carregar posts:", error);
  }
}

// chama após o DOM estar pronto
document.addEventListener('DOMContentLoaded', carregarHome);
