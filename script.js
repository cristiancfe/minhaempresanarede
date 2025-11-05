// Validação do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function (e) {
	e.preventDefault();
  
	const nome = document.getElementById('nome').value;
	const email = document.getElementById('email').value;
	const mensagem = document.getElementById('mensagem').value;
  
	if (nome && email && mensagem) {
	  alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
	  document.getElementById('form-contato').reset();
	  window.location.href = 'index.html';
	} else {
	  alert('Por favor, preencha todos os campos obrigatórios.');
	}

  });



