<template>
  <!-- <h1>Home</h1> -->
  <BContainer fluid class="containerSearch">
    <BRow class="my-1">
      <BCol cols="12">
        <label for="search" class="labelForSearch"
          >Välkommen till SpendLess!</label
        >
      </BCol>
      <BCol cols="12">
        <BFormInput
          v-model="search"
          placeholder="Vad letar du efter idag?"
          class="inputSearch"
        />
      </BCol>
      <BCol cols="12"
        ><BButton variant="success" class="inputButton" @click="searchProduct"
          >Sök</BButton
        >
      </BCol>
    </BRow>
  </BContainer>

  <BRow id="categoryitem">
    <BCol cols="4">
      <BFormSelect
        v-model="selected"
        :options="productCategory"
        placeholder="välj kategori"
        class="categoryChooser"
      />
      <BFormSelectOption :value="null" disabled> </BFormSelectOption>
    </BCol>
  </BRow>

  <div id="containerForObject">
    <!-- <BRow v-if="search.trim() !== ''">
      <BCol v-for="product in filteredProducts" :key="product.id" cols="12">
        <div class="product-card">{{ product.namn }}</div>
      </BCol>
    </BRow> -->
    <div v-if="search.trim() !== ''" class="cardContainer">
      <div
        class="card"
        style="width: 150px"
        v-for="product in filteredProducts"
        :key="product.id"
        @click="chosenProduct(products)"
      >
        <router-link :to="`selectedproduct/${product.id}`">
          <img
            :src="product.img"
            class="card-img-top"
            alt=""
            style="max-width: 150px"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.namn }}</h5>
            <p class="card-text">{{ product.adress }}</p>
            <p>{{ product.pris }} :-</p>
            <button class="btn btn-success knapp">Kontakta säljare</button>
          </div>
        </router-link>
      </div>
    </div>
    <div v-if="search === ''">
      <ItemsObject />
    </div>
  </div>

  <!-- sökfält input
 v-model till search
 skicka till itemobjects
 filtrera med searchvariabeln
 v-for resultatet av filter

--></template>

<script setup>
  import { BCol } from 'bootstrap-vue-next'
  import ItemsObject from '../components/ItemsObject.vue'
  import { ref, computed, onMounted } from 'vue'

  const productCategory = [
    { value: 'null', text: 'Välj en kategori' },
    { value: 'a', text: 'Växter' },
    { value: 'a', text: 'Elektronik' },
    { value: 'b', text: 'Heminredning' },
    { value: 'c', text: 'Hobby' },
    { value: 'd', text: 'Sport' }
  ]

  const selected = ref(null)
  const search = ref('')
  const products = ref([])

  const productFetch = async () => {
    try {
      const response = await fetch('/ItemsObjectData.json')
      if (!response.ok) throw new Error('Nätverksfel vid hämtning av JSON')
      products.value = await response.json()
      console.log('Hämtade produkter:', products.value) // Kontrollera i konsolen
    } catch (error) {
      console.error('Fel vid hämtning:', error)
    }
  }

  const filteredProducts = computed(() => {
    return products.value.filter((product) => {
      const matchesText = product.namn
        .toLowerCase()
        .includes(search.value.toLowerCase())
      return matchesText
    })
  })

  function searchProduct() {
    // Eftersom filtrering sker automatiskt genom `computed`, behöver inget annat göras här
    console.log('Sökning:', search.value) // Logga för att säkerställa att sökningen fungerar
  }

  function chosenProduct(products) {
    console.log('clicked')
    clickedProduct.value = products
  }

  productFetch() // Anropa funktion för att hämta data vid start
</script>

<style scoped>
  /* CSS för desktop här */

  @media screen and (min-width: 768px) {
    * {
      box-sizing: border-box;
      /* margin: 20px; */
    }

    .containerSearch {
      background-image: url(/assets/coffee-3989866_1280.jpg);
      background-size: 100%;
      background-position: 100%;
      min-height: 20rem;
      display: flex;
      justify-content: center;
      width: 100vw;
      margin: 20px;
      display: flex;
      margin: 0;
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
      width: auto;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    #categoryitem {
      /* display: flex; */
      /* background-color: black; */
      width: 100vw;
      padding: 10px;
      font-size: 100px;
      margin-top: 10px;
    }

    #containerForObject {
      width: 100vw;
      padding: 5px;
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
      z-index: 1;
    }

    .containerSearch {
      background-image: url(/assets/coffee-3989866_1280.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 100%;
      min-height: 300px;
      /* width: 100vw; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* margin: 0; */
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
