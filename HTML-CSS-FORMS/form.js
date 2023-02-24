function clearInputs() {
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i += 1) {
    const input = inputs[i];
    if (input.type === 'text' || input.type === 'email' || input.type === 'date') {
      input.value = '';
    } else if (input.checked) {
      input.checked = false;
    }
  }
  const textArea = document.getElementById('descrição-ganhador');
  textArea.value = '';
}

function verifyForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const description = document.getElementById('descrição-ganhador').value;
  if (name.length < 10 || name.length > 40) {
    return alert('Dados Inválidos');
  }
  if (email.length < 10 || email.length > 50) {
    return alert('Dados Inválidos');
  }
  if (description.length > 500) {
    alert('Dados Inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    clearInputs();
  }
}

function submitForm() {
  const checkBoxAcordo = document.getElementById('acordo');
  if (checkBoxAcordo.checked) {
    verifyForm() 
  } else {
    return alert('Marque que concorda com a divulgação das imagens');
  }
}

function createBottonEnviar() {
  const button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.id = 'submit';
  button.innerHTML = 'Enviar';
  const divButton = document.getElementById('div-button');
  divButton.appendChild(button);
  button.addEventListener('click', (event) => {
    event.preventDefault();
    submitForm();
  })
}

createBottonEnviar()

function createBottonApagar() {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.id = 'clear';
  button.innerHTML = 'Apagar';
  const divButton = document.getElementById('div-button');
  divButton.appendChild(button);
  button.addEventListener('click', (event) => {
    event.preventDefault();
    clearInputs();
  })
}

createBottonApagar()

// Crie um Formulario
// O formulário deverá permitir que a pessoa usuária insira os seguintes campos:
// Nome Completo: Limitado entre 10 e 40 caracteres.
// E-mail: Limitado entre 10 e 50 caracteres.
// Destino Preferido: 4 opções: Cidade, Campo, Praia, Montanhas.
// Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
// Limite de 500 caracteres.
// Qual a melhor data para realizar sua viagem?
// Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
// Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.
// Crie um botão para enviar as informações preenchidas.
// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().
// Crie um botão que limpe as informações contidas nos campos.
// (Bônus) A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em 
// mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
// (Bônus) Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do 
// esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 
// ‘Dados Inválidos’. Caso contrário, a mensagem ‘Dados enviados com sucesso! Obrigado 
// por participar do concurso TrybeTrip.’ deverá aparecer na tela.

