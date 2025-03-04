<template>
  <!-- Välkomstmeddelande och sökfunktion -->
  <BContainer fluid class="containerSearch">
    <video src="/assets/unboxing.mp4" autoplay loop muted class="video"></video>
    <BRow class="my-1">
      <BCol cols="12">
        <label for="search" class="labelForSearch"
          >Välkommen till SpendLess!</label
        >
      </BCol>
      <BCol cols="12">
        <!-- Sökinput för att användaren ska kunna skriva in en sökterm -->
        <BFormInput
          v-model="search"
          placeholder="Vad letar du efter idag?"
          class="inputSearch"
        />
      </BCol>
      <BCol cols="12">
        <!-- Sökknapp för att trigga en sökning -->
        <BButton variant="success" class="inputButton" @click="searchProduct"
          >Sök</BButton
        >
      </BCol>
    </BRow>
  </BContainer>

  <!-- Kategorival för att filtrera produkter -->
  <BRow id="categoryitem">
    <BCol cols="4">
      <BFormSelect
        v-model="selected"
        :options="productCategory"
        placeholder="Välj kategori"
        class="categoryChooser"
      />
    </BCol>
  </BRow>

  <!-- Produktvisning -->
  <div id="containerForObject">
    <div v-if="filteredProducts.length > 0" class="cardContainer">
      <!-- Loopar genom filtrerade produkter och visar dem som kort -->
      <div
        class="card"
        v-for="product in filteredProducts"
        :key="product.id"
        @click="chosenProduct(product)"
      >
        <router-link :to="`selectedproduct/${product.id}`">
          <img :src="product.img" class="card-img-top" alt="produktkort" />
          <div class="card-body">
            <h5 class="card-title">{{ product.namn }}</h5>
            <p class="card-text">{{ product.adress }}</p>
            <p>{{ product.pris }} :-</p>
            <button class="btn btn-success knapp">Kontakta säljare</button>
          </div>
        </router-link>
      </div>
    </div>
    <!-- Visar meddelande ifall sökningen inte finns -->
    <div v-if="filteredProducts.length === 0">
      <p>Kan inte hitta det du söker efter...</p>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'

  // Lista av produktkategorier
  const productCategory = [
    { value: null, text: 'Välj en kategori' },
    { value: 'hem & trädgård', text: 'Hem & Trädgård' },
    { value: 'elektronik', text: 'Elektronik' },
    { value: 'fordon', text: 'Fordon' },
    { value: 'hobby', text: 'Hobby' },
    { value: 'sport', text: 'Sport' },
    { value: 'djur', text: 'Djur' },
    { value: 'kläder', text: 'Kläder' },
    { value: 'köksutrustning', text: 'Köksutrustning' }
  ]

  // Reaktiva variabler för kategorival, söktext och produktlista
  const selected = ref(null)
  const search = ref('')
  const products = ref([])

  // Funktion för att hämta produkter från en JSON-fil (Felix)
  const productFetch = async () => {
    try {
      const response = await fetch('/ItemsObjectData.json')
      if (!response.ok) throw new Error('Nätverksfel vid hämtning av JSON')
      products.value = await response.json()
      console.log('Hämtade produkter:', products.value)
    } catch (error) {
      console.error('Fel vid hämtning:', error)
    }
  }

  //Filtrering av kategori samt sökfält (Evelina)
  const filteredProducts = computed(() => {
    let filtered = products.value

    //Filtera baserat på kategori om den är vald
    if (selected.value) {
      filtered = filtered.filter(
        (product) =>
          product.kategori.toLowerCase() === selected.value.toLowerCase()
      )
    }
    //Filtrera baserat på söktext
    if (search.value.trim() !== '') {
      filtered = filtered.filter((product) =>
        product.namn.toLowerCase().includes(search.value.toLowerCase())
      )
    }
    return filtered
  })

  // Hämtar produkter vid start
  productFetch()
</script>

<style scoped>
  /* CSS för desktop här */

  @media screen and (min-width: 768px) {
    * {
      box-sizing: border-box;
      scroll-snap-type: mandatory;

      /* margin: 20px; */
      /* padding: 10px; */
    }

    .containerSearch {
      /* background-image: url(/assets/coffee-3989866_1280.jpg);
      background-size: 97%;
      border-radius: 10px;
      /* background-position: ; */
      /* background-repeat: no-repeat; */
      /* background-position: center;  */
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      /* margin-left: 10px; */
      /* margin-right: 10px; */
      /* width: 120%; */
      /* margin: 0; */
      display: flex;
      z-index: 3;
      position: relative;
    }

    .video {
      height: 100vh;
      width: 100vw;
      z-index: -1; /* Flyttar den bakom allt annat */
      position: absolute;
      align-self: center;
      margin-top: 0;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    .labelForSearch {
      color: white;
      font-size: 50px;
      font-weight: 900;
      margin-bottom: 0;
      /* font-family:'Times New Roman', Times, serif; */
    }

    .inputSearch {
      font-size: 20px;
      padding-inline: 20px;
      padding: 10px;
      font-family: 'Times New Roman', Times, serif;
      border-radius: 5px;
      width: 50rem;
    }

    .categoryChooser {
      min-width: 20vw;
      font-size: 20px;
    }

    .inputButton {
      margin-top: 5px;
      width: 100px;
      padding: 0;
      height: 50px;
      font-size: 20px;
    }

    .my-1 {
      /* width: 80vw; */
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    #categoryitem {
      /* display: flex; */
      /* background-color: black; */
      width: 100vw;
      padding: 10px;
      font-size: 100px;
      /* margin-top: 100px; */
    }

    #containerForObject {
      width: 100vw;
      padding: 5px;
    }
    .cardContainer {
      display: flex;
      flex-wrap: wrap;
      /* align-items: center; */
      justify-content: center;
    }

    .card {
      margin: 30px;
      height: 450px;
      box-sizing: border-box;
      position: relative;
      width: 250px;
    }

    .knapp {
      position: absolute;
      font-size: 12px;
      width: auto;
      height: fit-content;
      bottom: 0;
      align-items: center;
      margin-bottom: 10px;
    }
    .imgObject {
      max-width: 250px;
      max-height: 270px;
    }
  }

  /* här börjar css för mobil */

  @media screen and (max-width: 768px) {
    * {
      box-sizing: border-box;
    }

    #containerForAccounts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 2;
    }

    .containerSearch {
      /* background-image: url(/assets/coffee-3989866_1280.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 100%; */
      min-height: 300px;
      /* width: 100vw; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 2;
      /* margin: 0; */
    }

    .video {
      height: 300px;
      width: 100vw;
      z-index: -1; /* Flyttar den bakom allt annat */
      position: absolute;
      align-self: center;
      margin-top: 80px;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    .labelForSearch {
      color: white;
      font-size: 25px;
      font-weight: 900;
      /* font-family:'Times New Roman', Times, serif; */
    }

    .inputSearch {
      font-size: 20px;
      /* padding-inline: 20px; */
      font-family: 'Times New Roman', Times, serif;
      border-radius: 5px;
    }

    .categoryChooser {
      min-width: 200px;
    }

    .inputButton {
      margin-top: 10px;
      width: 100px;
      padding: 10px;
      height: 50px;
    }

    .my-1 {
      display: flex;
      /* justify-content: flex-start; */
      flex-direction: column;
      /* align-items: flex-start; */
      width: 100vw;
      z-index: 1;
    }

    #categoryitem {
      /* display: flex; */
      /* background-color: black; */
      width: 100vw;
      margin-top: 10px;
    }

    #containerForObject {
      width: 100vw;
      padding: 10px;
    }
    .cardContainer {
      display: flex;
      flex-wrap: wrap;
      /* align-items: center; */
      justify-content: center;
    }

    .card {
      margin: 10px;
      height: 350px;
      box-sizing: border-box;
      position: relative;
    }

    .knapp {
      position: absolute;
      font-size: 12px;
      width: auto;
      height: fit-content;
      bottom: 0;
      align-items: center;
      margin-bottom: 10px;
    }

    /* #containerForAccounts button {
  	/* width: 80px;
  	height: 30px;
  	margin-top: 10px; */
    /* cursor: pointer; */
    /* }  */

    /* input[type="submit"] {
  	cursor: pointer;
  	width: 80px;
  	height: 30px;
  	margin-top: 10px;
  	font-size: 10px;
  } */
  }
</style>
