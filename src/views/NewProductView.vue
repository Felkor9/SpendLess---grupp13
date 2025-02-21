<template>
    <div id="bigWrapper">
    <BContainer fluid>
        <BRow>
        <BCol cols="4">
            <h1>Lägg upp annons!</h1>
			<BFormGroup
				label="Namn på produkt"
				label-for="input-1"

                :state="state"
			>
			</BFormGroup>
			<BFormInput
				id="input-1"
				type="text"
				placeholder="Skriv här"
				required
                :state="state"
			></BFormInput>
            </BCol>
        </BRow>
        <BRow class="categorieSelector">
        <BCol cols="4">
           <BFormGroup
			label-for="input-2"
            >
            <BFormSelect v-model="selected" :options="productCategory" />
            <BFormSelectOption :value="null" disabled> </BFormSelectOption>
			</BFormGroup>

            </BCol>
        </BRow>
        <BRow >
        <BCol cols="4">
           <BFormGroup
			label-for="input-3"
            ><div class="productCondition">
            <BFormRadio v-model="selected" name="some-radios" value="A" class="radioButton">Nyskick </BFormRadio>
            <BFormRadio v-model="selected" name="some-radios" value="B" class="radioButton">Begangnat </BFormRadio>
            <BFormRadio v-model="selected" name="some-radios" value="C" class="radioButton">Slitet </BFormRadio>
		</div>
        </BFormGroup>

            </BCol>
        </BRow>

    </BContainer>
</div>
</template>

<script setup>
import {ref} from 'vue'

const productCategory = [
{value: 'null', text: 'Välj en kategori'},
{value: 'a', text: 'Växter'},
{value: 'a', text: 'Elektronik'},
{value: 'b', text: 'Heminredning'},
{value: 'c', text: 'Hobby'},
{value: 'd', text: 'Sport'},
]

const selected = ref(null)

</script>

<style scoped>

.categorieSelector {
    padding-top: 20px;
    padding-bottom: 20px;
}

.productCondition {
    display: flex;
    margin:10px;
    justify-content:space-between
}
.radioButton{
    margin:100px;
    margin-right: 10px;
}

#bigWrapper{
	min-height: 80vh;
    width:100vw;
	padding-left: 20px;
	padding-right: 20px;
    display: flex;
    justify-content: center;

  /* align-content: center; */
    /* flex-direction: column; */
}

</style>
