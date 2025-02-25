<template>
	<div id="app">
	<header>

		<Navbar />

	</header>
	<main>

		<RouterView />

	</main>

	<footer>
	<FooterComponent />
	</footer>
</div>



</template>
<script>

//Här importerar vi komponenter som använads
import Navbar from "./components/Navbar.vue"
import FooterComponent from "./components/FooterComponent.vue";


//Gör komponenterna användbara
export default {
	components: {
		Navbar,
		FooterComponent
	},
}
</script>
<style>
	#app{
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	main{
		flex-grow: 1;
	}


</style>
