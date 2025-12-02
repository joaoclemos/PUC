const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');

    if (!postId) {
      document.getElementById('post-title').innerText = 'Post não encontrado';
    } else {
      fetch(`/post/${postId}`)
        .then(response => {
          if (!response.ok) throw new Error("Erro ao carregar o post.");
          return response.json();
        })
        .then(post => {
          document.getElementById('post-title').innerText = post.titulo || 'Sem título';
          document.getElementById('post-content').innerHTML = post.conteudo;

          const imagensContainer = document.getElementById('post-images');
          if (post.imagens_url && post.imagens_url.length > 0) {
            post.imagens_url.forEach(url => {
              const img = document.createElement('img');
              img.src = url;
              imagensContainer.appendChild(img);
            });
          }
        })
        .catch(error => {
          console.error(error);
          document.getElementById('post-title').innerText = 'Erro ao carregar o post.';
        });
    }