<template>
    <nav>
    <img src="/assets/hamburgerMeny.svg" alt="ikon för hamburgarmeny" id="hamburgerIcon" @click="toggleMenu">
    <img src="/assets/spendLess-Ikonv1.png" alt="" id="spendLessIcon">
    <img src="/assets/userIcon.svg" alt="" id="userIcon">
    </nav>
    <div>
    <ul v-if="hamburgerMenu" id="UnOrderedListCategory">
        <li class="listItemCategory">
            <router-link to="/">Home</router-link>
        </li>
        <li class="listItemCategory">
            <router-link to="/about">About</router-link>
        </li>
		<li class="listItemCategory">
            <router-link to="/myaccount">Mitt konto</router-link>
        </li>
		<li class="listItemCategory">
            <router-link to="/newproduct">Lägg upp annons</router-link>
        </li>
    </ul>

    </div>
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
	height: 50px;
}

#hamburgerIcon {
	width: 30px;
	height: 30px;
	cursor: pointer;
	position: absolute;
	margin-left: 10px;
	top: 1;
	left: 0;
}

#spendLessIcon {
	width: 50px;
	height: 30px;
}

#userIcon {
	width: 50px;
	height: 50px;
	cursor: pointer;
	position: absolute;
	top: 0;
	right: 0;
	margin-right: 10px;
}

#UnOrderedListCategory {
	z-index: 2;
	margin: 0;
	margin-top: 10px;
	padding: 0;
	width: 20vw;
	height: auto;
	background-color: rgb(255, 255, 255);
	position: absolute;
	top: 50;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.listItemCategory {
	z-index: 2;
	list-style-type: none;
	margin: 10px;
	padding: 5px;
}

@media screen and (min-width: 480px) {
}
</style>
