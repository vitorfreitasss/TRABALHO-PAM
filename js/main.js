document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const togglePwd = document.getElementById('togglePwd');
  const errorMsg = document.getElementById('error');

  // alternar visibilidade da senha
  togglePwd.addEventListener('click', () => {
    const isHidden = password.type === 'password';
    password.type = isHidden ? 'text' : 'password';
    togglePwd.textContent = isHidden ? '🙈' : '👁️';
  });

  // validar login simples
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userEmail = email.value.trim();
    const userPassword = password.value.trim();

    if (!userEmail || !userPassword) {
      showError('Preencha todos os campos.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      showError('E-mail inválido.');
      return;
    }

    if (userEmail === 'user@teste.com' && userPassword === '123456') {
      alert('Login bem-sucedido!');
      form.reset();
      errorMsg.textContent = '';
    } else {
      showError('E-mail ou senha incorretos.');
    }
  });

  function showError(msg) {
    errorMsg.textContent = msg;
  }
});