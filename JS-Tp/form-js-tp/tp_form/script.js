const errorMessage = `
<span class="icon-box">
  <img src="./images/icon-error.svg" alt="" class="icon" />
</span>
<span class="alert">Le champ n'est pas valide</span>
`;

const regexTel = /^(0[1-9])[0-9]{8}$/;
const regexEmail = /^[a-z0-9.-]+@[a-z0-9.-]+(\.[a-z]{2,4})$/;
const regexPwd = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,12}/;

const checkContainsNumber = (word) => {
  const regex = /(?=.*[0-9])|(?<=.*[0-9])/; // signifie "l'endroit où n'importe quelle partie de la chaîne est suivie par au moins un chiffre" ou "l'endroit où n'importe quelle partie de la chaîne est précédée par au moins un chiffre"
  return regex.test(word);
};

const form = document.querySelector('form');
const nom = form.nom;
const prenom = form.prenom;
const email = form.email;
const tel = form.tel;
const pwd = form.pwd;
const submit = form.button;

function nameCheck() {
  if (nom.value !== '') {
    if (nom.value.length <= 2 || checkContainsNumber(nom.value)) {
      nom.classList.remove('green-text');
      nom.classList.toggle('red-text', true);
      // nom.insertAdjacentHTML = ('afterend', errorMessage);

    } else {
      nom.classList.remove('red-text');
      nom.classList.toggle('green-text', true);
    }
  }
  if (prenom.value !== '') {
    if (prenom.value.length <= 2 || checkContainsNumber(nom.value)) {
      prenom.classList.remove('green-text');
      prenom.classList.toggle('red-text', true);

    } else {
      prenom.classList.remove('red-text');
      prenom.classList.toggle('green-text', true);
    }
  }

}

function emailCheck() {

  if (email.value !== '') {
    if (regexEmail.test(email.value) == false) {
      email.classList.remove('green-text');
      email.classList.toggle('red-text', true);
    }
    else {
      email.classList.remove('red-text');
      email.classList.toggle('green-text', true);
    }
  }
}

function telCheck() {

  if (tel.value !== '') {
    if (regexTel.test(tel.value) == false) {
      tel.classList.remove('green-text');
      tel.classList.toggle('red-text', true);
    }
    else {
      tel.classList.remove('red-text');
      tel.classList.toggle('green-text', true);
    }
  }
}

function pwdCheck() {

  if (pwd.value !== '') {
    if (regexPwd.test(pwd.value) == false) {
      pwd.classList.remove('green-text');
      pwd.classList.toggle('red-text', true);
      // pwd.insertAdjacentHTML('afterend', errorMessage)
    }
    else {
      pwd.classList.remove('red-text');
      pwd.classList.toggle('green-text', true);
    }
  }
}





form.addEventListener('input', function (e) {
  e.preventDefault();
  console.log(nom.value);

  nameCheck();
  emailCheck();
  telCheck();
  pwdCheck()
})







