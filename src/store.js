import { json } from 'express';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const createAccountStore = defineStore('auth', () => {
  const email = ref('');
    const newPassword = ref('');
    const loginEmail = ref('')
    const loginPassword = ref('')
    const user = ref(null)
    const name = ref('')


    // meddalnden
    const messages = ref(json.parse(localStorage.getItem("chatMessages"))) || []

    //inloggning och registrering
  const registerUser = () => {
    const newUser = {
        email: email.value,
        password: newPassword.value,// Använd "password" istället för "newPassword"
        name: name.value
    };



    // Funktion för att spara lösenord och email i localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Återställer formuläret
        email.value = '';
      newPassword.value = '';
      name.value = ''

    console.log('användare registrerad' , users);
    };

    const loginUser = () => {
  // Hämta användare från localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Hitta användaren baserat på email och lösenord
  const foundUser = users.find(
    (u) => u.email === loginEmail.value && u.password === loginPassword.value
  );

  if (foundUser) {
    // Om användaren hittas, logga in
    console.log('✅ Grattis, du har loggat in');
    localStorage.setItem('loggedInUser', JSON.stringify(foundUser)); // Spara inloggad användare i localStorage
    user.value = foundUser; // Sätt den inloggade användaren i reaktiv variabel
      console.log('Inloggad användare:', foundUser);

      loginEmail.value = '';
      loginPassword.value = '';

  } else {
    // Om användaren inte hittas
    console.log('❌ Fel e-post eller lösenord');
        }

    };

    const logoutUser = () => {
    // Rensa användaren från localStorage
    localStorage.removeItem('loggedInUser');

    // Återställ den reaktiva användaren
    user.value = null;

        console.log('Användaren har loggats ut');

  };


    return {
        email,
        newPassword,
        loginEmail,
        loginPassword,
        user,
        name,
        registerUser,
        loginUser,
        logoutUser,
    };
});







    // export const loginUserStore = defineStore('auth', () => {


    // })
