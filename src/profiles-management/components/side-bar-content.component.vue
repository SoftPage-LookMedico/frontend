<template>
    <pv-button icon="pi pi-arrow-right" @click="visible = true" />
    <div class="card flex justify-content-center">
    <pv-sidebar v-model:visible="visible">
        <div class="flex flex-column">
            <router-link :to="{name: 'doctor-home', params:{id:(JSON.stringify(username))}}">
                <pv-button class="p-button-text  text-white">
                    <span class="material-icons">home</span>
                    <span>Home</span>
                </pv-button>
            </router-link>

            <router-link :to="{name: 'doctor-personal-data', params:{id:JSON.stringify(username)}}">
                <pv-button class="p-button-text  text-white">
                    <span class="material-icons">border_color</span>
                    <span>Personal Data</span>
                </pv-button>
            </router-link>

            <router-link :to="{name: 'doctor-payment-methods'}">
                <pv-button class="p-button-text text-white">
                    <span class="material-icons">credit_card</span>
                    <span>Payment Methods</span>
                </pv-button>
            </router-link>

        </div>
    </pv-sidebar>


</div>

</template>

<script>

export default {
    name: "side-bar-content",
    props: {
        username: String
    },
    data(){
        return {
            visible: false
        }
    }
}
</script>

<style scoped>
*{
    background-color: #25c6db
}
</style>
