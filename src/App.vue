<template>
	<Navbar />
	<RouterView />
	<Footer />
</template>
<script>

//Här importerar vi komponenter som använads
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"


//Gör komponenterna användbara
export default {
	components: {
		Navbar,
		Footer
	},
}
</script>
<style>
	body {
	background-color: white;
	color: black;
	font-family: Arial, Helvetica, sans-serif;
	}

	p {
	color: black;
	}
</style>
