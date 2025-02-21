<template>
	<div id="bigWrapper">
		<BContainer fluid>
			<BRow>
				<BCol cols="5" class="FormAccount">
					<h1>Skapa konto</h1>
					<BFormGroup label="Email address:" label-for="input-1"> </BFormGroup>
					<BFormInput
						id="input-1"
						type="email"
						placeholder="Din E-post"
						required
					></BFormInput>

					<BFormGroup
						label="För- och efternamn"
						label-for="input-2"
					></BFormGroup>
					<BFormInput
						id="input-2"
						type="name"
						placeholder="Ditt namn"
						required
					></BFormInput>

					<BFormGroup label="Lösenord" label-for="input-3"></BFormGroup>
					<BFormInput
						id="input-3"
						v-model.trim="value"
						:state="password"
						type="password"
						placeholder="Lösenord"
						required
					></BFormInput>
					<BFormGroup label="Upprepa lösenord" label-for="input-4"></BFormGroup>
					<BFormInput
						id="input-3"
						v-model.trim="value"
						:state="password"
						type="password"
						placeholder="Upprepa lösenord"
						required
					></BFormInput>

					<BFormGroup label="Stad" label-for="input-5">
						<BFormInput
							id="input-5"
							type="text"
							placeholder="Vart bor du?"
							required
						></BFormInput>
					</BFormGroup>
					<BButton variant="danger" class="buttons">Skapa konto</BButton>
				</BCol>

				<BCol cols="4" class="FormAccount">
					<h1>Inloggning</h1>
					<BFormGroup label="Användarnamn" label-for="input-1">
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
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script setup>
import {BCol, BRow} from "bootstrap-vue-next"
import {ref, computed} from "vue"

const value = ref("")

// Funktion för lösenordets minimumlängd
const password = computed(() => (value.value?.length > 7 ? true : false))
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
	margin-top: 10px;
}
</style>
