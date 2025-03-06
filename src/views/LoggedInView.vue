<template>
  <!-- visas ifall att användaren är inloggad -->
  <div class="profile-container" v-if="store.user">
    <BContainer fluid>
      <h1>Mina Sidor</h1>

      <!-- Profilinformation -->
      <BRow>
        <BCol class="text-center">
          <BAvatar
            size="80px"
            :src="store.profilePicture"
            class="profile-avatar"
          />
          <p>{{ store.user.name }}</p>

          <!-- stjärnan ska vara ifylld baserat på rating-->
          <div class="profile-rating">
            <span
              v-for="star in 5"
              :key="star"
              class="star"
              :class="{ filled: star <= userTest.rating }"
            >
            </span>
          </div>
        </BCol>
      </BRow>

      <!-- Menyflikar -->
      <BRow class="profile-tabs">
        <BCol>
          <BButton variant="success" block @click="activeTab = 'listings'"
            >Mina Annonser</BButton
          >
        </BCol>
        <BCol>
          <BButton variant="success" block @click="activeTab = 'wishlist'"
            >Favoriter</BButton
          >
        </BCol>
        <BCol>
          <BButton variant="success" block @click="activeTab = 'messages'"
            >Meddelanden</BButton
          >
        </BCol>
        <BCol>
          <router-link to="/newproduct">
            <BButton variant="warning" block
              >Lägg upp annons</BButton
            ></router-link
          >
        </BCol>
      </BRow>

      <!--Mina annonser-->
      <BRow>
        <BCol>
          <div v-if="activeTab === 'listings'">
            <h5>Mina Annonser</h5>
            <BListGroup v-if="userListings.length">
              <BListGroupItem
                v-for="listings in userListings"
                :key="listings.namn"
                class="d-flex justify-content-between align-items-center"
              >
                <div>
                  <h5>{{ listings.namn }}</h5>
                  <p>{{ listings.pris }}:-</p>
                  <img :src="listings.bilder[1]" alt="Produktbild" />
                </div>
              </BListGroupItem>
            </BListGroup>
            <p v-else>Du har inga aktiva annonser</p>
          </div>

          <!--ingen lista eller liknande skapad för favoriter och meddelanden ännu -->
          <div v-if="activeTab === 'wishlist'">
            <h5>Favoriter</h5>
            <p>Här visas dina favoriter.</p>
          </div>

          <div v-if="activeTab === 'messages'">
            <MessagesComponent />
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>

  <!-- Om användaren inte är inloggad! -->
  <p v-else>
    <router-link to="/" />'Du måste logga in för att kunna se "Mina sidor"'
  </p>
</template>

<script setup>
  import MessagesComponent from '../components/MessagesComponent.vue'
  import { ref, onMounted } from 'vue'
  import { createAccountStore } from '../store'

  const messages = ref([])
  const store = createAccountStore()
  const activeTab = ref('listings')

  const userListings = ref([])

  const userTest = ref({
    name: 'Förnamn Efternamn',
    email: 'testmail.123@gmail.com',
    rating: 3
  })

  onMounted(() => {
    messages.value = JSON.parse(localStorage.getItem('chatMessages')) || []
    userListings.value = JSON.parse(localStorage.getItem('userListings')) || []
    store.user = JSON.parse(localStorage.getItem('loggedInUser')) || null
  })

  // standardbild för användaren
  const profilePicture = ref('/path-to-profile-image.jpg')
</script>

<style scoped>
  .profile-container {
    padding: 20px;
  }
  .profile-avatar {
    border: 3px solid white;
    margin-bottom: 10px;
  }
  .profile-rating {
    margin-top: 10px;
    font-size: 20px;
  }
  .star {
    color: gray;
  }
  .filled {
    color: gold;
  }
  .profile-tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 20px;
    gap: 10px;
  }
  @media screen and (max-width: 360px) {
    .profile-tabs {
      flex-direction: column;
    }
  }
</style>
