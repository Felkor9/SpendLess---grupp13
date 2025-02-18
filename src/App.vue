<template>
	<Navbar />
	<RouterView />
	<Footer />
</template>
<script>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"

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
