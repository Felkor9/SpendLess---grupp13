<template>
  <h1>Selected product</h1>
  <div class="card" v-if="products">
    <img
      :src="products.img"
      class="card-img-top"
      alt=""
      style="max-width: 350px"
    />
    <div class="card-body">
      <h4 class="card-title">Information om varan</h4>
      <p class="card-text">{{ products.beskrivning }}</p>
      <p>Stad: {{ products.adress }}</p>
      <p>{{ products.pris }} :-</p>
      <BAvatar class="avatarPicture" />
      <p>Varan säljs av: {{ products.säljare }}</p>
      <button class="btn btn-success">Kontakta säljare</button>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const productId = route.params.id
  const products = ref(null)

  function fetchProductDetails() {
    fetch(`/ItemsObjectData.json`) // Se till att filen finns i "public"-mappen
      .then((response) => {
        if (!response.ok) {
          throw new Error('Nätverksfel vid hämtning av JSON')
        }
        return response.json()
      })
      .then((data) => {
        const product = data.find((p) => p.id === Number(productId))
        products.value = product // Uppdatera refens .value
        console.log(products.value) // Logga datan EFTER att den har laddats
      })
      .catch((error) => console.error('Fel vid hämtning:', error))
  }

  onMounted(fetchProductDetails)
</script>

<style scoped>
  /* .spanInDiv {
    display: flex;
    flex-direction: column;
  } */
  .card {
    margin-left: 25px;
    margin-right: 25px;
    display: flex;
    flex-direction: row;
  }

  h1 {
    margin-left: 25px;
  }
</style>
