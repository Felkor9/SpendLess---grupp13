<template>
    <nav>
    <img src="/assets/hamburgerMeny.svg" alt="ikon för hamburgarmeny" id="hamburgerIcon" @click="toggleMenu">
    </nav>
    <div>
    <ul v-if="hamburgerMenu" id="UnOrderedListCategory">
        <li class="listItemCategory">
            <router-link to="/">Home</router-link>
        </li>
        <li class="listItemCategory">
            <router-link to="/about">About</router-link>
        </li>
    </ul>
    </div>


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

#UnOrderedListCategory{
 z-index: 2;
 margin: 0;
 margin-top: 25px;
 padding: 0;
 width: 20vw;
 height: 25vh;
 background-color: rgb(255, 255, 255);
 position: absolute;
 top: 50;
 display: flex;
 flex-direction: column;
 align-items: center;
}

.listItemCategory{
    z-index: 2;
    list-style-type: none;
    margin: 10px;
    padding: 5px;
}

@media screen and (min-width: 480px){

}

  </style>
