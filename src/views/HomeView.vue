<template>
	<!-- <h1>Home</h1> -->
	<div id="bigWrapper">
	<BContainer fluid class="containerSearch">
		<BRow class="my-1">
			<BCol cols="12">
				<label for="search" class="labelForSearch">Välkommen till SpendLess!</label>
			</BCol>
			<BCol cols="12">
				<BFormInput v-model="text" placeholder="Vad letar du efter idag?" class="inputSearch"/>
			</BCol>
			<BCol  cols="12"><BButton variant="success" class="inputButton">Sök</BButton> </BCol>
		</BRow>
	</BContainer>

  <BRow id="categoryitem">
		<BCol cols="4">
	<BFormSelect v-model="selected" :options="productCategory" placeholder="välj kategori" class="categoryChooser"/>
	<BFormSelectOption :value="null" disabled> </BFormSelectOption>
	</BCol>
	</BRow>
	<!-- <label for="category">Välj kategori</label>
	<select v-for="category in category" name="category" id="category">
		{{
			item.category
		}} -->
		<!-- <option value="Husdjur">Husdjur</option>
<option value="Fordon">Fordon</option>
<option value="Hobby">Hobby</option>
<option value="Kläder">Kläder</option> -->
	<!-- </select> -->
	<div id="containerForObject">
	<ItemsObject />
	</div>
	</div>
</template>

<script setup>
import {BCol} from "bootstrap-vue-next"
import ItemsObject from "../components/ItemsObject.vue"
import {ref} from 'vue'

const productCategory = [
  {value: 'null', text: 'Välj en kategori'},
  {value: 'a', text: 'Växter'},
  {value: 'a', text: 'Elektronik'},
  {value: 'b', text: 'Heminredning'},
  {value: 'c', text: 'Hobby'},
  {value: 'd', text: 'Sport'},
]

const selected = ref(null)

// defineProps: ({
// 	kategori: string,
// })
</script>


<style scoped>
*{
	box-sizing: border-box;
}
/* #bigWrapper{
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0;
	box-sizing: border-box;
} */

#containerForAccounts {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1;
}

.containerSearch{
	background-image: url(/assets/coffee-3989866_1280.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 100%;
	min-height: 300px;
	/* width: 100vw; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* margin: 0; */
}

.labelForSearch{
	color: white;
	font-size: 25px;
	font-weight: 900;
	/* font-family:'Times New Roman', Times, serif; */

}

.inputSearch{
	font-size: 23px;
	padding-inline: 20px;
	font-family: 'Times New Roman', Times, serif;
	border-radius: 0;
}

.categoryChooser{
	min-width: 200px;
}

.inputButton{
	margin-top: 10px;
	width: 100px;
	padding: 10px;
	height: 50px;


}

.my-1{
	display: flex;
	/* justify-content: flex-start; */
	flex-direction: column;
	/* align-items: flex-start; */
	width: 100vw;
}

#categoryitem{
	/* display: flex; */
	/* background-color: black; */
	width: 100vw;
	margin-top: 10px;

}

#containerForObject{
	width: 100vw;
	padding: 10px;

}

/* #containerForAccounts button {
	/* width: 80px;
	height: 30px;
	margin-top: 10px; */
/* cursor: pointer; */
/* }  */

/* input[type="submit"] {
	cursor: pointer;
	width: 80px;
	height: 30px;
	margin-top: 10px;
	font-size: 10px;
} */
</style>
