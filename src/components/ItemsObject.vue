<template>
	<div class="itemWrapper">
		<div id="itemCard" v-for="object in objects" :key="objects.id">
			<img :src="object.img" alt="" class="itemImage" />
			<ul>
				<li>
					<p class="itemText">{{ object.namn }}</p>
				</li>
				<li>
					<p class="itemText" >{{ object.adress }}</p>
				</li>
				<li>
					<p class="itemText"> <strong>{{ object.pris }} :- </strong></p>
				</li>
			</ul>
		</div>
	</div>


</template>
<script setup>
import { ref, onMounted } from 'vue';

const objects = ref([]);

function fetchJsonData() {
  fetch('/ItemsObjectData.json') // Se till att filen finns i "public"-mappen
    .then(response => {
      if (!response.ok) {
        throw new Error('Nätverksfel vid hämtning av JSON');
      }
      return response.json();
    })
    .then(data => {
      objects.value = data; // Uppdatera refens .value
      console.log(objects.value); // Logga datan EFTER att den har laddats
    })
    .catch(error => console.error('Fel vid hämtning:', error));
}

// Anropa funktionen automatiskt när komponenten laddas
onMounted(() => {
  fetchJsonData();
});




<<<<<<< HEAD
const items = ref([
	{
		id: 1,
		namn: "Tröja från nike",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 259,
		beskrivning: "Väldigt fin tröja från Nike, , inköpt 2023 i london",
		säljare: "Hampus",
	},
	{
		id: 2,
		namn: "Hund",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 299,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},
	{
		id: 3,
		namn: "Scooter",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris:179,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},
	{
		id: 4,
		namn: "Virkset",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 39,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},
	{
		id: 5,
		namn: "Kamera",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 1299,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},
	{
		id: 6,
		namn: "Växt",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 49,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},
	{
		id: 7,
		namn: "Sked",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 9,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},
	{
		id: 8,
		namn: "Lampa",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 49,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},
	{
		id: 9,
		namn: "Bil",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 12299,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},
	{
		id: 9,
		namn: "trasig Bil",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 299,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},
	{
		id: 9,
		namn: "lego lamborghini",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 699,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},
	{
		id: 9,
		namn: "Bil",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 299,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},
	{
		id: 9,
		namn: "Bil",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 299,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},
	{
		id: 9,
		namn: "Bil",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 299,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},
	{
		id: 9,
		namn: "Bil",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 299,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},{
		id: 9,
		namn: "Bil",
		skick: "bra",
		storlek: "L",
		img: "../assets/fox.jpeg",
		adress: "göteborg",
		kategori: "kläder",
		pris: 299,
		beskrivning: "Väldigt fin tröja från Nike",
		säljare: "Hampus",
	},
])
=======
>>>>>>> 85fba7d82f124eb9b0facdf6e2939b7ee2eee150
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

.itemText{
	font-size: 18px;
	margin: 0;

}

.itemImage {
	height: 170px;
	width: 100%;
}

ul{
	list-style-type: none;
	width: 100%;
	padding: 0;
}
li{
	width: 100%;
}
</style>
