
const btnLogin = document.getElementById('button-logar');
btnLogin.addEventListener('click', () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  if (email.value !== 'tryber@teste.com' && password.value !== '123456') {
    alert('Login ou senha inválidos.')
  } else {
    alert('Olá, Tryber!')
  }
})

const checkBoxAgreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
checkBoxAgreement.addEventListener('change', () => {
  // o disabled do btnSubmit sempre será o inverso do checked do checkBoxAgreement ?
  // se sim, porque não setar o valor do disabled para o inverso do checked
  btnSubmit.disabled = !checkBoxAgreement.checked;
  // if (checkBoxAgreement.checked === true) {
  //   btnSubmit.disabled = false;
  // }
  // if (checkBoxAgreement.checked !== true) {
  //   btnSubmit.disabled = true;
  // }  
});

const textarea = document.getElementById('textarea');
textarea.addEventListener('input', () => {
  const counter = document.getElementById('counter');
  const newValue = 500 - textarea.value.length;
  counter.innerText = newValue
});


btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const firstName = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const house = document.getElementById('house');
  const family = document.querySelectorAll('input[name="family"]:checked')[0].value;
  const materias = document.querySelectorAll('input[name="conteudo"]:checked');
  const materiasText = Array.from(materias).map(materia => materia.value).join(', ');
  const avaliacao = document.querySelectorAll('input[name="rate"]:checked')[0].value;
  const observacoes = document.getElementById('textarea');

  const form = document.getElementById('evaluation-form')
  form.innerHTML += `<div>
    Nome: ${firstName.value} ${lastName.value}
    Email: ${email.value}
    Casa: ${house.value}
    Família: ${family}
    Matérias: ${materiasText}
    Avaliação: ${avaliacao}
    Observações: ${observacoes.value}
  <div>`
})

