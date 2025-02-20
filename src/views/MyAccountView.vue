<template>
	<h1>Hello</h1>
	<BFormGroup
		label="Email address:"
		label-for="input-1"
		description="Vi kommer inte dela din e-post med någon annan!"
	>
	</BFormGroup>
	<BFormInput
		id="input-1"
		type="email"
		placeholder="Din E-post"
		required
	></BFormInput>

	<BFormGroup
		label="För- och efternamn"
		label-for="input-2"
		description="Vi kommer inte dela ditt namn med någon"
	></BFormGroup>
	<BFormInput
		id="input-2"
		type="name"
		placeholder="Ditt namn"
		required
	></BFormInput>

	<BFormGroup
		label="Lösenord"
		label-for="input-3"
		description="Vi kommer inte dela ditt lösenord med någon"
	></BFormGroup>
	<BFormInput
		id="input-3"
		type="password"
		placeholder="Lösenord"
		required
	></BFormInput>
	<BFormGroup
		label="Lösenord"
		label-for="input-4"
		description="Upprepa lösenord"
	></BFormGroup>
	<BFormInput
		id="input-3"
		type="password"
		placeholder="Upprepa lösenord"
		required
	></BFormInput>
	<BButton>Skapa konto</BButton>
</template>

<script setup>
import {ref} from "vue"
</script>
<style scoped></style>
