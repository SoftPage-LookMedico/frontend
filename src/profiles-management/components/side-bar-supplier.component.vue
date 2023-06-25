<template>
  <pv-button icon="pi pi-arrow-right" @click="visible = true" />
  <div class="card flex justify-content-center">
    <pv-sidebar v-model:visible="visible">
      <div class="flex flex-column">
        <router-link :to="{name: 'supplier-home', params:{id:JSON.stringify(username)}}">
          <pv-button class="p-button-text  text-white">
            <span class="material-icons">home</span>
            <span>Home</span>
          </pv-button>
        </router-link>

        <router-link :to="{name: 'supplier-personal-data', params:{id:JSON.stringify(username)}}">
          <pv-button class="p-button-text  text-white">
            <span class="material-icons">border_color</span>
            <span>Personal Data</span>
          </pv-button>
        </router-link>

        <router-link :to="{name: 'supplier-business-information', params:{id:JSON.stringify(username)}}">
          <pv-button class="p-button-text text-white">
            <span class="material-icons">border_color</span>
            <span>Business Information</span>
          </pv-button>
        </router-link>

      </div>
    </pv-sidebar>


  </div>

</template>

<script>

export default {
  name: "side-bar-supplier",
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
