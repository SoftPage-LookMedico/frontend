<script lang="ts">


export default {
  name: "select-user",


}
</script>

<template>

  <router-link :to="{name: 'login-doctor'}">
    <pv-button class="p-button-text text-black">
      <span>Doctor</span>
    </pv-button>
  </router-link>


    <router-link :to="{name: 'login-supplier'}">
      <pv-button class="p-button-text text-black">
        <span>Supplier</span>
      </pv-button>
    </router-link>

  <router-view></router-view>
</template>

<style scoped>

</style>
