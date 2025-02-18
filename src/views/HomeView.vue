<template>
	<h1>Home</h1>
	<form>
<label for="search">Sök efter vara</label>
<input type="text" id="searchbox" placeholder="Sök vara">
<input type="submit" value="Sök">
<div id="containerForAccounts">
<button>Logga in</button>
<button>Skapa konto</button>
</div>
</form>
<label for="category">Välj kategori</label>
<select name="category" id="category">
<option value="Husdjur">Husdjur</option>
<option value="Fordon">Fordon</option>
<option value="Hobby">Hobby</option>
<option value="Kläder">Kläder</option>
</select>

<ItemsObject />
</template>

<script setup>
import ItemsObject from '../components/ItemsObject.vue';


</script>

<style scoped>
#containerForAccounts{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1;
}
#containerForAccounts button{
	width: 80px;
	height: 30px;
	margin-top: 10px;
	cursor: pointer;
	font-size: 10px;
}

input[type=submit] {
cursor: pointer;
width: 80px;
height: 30px;
margin-top: 10px;
font-size: 10px;
}
</style>
