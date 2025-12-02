document.addEventListener('DOMContentLoaded', async () => {
    // Verifica se o usuário está autenticado
    const usuarioCorrente = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
    if (!usuarioCorrente || !usuarioCorrente.id) {
        alert('Usuário não autenticado');
        window.location.href = '/modulos/login/login.html';
        return;
    }
    
    try {
        const response = await fetch(`http://localhost:3000/usuarios/${usuarioCorrente.id}`);
        const usuario = await response.json();
        document.getElementById('nome').value = usuario.nome;
        document.getElementById('email').value = usuario.email;
        document.getElementById('bio').value = usuario.bio || '';
        document.getElementById('perfil').value = usuario.perfil || '';
        document.getElementById('nivel').value = usuario.nivel || '';
        document.getElementById('interesses').value = usuario.interesses ? usuario.interesses.join(', ') : '';
    } catch (error) {
        console.error('Erro ao carregar usuário:', error);
    }
});

async function salvarUsuario() {
    const usuarioCorrente = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
    if (!usuarioCorrente || !usuarioCorrente.id) {
        alert('Usuário não autenticado');
        window.location.href = '/modulos/login/login.html';
        return;
    }

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;
    const perfil = document.getElementById('perfil').value;
    const nivel = document.getElementById('nivel').value;
    const interesses = document.getElementById('interesses').value.split(',').map(i => i.trim());

    // Validação básica
    if (!nome || !email) {
        alert('Nome e email são obrigatórios');
        return;
    }

    const usuario = {
        id: usuarioCorrente.id,
        login: usuarioCorrente.login,
        senha: usuarioCorrente.senha,
        nome: nome,
        email: email,
        bio: bio,
        perfil: perfil,
        nivel: nivel,
        interesses: interesses,
        favoritos: usuarioCorrente.favoritos || []
    };

    try {
        const response = await fetch(`http://localhost:3000/usuarios/${usuarioCorrente.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)
        });

        if (!response.ok) {
            throw new Error('Erro ao salvar os dados');
        }

        alert('Perfil atualizado com sucesso!');
        sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuario));
        window.location.href = 'perfil.html';
    } catch (error) {
        console.error('Erro ao salvar usuário:', error);
        alert('Erro ao salvar os dados. Tente novamente mais tarde.');
    }
}