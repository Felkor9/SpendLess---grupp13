<template>
  <nav>
    <!-- Hamburgarmenyn -->
    <img
      src="/assets/hamburgerMeny.svg"
      alt="ikon för hamburgarmeny"
      id="hamburgerIcon"
      @click="toggleMenu()"
    />
    <router-link to="/">
      <img src="/assets/spendLess-Ikonv1.png" alt="" id="spendLessIcon"
    /></router-link>
    <img
      src="/assets/userIcon.svg"
      alt=""
      id="userIcon"
      @click="toggleProfile"
    />
  </nav>
  <div>
    <ul v-if="hamburgerMenu" id="UnOrderedListCategory" class="bg-light">
      <li class="listItemCategory">
        <router-link to="/" class="routerLink" @click="closeMenu"
          >Home</router-link
        >
      </li>
      <li class="listItemCategory">
        <router-link to="/about" class="routerLink" @click="closeMenu"
          >About</router-link
        >
      </li>
      <li class="listItemCategory" v-if="store.user">
        <router-link to="/loggedinview" class="routerLink" @click="closeMenu"
          >Mina sidor</router-link
        >
      </li>
      <li class="listItemCategory" v-else>
        <router-link to="/myaccount" class="routerLink" @click="closeMenu"
          >Mina sidor</router-link
        >
      </li>
      <li class="listItemCategory">
        <router-link to="/newproduct" class="routerLink" @click="closeMenu"
          >Lägg upp annons</router-link
        >
      </li>
      <!-- <li class="listItemCategory">
        <router-link to="/loggedinview" class="routerLink" @click="closeMenu"
          >Inloggad vy</router-link
        >
      </li> -->
    </ul>
  </div>
  <!-- Profilmenyn till höger som visas om användare är inloggad -->
  <BContainer id="containerForAccounts" v-if="profileMenu" class="bg-light">
    <div v-if="store.user">
      <p>välkommen {{ store.user.name }}</p>
      <div id="containerForSettings">
        <BButton variant="secondary">Inställningar</BButton>
      </div>
      <div>
        <BButton
          variant="primary"
          size="sm"
          class="buttonLogIn"
          type="submit"
          @click="logout"
          >LOGGA UT</BButton
        >
      </div>
    </div>
    <div v-else>
      <h1>Logga in</h1>
      <BForm @submit.prevent="store.loginUser">
        <div class="containerForSign">
          <label for="LoginForm" class="EmailLabel">Email</label>
          <input type="text" class="loginForm" v-model="store.loginEmail" />

          <label for="LoginForm" class="PasswordLabel">Lösenord</label>
          <input
            type="password"
            class="loginForm"
            v-model="store.loginPassword"
          />
          <a
            class="passwordButton linkPassword"
            @click.prevent="modal = !modal"
            href=""
            >Glömt lösenord?</a
          >
          <BModal v-model="modal" title="Glömt lösenord?"
            >Fyll i din e-post och tryck sedan på "OK".<input
              type="text"
              placeholder="E-post"
              class="inputMail"
          /></BModal>
          <BButton variant="primary" size="sm" class="buttonLogIn" type="submit"
            >LOGGA IN</BButton
          >
        </div>
      </BForm>
      <p>
        Har du inget konto?
        <a href="#myaccount" @click="closeProfile"
          ><router-link to="/myaccount">Skapa Konto</router-link></a
        >
      </p>
    </div>
  </BContainer>
</template>
<script setup>
  //Här importerar vi lite gött
  import { ref } from 'vue'
  import { createAccountStore } from '../store'
  import { BButton, BContainer } from 'bootstrap-vue-next'

  const store = createAccountStore()

  // console.log(store.user.name)

  //funtion för att öppna hamburgarmenyn (Felix)
  const hamburgerMenu = ref(false)
  const toggleMenu = () => {
    hamburgerMenu.value = !hamburgerMenu.value
  }

  //Stänger hamburgarmenyn igen (Evelina)
  const closeMenu = () => {
    hamburgerMenu.value = false
  }

  //Funktion för att öppna profilmenyn (Felix)
  const profileMenu = ref(false)
  const toggleProfile = () => {
    profileMenu.value = !profileMenu.value
  }

  const closeProfile = () => {
    profileMenu.value = false
  }

  const modal = ref(false)

  const logout = () => {
    store.logoutUser() // Anropa logoutUser actionen från store
  }
</script>

<style scoped>
  @media screen and (max-width: 850px) {
    nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 20px;
      padding: 5px;
      position: relative;
      width: 100vw;
      height: 80px;
    }

    #hamburgerIcon {
      width: 45px;
      height: 45px;
      cursor: pointer;
      position: absolute;
      margin-left: 10px;
      top: 1;
      left: 0;
    }

    #spendLessIcon {
      width: 70px;
      height: 50px;
    }

    #userIcon {
      width: 70px;
      height: 70px;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 10px;
    }

    .buttonLogIn {
      margin: 5px;
      width: 15rem;
      height: 40px;
      font-size: 20px;
    }

    #UnOrderedListCategory {
      z-index: 2;
      margin: 0;
      padding: 0;
      width: 80vw;
      height: auto;
      position: absolute;
      top: 50;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 2px 2px 10px grey;
    }

    #containerForAccounts {
      z-index: 2;
      margin: 0;
      padding: 0;
      width: 90vw;
      min-height: 50vh;
      position: absolute;
      top: 50;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 2px 2px 10px grey;
    }

    .listItemCategory {
      z-index: 2;
      list-style-type: none;
      margin: 10px;
      padding: 5px;
      width: 100%;
      border-bottom: 1px solid black;
    }

    .routerLink {
      color: black;
      text-decoration: none;
      font-size: 20px;
    }

    #router-link {
      color: white;
      text-decoration: none;
    }

    .EmailLabel {
      align-self: flex-start;
      font-size: large;
      margin-left: 5px;
    }

    .PasswordLabel {
      align-self: flex-start;
      font-size: large;
      margin-left: 5px;
    }

    .containerForSign {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .loginForm {
      padding: 5px;
      width: 15rem;
    }

    .passwordButton {
      margin-top: 5px;
      margin-bottom: 5px;
      background-color: none;
      cursor: pointer;
    }

    .linkPassword {
      cursor: pointer;
    }

    .inputMail {
      margin-top: 5px;
    }
  }
  @media screen and (min-width: 850px) {
    .passwordButton {
      margin-top: 5px;
      margin-bottom: 5px;
    }

    .inputMail {
      margin-top: 5px;
    }

    nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 20px;
      padding: 5px;
      position: relative;
      width: 100vw;
      height: 80px;
    }

    #hamburgerIcon {
      width: 45px;
      height: 45px;
      cursor: pointer;
      position: absolute;
      margin-left: 10px;
      top: 1;
      left: 0;
    }

    #spendLessIcon {
      width: 70px;
      height: 50px;
    }

    #userIcon {
      width: 70px;
      height: 70px;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 10px;
    }

    .buttonLogIn {
      margin: 5px;
      width: 15rem;
      height: 40px;
      font-size: 20px;
    }

    #UnOrderedListCategory {
      z-index: 2;
      margin: 0;
      padding: 0;
      width: 80vw;
      height: auto;
      position: absolute;
      top: 50;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 2px 2px 10px grey;
    }

    #containerForAccounts {
      z-index: 2;
      margin: 0;
      padding: 0;
      width: 90vw;
      min-height: 50vh;
      position: absolute;
      top: 50;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 2px 2px 10px grey;
    }

    .listItemCategory {
      z-index: 2;
      list-style-type: none;
      margin: 10px;
      padding: 5px;
      width: 100%;
      border-bottom: 1px solid black;
    }

    #router-link {
      color: white;
      text-decoration: none;
    }

    .routerLink {
      color: black;
      text-decoration: none;
      font-size: 20px;
    }

    .EmailLabel {
      align-self: flex-start;
      font-size: large;
      margin-left: 5px;
    }

    .PasswordLabel {
      align-self: flex-start;
      font-size: large;
      margin-left: 5px;
    }

    .containerForSign {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .loginForm {
      padding: 5px;
      width: 15rem;
    }
  }
</style>
