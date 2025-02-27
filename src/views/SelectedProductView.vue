<template>
  <h1>Selected productssss</h1>
  <div class="card" style="width: 350px" v-if="products">
    <img
      :src="products.img"
      class="card-img-top"
      alt=""
      style="max-width: 350px"
    />
    <div class="card-body">
      <h5 class="card-title">{{ products.namn }}</h5>
      <p class="card-text">{{ products.beskrivning }}</p>
      <p>{{ products.pris }} :-</p>
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
  .card {
    margin-left: 25px;
  }

  h1 {
    margin-left: 25px;
  }
</style>
