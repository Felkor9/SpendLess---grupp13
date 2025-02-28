<template>
	<div id="bigWrapper">
		<BContainer fluid>
			<h1>Lägg upp annons!</h1>
			<!--  Här startar formuläret för annonsen -->
			<form @submit.prevent="submitForm">
				<BRow>
					<BCol cols="4">
						<div class="productName">
							<BFormGroup label="Namn på produkt" label-for="input-1">
								<BFormInput
									id="input-1"
									v-model="formData.productName"
									type="text"
									placeholder="Skriv här"
								>
								</BFormInput>
							</BFormGroup>
						</div>
					</BCol>
				</BRow>
				<!--  Kategoriväljare -->
				<BRow>
					<BCol cols="4">
						<BFormGroup label-for="input-2">
							<div class="productCategory">
								<BFormSelect
									v-model="formData.selectedCategory"
									:options="productCategory"
								/>
								<BFormSelectOption :value="null"> </BFormSelectOption>
							</div>
						</BFormGroup>
					</BCol>
				</BRow>
				<!--  Storleksväljareväljare om man valt kategori-kläder-->
				<BRow>
					<BCol cols="4">
						<BFormGroup label-for="input-2,5">
							<div class="productSize">
								<BFormSelect
									v-model="formData.selectedSize"
									:options="productSizes"
									v-if="formData.selectedCategory === 'kläder'"
								/>
								<BFormSelectOption :value="null"> </BFormSelectOption>
							</div>
						</BFormGroup>
					</BCol>
				</BRow>
				<!--  Skickväljare dyker bara upp om man inte valt djur-->
				<BRow v-if="formData.selectedCategory !== 'djur'">
					<BCol cols="4">
						<BFormGroup label-for="input-3" label="Skick på varan:">
							<div class="productCondition">
								<!--  radioknappar inuti div för att få dom i sidled -->
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
									value="begangnat"
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
				<!--  Bilduppladdning -->
				<BRow>
					<BCol cols="4">
						<BFormGroup label-for="input-4" label="Ladda upp bilder på varan:">
							<div class="productImage">
								<input type="file" multiple @change="onFileSelected" />
							</div>
						</BFormGroup>
					</BCol>
				</BRow>
				<!--  Annons Beskrivning -->
				<BRow>
					<BCol cols="4">
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
				<!--  Annons Pris -->
				<BRow>
					<BCol cols="4">
						<div class="productPrice">
							<BFormGroup label="Pris på produkt" label-for="input-6">
								<BFormInput
									id="input-6"
									type="number"
									v-model="formData.productPrice"
									placeholder="Pris här"
								>
								</BFormInput>
							</BFormGroup>
						</div>
					</BCol>
				</BRow>
				<!--  Lägg till annons -->
				<BRow>
					<BCol cols="4">
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
import { ref, computed } from "vue";

const productCategory = [
	{ value: "null", text: "Välj en kategori" },
	{ value: "växter", text: "Växter" },
	{ value: "elektronik", text: "Elektronik" },
	{ value: "hobby", text: "Hobby" },
	{ value: "kläder", text: "Kläder" },
	{ value: "heminredning", text: "Heminredning" },
	{ value: "sport", text: "Sport" },
	{ value: "fordon", text: "Fordon" },
	{ value: "djur", text: "Djur" },
];
const productSizes = [
	{ value: null, text: "Välj en storlek" },
	{ value: "xsmall", text: "XS" },
	{ value: "small", text: "SMALL" },
	{ value: "medium", text: "MEDIUM" },
	{ value: "large", text: "LARGE" },
	{ value: "xlarge", text: "XLARGE" },
	{ value: "other", text: "ANNAT" },
];

// Värden som ska fyllas i från formuläret innan de skickas iväg
const formData = ref({
	productName: "",
	selectedCategory: "null",
	selectedCondition: "",
	productDescription: "",
	productPrice: "",
	productImages: "",
	productSeller: "",
	productAdress: "",
	selectedSize: "null",
});

// Kollar så att allt är i fyllt, annars är knappen disabled
const isFormValid = computed(() => {
	return (
		formData.value.productName.trim() !== "" &&
		formData.value.selectedCategory !== "null" &&
		formData.value.productDescription.trim() !== "" &&
		formData.value.productPrice.trim() !== "" &&
		// selectedSize behövs bara när kläder är valt
		(formData.value.selectedCategory !== "kläder" ||
			formData.value.selectedSize !== null) &&
		// när djur är valt behövs ej condition
		(formData.value.selectedCategory === "djur" ||
			formData.value.selectedCondition.trim() !== "")
	);
});

/* formData.value.productImages.trim() !== "" &&    
	formData.value.productSeller.trim() !== "" &&
	formData.value.productAdress.trim() !== "" &&
	
	lägg till dom här i computed ovanför när konton och bilder funkar.
	*/

// Skicka iväg forumuläret
const submitForm = async () => {
	try {
		const response = await fetch("http://localhost:3000/submit", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData.value),
		});

		// kolla så att post har funkat annars visa error
		const result = await response.text();
		if (!response.ok) throw new Error(result || "Nåt har gått fel med json");

		alert("Annonsen är nu tillagt i systemet!");

		// Nollställ forumuläret efter att varan har skickats iväg
		formData.value = {
			productName: "",
			selectedCategory: "null",
			selectedCondition: "",
			productDescription: "",
			productPrice: "",
			productImages: "",
			productSeller: "",
			productAdress: "",
			selectedSize: null,
		};
		// productPrice.value = "";
	} catch (error) {
		console.error("Error:", error);
		alert(`Nåt har gått fel vid uppladdningen: ${error.message}`);
	}
};

// Bilduppladdningsfunktion
let selectedFile = null;

function onFileSelected(event) {
	console.log("Bild uppladdad");
	selectedFile = event.target.files[0];
}

function onImageUpload() {
	// Här ska de skrivas en cool funktion senare
}
</script>

<style scoped>
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
	min-height: 80vh;
	width: 100vw;
	padding-left: 20px;
	padding-right: 20px;
	display: flex;
	justify-content: center;

	/* align-content: center; */
	/* flex-direction: column; */
}
</style>
