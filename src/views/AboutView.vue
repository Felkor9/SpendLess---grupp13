<script setup>
  import { ref } from 'vue'

  const latitude = ref(null)
  const longitude = ref(null)
  const errorMessage = ref('')

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude.value = position.coords.latitude
          longitude.value = position.coords.longitude
        },
        () => {
          errorMessage.value = 'Geolocation failed.'
        }
      )
    } else {
      errorMessage.value = 'Geolocation is not supported by this browser.'
    }
  }
</script>

<template>
  <div>
    <button @click="getLocation">Get Location</button>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <iframe
      :src="`https://www.google.com/maps?q=${latitude},${longitude}&output=embed`"
      width="50%"
      height="200"
      style="border: 0"
      allowfullscreen="100%"
      loading="lazy"
    />
  </div>
</template>
