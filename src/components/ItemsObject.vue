<template>
	<div class="itemWrapper">
		<div id="itemCard" v-for="item in items" :key="item.id">
			<img :src="item.img" alt="" class="itemImage" />
			<ul>
				<li>
					<p class="itemText">{{ item.namn }}</p>
				</li>
				<li>
					<p class="itemText" >{{ item.adress }}</p>
				</li>
				<li>
					<p class="itemText"> <strong>{{ item.pris }} :- </strong></p>
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
