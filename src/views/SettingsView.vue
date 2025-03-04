<template>
  <BContainer id="HeaderForSettings">
    <BAvatar size="100px" :src="profilePicture" class="profile-avatar" />
    <input
      type="file"
      @change="onFileChange"
      accept="image/*"
      class="file-input"
    />
    <div class="containerForList">
      <h3 id="headingName">Allmänt</h3>
      <ul class="ulLista">
        <router-link to="loggedinview" class="routerlink">
          <li class="item">
            Mina sidor<img src="/assets/arroww.svg" class="arrow" alt="" />
          </li>
        </router-link>
        <li class="item">
          Ändra stad<img src="/assets/arroww.svg" class="arrow" alt="" />
        </li>
        <li class="item">
          Ändra Lösenord<img
            src="/assets/arroww.svg"
            class="arrow"
            alt="pil som visar vart innehållet kommer"
          />
        </li>
      </ul>
    </div>
  </BContainer>
</template>
<script setup>
  import { BAvatar } from 'bootstrap-vue-next'
  import { ref } from 'vue'
  import { createAccountStore } from '../store'
  const store = createAccountStore()

  // Profilbild som en ref (kan lagras i localStorage eller Vuex om du vill spara den permanent)
  const profilePicture = ref(localStorage.getItem('profilePicture') || '')

  // Funktion för att hantera filuppladdning
  const onFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        profilePicture.value = e.target.result
        localStorage.setItem('profilePicture', e.target.result) // Spara i localStorage
      }
      reader.readAsDataURL(file)
    }
  }
</script>
<style scoped>
  #HeaderForSettings {
    width: 100%;
    height: 10em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .profile-avatar {
    border: 3px solid white;
    margin-bottom: 10px;
    margin-top: 150px;
    /* align-self: top; */
  }

  .routerlink {
    color: black;
    text-decoration: none;
  }

  #headingName {
    /* font-family: 'Times New Roman', Times, serif; */
    margin-left: 10px;
  }

  .ulLista {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-left: 20px;
  }

  .containerForList {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100vw;
    height: fit-content;
  }

  .item {
    list-style-type: none;
    width: 90%;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
    background-color: rgba(128, 128, 128, 0.231);
    position: relative;
  }

  .arrow {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
    margin-right: 10px;
    margin-top: 2px;
    padding: 5px;
  }

  .file-input {
    margin-top: 10px;
    cursor: pointer;
  }
</style>
