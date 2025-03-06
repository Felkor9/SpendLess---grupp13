<template>
  <BContainer class="mt-5">
    <BCard class="pt-4">
      <h2 class="text-center mb-3">Kontrakt mellan köpare och säljare</h2>

      <BCard class="mb-3">
        <BCardBody>
          <p><strong>Säljare:</strong></p>
          <p><strong>Produkt:</strong></p>
          <p><strong>Pris:</strong></p>
          <p><strong>Datum:</strong></p>
        </BCardBody>
      </BCard>
      <div v-if="!isSigned">
        <BFormGroup label="Köparens namn" label-for="buyerName">
          <BFormInput
            v-model="buyerName"
            id="buyerName"
            placeholder="Ange ditt namn"
          />
        </BFormGroup>
        <BButton
          variant="success"
          class="w-100"
          :disabeld="!buyerName"
          @click="signContract"
          >Signera Kontrakt</BButton
        >
      </div>
      <div v-if="isSigned" class="text-center">
        <BAlert show variant="success"
          >✅ Kontraktet har signerats av <strong>{{ buyerName }}</strong
          >!</BAlert
        >
      </div>
    </BCard>

    <BModal v-model="showModal" title="Kontrakt Signerat">
      <p>
        Kontraktet har signerats av <strong>{{ buyerName }}</strong
        >!
      </p>
      <template #footer>
        <BButton variant="primary" @click="showModal = false">OK</BButton>
      </template>
    </BModal>
  </BContainer>
</template>
<script setup>
  import { ref, onMounted, computed } from 'vue'
  import {
    BContainer,
    BCard,
    BCardBody,
    BButton,
    BFormGroup,
    BFormInput,
    BAlert,
    BModal
  } from 'bootstrap-vue-next'

  // Säljarens info (simulerad)
  const sellerName = ref('Sven Karlsson')
  const productName = ref('Begagnad cykel')
  const price = ref(1500)
  const contractDate = ref(new Date().toLocaleDateString())

  // Köparens information
  const buyerName = ref('')
  const isSigned = ref(false)
  const showModal = ref(false)

  // Funktion för att signera kontraktet
  const signContract = () => {
    isSigned.value = true
    showModal.value = true
  }

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
    .BCard {
      max-width: 500px;
      margin: auto;
    }

    .BAlert {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 768px) {
    .BCard {
      max-width: 500px;
      margin: auto;
    }

    .BAlert {
      font-size: 18px;
    }
  }
</style>
