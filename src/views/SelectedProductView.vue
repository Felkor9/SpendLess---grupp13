<template>
	<h1>Selected product</h1>
	<p>
		Denna sida ska tas bort från navbaren sen men måste se hur det ser ut medan
		jag kodar.
	</p>
	<BCard
		title="Produkt xxx"
		img-src="./public/favicon-196.png"
		img-alt="Image"
		img-top
		tag="article"
		style="max-width: 25rem"
		class="ProductCard"
	>
		<BCardText> Information om produkten </BCardText>
		<BButton href="#myaccount" variant="success">Visa intresse</BButton>
	</BCard>
</template>

<script setup></script>

<style scoped>
.ProductCard {
	margin-left: 25px;
}
</style>
