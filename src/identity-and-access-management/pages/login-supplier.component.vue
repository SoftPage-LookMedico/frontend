<template>

  <header-supplier-content v-if="loggedIn" :userId="username"></header-supplier-content>

  <div v-else class="login-container">
    <div v-if="(!loggedIn)" class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="loginIn">
        <div class="p-field">
          <label for="username">Username</label>
          <input type="text" v-model="username" class="input-field"/>
        </div>
        <div class="p-field">
          <label for="password">Password</label>
          <input type="password" v-model="password" class="input-field"/>
        </div>
        <button>Login</button>
      </form>
    </div>
  </div>


</template>

<script>

import dbData from '/src/server/db.json'
import HeaderContent from "../../profiles-management/components/header-content.component.vue";
import {UsersService} from "../services/users.service.js";
import HeaderSupplierContent from "../../profiles-management/components/header-supplier-content.component.vue";
export default {
  name: 'login-supplier',
  components: {HeaderSupplierContent, HeaderContent},
  data() {
    return {
      username: '',
      password: '',
      loggedIn: false,
      user: {},
      usersService: null,
      users: []
    };
  },
  created() {
    this.usersService = new UsersService();
    this.getUsers()
    console.log(this.loggedIn)

  },
  methods: {
    getUsers(){
      this.usersService.getAll().then(
        response => {
          console.log(response.data);
          this.users = response.data;
        }
      )
    },
    loginIn() {
      const foundUser = this.users.find((user) => {
        return (
          user.id === this.username &&
          user.password === this.password
        );
      });

      if (foundUser) {
        // Usuario encontrado, establecer la propiedad loggedIn a true y asignar los datos del usuario
        this.user = foundUser;
        this.loggedIn = true;
        console.log('login');
        console.log(this.loggedIn);
      } else {
        // Usuario no encontrado, mostrar mensaje de error
        alert('Usuario o contraseña incorrectos');
      }
    },
  },
  mounted() {
    console.log(this.loggedIn)
    console.log(this.user);
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 76vh;
}

.p-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  color: black;
  margin-bottom: 5px;
}

.login-box {
  max-width: 400px;
  width: 100%;
  padding: 60px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
}

.login-box h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #ff0000;
}

.input-field {
  padding: 9px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-box h3 {
  text-align: center;
  margin-bottom: 20px;
  color: black;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: greenyellow;
}

.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.welcome-message {
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
}

</style>
