<template>
    <section id="sectionFooter">
    <BContainer fluid >
        <BRow>
            <BCol cols="6" class="bg-dark" style="padding: 10px;" >
                <BRow>
                    <BCol cols="2" class="text-end">
                        <img src="/assets/location.png" alt="" class="icon">
                    </BCol>
                    <BCol cols="8" class="footerText">Hagen 1, 458 32, Göteborg, Sweden</BCol>
                </BRow>
                <BRow>
                    <BCol cols="2" class="text-end">
                        <img src="/assets/phone.png" alt="" class="icon ">
                    </BCol>
                    <BCol cols="8" class="footerText" >+46112</BCol>
                </BRow>
                 <BRow>
                    <BCol cols="2" class="text-end">
                        <img src="/assets/email.png" alt="" class="icon">
                    </BCol>
                    <BCol cols="8" class="footerText">Support@spendless.se</BCol>
                </BRow>
            </BCol>
            <BCol cols="6" class="bg-dark">
                <h3 class="headingFooter ">About the company</h3>
                <p class="footerText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, quisquam eveniet consequuntur consectetur vitae odit officia perspiciatis sed libero quos labore ad atque neque </p>
            </BCol>
        </BRow>

    </BContainer>
    </section>
</template>

<script setup>
import { BCol } from 'bootstrap-vue-next';


</script>

<style scoped>
.icon{
    width: 30px;
    height: 30px;
    margin-top: 20px;
}

.footerText{
    color: white;
    margin-top: 10px;
    padding: 5px;
}

.headingFooter{
    color: white;
}

#sectionFooter{
    margin-top: 50px;
    min-height: 5vh;
}
</style>
