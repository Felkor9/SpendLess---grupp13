<template>
    <nav>
    <img src="/assets/hamburgerMeny.svg" alt="ikon för hamburgarmeny" id="hamburgerIcon" @click="toggleMenu">
    <ul v-if="hamburgerMenu" id="">
        <li class="ListItemCategory">
            <router-link to="/">Home</router-link>
        </li>
        <li class="listItemCategory">
            <router-link to="/about">About</router-link>
        </li>
    </ul>
    </nav>

</template>
<script setup>
//Här importerar vi lite gött
import { ref } from 'vue'


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
  font-size: 20px;
  padding: 5px;
  position: relative;
}

#hamburgerIcon{
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
}

@media screen and (min-width: 480px){

}

  </style>
