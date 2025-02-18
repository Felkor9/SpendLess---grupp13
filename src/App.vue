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
	background-color: #8186d2;
	color: white;
	font-family: Arial, Helvetica, sans-serif;
	}

	p {
	color: black;
	}
</style>
