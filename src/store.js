import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const createAccountStore = defineStore('auth', () => {
  const email = ref('')
  const newPassword = ref('')
  const loginEmail = ref('')
  const loginPassword = ref('')
  const user = ref(null)
  const name = ref('')
  const repeatPassword = ref('')
  const profilePicture = ref('')

  // hämtar medalanden från local storage, eller skapar en tom lista
  const messages = ref(JSON.parse(localStorage.getItem('chatMessages')) || [])

  //Användarens annonser (Evelina)
  const listings = ref(JSON.parse(localStorage.getItem('userListings')) || [])

  //Skickar meddelanden och sparar i LocalStorage
  // const sendMessage = (message) => {
  //   messages.value.push(message)
  //   localStorage.setItem('chatMessages', JSON.stringify(messages.value))
  // }

  //Ladda meddelanden från localStorage
  const loadMessages = () => {
    messages.value = JSON.parse(localStorage.getItem('chatMessages')) || []
  }

  //Registrerar användare och sparar i localStorage
  const registerUser = () => {
    const newUser = {
      email: email.value,
      password: newPassword.value, // Använd "password" istället för "newPassword"
      name: name.value,
      profilePicture: profilePicture.value || '' //lägger till profilbild om det är valt
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
    profilePicture.value = ''

    console.log('användare registrerad', users)
  }

  // Hämta användare från localStorage och logga in
  const loginUser = () => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    // profilePicture.value = foundUser.profilePicture || ''

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
      profilePicture.value = foundUser.profilePicture

      //Hämtar användarens annonser vid inloggning (Evelina)
      listings.value = JSON.parse(localStorage.getItem('userListings')) || []

      loginEmail.value = ''
      loginPassword.value = ''
    } else {
      // Om användaren inte hittas
      console.log('❌ Fel e-post eller lösenord')
    }
  }

  //Uppdatera profilbild
  const updateProfilePicture = (imageData) => {
    if (user.value) {
      user.value.profilePicture = imageData
      profilePicture.value = imageData
      localStorage.setItem('loggedInUser', JSON.stringify(user.value))

      const users = JSON.parse(localStorage.getItem('users')) || []
      const updatedUsers = users.map((u) =>
        u.email === user.value.email ? { ...u, profilePicture: imageData } : u
      )

      localStorage.setItem('users', JSON.stringify(updatedUsers))
      localStorage.setItem('loggedInUser', JSON.stringify(user.value))
    }
  }

  //Logga ut användare
  const logoutUser = () => {
    // Rensa användaren från localStorage
    localStorage.removeItem('loggedInUser')

    // Återställ den reaktiva användaren
    user.value = null
    profilePicture.value = ''

    console.log('Användaren har loggats ut')
  }

  //Lägg till en annons (Evelina)
  const addListing = (listing) => {
    listings.value.push(listing)
    localStorage.setItem('userListings', JSON.stringify(listings.value))
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

  //Ändrar /sparar profilbild (Felix)
  watch(profilePicture, (newPic) => {
    if (user.value) {
      user.value.profilePicture = newPic
      localStorage.setItem('loggedInUser', JSON.stringify(user.value))
    }
  })
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
    value,
    messages,
    sendMessage,
    loadMessages,
    updateProfilePicture,
    profilePicture,
    listings,
    addListing
  }
})

export const useAccountStore = createAccountStore
