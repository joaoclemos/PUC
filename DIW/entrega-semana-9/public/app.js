const filmes = {
    maisAssistidos: [
        {
            id: "vingadores",
            titulo: "Vingadores",
            imagem: "../public/Fotos/vingadores.jpg",
            imagemCarrossel: "../public/Fotos/vingadorescarrossel.jpg",
            sinopse: "Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.",
            ano: "2019",
            genero: "Ação/Aventura",
            elenco: "Robert Downey Jr.,  Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Benedict Cumberbatch, Chadwick Boseman, Brie Larson, Tom Holland, Karen Gillan, Zoe Saldaña, Evangeline Lilly, Tessa Thompson, Rene Russo, Elizabeth Olsen",
            direcao: "Anthony Russo, Joe Russo",
            avaliacao: "8.5/10",
            duracao: "181 minutos",
            Trailer: "https://youtu.be/PgrmbRID0eY?si=ZGY-TmU_s4NOUMyP",
        },
        {
            id: "uncharted",
            titulo: "Uncharted Fora do Mapa",
            imagem: "../public/Fotos/Uncharted.jpg",
            imagemCarrossel: "../public/Fotos/unchartedcarrossel.webp",
            sinopse: "Um jovem caçador de tesouros Nathan Drake e seu mentor, Sully, saem em busca de um tesouro perdido, percorrendo quase todo planeta em uma perigosa aventura.",
            ano: "2022",
            genero: "Ação/Aventura",
            elenco: "Tom Holland, Mark Wahlberg, Sophia Ali, Tati Gabrielle & Antonio Banderas",
            direcao: "Ruben Fleischer",
            avaliacao: "7/10",
            duracao: "116 minutos",
            Trailer: "https://youtu.be/CI12S_1PNqc?si=hUgdH5RjHKlouvZD",
        },
        {
            id: "homemaranha",
            titulo: "Homem Aranha",
            imagem: "../public/Fotos/homemaranha.jpg",
            imagemCarrossel: "../public/Fotos/homemaranhacarrossel.webp",
            sinopse: "Peter Parker e seus amigos vão fazer uma viagem de férias de verão para a Europa. No entanto, eles dificilmente serão capazes de descansar - Peter terá que concordar em ajudar Nick Fury a descobrir o mistério das criaturas que causam desastres naturais e destruição em todo o continente. Para isso, ele se juntará ao Mysterio - que pode não ser quem parece.",
            ano: "2019",
            genero: "Ação/Aventura",
            elenco: "Tom Holland, Samuel L. Jackson, Zendaya, Cobie Smulders, Jon Favreau, JB Smoove, Jacob Batalon",
            direcao: "Jon Watts",
            avaliacao: "7.4/10",
            duracao: "129 minutos",
            Trailer: "https://youtu.be/6bpZXJgtYww?si=QrGGSArw7OP15VAD",
        },
        {
            id: "avatar",
            titulo: "Avatar",
            imagem: "../public/Fotos/avatar.webp",
            imagemCarrossel: "../public/Fotos/avatarcarrossel.jpg",
            sinopse: "Em 'Avatar', Jake Sully, um ex-fuzileiro paraplégico, é recrutado para participar do Programa Avatar em Pandora, onde se envolve com os Na'vi e enfrenta dilemas entre lealdade e consciência.",
            ano: "2009",
            genero: "Ficção Científica/Ação",
            elenco: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
            direcao: "James Cameron",
            avaliacao: "7.8/10",
            duracao: "162 minutos",
            Trailer: "https://youtu.be/x5pZI-DmtrE?si=h8YjIvidPAtcNbPi",
        },
        {
            id: "harrypotter",
            titulo: "Harry Potter e as Relíquias da Morte: Parte 1",
            imagem: "../public/Fotos/harrypottereasreliquiasdamorte.webp",
            imagemCarrossel: "../public/Fotos/harrypottercarrossel.jpg",
            sinopse: "Harry, Ron e Hermione partem em uma missão para destruir as Horcruxes de Voldemort, enfrentando perigos e desafios que testam sua amizade e coragem.",
            ano: "2010",
            genero: "Fantasia/Aventura",
            elenco: "Daniel Radcliffe, Emma Watson, Rupert Grint, Ralph Fiennes",
            direcao: "David Yates",
            avaliacao: "7.7/10",
            duracao: "146 minutos",
            Trailer: "https://youtu.be/vX4uUtJfOPA?si=tIg-vHxss-Dw17io",
        },
        {
            id: "americanpie",
            titulo: "American Pie 2",
            imagem: "../public/Fotos/americanpie.jpg",
            imagemCarrossel: "../public/Fotos/americanpie2carrossel.jpeg",
            sinopse: "Um grupo de amigos do ensino médio faz um pacto para perder a virgindade antes da formatura, levando a situações hilárias e embaraçosas.",
            ano: "2001",
            genero: "Comédia/Romance",
            elenco: "Jason Biggs, Chris Klein, Thomas Ian Nicholas, Alyson Hannigan",
            direcao: "Paul Weitz, Chris Weitz",
            avaliacao: "7.0/10",
            duracao: "95 minutos",
            Trailer: "https://youtu.be/FLWu4KewJlU?si=Kb5K8rt2OZTU6VhK",
        },
        {
            id: "animais",
            titulo: "Animais Fantásticos e Onde Habitam",
            imagem: "../public/Fotos/animais.webp",
            sinopse: "Newt Scamander chega a Nova York com uma mala cheia de criaturas mágicas. Quando algumas escapam, ele precisa recuperá-las antes que causem problemas.",
            ano: "2016",
            genero: "Fantasia/Aventura",
            elenco: "Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol",
            direcao: "David Yates",
            avaliacao: "7.3/10",
            duracao: "133 minutos",
            Trailer: "https://youtu.be/TiaxfJ7QrIo?si=6xJueByu5Ry8gZEY",
        },
        {
            id: "meugaroto",
            titulo: "Este é Meu Garoto",
            imagem: "../public/Fotos/esteemeugaroto.jpg",
            sinopse: "Donny, um pai irresponsável, tenta se reconectar com seu filho Todd, que está prestes a se casar, causando uma série de confusões.",
            ano: "2012",
            genero: "Comédia",
            elenco: "Adam Sandler, Andy Samberg, Leighton Meester, Susan Sarandon",
            direcao: "Sean Anders",
            avaliacao: "5.5/10",
            duracao: "116 minutos",
            Trailer: "https://youtu.be/jl92N-90xr8?si=9yy2F8V7EQWv0WBB",
        },
        {
            id: "karatekid",
            titulo: "Karate Kid Legends",
            imagem: "../public/Fotos/karatekidlegends.webp",
            sinopse: "Uma nova geração de lutadores é treinada por mestres lendários para enfrentar desafios e manter viva a tradição do karatê.",
            ano: "2024",
            genero: "Ação/Drama",
            elenco: "Jackie Chan, Ralph Macchio, Ben Wang",
            direcao: "Jonathan Entwistle",
            avaliacao: "N/A",
            duracao: "N/A",
            Trailer: "https://youtu.be/LhRXf-yEQqA?si=1moLSaTVmm0bHLPX",
        },
    ],
    classicos: [
        {
            id: "gntgrande",
            titulo: "Gente Grande 2",
            imagem: "../public/Fotos/gntgrande.jpg",
            sinopse: "Lenny e seus amigos enfrentam os desafios da vida adulta enquanto tentam reviver os bons tempos da juventude.",
            ano: "2013",
            genero: "Comédia",
            elenco: "Adam Sandler, Kevin James, Chris Rock, David Spade",
            direcao: "Dennis Dugan",
            avaliacao: "5.4/10",
            duracao: "101 minutos",
            Trailer: "https://youtu.be/U4IVNvPu134?si=EW4yKKZVBD0l6tCs",
        },
        {
            id: "projectx",
            titulo: "Project X",
            imagem: "../public/Fotos/projectx.jpg",
            sinopse: "Três amigos organizam uma festa épica para ganhar popularidade, mas as coisas saem do controle de forma inesperada.",
            ano: "2012",
            genero: "Comédia",
            elenco: "Thomas Mann, Oliver Cooper, Jonathan Daniel Brown",
            direcao: "Nima Nourizadeh",
            avaliacao: "6.6/10",
            duracao: "88 minutos",
            Trailer: "https://youtu.be/kFwGmQIe-rU?si=p1FaNVuKk3AIg-DI",
        },
        {
            id: "virgem",
            titulo: "O Último Virgem",
            imagem: "../public/Fotos/oultimovirgem.webp",
            sinopse: "Didi é um adolescente tímido e virgem que estuda em um colégio conservador. Ao se apaixonar pela nova professora, ele se envolve em uma série de confusões com seus amigos enquanto tenta conquistar a moça.",
            ano: "2016",
            genero: "Comédia",
            elenco: "Guilherme Prates, Bia Arantes, Fiuk, Camilla Camargo, Marcos Pitombo",
            direcao: "Reni de Oliveira",
            avaliacao: "5.2/10",
            duracao: "88 minutos",
            Trailer: "https://youtu.be/2oGjXEZDCNc?si=WcVsZZMFtyKmHM0h",
        },
        {
            id: "interstellar",
            titulo: "Interestelar",
            imagem: "../public/Fotos/interstellar.jpg",
            sinopse: "Em um futuro onde a Terra está morrendo, um grupo de astronautas viaja por um buraco de minhoca em busca de um novo lar para a humanidade.",
            ano: "2014",
            genero: "Ficção Científica/Drama",
            elenco: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine",
            direcao: "Christopher Nolan",
            avaliacao: "8.7/10",
            duracao: "169 minutos",
            Trailer: "https://youtu.be/zSWdZVtXT7E?si=sMzhRPMVmJpt3UMe",
        },
        {
            id: "elaedemais",
            titulo: "Ela é Demais para Mim",
            imagem: "../public/Fotos/Elaedemaispramim.jpg",
            sinopse: "Um homem comum começa a namorar uma mulher incrivelmente bonita, e sua insegurança ameaça o relacionamento.",
            ano: "2010",
            genero: "Comédia/Romance",
            elenco: "Jay Baruchel, Alice Eve, T.J. Miller, Nate Torrence",
            direcao: "Jim Field Smith",
            avaliacao: "6.4/10",
            duracao: "104 minutos",
            Trailer: "https://youtu.be/_gemCjNNdx4?si=k2hxVC65YFufsnwe",
        },
        {
            id: "avidaebela",
            titulo: "A Vida é Bela",
            imagem: "../public/Fotos/avidaebela.webp",
            sinopse: "Durante a Segunda Guerra Mundial, um pai usa sua imaginação para proteger seu filho dos horrores de um campo de concentração nazista.",
            ano: "1997",
            genero: "Drama/Comédia",
            elenco: "Roberto Benigni, Nicoletta Braschi, Giorgio Cantarini",
            direcao: "Roberto Benigni",
            avaliacao: "8.6/10",
            duracao: "116 minutos",
            Trailer: "https://youtu.be/2MPGncRcZwk?si=AWl20Hs9FQohBDfz",
        },
        {
            id: "karatekidog",
            titulo: "Karatê Kid",
            imagem: "../public/Fotos/karatekidog.jpg",
            sinopse: "Um adolescente aprende lições de vida e autodefesa com um mestre de caratê para enfrentar valentões na nova escola.",
            ano: "1984",
            genero: "Ação/Drama",
            elenco: "Ralph Macchio, Pat Morita, Elisabeth Shue",
            direcao: "John G. Avildsen",
            avaliacao: "7.3/10",
            duracao: "126 minutos",
            Trailer: "https://youtu.be/r_8Rw16uscg?si=i5ZuYVp-cwL91bZ5",
        },
        {
            id: "badboys",
            titulo: "Bad Boys",
            imagem: "../public/Fotos/badboys.jpg",
            sinopse: "Dois policiais de Miami investigam o roubo de drogas da delegacia e enfrentam criminosos perigosos em meio a muita ação e humor.",
            ano: "1995",
            genero: "Ação/Comédia",
            elenco: "Will Smith, Martin Lawrence, Téa Leoni, Tchéky Karyo",
            direcao: "Michael Bay",
            avaliacao: "6.9/10",
            duracao: "119 minutos",
            Trailer: "https://youtu.be/Xm12NSa8jsM?si=Amy3z6Iv4d1U1psj",
        },
        {
            id: "birdbox",
            titulo: "Bird Box",
            imagem: "../public/Fotos/birdbox.jpg",
            sinopse: "Uma mãe tenta proteger seus filhos em um mundo pós-apocalíptico onde criaturas misteriosas levam as pessoas ao suicídio ao serem vistas.",
            ano: "2018",
            genero: "Terror/Ficção Científica",
            elenco: "Sandra Bullock, Trevante Rhodes, John Malkovich, Sarah Paulson",
            direcao: "Susanne Bier",
            avaliacao: "6.6/10",
            duracao: "124 minutos",
            Trailer: "https://youtu.be/o2AsIXSh2xo?si=AiZMLo7_aY2Ztm3P",
        },
    ]
};
function togglefavorito(btn, id) {
    btn.classList.toggle("ativo");
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");

    if (favoritos.includes(id)) {
        localStorage.setItem("favoritos", JSON.stringify(favoritos.filter(f => f !== id)));
    } else {
        favoritos.push(id);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
}
function adicionarAosFavoritos(filme) {
    const favoritos = JSON.parse(localStorage.getItem("filmesFavoritos")) || [];

    const jaExiste = favoritos.some(f => f.id === filme.id);
    if (!jaExiste) {
        favoritos.push(filme);
        localStorage.setItem("filmesFavoritos", JSON.stringify(favoritos));
    }
}

function mostrarFavoritos(containerId) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
    const todosFilmes = [...filmes.maisAssistidos, ...filmes.classicos];
    const filmesFavoritos = todosFilmes.filter(f => favoritos.includes(f.id));
    montarFilmes(filmesFavoritos, containerId);
}
function ordenarPorAvaliacao(lista) {
    return [...lista].sort((a, b) => {
        const notaA = parseFloat(a.avaliacao) || 0;
        const notaB = parseFloat(b.avaliacao) || 0;
        return notaB - notaA;
    });
}
function montarFilmes(lista, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");

    lista.forEach(filme => {
        const ativo = favoritos.includes(filme.id) ? "ativo" : "";

        const cardHTML = `
            <div class="col-auto mb-4">
                <a href="detalhes.html?id=${filme.id}">
                    <div class="filme" data-id="${filme.id}">
                        <img src="${filme.imagem}" alt="${filme.titulo}">
                        <button class="favorito ${ativo}" onclick="togglefavorito(this, '${filme.id}'); event.preventDefault();">❤️</button>
                    </div>
                </a>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}
// ✅ Função para extrair o ID do YouTube
function extrairIdYoutube(url) {
    const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([^?&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function exibirDetalhesDoFilme() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) return;

    const filme = [...filmes.maisAssistidos, ...filmes.classicos].find(f => f.id === id);

    if (!filme) {
        document.body.innerHTML = "<h1>Filme não encontrado</h1>";
        return;
    }

    document.getElementById("titulo").textContent = filme.titulo;
    document.getElementById("imagem").src = filme.imagem;
    document.getElementById("imagem").alt = filme.titulo;
    document.getElementById("ano").textContent = filme.ano || "-";
    document.getElementById("genero").textContent = filme.genero || "-";
    document.getElementById("sinopse").textContent = filme.sinopse || "-";
    document.getElementById("elenco").textContent = filme.elenco || "-";
    document.getElementById("direcao").textContent = filme.direcao || "-";
    document.getElementById("duracao").textContent = filme.duracao || "-";
    document.getElementById("avaliacao").textContent = filme.avaliacao || "-";

    if (filme.Trailer) {
        document.getElementById("trailer-container").innerHTML = `
            <iframe width="100%" height="315"
                src="https://www.youtube.com/embed/${extrairIdYoutube(filme.Trailer)}"
                title="Trailer de ${filme.titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        `;
    } else {
        document.getElementById("trailer-container").innerHTML = "<p>Trailer não disponível</p>";
    }
}

// ✅ Único event listener para toda a inicialização
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("detalhes.html")) {
        exibirDetalhesDoFilme();
    } else {
        montarCarrosselDestaques();
        montarFilmes(filmes.maisAssistidos, "maisAssistidos");
        montarFilmes(filmes.classicos, "classicos");
    }
});

function montarCarrosselDestaques() {
    const filmesDestaque = filmes.maisAssistidos.slice(0, 6);
    const carouselInner = document.getElementById('carousel-inner-container');
    const carouselIndicators = document.getElementById('carousel-indicators');
    
    // Limpa o carrossel
    carouselInner.innerHTML = '';
    carouselIndicators.innerHTML = '';
    
    // Divide os filmes em grupos de 3
    const grupos = [];
    for (let i = 0; i < filmesDestaque.length; i += 3) {
        grupos.push(filmesDestaque.slice(i, i + 3));
    }

    // Cria os indicadores
    grupos.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.dataset.bsTarget = '#destaquesCarousel';
        indicator.dataset.bsSlideTo = index;
        indicator.className = index === 0 ? 'active' : '';
        indicator.setAttribute('aria-current', index === 0 ? 'true' : 'false');
        indicator.setAttribute('aria-label', `Slide ${index + 1}`);
        carouselIndicators.appendChild(indicator);
    });

    // Cria os slides
    grupos.forEach((grupo, index) => {
        const slideItem = document.createElement('div');
        slideItem.className = `carousel-item${index === 0 ? ' active' : ''}`;
        
        const row = document.createElement('div');
        row.className = 'row justify-content-center g-4';

        grupo.forEach(filme => {
            const col = document.createElement('div');
            col.className = 'col-md-4';
            col.innerHTML = `
                <div class="card bg-dark text-white h-100">
                    <div class="carousel-img-container">
                        <img src="${filme.imagemCarrossel || filme.imagem}" 
                             class="card-img-top carousel-img" 
                             alt="${filme.titulo}"
                             loading="lazy">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${filme.titulo}</h5>
                        <p class="card-text">${filme.sinopse.substring(0, 100)}...</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="badge bg-danger">${filme.avaliacao}</span>
                        </div>
                    </div>
                </div>
            `;
            
            // Adiciona evento de clique na imagem
            const img = col.querySelector('.carousel-img');
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                window.location.href = `detalhes.html?id=${filme.id}`;
            });
            
            row.appendChild(col);
        });

        slideItem.appendChild(row);
        carouselInner.appendChild(slideItem);
    });

    // Delegación de eventos para os botões "Ver mais"
    document.getElementById('carousel-inner-container').addEventListener('click', function(e) {
        const verMaisBtn = e.target.closest('.ver-mais-btn');
        if (verMaisBtn) {
            e.preventDefault();
            const filmeId = verMaisBtn.getAttribute('data-filme-id');
            window.location.href = `detalhes.html?id=${filmeId}`;
        }
    });

    // Inicializa o carrossel
    setTimeout(() => {
        const carouselElement = document.getElementById('destaquesCarousel');
        const existingCarousel = bootstrap.Carousel.getInstance(carouselElement);
        if (existingCarousel) {
            existingCarousel.dispose();
        }
        
        new bootstrap.Carousel(carouselElement, {
            interval: 5000,
            keyboard: true,
            pause: 'hover',
            wrap: true,
            touch: true,
            ride: 'carousel'
        });
    }, 100);
}