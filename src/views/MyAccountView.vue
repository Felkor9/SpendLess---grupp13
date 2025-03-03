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
      <BForm @submit.prevent="registerAndNavigate">
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
            v-model="store.name"
            required
          />

          <BFormGroup label="Lösenord" label-for="input-3" />
          <BFormInput
            id="input-3"
            type="password"
            placeholder="Lösenord"
            required
            v-model="store.newPassword"
          />
          <BFormGroup label="Upprepa lösenord" label-for="input-4" />
          <BFormInput
            id="input-4"
            type="password"
            v-model="store.repeatPassword"
            placeholder="Upprepa lösenord"
            required
          />
          <p v-if="!store.passwordsMatch" style="color: red">
            ❌ Lösenorden matchar inte!
          </p>
          <p v-if="!store.passwordLongEnough" style="color: red">
            ❌ Lösenordet måste vara minst 5 tecken!
          </p>

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
  // import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'

  import { createAccountStore } from '../store'

  const store = createAccountStore()
  const router = useRouter() // Hämta router för navigation

  const registerAndNavigate = () => {
    // Anropa registerUser-metoden för att skapa användaren
    store.registerUser()

    // Navigera till HomeView efter registrering
    router.push({ path: '/' })
  }
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
