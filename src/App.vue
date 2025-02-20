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


	footer{
		position: absolute;
		bottom: 0;
	}
</style>
