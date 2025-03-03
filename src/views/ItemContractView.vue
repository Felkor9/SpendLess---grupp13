<template>
  <div class="contractWrapper">
    <h1>Kontrakt Signering</h1>
    <BRow>
      <BCol cols="12">
        <BFormGroup label-for="input-2">
          <div class="contractSelector">
            <BFormSelect
              v-model="selectedContract"
              :options="computedItemsList"
            />
          </div>
        </BFormGroup>
      </BCol>
    </BRow>
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

    <div class="verification" v-if="verificationStatus">
      <h1>Detta kontraktet är nu signerat av båda parter.</h1>
      <h5>Tänk på att din rating kan sänkas om du häver detta.</h5>
    </div>
  </div>
</template>
<script setup>
  import { ref, computed, onMounted } from 'vue'

  const selectedContract = ref(null)
  const sellerVerification = ref('inte signerat')
  const buyerVerification = ref('inte signerat')
  const objects = ref([])

  const verificationStatus = computed(() => {
    return (
      sellerVerification.value === 'signerat' &&
      buyerVerification.value === 'signerat'
    )
  })

  function fetchJsonData() {
    fetch('/ItemsObjectData.json')
      .then((response) => {
        if (!response.ok) throw new Error('Nätverksfel vid hämtning av JSON')
        return response.json()
      })
      .then((data) => {
        objects.value = data
      })
      .catch((error) => console.error('Fel vid hämtning:', error))
  }

  // Anropa funktionen automatiskt när komponenten laddas
  onMounted(() => {
    fetchJsonData()
  })

  const computedItemsList = computed(() => [
    { value: null, text: 'Välj annons med rätt id' },
    ...objects.value.map((object) => ({
      value: object.id,
      // Check your JSON structure and adjust these property names accordingly
      text: `${object.namn} (ID: ${object.id})`
    }))
  ])
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
