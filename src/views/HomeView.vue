<template>
	<h1>Home</h1>
	<div id="bigWrapper">
	<BContainer fluid="md">
		<BRow class="my-1">
			<BCol sm="1">
				<label for="search">Sök efter vara</label>
			</BCol>
			<BCol sm="2">
				<BFormInput v-model="text" placeholder="Sökfält" />
			</BCol>
			<BCol sm="1"><BButton type="secondary">Sök</BButton> </BCol>
		</BRow>
	</BContainer>
	<div id="containerForAccounts">
		<BButton variant="primary">Logga in</BButton>
		<BButton variant="info">Skapa konto</BButton>
	</div>

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

	<ItemsObject />

	</div>
</template>

<script setup>
import {BCol} from "bootstrap-vue-next"
import ItemsObject from "../components/ItemsObject.vue"

// defineProps: ({
// 	kategori: string,
// })
</script>

<style scoped>
#bigWrapper{
	min-height: 100vh;
	padding-left: 20px;
	padding-right: 20px;
}

#containerForAccounts {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1;

}

/* #containerForAccounts button {
	/* width: 80px;
	height: 30px;
	margin-top: 10px; */
/* cursor: pointer; */
/* }  */

input[type="submit"] {
	cursor: pointer;
	width: 80px;
	height: 30px;
	margin-top: 10px;
	font-size: 10px;
}
</style>
