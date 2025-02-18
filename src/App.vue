gu<script>
import CitiesList from "./components/CitiesList.vue"
import HelloWorld from "./components/HelloWorld.vue"
import Navbar from "./components/Navbar.vue"

export default {
	components: {
		CitiesList,
		HelloWorld,
		Navbar,
	},
}
</script>

<template>
	<Navbar />
	<RouterView />
	<HelloWorld msg="Hello World!" />
	<CitiesList />
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
