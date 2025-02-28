<template>
  <div id="bigWrapper">
    <BContainer fluid>
      <!-- <BCol cols="12" class="FormAccount">
        <h1>Inloggning</h1> -->
      <!-- <BFormGroup label="Användarnamn" label-for="input-1">
          <BFormInput
            id="input-1"
            type="Användarnamn"
            placeholder="Skriv ditt användarnamn"
            required
          ></BFormInput>
        </BFormGroup>
        <BFormGroup label="Lösenord" label-for="input-2">
          <BFormInput
            id="input-2"
            type="password"
            placeholder="Lösenord"
            required
          ></BFormInput>
          <BButton variant="success" class="buttons">Logga in</BButton>
          <BButton variant="danger" class="buttons">Glömt lösenord</BButton>
        </BFormGroup>
      </BCol> -->

      <!-- Skapa konto formulär -->
      <BForm @submit.prevent="store.registerUser">
        <BCol cols="12" class="FormAccount">
          <h1>Skapa konto</h1>
          <BFormGroup label="Email address:" label-for="input-1" />
          <BFormInput
            id="input-1"
            type="email"
            placeholder="Din E-post"
            required
            v-model="store.email"
          />

          <BFormGroup label="För- och efternamn" label-for="input-2" />
          <BFormInput
            id="input-2"
            type="name"
            placeholder="Ditt namn"
            required
          />

          <BFormGroup label="Lösenord" label-for="input-3" />
          <BFormInput
            id="input-3"
            v-model.trim="value"
            :state="password"
            type="password"
            placeholder="Lösenord"
            required
            v-model="store.newPassword"
          />
          <BFormGroup label="Upprepa lösenord" label-for="input-4" />
          <BFormInput
            id="input-3"
            v-model.trim="repeatValue"
            :state="repeatPassword"
            type="password"
            placeholder="Upprepa lösenord"
            required
          />

          <BFormGroup label="Stad" label-for="input-5">
            <BFormInput
              id="input-5"
              type="text"
              placeholder="Vart bor du?"
              required
            />
          </BFormGroup>
          <BButton variant="danger" type="submit" class="buttons"
            >Skapa konto</BButton
          >
        </BCol>
      </BForm>
    </BContainer>
  </div>
</template>

<script setup>
  import { BCol } from 'bootstrap-vue-next'
  import { ref, computed } from 'vue'

  import { createAccountStore } from '../store'

  const store = createAccountStore()

  const value = ref('')
  const repeatValue = ref('')
  // const email = ref('')
  // const newPassword = ref('')

  // //Funktion för registrering
  // const registerUser = () => {
  //   const newUser = {
  //     email: email.value,
  //     password: newPassword.value
  //   }

  //   //Funktion för att spara lösenord och email i localStorage
  //   const users = JSON.parse(localStorage.getItem('users')) || []

  //   users.push(newUser)
  //   localStorage.setItem('users', JSON.stringify(users))

  //   //Återställer formuläret
  //   ;(email.value = ''), (newPassword.value = '')

  //   console.log(users)
  // }

  // Funktion för lösenordets minimumlängd (Evelina)
  const password = computed(() => (value.value?.length > 7 ? true : false))
  const repeatPassword = computed(() =>
    repeatValue.value?.length > 7 ? true : false
  )
</script>

<style scoped>
  #bigWrapper {
    min-height: 80vh;
    padding-left: 20px;
    padding-right: 20px;
  }

  .buttons {
    margin-left: 5px;
    margin-top: 10px;
  }

  .FormAccount {
    margin-right: 30px;
    margin-top: 20px;
  }

  @media only screen and (min-width: 600px) {
    .FormAccount {
      max-width: 100vh;
      display: flex;
      flex-direction: column;
    }

    .buttons {
      width: 170px;
    }
  }
</style>
