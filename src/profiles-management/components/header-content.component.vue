<template>
  <div class="w-full">
          <pv-menubar class="pb-0 pt-0 w-full">
              <template #start>
                  <div class="flex inline-block justify-content-between align-items-center">

                      <side-bar-content :username="userId"></side-bar-content>

                      <pv-toolbar class="bg-white pb-0 pt-0 justify-content-between">
                          <template #start>
                              <img class="logo" src="../../assets/images/logo.png">
                              <h3>| LookMedico <span class="space">---------------------------------------------------------------------------------------</span></h3>
                          </template>
                          <template #end>
                              <div class="flex-column">
                                  <router-link
                                      v-for="item in items"
                                      :key="item.label"
                                      :to="item.to"
                                      custom
                                      v-slot="{navigate, href}"> <!--SON PROPIEDADES-->
                                      <pv-button class="p-button-text  text-white"
                                                 :href="href"
                                                 @click="navigate">
                                          <span class="material-icons">{{item.icon}}</span>
                                          <span>{{item.label}}</span>
                                      </pv-button>
                                  </router-link>
                              </div>
                          </template>
                      </pv-toolbar>
                  </div>

              </template>
          </pv-menubar>

  </div>
</template>

<script>
import SupplierHomeContent from "../pages/supplier-home-content.component.vue";
import DoctorHomeContent from "../pages/doctor-home-content.component.vue";
import PersonalDataContent from "../pages/doctor-personal-data.component.vue";
import SideBarContent from "./side-bar-content.component.vue";

export default {
    name: "header-content",
    props:{
        userId: String
    },
    components: {
        SideBarContent},

    data(){
        return{
            items: [
                { label: 'Market', icon: 'store', to: '/market'},
                { label: 'Notifications', icon:'notifications_active', to: '/notifications'},
            ]
        }
    },
    methods: {
    }
}
</script>

<style scoped>
h3{
    color:black;
    font-size: 20px;
}

span{
    color: grey;
    font-size: 12px;
}

span.space{
    color:white;
}

.material-icons{
    font-size: 30px;
}

img.logo{
    width:80px;
    height: auto;
}

*{
    background-color: white;
}
</style>
