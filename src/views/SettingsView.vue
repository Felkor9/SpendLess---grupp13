<template>
  <BContainer id="HeaderForSettings">
    <!-- Avatar som visar profilbild -->
    <BAvatar
      size="100px"
      :src="store.profilePicture || ''"
      class="profile-avatar"
    />

    <!-- Filuppladdning för profilbild -->
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
  import { ref, computed } from 'vue'
  import { BAvatar } from 'bootstrap-vue-next'
  import { createAccountStore } from '../store.js' // Importera Pinia-store

  const store = createAccountStore()
  const profilePicture = ref(store.profilePicture) // Hämta profilbild
  // const defaultAvatar = '/assets/'

  // Hantera filuppladdning
  const onFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        store.updateProfilePicture(e.target.result) // Uppdatera store
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
