<template>
	<div class="itemWrapper">
		<div
			id="itemCard"
			v-for="object in objects"
			:key="objects.id"
			@click="chosenProduct(products)"
		>
			<router-link :to="`selectedproduct/${object.id}`">
				<img :src="object.img" alt="" class="itemImage" />
				<ul>
					<li>
						<p class="itemText">{{ object.namn }}</p>
					</li>
					<li>
						<p class="itemText">{{ object.adress }}</p>
					</li>
					<li>
						<p class="itemText">
							<strong>{{ object.pris }} :- </strong>
						</p>
					</li>
				</ul>
			</router-link>
		</div>
	</div>
</template>
<script setup>
import {ref, onMounted} from "vue"

const objects = ref([])
const clickedProduct = ref(null)

function fetchJsonData() {
	fetch("/ItemsObjectData.json") // Se till att filen finns i "public"-mappen
		.then((response) => {
			if (!response.ok) {
				throw new Error("Nätverksfel vid hämtning av JSON")
			}
			return response.json()
		})
		.then((data) => {
			objects.value = data // Uppdatera refens .value
			console.log(objects.value) // Logga datan EFTER att den har laddats
		})
		.catch((error) => console.error("Fel vid hämtning:", error))
}

// Anropa funktionen automatiskt när komponenten laddas
onMounted(() => {
	fetchJsonData()
})

function chosenProduct(products) {
	console.log("clicked")
	clickedProduct.value = products
}

// console.log("hej")
// 	$router.push.value({
// 		path: "/selectedproduct/:id",
// 	})
</script>

<style scoped>
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
</style>
