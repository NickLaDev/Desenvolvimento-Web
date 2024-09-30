const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  fetch('https://formspree.io/f/mldrqonz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
      mensagem: mensagem
    })
  })
  .then((resposta) => {
    if (resposta.ok) {
      document.getElementById('formulario').reset();
      document.querySelector('.sucesso').style.display = 'block';
      document.querySelector('.sucesso').textContent = 'Mensagem enviada com sucesso!';
      setTimeout(() => {
        document.querySelector('.sucesso').style.display = 'none';
      }, 3000);
    } else {
      document.querySelector('.erro').style.display = 'block';
      document.querySelector('.erro').textContent = 'Erro ao enviar mensagem!';
      setTimeout(() => {
        document.querySelector('.erro').style.display = 'none';
      }, 3000);
    }
  })
  .catch((erro) => {
    console.error(erro);
  });
});