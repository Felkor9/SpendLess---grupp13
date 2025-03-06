<template>
  <div id="bigWrapper">
    <BContainer fluid class="formContainer">
      <h1>Lägg upp annons!</h1>
      <!--  Här startar formuläret för annonsen (Hampus)-->
      <form @submit.prevent="submitForm" enctype="multipart/form-data">
        <BRow>
          <BCol cols="10">
            <div class="productName">
              <BFormGroup label="Namn på produkt" label-for="input-1">
                <BFormInput
                  id="input-1"
                  v-model="formData.productName"
                  type="text"
                  placeholder="Skriv här"
                />
              </BFormGroup>
            </div>
          </BCol>
        </BRow>
        <!--  Kategoriväljare (Hampus)-->
        <BRow>
          <BCol cols="10">
            <BFormGroup label-for="input-2">
              <div class="productCategory">
                <BFormSelect
                  v-model="formData.selectedCategory"
                  :options="productCategory"
                />
                <BFormSelectOption :value="null" />
              </div>
            </BFormGroup>
          </BCol>
        </BRow>
        <!--  Storleksväljareväljare om man valt kategori-kläder (Hampus)-->
        <BRow>
          <BCol cols="10">
            <BFormGroup label-for="input-2,5">
              <div class="productSize">
                <BFormSelect
                  v-model="formData.selectedSize"
                  :options="productSizes"
                  v-if="formData.selectedCategory === 'kläder'"
                />
                <BFormSelectOption :value="null" />
              </div>
            </BFormGroup>
          </BCol>
        </BRow>
        <!--  Skickväljare dyker bara upp om man inte valt djur (Hampus)-->
        <BRow v-if="formData.selectedCategory !== 'djur'">
          <BCol cols="10">
            <BFormGroup label-for="input-3" label="Skick på varan:">
              <div class="productCondition">
                <!--  radioknappar inuti div för att få dom i sidled (Hampus)-->
                <BFormRadio
                  v-model="formData.selectedCondition"
                  name="condition-radios"
                  value="nyskick"
                  class="radioButton"
                  >Nyskick
                </BFormRadio>
                <BFormRadio
                  v-model="formData.selectedCondition"
                  name="condition-radios"
                  value="begagnat"
                  class="radioButton"
                  >Begangnat
                </BFormRadio>
                <BFormRadio
                  v-model="formData.selectedCondition"
                  name="condition-radios"
                  value="slitet"
                  class="radioButton"
                  >Slitet
                </BFormRadio>
              </div>
            </BFormGroup>
          </BCol>
        </BRow>
        <!--  Bilduppladdning (Hampus)-->
        <BRow>
          <BCol cols="10">
            <BFormGroup label-for="input-4" label="Ladda upp bilder på varan:">
              <div class="productImage">
                <input
                  type="file"
                  multiple
                  @change="onFileSelected"
                  ref="fileInput"
                />
              </div>
            </BFormGroup>
          </BCol>
        </BRow>
        <!--  Annons Beskrivning (Hampus) -->
        <BRow>
          <BCol cols="10">
            <div class="productDescription">
              <BFormGroup label="Produkt beskrivning:" label-for="input-5">
                <BFormTextarea
                  v-model="formData.productDescription"
                  placeholder="Nämn gärna när varan köpts, inköpspris osv..."
                  rows="3"
                />
              </BFormGroup>
            </div>
          </BCol>
        </BRow>
        <!--  Annons Pris (Hampus)-->
        <BRow>
          <BCol cols="4">
            <div class="productPrice">
              <BFormGroup label="Pris på produkt" label-for="input-6">
                <BFormInput
                  id="input-6"
                  type="number"
                  v-model="formData.productPrice"
                  placeholder="Pris här"
                />
              </BFormGroup>
            </div>
          </BCol>
        </BRow>
        <!--  Lägg till annons (Hampus)-->
        <BRow>
          <BCol cols="8">
            <div class="addProduct">
              <BFormGroup label-for="input-7">
                <BButton
                  variant="success"
                  type="submit"
                  :disabled="!isFormValid"
                  >LÄGG UPP ANNONS!🚀</BButton
                >
              </BFormGroup>
            </div>
          </BCol>
        </BRow>
      </form>
    </BContainer>
  </div>
</template>
<script setup>
  import { ref, computed } from 'vue'
  //Importerar funktionen från pinia
  import { useAccountStore } from '../store'
  import { storeToRefs } from 'pinia'
  const store = useAccountStore()
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
  const productSizes = [
    { value: null, text: 'Välj en storlek' },
    { value: 'xsmall', text: 'XS' },
    { value: 'small', text: 'SMALL' },
    { value: 'medium', text: 'MEDIUM' },
    { value: 'large', text: 'LARGE' },
    { value: 'xlarge', text: 'XLARGE' },
    { value: 'other', text: 'ANNAT' }
  ]
  // Värden som ska fyllas i från formuläret innan de skickas iväg (Hampus)
  const formData = ref({
    productName: '',
    selectedCategory: 'null',
    selectedCondition: '',
    productDescription: '',
    productPrice: '',
    productImages: '',
    productSeller: '',
    productAdress: '',
    selectedSize: 'null'
  })
  // Kollar så att allt är i fyllt, annars är knappen disabled (Hampus)
  const isFormValid = computed(() => {
    return (
      formData.value.productName.trim() !== '' &&
      formData.value.selectedCategory !== 'null' &&
      formData.value.productDescription.trim() !== '' &&
      formData.value.productPrice.trim() !== '' &&
      // selectedSize behövs bara när kläder är valt (Hampus)
      (formData.value.selectedCategory !== 'kläder' ||
        formData.value.selectedSize !== null) &&
      // när djur är valt behövs ej condition (Hampus)
      (formData.value.selectedCategory === 'djur' ||
        formData.value.selectedCondition.trim() !== '')
    )
  })
  /* formData.value.productImages.trim() !== "" &&
  formData.value.productSeller.trim() !== "" &&
  formData.value.productAdress.trim() !== "" &&
  lägg till dom här i computed ovanför när konton och bilder funkar.
  */
  const fileInput = ref(null)
  // Skicka iväg forumuläret (Hampus)
  const submitForm = async () => {
    try {
      const formPayload = new FormData()
      //lägg till formulärvärden i objektet som ska skickas (Hampus)
      formPayload.append('productName', formData.value.productName)
      formPayload.append('selectedCategory', formData.value.selectedCategory)
      formPayload.append('selectedCondition', formData.value.selectedCondition)
      if (formData.value.selectedCategory === 'kläder') {
        formPayload.append('selectedSize', formData.value.selectedSize)
      } else {
        formPayload.append('selectedSize', null)
      }
      formPayload.append(
        'productDescription',
        formData.value.productDescription
      )
      formPayload.append('productPrice', formData.value.productPrice)
      formPayload.append('productSeller', 'activeUser.name')
      formPayload.append('productAdress', 'actuveUser.adress')
      // lägg till filer i objektet (Hampus)
      if (fileInput.value?.files) {
        for (let i = 0; i < fileInput.value.files.length; i++) {
          formPayload.append('productImages', fileInput.value.files[i])
        }
      }
      //Skickar annonsen till backend
      const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        body: formPayload
      })

      // kolla så att post har funkat annars visa error (Hampus)
      if (!response.ok) throw new Error(result || 'Nåt har gått snett')
      alert('Annonsen är nu tillagt i systemet!')

      //När annonsen är uppladdad i backend så skapas ett objekt för att spara i LocalStorage (Evelina)
      const newListing = {
        namn: formData.value.productName,
        kategori: formData.value.selectedCategory,
        pris: formData.value.productPrice,
        beskrivning: formData.value.productDescription,
        bilder: formData.value.productImages
      }

      //Hämta annonser från LocalStorage om de finns (Evelina)
      let storedListings =
        JSON.parse(localStorage.getItem('userListings')) || []
      storedListings.push(newListing)
      localStorage.setItem('userListings', JSON.stringify(storedListings))

      console.log('Annonsen är tillagd i systemet.')

      // Nollställ forumuläret och filer efter att varan har skickats iväg (Hampus)
      formData.value = {
        productName: '',
        selectedCategory: 'null',
        selectedCondition: '',
        productDescription: '',
        productPrice: '',
        productImages: '',
        productSeller: '',
        productAdress: '',
        selectedSize: null
      }
      if (fileInput.value) {
        fileInput.value.value = ''
      }
    } catch (error) {
      console.error('Error:', error)
      alert(`Nåt har gått fel vid uppladdningen: ${error.message}`)
    }
  }
</script>
<style scoped>
  /* css desktop storlek */
  @media screen and (min-width: 768px) {
    * {
      box-sizing: border-box;
      /* margin: 20px; */
    }
  }
  .productName {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .productCategory {
    margin-bottom: 30px;
  }
  .productSize {
    margin-top: -40px;
    margin-bottom: 30px;
  }
  .productCondition {
    display: flex;
    margin: 10px;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .form-check {
    margin: 0 10px 0px 10px;
  }
  .productImage {
    margin-bottom: 30px;
  }
  .productImage input {
    margin: 10px;
  }
  .productDescription {
    margin-bottom: 30px;
  }
  .productPrice {
    margin-bottom: 30px;
  }
  #bigWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    width: 100vw;
  }
  .formContainer {
    max-width: 600px; /* Adjust as needed */
    width: 100%;
  }
</style>
