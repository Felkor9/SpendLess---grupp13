import { defineStore } from 'pinia';
import { ref } from 'vue';

export const createAccountStore = defineStore('auth', () => {
  const email = ref('');
  const newPassword = ref('');

  const registerUser = () => {
    const newUser = {
      email: email.value,
      password: newPassword.value
    };

    // Funktion för att spara lösenord och email i localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Återställer formuläret
    email.value = '';
    newPassword.value = '';

    console.log(users);
  };

  return { email, newPassword, registerUser };
});
