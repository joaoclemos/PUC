// Variáveis globais (ajuste a URL para sua API real)
   const API_URL = 'http://localhost:3000/posts'; // Ou seu endpoint real
   let allPosts = [];

   // Elementos do DOM
   const postList = document.getElementById("user-posts-list");
   const filterCategoria = document.getElementById("filter-categoria");
   const filterTags = document.getElementById("filter-tags");
   const filterTitulo = document.getElementById("filter-titulo");

   // Verifica se os elementos do DOM existem
   if (!postList || !filterCategoria || !filterTags || !filterTitulo) {
       console.error("Erro: Um ou mais elementos do DOM não foram encontrados.");
       if (postList) {
           postList.innerHTML = "<p>Erro na configuração da página. Verifique o console.</p>";
       }
       return; // Este return é válido dentro do if
   }

   // Carrega posts da API
   async function carregarPosts() {
       try {
           console.log("Carregando posts da API...");
           const response = await fetch(API_URL);
           if (!response.ok) {
               throw new Error(`Erro HTTP: ${response.status}`);
           }
           allPosts = await response.json();
           console.log("Posts carregados:", allPosts);
           if (!Array.isArray(allPosts)) {
               throw new Error("Dados da API não são um array.");
           }
           renderizarPosts(allPosts);
       } catch (error) {
           console.error("Erro ao carregar posts:", error);
           postList.innerHTML = "<p>Erro ao carregar posts. Tente recarregar a página.</p>";
       }
   }

   // Renderiza os posts (com links para detalhes_post.html)
   function renderizarPosts(posts) {
       try {
           console.log("Renderizando posts:", posts.length);
           postList.innerHTML = posts.length === 0 
               ? "<p>Nenhum post encontrado.</p>"
               : posts.map(post => {
                   // Validação básica dos campos
                   const title = post.titulo || "Sem título";
                   const content = post.conteudo || "";
                   const category = post.categoria || "Nenhuma categoria";
                   const tags = Array.isArray(post.tags) ? post.tags.join(", ") : "Nenhuma";
                   const images = Array.isArray(post.imagens_url) 
                       ? post.imagens_url.map(url => `<img src="${url}" class="post-image-thumb">`).join("") 
                       : "";
                   
                   return `
                       <li class="post-item">
                           <h3><a href="../detalhes/detalhes_post.html?id=${post.id}">${title}</a></h3>
                           <div class="post-conteudo">${content}</div>
                           <small><strong>Categoria:</strong> ${category}</small><br>
                           <small><strong>Tags:</strong> ${tags}</small>
                           ${images}
                       </li>
                   `;
               }).join("");
       } catch (error) {
           console.error("Erro ao renderizar posts:", error);
           postList.innerHTML = "<p>Erro ao exibir posts. Verifique o console.</p>";
       }
   }

   // Filtra posts
   function aplicarFiltros() {
       try {
           console.log("Aplicando filtros...");
           const categoria = filterCategoria.value.toLowerCase();
           const tags = filterTags.value.toLowerCase();
           const titulo = filterTitulo.value.toLowerCase();

           const postsFiltrados = allPosts.filter(post => {
               const postCategoria = (post.categoria || "").toLowerCase();
               const postTags = Array.isArray(post.tags) ? post.tags.map(t => t.toLowerCase()) : [];
               const postTitulo = (post.titulo || "").toLowerCase();

               return (
                   (categoria === "" || postCategoria.includes(categoria)) &&
                   (tags === "" || postTags.some(tag => tag.includes(tags))) &&
                   (titulo === "" || postTitulo.includes(titulo))
               );
           });

           console.log("Posts filtrados:", postsFiltrados.length);
           renderizarPosts(postsFiltrados);
       } catch (error) {
           console.error("Erro ao aplicar filtros:", error);
           postList.innerHTML = "<p>Erro ao filtrar posts. Verifique o console.</p>";
       }
   }

   // Inicializa
   document.addEventListener("DOMContentLoaded", () => {
       console.log("Inicializando filters.js...");
       filterCategoria.addEventListener("input", aplicarFiltros);
       filterTags.addEventListener("input", aplicarFiltros);
       filterTitulo.addEventListener("input", aplicarFiltros);
       carregarPosts();
   });