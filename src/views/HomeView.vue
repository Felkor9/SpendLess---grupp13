<template>
	<h1>Home</h1>
	<form>
<label for="search">Sök efter vara</label>
<input type="text" id="searchbox" placeholder="Sök vara">
<input type="submit" value="Submit">
<div id="containerForAccounts">
<button>Logga in</button>
<button>Skapa konto</button>
</div>
</form>
</template>

<script>

</script>

<style scoped>
#containerForAccounts{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
#containerForAccounts button{
	width: 80px;
	height: 30px;
	margin-top: 10px;
	cursor: pointer;
	font-size: 10px;
}
</style>
