<template>
  <nav ref="containerRef">
    <!-- Hamburgarmenyn -->
    <img
      src="/assets/hamburgerMeny.svg"
      alt="ikon för hamburgarmeny"
      id="hamburgerIcon"
      @click="toggleMenu"
      ref="iconRef"
    />
    <router-link to="/">
      <img
        src="/assets/spendLess-Ikonv1.png"
        alt="företags-logo"
        id="spendLessIcon"
    /></router-link>
    <img
      src="/assets/userIcon.svg"
      alt="ikon för profil"
      id="userIcon"
      @click="toggleProfile"
      ref="iconRef"
    />
  </nav>
  <div>
    <ul v-if="hamburgerMenu" id="UnOrderedListCategory" class="bg-light">
      <li class="listItemCategory">
        <router-link to="/" class="routerLink" @click="closeMenu"
          ><img
            src="/assets/home.svg"
            alt="hem-ikon"
            class="IconForNav"
          />Home</router-link
        >
      </li>
      <li class="listItemCategory">
        <router-link to="/about" class="routerLink" @click="closeMenu"
          ><img
            src="/assets/about.svg"
            class="IconForNav"
            alt="about-ikon"
          />About</router-link
        >
      </li>
      <li class="listItemCategory" v-if="store.user">
        <router-link to="/loggedinview" class="routerLink" @click="closeMenu"
          ><img
            src="/assets/account.svg"
            class="IconForNav"
            alt="myaccount-ikon"
          />Mina sidor</router-link
        >
      </li>
      <li class="listItemCategory" v-else>
        <router-link to="/myaccount" class="routerLink" @click="closeMenu"
          ><img
            src="/assets/account.svg"
            class="IconForNav"
            alt="myaccount-ikon"
          />Mina sidor</router-link
        >
      </li>
      <li class="listItemCategory" v-if="store.user">
        <router-link to="/newproduct" class="routerLink" @click="closeMenu"
          ><img
            src="/assets/add-package.svg"
            class="IconForNav"
            alt="add-product-ikon"
          />Lägg upp annons</router-link
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
  <BContainer
    id="containerForAccounts"
    v-if="profileMenu"
    ref="containerRef"
    class="bg-light"
  >
    <div v-if="store.user" class="wrapper">
      <div id="containerForSettings">
        <BAvatar
          size="110px"
          :src="store.profilePicture"
          class="profile-avatar"
          alt="user-avatar"
        />
        <p>Välkommen {{ store.user.name }}!</p>
        <BButton class="settingsButton"
          ><router-link
            @click="closeProfile"
            to="/settings"
            style="color: white; text-decoration: none"
            >Inställningar</router-link
          ></BButton
        >
      </div>
      <div>
        <BButton
          variant="success"
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
          <BModal v-model="modal" title="Glömt lösenord?" ref="modalRef"
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
        <a href="#myaccount"
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
  import { BButton, BContainer, BModal } from 'bootstrap-vue-next'
  import { onClickOutside } from '@vueuse/core'

  const store = createAccountStore()
  const containerRef = ref(null)
  const iconRef = ref(null)
  const modalRef = ref(null)
  const modal = ref(false)

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

  onClickOutside(containerRef, (event) => {
    if (iconRef.value && iconRef.value.contains(event.target)) return
    if (modal.value) return // Om modalen är öppen, gör inget
    profileMenu.value = false
    hamburgerMenu.value = false
  })

  onClickOutside(containerRef, (event) => {
    if (iconRef.value && iconRef.value.contains(event.target)) return
    if (modal.value) return // Om modalen är öppen, ignorera klick utanför
    profileMenu.value = false
    hamburgerMenu.value = false
  })

  const logout = () => {
    store.logoutUser() // Anropa logoutUser actionen från store
  }
</script>

<style scoped>
  @media screen and (max-width: 768px) {
    nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 20px;
      padding: 5px;
      position: relative;
      width: 100vw;
      height: 80px;
      /* z-index: 3; */
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
      /* margin: 10px; */
      padding: 15px;
      width: 100%;
      border-bottom: 1px solid black;
      margin: 0;
      position: relative;
    }

    .IconForNav {
      width: 30px;
      position: absolute;
      top: 50;
      left: 0;
      margin-left: 8px;
    }

    .routerLink {
      color: black;
      text-decoration: none;
      font-size: 20px;
      margin-left: 40px;
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

    #containerForSettings {
      width: 100%;
      height: 150%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      /* width: 100%; */
    }

    .settingsButton {
      width: 40%;
      font-size: small;
    }
    .profile-avatar {
      border: 3px solid white;
      margin-bottom: 10px;
      /* align-self: top; */
    }
  }
  @media screen and (min-width: 768px) {
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
      height: 50px;
      z-index: 5;
    }

    #hamburgerIcon {
      width: 30px;
      height: 30px;
      cursor: pointer;
      position: absolute;
      margin-left: 10px;
      top: 1;
      left: 0;
    }

    #spendLessIcon {
      width: 50px;
      height: 30px;
    }

    #userIcon {
      width: 50px;
      height: 50px;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 10px;
    }

    .buttonLogIn {
      margin: 15px;
      width: 15rem;
      height: 40px;
      font-size: 20px;
    }

    #UnOrderedListCategory {
      z-index: 5;
      margin: 0;
      padding: 0;
      width: 50vw;
      height: auto;
      position: absolute;
      top: 50;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 2px 2px 10px grey;
    }

    #containerForAccounts {
      z-index: 5;
      margin: 0;
      padding: 0;
      width: 50vw;
      min-height: 50vh;
      position: absolute;
      top: 50;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 2px 2px 10px grey;
      /* z-index: 3; */
    }

    .listItemCategory {
      z-index: 2;
      list-style-type: none;
      /* margin: 10px; */
      padding: 15px;
      width: 100%;
      height: fit-content;
      margin: 0;
      border-bottom: 1px solid black;
      position: relative;
    }

    .IconForNav {
      width: 30px;
      position: absolute;
      top: 50;
      left: 0;
      margin-left: 8px;
    }

    #router-link {
      color: white;
      text-decoration: none;
    }

    .routerLink {
      color: black;
      text-decoration: none;
      font-size: 20px;
      margin-left: 30px;
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

    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      /* width: 100%; */
    }

    #containerForSettings {
      width: 100%;
      height: 150%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }

    .settingsButton {
      width: 40%;
      font-size: small;
      background-color: rgba(0, 0, 0, 0.555);
    }
    .profile-avatar {
      border: 3px solid white;
      margin-bottom: 10px;
      /* align-self: top; */
    }
  }
</style>
