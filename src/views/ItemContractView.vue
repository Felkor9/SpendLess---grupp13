<template>
  <div class="contractWrapper">
    <h1>Kontrakt Signering</h1>

    <div>
      <BFormCheckbox
        id="checkbox-1"
        v-model="buyerVerification"
        name="checkbox-1"
        value="signerat"
        unchecked-value="inte signerat"
      >
        Jag, 'user.name.1' som är köpare signerar detta kontrakt.
      </BFormCheckbox>

      <BFormCheckbox
        id="checkbox-2"
        v-model="sellerVerification"
        name="checkbox-2"
        value="signerat"
        unchecked-value="inte signerat"
      >
        Jag 'user.name.2' som är säljare signerar detta kontrakt.
      </BFormCheckbox>
    </div>

    <div class="verification">
      <h1 v-if="verificationStatus">
        Detta kontraktet är nu signerat av båda parter. ps, Tänk på att din
        rating kan sänkas om du häver detta.
      </h1>
    </div>
  </div>
</template>
<script setup>
  import { ref, computed } from 'vue'

  const sellerVerification = ref('inte signerat')
  const buyerVerification = ref('inte signerat')

  const verificationStatus = computed(() => {
    return (
      sellerVerification.value === 'signerat' &&
      buyerVerification.value === 'signerat'
    )
  })

  /* 
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
  } */
</script>

<style scoped>
  @media screen and (min-width: 768px) {
    .contractWrapper {
      height: auto;
      width: 100dvw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      /* margin: 10px; */
      margin-right: 30px;
      padding: 8px;
      background-color: rgb(135, 135, 195);
    }
  }

  @media screen and (max-width: 768px) {
    .contractWrapper {
      height: auto;
      width: 100dvw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      /* margin: 10px; */
      margin-right: 30px;
      padding: 8px;
      background-color: rgb(135, 135, 195);
    }
  }
</style>
