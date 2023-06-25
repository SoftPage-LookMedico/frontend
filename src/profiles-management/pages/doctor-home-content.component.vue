<script>

import {DoctorsService} from "../services/doctors.service.js";
import HeaderContent from "../components/header-content.component.vue";
export default{
    name: "doctor-home-content",
    data(){
        return{
            id: JSON.parse(decodeURIComponent(encodeURIComponent(this.$route.params.id))),
            user: {},
            errors: [],
            doctorsService: null
        }
    },
    created() {
        this.doctorsService = new DoctorsService();
        console.log(this.id)
        this.getUser();
    },
    methods:{
        getUser(){
            this.doctorsService.getById(this.id).then(
                response => {
                    console.log(response.data);
                    this.user = response.data;
                }
            )
        }
    },
}
</script>

<template>

        <div class="flex inline-block mr-8 ml-8 pr-8 pl-8 justify-content-center" >
            <div class="m-0">
                <h1>Welcome!!!</h1>
                <h2>

                </h2>
                <pv-card style="text-align: left">
                    <template #title>
                        <span> {{ user.lastName }}, </span>
                        <span> {{ user.firstName }}  </span>
                    </template>
                    <template #content >
                                <span class="material-icons m-2">mail</span>
                                <span>{{ user.email}}</span>
                                <br>
                                <span class="material-icons m-2">smartphone</span>
                                <span> {{user.phone }}</span>
                                <br>
                                <span class="material-icons m-2">flag</span>
                                <span>{{user.address}}, </span>
                    </template>
                    <template #footer>
                        <router-link :to="{ name:'doctor-personal-data', params:{id:JSON.stringify(this.id)}}">
                            <pv-button style="background: #0099AD; border: 2px solid #0099AD; border-radius: 6px"
                                  >
                              <span class="bg-blue-500">SEE MORE...</span>
                            </pv-button>
                        </router-link>
                    </template>
                </pv-card>
            </div>
            <div>
              <img src="../../assets/images/profile-photo.jpg">
            </div>

        </div>
        <div class="my-activity">
            <h3>MY ACITVITY</h3>
            <hr>
            <div class="activities">
                <pv-card class="activity" style="padding: 0">
                    <template #content>
                        <div class="flex inline-block justify-content-between text-gray-700 p-0">
                            <span class="material-icons">shopping_bag</span>
                            <span>Shopping List</span>
                            <div>
                                <span>0</span>
                                <p>Supplier</p>
                            </div>
                            <div>
                                <span>0</span>
                                <p>Orders</p>
                            </div>
                            <div>
                                <pv-button>
                                    START
                                </pv-button>
                            </div>
                        </div>
                    </template>

                </pv-card>
                <pv-card class="activity">
                    <template #content>
                        <div class="flex inline-block justify-content-between">
                            <span class="material-icons text-red-500">favorite</span>
                            <span>Favorites</span>

                            <div>
                                <span>0</span>
                                <p>Supplier</p>
                            </div>

                            <div>
                                <span>0</span>
                                <p>Orders</p>
                            </div>

                            <div>
                                <pv-button>
                                    ENTER
                                </pv-button>
                            </div>

                        </div>
                    </template>
                </pv-card>
            </div>
        </div>
</template>

<style scoped>
h1{
    font-size: 20px;
  color: black;
}

h3{
  color: black;
}
pv-avatar{
    width: 100px;
}
ul{
    text-align: left;
    list-style-type: none;
    margin: 0;
}

div.activities{

    text-align: center;
}

span{
    margin: 2px;
}

pv-card.activity{
    border-color: dimgray;
    border-radius: 20px;
    border-style: solid;
    margin: 0px;
    padding: 0;
}

pv-card.activity template span{
    font-size: 50px;
    color: dimgray;
}

div.my-activity{
    text-align: left;
    margin-right: 200px;
    margin-left: 200px;
}

pv-button{
    background-color: #25c6db;
}

img{
    margin: 50px;
    padding-top: 80px;
    border-radius: 50%;
}

</style>
