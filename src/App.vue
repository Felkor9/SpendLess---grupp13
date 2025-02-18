<script>
import Navbar from "./components/Navbar.vue"

export default {
	components: {
		Navbar,
	},
}
</script>

<template>
	<Navbar />
	<RouterView />
</template>
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
