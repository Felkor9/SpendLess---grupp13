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
          console.warn('No images found for product')
          images.value = ['https://via.placeholder.com/600x400?text=No+Image']
        }
      })
      .catch((error) => console.error('Error fetching images:', error))
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

  /* Mobile layout (Smaller screens) */
  @media (max-width: 768px) {
    .image-gallery {
      flex-direction: column; /* Stack vertically */
    }

    .main-image {
      flex: none; /* Remove flex grow */
      width: 100%; /* Full width */
    }

    .main-image img {
      height: 300px; /* Reduce height for mobile */
    }

    .thumbnail-list {
      flex: none; /* Remove flex grow */
      width: 100%; /* Full width */
      max-height: none; /* Remove vertical scroll */
      display: flex; /* Horizontal row */
      overflow-x: auto; /* Horizontal scroll */
      gap: 10px; /* Space between thumbnails */
      padding: 10px 0; /* Add some padding */
    }

    .thumbnail {
      flex: 0 0 auto; /* Don’t grow or shrink, use natural size */
      width: 80px; /* Fixed width for thumbnails */
      margin-bottom: 0; /* Remove bottom margin since it’s horizontal */
    }

    .thumbnail img {
      width: 80px; /* Match thumbnail container width */
      height: 80px; /* Square thumbnails */
    }
  }
</style>
