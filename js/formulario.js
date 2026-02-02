// Esse arquivo só vai funcionar caso esteja em um hospedagem conectado a um arquivo PHP
// Eu como estudante fiz por um forma alternativa para enviar o formulário direto para meu email.


// const formulario = document.querySelector('form');

// function formularioEnviado(resposta) {
//   if (resposta.ok) {
//     formulario.innerHTML =
//       '<p class="font-1-l" style="grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;"><span style="color: #317a00;">Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>';
//   } else {
//     formulario.innerHTML =
//       '<p class="font-1-l" style="grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;"><span style="color: #e00000;">Erro no Envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraft.net</p>';
//   }
// }

// function enviarFormulario(event) {
//   event.preventDefaut();
//   const botao = document.querySelector('form button');
//   botao.disabled = true;
//   botao.innerText = 'Enviando...';

//   const data = new FormData(formulario);
  
//   fetch('./enviar.php', {
//     method: 'POST',
//     body: data
//   }).then(formularioEnviado);
// }

// formulario.addEventListener('submit', enviarFormulario);