<template>
  <div class="itemWrapper">
    <div
      class="card"
      v-for="object in objects"
      :key="object.id"
      @click="chosenProduct(objects)"
    >
      <router-link :to="`selectedproduct/${object.id}`">
        <img :src="object.img" class="card-img-top imgObject" alt="" />
        <div class="card-body">
          <h5 class="card-title">{{ object.namn }}</h5>
          <p class="card-text">{{ object.adress }}</p>
          <p>{{ object.pris }} :-</p>
          <button class="btn btn-success knapp">Kontakta säljare</button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted } from 'vue'

  const objects = ref([])
  const clickedProduct = ref(null)

  function fetchJsonData() {
    fetch('/ItemsObjectData.json') // Se till att filen finns i "public"-mappen
      .then((response) => {
        if (!response.ok) {
          throw new Error('Nätverksfel vid hämtning av JSON')
        }
        return response.json()
      })
      .then((data) => {
        objects.value = data // Uppdatera refens .value
        console.log(objects.value) // Logga datan EFTER att den har laddats
      })
      .catch((error) => console.error('Fel vid hämtning:', error))
  }

  // Anropa funktionen automatiskt när komponenten laddas
  onMounted(() => {
    fetchJsonData()
  })

  function chosenProduct(products) {
    console.log('clicked')
    clickedProduct.value = products
  }

  const items = ref([
    {
      id: 1,
      namn: 'Tröja från nike',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 259,
      beskrivning: 'Väldigt fin tröja från Nike, , inköpt 2023 i london',
      säljare: 'Hampus'
    },
    {
      id: 2,
      namn: 'Hund',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 299,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    },
    {
      id: 3,
      namn: 'Scooter',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 179,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    },
    {
      id: 4,
      namn: 'Virkset',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 39,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    },
    {
      id: 5,
      namn: 'Kamera',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 1299,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    },
    {
      id: 6,
      namn: 'Växt',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 49,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    },
    {
      id: 7,
      namn: 'Sked',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 9,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    },
    {
      id: 8,
      namn: 'Lampa',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 49,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    },
    {
      id: 9,
      namn: 'Bil',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 12299,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    },
    {
      id: 9,
      namn: 'trasig Bil',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 299,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    },
    {
      id: 9,
      namn: 'lego lamborghini',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 699,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    },
    {
      id: 9,
      namn: 'Bil',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 299,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    },
    {
      id: 9,
      namn: 'Bil',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 299,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    },
    {
      id: 9,
      namn: 'Bil',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 299,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    },
    {
      id: 9,
      namn: 'Bil',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 299,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    },
    {
      id: 9,
      namn: 'Bil',
      skick: 'bra',
      storlek: 'L',
      img: '../assets/fox.jpeg',
      adress: 'göteborg',
      kategori: 'kläder',
      pris: 299,
      beskrivning: 'Väldigt fin tröja från Nike',
      säljare: 'Hampus'
    }
  ])
</script>

<style scoped>
  @media screen and (min-width: 768px) {
    .itemWrapper {
      height: auto;
      width: 100dvw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      /* margin: 10px; */
      margin-right: 30px;
      padding: 8px;
    }

    #itemCard {
      /* box-shadow: 2px 2px 2px 1px; */
      width: 150px;
      height: 350px;
      /* font-size: 20px; */
      margin-bottom: 20px;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      object-fit: cover;
    }

    .itemText {
      font-size: 18px;
      margin: 0;
    }

    .itemImage {
      height: 170px;
      width: 100%;
    }

    ul {
      list-style-type: none;
      width: 100%;
      padding: 0;
    }
    li {
      width: 100%;
    }
    .cardContainer {
      display: flex;
      flex-wrap: wrap;
      /* align-items: center; */
      justify-content: center;
    }

    .card {
      margin: 10px;
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

  @media screen and (max-width: 768px) {
    .itemWrapper {
      height: auto;
      width: 100dvw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      /* margin: 10px; */
      margin-right: 30px;
      padding: 8px;
    }
    #itemCard {
      /* box-shadow: 2px 2px 2px 1px; */
      width: 150px;
      height: 350px;
      /* font-size: 20px; */
      margin-bottom: 20px;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      object-fit: cover;
    }

    .itemText {
      font-size: 18px;
      margin: 0;
    }

    .itemImage {
      height: 170px;
      width: 100%;
    }

    ul {
      list-style-type: none;
      width: 100%;
      padding: 0;
    }
    li {
      width: 100%;
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
      max-width: 150px;
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
      max-width: 150px;
    }
  }
</style>
