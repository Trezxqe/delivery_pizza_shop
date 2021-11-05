const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const loginForm = document.querySelector('#loginForm');
const inputLogin = document.querySelector('#login');
const inputPassword = document.querySelector('#password');

buttonAuth.addEventListener('click', () => {
  modalAuth.style.display = 'flex';
});

closeAuth.addEventListener('click', () => {
  modalAuth.style.display = 'none';
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = {
    login: inputLogin.value,
    password: inputPassword.value
  };

  localStorage.setItem('user', JSON.stringify(user));

  login(user);

});

buttonOut.addEventListener('click', () => {
  logout()
})

const login = (user) => {
  buttonAuth.style.display = 'none';
  buttonOut.style.display = 'flex';
  userName.style.display = 'flex';
  modalAuth.style.display = 'none';

  if (user.login == '') {
    modalAuth.style.display = 'flex';
    loginForm.innerHTML = 'Enter your login';
  } else {
    userName.textContent = user.login;
  }

};

const logout = (user) => {
  buttonAuth.style.display = 'flex';
  buttonOut.style.display = 'none';
  userName.style.display = 'none';

  userName.textContent = '';

  localStorage.removeItem('user')
};

if (localStorage.getItem('user')) {
  login(JSON.parse(localStorage.getItem('user')));
}
