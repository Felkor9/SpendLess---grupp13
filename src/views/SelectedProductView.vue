<template>
  <!-- Bilder visas utanför product-card då det behöver en annan layout /Hj-->
  <div class="image-container">
    <ImageGallery :product-id="Number(productId)" />
    <h1 v-if="boughtProduct" class="köptVara">KÖPT!</h1>
  </div>
  <div v-if="products" class="card">
    <div class="card-body">
      <h1 class="card-title">{{ products.namn }}</h1>
      <p class="card-text">{{ products.beskrivning }}</p>
      <p>Produktens ID-nummer: {{ products.id }}</p>

      <p v-if="products.kategori !== 'djur'">
        Varans skick: <span :class="conditionClass">{{ products.skick }}</span>
      </p>
      <p class="card-price">Pris: {{ products.pris }} kr</p>
      <div class="säljare-info">
        <BAvatar class="avatarPicture" alt="Profilbild" />
        <p>Varan säljs av {{ products.säljare }}</p>
      </div>
      <button class="btn btn-success" @click="onClickSign">Köp produkt</button>
    </div>
  </div>
  <div v-else>
    <p>Loading product details or product not found...</p>
  </div>
  <div v-if="store.user">
    <div v-if="signForm">
      <BContainer class="mt-5" v-if="products">
        <BCard class="pt-4">
          <h2 class="text-center mb-3">Kontrakt mellan köpare och säljare</h2>

          <BCard class="mb-3">
            <BCardBody>
              <p><strong>Köpare: </strong>{{ buyerName }}</p>
              <p><strong>Säljare: </strong>{{ products.säljare }}</p>
              <p><strong>Produkt:</strong> {{ products.namn }}</p>
              <p><strong>Pris:</strong> {{ products.pris }} :-</p>
              <p><strong>Datum:</strong> {{ contractDate }}</p>
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
              :disabled="!buyerName"
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
            <BButton
              variant="primary"
              @click=";(showModal = false), onClickBought"
              >OK</BButton
            >
          </template>
        </BModal>
      </BContainer>
    </div>
  </div>
  <div v-else>
    <p>Du måste vara inloggad för att signera kontrakt</p>
  </div>

  <!-- Michelles kod -->
  <!-- <div v-if="showModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="showModal = false">×</span>
      <h2>Skicka meddelande</h2>
      <label for="message">Meddelande till säljaren:</label>
      <textarea
        v-model="messageText"
        id="message"
        placeholder="Skriv ditt meddelande..."
      />
      <div class="buttons">
        <button class="btn-cancel" @click="showModal = false">Avbryt</button>
        <button class="btn-send" @click="sendMessage">Skicka</button>
      </div> -->
  <!-- </div> -->
  <!-- </div> -->
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import ImageGallery from '../components/ImageGallery.vue'
  import { createAccountStore } from '../store'

  const store = createAccountStore()

  const route = useRoute()
  const productId = route.params.id
  const products = ref(null)
  const showModal = ref(false)
  const boughtProduct = ref(false)
  // const messageText = ref('')

  console.log('Product ID from route:', productId)

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

  const signForm = ref(false)

  const contractDate = ref(new Date().toLocaleDateString())

  // Köparens information
  // const buyerName = ref('')
  const isSigned = ref(false)
  const buyerName = ref('')
  const objects = ref([])
  const userListings = ref([])

  // Funktion för att signera kontraktet
  const signContract = () => {
    isSigned.value = true
    showModal.value = true
    boughtProduct.value = true
  }

  function fetchProductDetails() {
    console.log('Fetching product details for ID:', productId)
    fetch('/ItemsObjectData.json')
      .then((response) => {
        if (!response.ok) throw new Error('Network error fetching JSON')
        console.log('Response received:', response)
        return response.json()
      })
      .then((data) => {
        const product = data.find((p) => p.id === Number(productId))
        console.log('Found product:', product)
        products.value = product || null
      })
      .catch((error) => console.error('Error fetching:', error))
  }

  // Anropa funktionen automatiskt när komponenten laddas
  onMounted(() => {
    fetchProductDetails()
    userListings.value = JSON.parse(localStorage.getItem('userListings')) || []
    console.log(userListings)
    console.log(objects)
  })

  const computedItemsList = computed(() => [
    { value: null, text: 'Välj annons med rätt id' },
    ...products.value.map((object) => ({
      value: object.id,
      // Check your JSON structure and adjust these property names accordingly
      text: `${object.namn} (ID: ${object.id})`
    }))
  ])

  function onClickSign() {
    signForm.value = true
  }

  const conditionClass = computed(() => {
    if (!products.value || !products.value.skick) return ''
    switch (products.value.skick.toLowerCase()) {
      case 'nyskick':
        return 'condition-good'
      case 'begagnat':
        return 'condition-used'
      case 'slitet':
        return 'condition-worn'
      default:
        return '' // Fallback for unexpected values
    }
  })
</script>

<style scoped>
  /* GLOBAL STYLING */

  .condition-good {
    color: green;
    font-weight: bolder;
  }
  .condition-used {
    color: orange;
    font-weight: bolder;
  }
  .condition-worn {
    color: red;
    font-weight: bolder;
  }

  /* DESKTOP STYLING */
  @media screen and (min-width: 768px) {
    .image-container {
      position: relative;

      display: flex;
    }

    .köptVara {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: red;
      color: white;
      padding: 10px 20px;
      font-size: 32px;
      font-weight: bold;
      text-transform: uppercase;
      border-radius: 8px;
      z-index: 4;
    }
    .card-body {
      width: 60%;
    }
    .card {
      margin-left: 25px;
      margin-right: 25px;
      display: flex;
      flex-direction: row;
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: bolder;
      margin: 10px 0;
    }
    .card-price {
      font-size: 1rem;
      font-weight: bolder;
      margin: 10px 0;
    }

    .säljare-info {
      display: flex;
      align-items: center;
    }

    .avatarPicture {
      margin-right: 10px;
      margin-bottom: 15px;
    }
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal-content {
      background: white;
      padding: 20px;
      width: 400px;
      border-radius: 8px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      text-align: center;
      position: relative;
    }

    .close {
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 24px;
      cursor: pointer;
    }

    textarea {
      width: 100%;
      height: 80px;
      margin-top: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
    }

    .btn-cancel {
      background: #ccc;
      color: black;
      padding: 10px;
      border: none;
      cursor: pointer;
      border-radius: 4px;
    }

    .btn-cancel:hover {
      background: #bbb;
    }

    .btn-send {
      background: green;
      color: white;
      padding: 10px;
      border: none;
      cursor: pointer;
      border-radius: 4px;
    }

    .btn-send:hover {
      background: darkgreen;
    }
  }

  /* MOBIL STYLING */
  @media screen and (max-width: 768px) {
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100vw;
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: bolder;
      margin: 10px 0;
    }

    .säljare-info {
      display: flex;
      align-items: center;
    }

    .avatarPicture {
      margin-right: 10px;
      margin-bottom: 15px;
    }
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal-content {
      background: white;
      padding: 20px;
      width: 400px;
      border-radius: 8px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      text-align: center;
      position: relative;
    }

    .close {
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 24px;
      cursor: pointer;
    }

    textarea {
      width: 100%;
      height: 80px;
      margin-top: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
    }

    .btn-cancel {
      background: #ccc;
      color: black;
      padding: 10px;
      border: none;
      cursor: pointer;
      border-radius: 4px;
    }

    .btn-cancel:hover {
      background: #bbb;
    }

    .btn-send {
      background: green;
      color: white;
      padding: 10px;
      border: none;
      cursor: pointer;
      border-radius: 4px;
    }

    .btn-send:hover {
      background: darkgreen;
    }
  }
</style>
