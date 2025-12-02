async function enviarDenuncia() {
  const postId = document.getElementById("postId").value;
  const usuarioId = document.getElementById("usuarioId").value;
  const motivo = document.getElementById("motivo").value;
  const comentario = document.getElementById("comentario").value;

  if (!postId || !usuarioId) {
    document.getElementById("statusMsg").textContent = "Preencha todos os campos obrigatórios.";
    return;
  }

  const denuncia = {
    postId: Number(postId),
    usuarioId: Number(usuarioId),
    motivo: motivo,
    comentarioAdicional: comentario,
    data: new Date().toISOString()
  };

  const resposta = await fetch("http://localhost:3000/denuncias", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(denuncia)
  });

  if (resposta.ok) {
    document.getElementById("statusMsg").textContent = "Denúncia enviada com sucesso!";
  } else {
    document.getElementById("statusMsg").textContent = "Erro ao enviar denúncia.";
  }
}
