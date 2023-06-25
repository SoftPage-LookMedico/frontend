<script>

import {SuppliersService} from "../services/suppliers.service.js";

export default {
    name: "supplier-business-information",
    data(){
        return{
            id: JSON.parse(decodeURIComponent(encodeURIComponent(this.$route.params.id))),
            user:{},
            editUser: {},
            suppliersService: null,
            editDialog: false,
            submitted: false,
        }
    },
    created() {
        this.suppliersService = new SuppliersService();
        this.getUser();
    },
    methods:{
        getUser(){
            this.suppliersService.getById(this.id)
                .then(response =>{
                    console.log(response.data)
                    this.user = response.data;
                })
        },

        openDialog(){
            this.editUser = {};
            this.editDialog = true;
            this.submitted = false;
        },

        hideDialog(){
            this.editDialog = false;
            this.submitted = false;
        },

        editSupplier(supplier) {
            console.log(supplier);
            this.editUser = { ...supplier };
            console.log(this.user);
            this.editDialog = true;
        },

        saveSupplier(){
            this.submitted = true;
            if(this.editUser.name.first.trim()){
                console.log(this.editUser)
                this.suppliersService
                    .update(this.editUser.id, this.editUser)
                    .then((response) => {
                        console.log(response.data.id);

                        this.$toast.add({
                            severity: "success",
                            summary: "Successful",
                            detail: "Data Updated",
                            life: 3000,
                        });

                        console.log(response);
                    });

                this.editDialog = false;
                this.user = this.editUser;
                this.editUser = {};
            }
        },

        isEmailValid() {
            // Expresión regular para validar el formato de correo electrónico
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(this.editUser.email);
        }

    }
}
</script>

<template>
    <div class="flex inline-block justify-content-center align-items-center">
        <router-link :to="{name:'supplier-personal-data', params:{id:JSON.stringify(this.id)}}">
            <pv-button style="background: #0099AD; border: 2px solid #0099AD; border-radius: 6px; margin: 5px"
                       icon="pi pi-arrow-left">
            </pv-button>
        </router-link>

        <h1>Business Information</h1>
    </div>
    <div class="business">
        <h2>Information</h2><br>
        <div class="flex inline-block justify-content-center">
            <div>
                <p>
                    <span class="atribute"><strong>Name: </strong></span>
                    <br>
                    <span>{{user.firstName}}</span>
                </p>
                <br>
                <p>
                    <span class="atribute"><strong>Last Name:</strong></span>
                    <br>
                    <span>{{user.lastName}}</span>
                </p>
                <br>
                <p>
                    <span class="atribute"><strong>Phone: </strong></span>
                    <br>
                    <span>{{user.phone}}</span>
                </p>
                <br>
                <p>
                    <span class="atribute"><strong>Email:</strong></span>
                    <br>
                    <span>{{user.email}}</span>
                </p>
            </div>
          <div>
            <img src="../../assets/images/profile-photo.jpg">
          </div>
        </div><!--
        <div class="description">
            <div class="card" style="text-align:left">
                <pv-panel header="Public Description" toggleable>
                    <hr>
                    <p class="m-0">

                    </p>
                </pv-panel>
            </div>
        </div>-->
        <div style="text-align: right">
            <!--EDIT BUSSINES INFORMATION-->
            <pv-button style="background: #0099AD;border: 2px solid #0099AD;border-radius: 6px;margin: 10px"
                       icon="pi pi-pencil"
                       label="EDIT"
                       @click="editSupplier(user)">
            </pv-button>

            <pv-dialog
                    v-model:visible="editDialog"
                    :style="{ width: '450px' }"
                    header="Personal Data"
                    :modal="true"
                    class="p-fluid">

                <!--FIRST NAME--->
                <div class="field mt-3">
                <span class="p-float-label">
                    <pv-input-text
                            type="text"
                            id="first"
                            v-model.trim="editUser.firstName"
                            required="true"
                            autofocus
                            :class="{ 'p-invalid': submitted && !editUser.firstName}">
                    </pv-input-text>
                    <label for="first">First Name</label>
                    <small class="p-error"
                           v-if="submitted && !editUser.firstName">
                    </small>
                </span>
                </div>

                <!--EMAIL-->
                <div class="field mt-3">
                <span class="p-float-label">
                    <pv-input-text
                            type="email"
                            id="email"
                            v-model.trim="editUser.email"
                            required="true"
                            autofocus
                            :class="{ 'p-invalid': submitted && !editUser.email && !isEmailValid}">
                    </pv-input-text>
                    <label for="first">Email</label>
                    <small class="p-error"
                           v-if="submitted && !editUser.email && !isEmailValid">
                    </small>
                </span>
                </div>

                <!--PHONE--->
                <div class="field mt-3">
                <span class="p-float-label">
                    <pv-input-text
                            type="tel"
                            id="phone"
                            v-model.trim="editUser.phone"
                            required="true"
                            autofocus
                            :class="{ 'p-invalid': submitted && !editUser.phone}">
                    </pv-input-text>
                    <label for="first">Phone</label>
                    <small class="p-error"
                           v-if="submitted && !editUser.phone">
                    </small>
                </span>
                </div>

                <template #footer>
                    <pv-button
                            :label="'Cancel'.toUpperCase()"
                            icon="pi pi-times"
                            class="p-button-text"
                            @click="hideDialog"
                    />
                    <pv-button
                            :label="'Save'.toUpperCase()"
                            icon="pi pi-check"
                            class="p-button-text"
                            @click="saveSupplier"
                    />
                </template>

            </pv-dialog>
        </div>
    </div>
</template>

<style scoped>
*{
  text-align: center;
  align-content: center;
  color: black;
}
</style>
