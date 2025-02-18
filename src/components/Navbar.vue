<template>
    <nav>
    <img src="/assets/hamburgerMeny.svg" alt="" id="hamburgerIcon" @click="hamburgerMenu">
    <ul>
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/about">About</router-link>
        </li>
    </ul>
    </nav>

</template>
<script setup>
import { ref } from 'vue'

function hamburgerMenu() {
    togglemenu
}

</script>

<style scoped>

nav {
display: flex;
  justify-content: space-around;
  font-size: 20px;
  padding: 5px;
}

#hamburgerIcon{
    width: 30px;
    height: 30px;
    cursor: pointer;
}

@media screen and (min-width: 480px){

}

  </style>
