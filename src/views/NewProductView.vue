<template>
<div id="bigWrapper">
<BContainer fluid>
<h1>Lägg upp annons!</h1>
<!--  Här startar formuläret för annonsen -->
    <BRow>
        <BCol cols="4">
        <div class="productName">
			<BFormGroup label="Namn på produkt" label-for="input-1">
            <BFormInput id="input-1"type="text" placeholder="Skriv här"required>

            </BFormInput>
			</BFormGroup>
        </div>    
        </BCol>
    </BRow>
<!--  Kategoriväljare -->
     <BRow class="productCategory">
        <BCol cols="4">
           <BFormGroup
			label-for="input-2"
            >
            <BFormSelect v-model="selectedCategory" :options="productCategory" />
            <BFormSelectOption :value="null" disabled> </BFormSelectOption>
			</BFormGroup>

            </BCol>
    </BRow>
<!--  Skickväljare -->
    <BRow >
        <BCol cols="4">
           <BFormGroup
			label-for="input-3"
            label="Skick på varan:"
            >
            <div class="productCondition">
            <!--  radioknappar inuti div för att få dom i sidled -->
            <BFormRadio v-model="selectedCondition" name="some-radios" value="A" class="radioButton">Nyskick </BFormRadio>
            <BFormRadio v-model="selectedCondition" name="some-radios" value="B" class="radioButton">Begangnat </BFormRadio>
            <BFormRadio v-model="selectedCondition" name="some-radios" value="C" class="radioButton">Slitet </BFormRadio>
		    </div>
        </BFormGroup>
        </BCol>
    </BRow>
<!--  Bilduppladdning -->
    <BRow >
        <BCol cols="4">
        <BFormGroup label-for="input-4" label="Ladda upp bilder på varan:">
        <div class="productImage">
        <input type="file" multiple @change="onFileSelected">
        <BButton variant="outline-success" @click="onImageUpload">Ladda upp!</BButton>     
            
		</div>
        </BFormGroup>
        </BCol>
    </BRow>
<!--  Annons Beskrivning -->
    <BRow>
        <BCol cols="4">
        <div class="productDescription">
        <BFormGroup label="Produkt beskrivning:" label-for="input-5">
            <BFormTextarea v-model="textEx" placeholder="Nämn gärna när varan köpts, strolek på kläder osv..." rows="3" />
        </BFormGroup>
		</div>
        </BCol>
    </BRow>
<!--  Annons Pris -->
    <BRow>
        <BCol cols="4">
        <div class="productPrice">
			<BFormGroup label="Pris på produkt" label-for="input-6">
            <BFormInput id="input-6" type="text"v-model="formattedPrice"  placeholder="Pris här"  required>

            </BFormInput>
			</BFormGroup>
        </div>    
        </BCol>
    </BRow>  
<!--  Lägg till annons -->
    <BRow>
        <BCol cols="4">
        <div class="addProduct">
			<BFormGroup  label-for="input-7">
            <BButton variant="success">LÄGG UPP ANNONS!🚀</BButton>
			</BFormGroup>
        </div>    
        </BCol>
    </BRow> 

    </BContainer>
</div>
</template>

<script setup>
import {ref, computed} from 'vue'

const productCategory = [
{value: 'null', text: 'Välj en kategori'},
{value: 'a', text: 'Växter'},
{value: 'a', text: 'Elektronik'},
{value: 'b', text: 'Heminredning'},
{value: 'c', text: 'Hobby'},
{value: 'd', text: 'Sport'},
]

const selectedCategory = ref(null)
const selectedCondition = ref(null)

let selectedFile = null;

function onFileSelected(event) {
console.log("Bild uppladdad");
selectedFile = event.target.files[0]
}

function onImageUpload() {
// Här ska de skrivas en cool funktion senare
}

const productPrice = ref('');
const formattedPrice = computed({
  get: () => (productPrice.value ? `${productPrice.value} Kr` : ''),
  set: (value) => {
    // ta bort bokstäver
    productPrice.value = value.replace(/[^0-9.]/g, '');
  }
});



</script>

<style scoped>

.productName {
    margin-top: 20px;
    margin-bottom: 30px;

}

.productCategory {
    
    
    margin-bottom: 30px;
}

.productCondition {
    display: flex;
    margin:10px;
    justify-content:space-between;
    margin-bottom: 30px;
}


.form-check{
    margin:0 10px 0px 10px;
}

.productImage  {
margin-bottom:30px;
}
.productImage input {
margin:10px;
}

.productDescription{
    margin-bottom: 30px;
}

.productPrice{
    margin-bottom: 30px;
}

#bigWrapper{
	min-height: 80vh;
    width:100vw;
	padding-left: 20px;
	padding-right: 20px;
    display: flex;
    justify-content: center;

  /* align-content: center; */
    /* flex-direction: column; */
}

</style>
