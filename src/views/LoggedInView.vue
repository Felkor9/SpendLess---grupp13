<template>
  <div class="profile-container">
    <BContainer fluid>
      <h1>Mina Sidor</h1>
      
      <!-- Profilinformation -->
      <BRow>
        <BCol class="text-center">
          <BAvatar size="80px" :src="profilePicture" class="profile-avatar" />
          <h3>{{ user.name }}</h3>
          <p>{{ user.email }}</p>
					
					<!-- stjärnan ska vara ifylld baserat på rating-->
          <div class="profile-rating">
            <span v-for="star in 5" :key="star" class="star" :class="{'filled': star <= user.rating}">
              &#9733;
            </span>
          </div>
        </BCol>
      </BRow>
      
      <!-- Menyflikar -->
			<BRow class="profile-tabs">
        <BCol>
          <BButton variant="success" block @click="activeTab = 'listings'">Mina Annonser</BButton>
        </BCol>
        <BCol>
          <BButton variant="success" block @click="activeTab = 'wishlist'">Favoriter</BButton>
        </BCol>
        <BCol>
          <BButton variant="success" block @click="activeTab = 'messages'">Meddelanden</BButton>
        </BCol>
      </BRow>
      
      <!--innehåll (dynmasikt)-->
      <BRow>
        <BCol>
          <div v-if="activeTab === 'listings'">
            <h5>Mina Annonser</h5>
            <BListGroup>
              <BListGroupItem v-for="item in myListings" :key="item.id">
                {{ item.product }} - {{ item.date }}
              </BListGroupItem>
            </BListGroup>
          </div>
          
					<!--ingen lista eller liknande skapad för favoriter och meddelanden ännu -->
          <div v-if="activeTab === 'wishlist'">
            <h5>Favoriter</h5>
						<p>Här visas dina favoriter.</p>
          </div>
          
          <div v-if="activeTab === 'messages'">
            <h5>Meddelanden</h5>
            <p>Här visas dina meddelanden.</p>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const user = ref({
  name: "Förnamn Efternamn",
  email: "testmail.123@gmail.com",
  rating: 3
});

// standardbild för användaren
const profilePicture = ref("/path-to-profile-image.jpg")

// styr vilken flik vi är inne på. mina annonser är standard
const activeTab = ref('listings')

const myListings = ref([
  { id: 1, product: "Produkt 1", date: "2025-02-20" },
  { id: 2, product: "Produkt 2", date: "2025-02-15" },
  { id: 3, product: "Produkt 3", date: "2024-12-10" }
]);
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
  margin-top: 20px;
	padding: 20px;

}
@media screen and (max-width: 360px) {
  .profile-tabs {
    flex-direction: column;
    gap: 10px;
  }
}
</style>