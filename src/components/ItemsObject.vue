<template>
	<h1>Hej från objekt</h1>
	<div class="itemWrapper">
		<div id="itemCard" v-for="item in items" :key="item.id">
			<img :src="item.img" alt="" class="itemImage" />
			<ul>
				<li>
					<p>{{ item.namn }}</p>
				</li>
				<li>
					<p>{{ item.pris }}</p>
				</li>
				<li>
					<p>{{ item.adress }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script setup>
import {ref} from "vue"

const objekt = ref("")

const items = ref([
	{
		id: 1,
		namn: "Tröja",
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
		pris: 299,
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
		pris: 299,
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
		pris: 299,
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
		pris: 299,
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
		pris: 299,
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
])
</script>

<style scoped>
.itemWrapper {
	height: auto;
	width: 100dvw;
	display: flex;
	flex-wrap: wrap;
}

#itemCard {
	border: 1px solid black;
	width: 100px;
	height: 120px;
	font-size: 10px;
}

.itemImage {
	height: 50px;
	width: 50px;
}
</style>
