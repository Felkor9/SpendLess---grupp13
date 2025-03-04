import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const createAccountStore = defineStore('auth', () => {
  const email = ref('')
  const newPassword = ref('')
  const loginEmail = ref('')
  const loginPassword = ref('')
  const user = ref(null)
  const name = ref('')
  const repeatPassword = ref('')

  const registerUser = () => {
    const newUser = {
      email: email.value,
      password: newPassword.value, // Använd "password" istället för "newPassword"
      name: name.value
    }

    // Funktion för att spara lösenord och email i localStorage (Evelina & Felix)
    const users = JSON.parse(localStorage.getItem('users')) || []

    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))

    // Återställer formuläret (Evelina & Felix)
    email.value = ''
    newPassword.value = ''
    name.value = ''
    repeatPassword.value = ''

    console.log('användare registrerad', users)
  }

  const loginUser = () => {
    // Hämta användare från localStorage
    const users = JSON.parse(localStorage.getItem('users')) || []

    // Hitta användaren baserat på email och lösenord
    const foundUser = users.find(
      (u) => u.email === loginEmail.value && u.password === loginPassword.value
    )

    if (foundUser) {
      // Om användaren hittas, logga in
      console.log('✅ Grattis, du har loggat in')
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser)) // Spara inloggad användare i localStorage
      user.value = foundUser // Sätt den inloggade användaren i reaktiv variabel
      console.log('Inloggad användare:', foundUser)

      loginEmail.value = ''
      loginPassword.value = ''
    } else {
      // Om användaren inte hittas
      console.log('❌ Fel e-post eller lösenord')
    }
  }

  const logoutUser = () => {
    // Rensa användaren från localStorage
    localStorage.removeItem('loggedInUser')

    // Återställ den reaktiva användaren
    user.value = null

    console.log('Användaren har loggats ut')
  }

  const value = ref('')
  const repeatValue = ref('')
  // const matchedPasswords = ref('')

  const passwordsMatch = computed(
    () => newPassword.value === repeatPassword.value
  )

  const passwordLongEnough = computed(() => {
    return newPassword.value.length >= 5 && repeatPassword.value.length >= 5
  })

  //Sparar en användares upplagda varor i localStorage
  const myUploads = computed(() => {})

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
    repeatValue,
    repeatPassword,
    passwordsMatch,
    passwordLongEnough,
    value
  }
})

// export const loginUserStore = defineStore('auth', () => {

// })
