<template>
  <div class="container gallery-wrapper">
    <div class="image-gallery">
      <!-- Den Stora Bilden -->
      <div class="main-image">
        <img
          v-if="images.length > 0"
          :src="images[selectedIndex]"
          alt="Bild på Produkt"
          class="img-fluid"
        />
        <p v-else>No images available</p>
      </div>
      <!-- Listan med Thumbnails -->
      <div class="thumbnail-list">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="thumbnail"
          :class="{ 'thumbnail-active': index === selectedIndex }"
          @click="selectImage(index)"
        >
          <img :src="image" alt="Miniatyr på produktbild" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const props = defineProps({
    productId: {
      type: Number,
      required: true
    }
  })

  const selectedIndex = ref(0)
  const images = ref([])

  //hämtar info från valt produkt-ID
  function fetchProductDetails() {
    console.log('Fetching images for product ID:', props.productId)
    fetch('/ItemsObjectData.json')
      .then((response) => {
        if (!response.ok) throw new Error('Network error fetching JSON')
        return response.json()
      })
      .then((data) => {
        const product = data.find((p) => p.id === props.productId)
        console.log('Product found:', product)
        if (product?.img) {
          images.value = Array.isArray(product.img)
            ? product.img
            : [product.img]
          console.log('Images set:', images.value)
        } else {
          console.warn('Kunde inte hitta bild till produkt')
          images.value = ['../assets/fox.jpeg']
        }
      })
      .catch((error) => console.error('Kunde inte hämta bilder:', error))
  }

  const selectImage = (index) => {
    if (index >= 0 && index < images.value.length) {
      selectedIndex.value = index
    }
  }

  onMounted(fetchProductDetails)
</script>

<style scoped>
  .gallery-wrapper {
    padding: 20px;
  }

  .image-gallery {
    display: flex;
    gap: 10px;
  }

  .main-image {
    flex: 2;
  }

  .main-image img {
    width: 100%;
    height: 400px;
    object-fit: contain;
  }

  .thumbnail-list {
    flex-basis: 120px;
    max-height: 400px;
    overflow-y: auto;
  }

  .thumbnail {
    cursor: pointer;
    margin-bottom: 10px;
    padding: 5px;
    border: 2px solid transparent;
    transition: border-color 0.3s ease;
  }

  .thumbnail-active {
    border-color: #2e5d0e;
  }

  .thumbnail img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }

  /* Mobile layout - flex column istället för row så thumbnails hamnar under */
  @media (max-width: 768px) {
    .image-gallery {
      flex-direction: column;
    }

    .main-image {
      flex: none;
      width: 100%;
    }

    .main-image img {
      height: 300px;
    }

    .thumbnail-list {
      flex: none;
      width: 100%;
      max-height: none;
      display: flex;
      overflow-x: auto;
      gap: 10px;
      padding: 10px 0;
    }

    .thumbnail {
      flex: 0 0 auto;
      width: 80px;
      margin-bottom: 0;
    }
    /* kvadratiska thumbnials */
    .thumbnail img {
      width: 80px;
      height: 80px;
    }
  }
</style>
