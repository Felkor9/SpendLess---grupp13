<template>
	<nav>
		<img
			src="/assets/hamburgerMeny.svg"
			alt="ikon för hamburgarmeny"
			id="hamburgerIcon"
			@click="toggleMenu"
		/>
		<img src="/assets/spendLess-Ikonv1.png" alt="" id="spendLessIcon" />
		<img
			src="/assets/userIcon.svg"
			alt=""
			id="userIcon"
			@click="toggleProfile"
		/>
	</nav>
	<div>
		<ul v-if="hamburgerMenu" id="UnOrderedListCategory" class="bg-light">
			<li class="listItemCategory">
				<router-link to="/" class="routerLink">Home</router-link>
			</li>
			<li class="listItemCategory">
				<router-link to="/about" class="routerLink">About</router-link>
			</li>
			<li class="listItemCategory">
				<router-link to="/myaccount" class="routerLink">Mitt konto</router-link>
			</li>
			<li class="listItemCategory">
				<router-link to="/newproduct" class="routerLink"
					>Lägg upp annons</router-link
				>
			</li>
			<li class="listItemCategory">
				<router-link to="/selectedproduct" class="routerLink"
					>SelectedProduct</router-link
				>
			</li>
		</ul>
	</div>

	<BContainer id="containerForAccounts" v-if="profileMenu" class="bg-light">
		<BButton variant="primary" size="sm" class="buttonLogIn">Logga in</BButton>
		<BButton variant="info" size="sm" class="buttonLogIn">Skapa konto</BButton>
	</BContainer>
	<!-- <BNavbar v-b-color-mode="dark" variant="primary">
    <BNavbarBrand tag="h1" class="mb-0">NavBar</BNavbarBrand>
    <BnavbarToggle id="nav-offcanvas" title="offcanvas" placement="end" is-nav/>
</BNavbar> -->
</template>
<script setup>
//Här importerar vi lite gött
import {ref} from "vue"

//funtion för hamburgarmenyn
const hamburgerMenu = ref(false)
const toggleMenu = () => {
	hamburgerMenu.value = !hamburgerMenu.value
}

const profileMenu = ref(false)
const toggleProfile = () => {
	profileMenu.value = !profileMenu.value
}
</script>

<style scoped>
nav {
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 20px;
	padding: 5px;
	position: relative;
	width: 100vw;
	height: 80px;
}

#hamburgerIcon {
	width: 45px;
	height: 45px;
	cursor: pointer;
	position: absolute;
	margin-left: 10px;
	top: 1;
	left: 0;
}

#spendLessIcon {
	width: 60px;
	height: 40px;
}

#userIcon {
	width: 70px;
	height: 70px;
	cursor: pointer;
	position: absolute;
	top: 0;
	right: 0;
	margin-right: 10px;
}

.buttonLogIn {
	margin: 5px;
	width: 150px;
	height: 50px;
	font-size: 20px;
}

#UnOrderedListCategory {
	z-index: 2;
	margin: 0;
	/* margin-top: 10px; */
	padding: 0;
	width: 80vw;
	height: auto;
	/* background-color: rgb(255, 255, 255); */
	position: absolute;
	top: 50;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 2px 2px 10px grey;
}

#containerForAccounts {
	z-index: 2;
	margin: 0;
	padding: 0;
	width: 70vw;
	height: 250px;
	/* background-color: rgb(0, 0, 0); */
	position: absolute;
	top: 50;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 2px 2px 10px grey;
}

.listItemCategory {
	z-index: 2;
	list-style-type: none;
	margin: 10px;
	padding: 5px;
	width: 100%;
	border-bottom: 1px solid black;
}

.routerLink {
	color: black;
	text-decoration: none;
}

@media screen and (min-width: 480px) {
}
</style>
