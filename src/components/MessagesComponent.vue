<template>
  <!--meddelande funktionen-->
  <div>
    <h5>Meddelanden</h5>
    <div v-if="messages.length === 0">
      <p>Inga meddelanden ännu.</p>
    </div>

    <BListGroup v-else>
      <BListGroupItem v-for="msg in messages" :key="msg.id">
        <strong>{{ msg.productName }}:</strong> {{ msg.message }} <br />
        <!--jag vet att man inte ska använda br egentligen-->
        <small>{{ msg.seller }} | {{ msg.timestamp }}</small>
      </BListGroupItem>
    </BListGroup>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const messages = ref([])
  // Ladda meddelanden från localStorage
  onMounted(() => {
    messages.value = JSON.parse(localStorage.getItem('chatMessages')) || []
  })
</script>
