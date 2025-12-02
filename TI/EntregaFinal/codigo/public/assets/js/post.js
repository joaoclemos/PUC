var API_URL = '/post';

const postForm = document.getElementById("post-form");
let postList = document.getElementById("post-list");
const categoriaInput = document.getElementById("categoria");
const tagsInput = document.getElementById("tags");
const tituloInput = document.getElementById("titulo");
const imagensInput = document.getElementById("imagens");
const previewImagens = document.getElementById("preview-imagens");
const postIdInput = document.getElementById("post-id");

let imagensSelecionadas = [];


imagensInput.addEventListener("change", () => {
  previewImagens.innerHTML = "";
  imagensSelecionadas = [];

  Array.from(imagensInput.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = () => {
      imagensSelecionadas.push(reader.result); // Base64 como string
      const img = document.createElement("img");
      img.src = reader.result;
      img.style.width = "100px";
      img.style.margin = "5px";
      previewImagens.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});
// Inicializa o editor Quill
const quill = new Quill('#editor-container', {
  theme: 'snow',
  placeholder: 'Escreva seu post aqui...',
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean']
    ]
  }
});

// Carrega os posts existentes
async function carregarPosts() {
  const response = await fetch(API_URL);
  const posts = await response.json();

  postList.innerHTML = "";

  posts.forEach(post => {
    if(usuarioCorrente.id == post.criador){
    const li = document.createElement("li");
    li.className = "post-item";
    li.innerHTML = `
    <h3><a  href="detalhes_post.html?id=${post.id}" >${post.titulo || 'Sem título'}</a></h3>
    <div class="post-conteudo">${post.conteudo}</div>
    <small><strong>Categoria:</strong> ${post.categoria}</small><br />
    <small><strong>Tags:</strong> ${post.tags.join(", ")}</small><br />
    ${post.imagens_url.map(url => `<img src="${url}" style="width:100px;margin:5px;">`).join("")}
    <br />
    <button onclick="editarPost(${post.id})">Editar</button>
    <button onclick="excluirPost(${post.id})">Excluir</button>
  `;

    postList.appendChild(li);
    }
  });
}

// Submissão do formulário
postForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const post = {
  titulo: tituloInput.value,
  conteudo: quill.root.innerHTML,
  categoria: categoriaInput.value,
  tags: tagsInput.value.split(",").map(tag => tag.trim()),
  data_de_criacao: new Date().toISOString(),
  atualizado_em: new Date().toISOString(),
  criador: usuarioCorrente.id,
  nota_media_do_post: 0,
  numero_de_avalicoes: 0,
  numero_de_visualizacoes: 0,
  numero_de_comentarios: 0,
  imagens_url: imagensSelecionadas 
  };


  const id = postIdInput.value;

  if (id) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    });
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    });
  }

  postForm.reset();
  postIdInput.value = "";
  quill.setContents([]); // limpa o editor
  carregarPosts();
});

// Edição de post
async function editarPost(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const post = await response.json();

  tituloInput.value = post.titulo || '';
  quill.root.innerHTML = post.conteudo;
  categoriaInput.value = post.categoria;
  tagsInput.value = post.tags.join(", ");
  postIdInput.value = post.id;

  // Carregar imagens existentes (se tiver)
  previewImagens.innerHTML = '';
  if (post.imagens_url && post.imagens_url.length > 0) {
    post.imagens_url.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      img.style.width = "100px";
      img.style.margin = "5px";
      previewImagens.appendChild(img);
    });
  }
}

// Exclusão de post
async function excluirPost(id) {
  if (confirm("Deseja excluir este post?")) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    carregarPosts();
  }
}

// Inicializa a lista ao carregar a página
carregarPosts();
