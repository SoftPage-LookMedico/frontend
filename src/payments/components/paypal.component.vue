<template>
  <div class="flex inline-block mr-8 ml-8 justify-content-between pr-8 pl-8 align-items-center" >
    <div class="m-0">
      <h2>Payment details</h2>
      <h2>E-wallet</h2>
      <pv-card class="activity">
        <template #content>
          <div class="flex inline-block justify-content-between text-gray-700">
            <span class="material-icons">paypal</span>
            <span>Paypal</span>
            <div class=" text-white font-bold flex align-items-center justify-content-center p-4 border-round">
              <router-link
                  to="/paypal"
                  custom
                  v-slot="{ navigate }"
              >
                <pv-button
                    @click="navigate"
                    role="link"
                    v-bind:class="{'lightblue': !clicked, 'green': clicked}"
                    v-on:click ="clicked = !clicked"
                >
                  ADD
                </pv-button>
              </router-link>
            </div>
          </div>
          <div>
            <h3>1.Add a your paypal email address</h3>
            <div>
              <h4>Email address*</h4>
              <input v-model="message" placeholder="E-mail">                        </div>
            <h3>2.Link automate payment</h3>
            <div>
              <h4>Choose*</h4>
              <div>
                <pv-button>Accept</pv-button>
              </div>
              <hr>
              <div>
                <pv-button>Decline</pv-button>
              </div>
            </div>
            `
          </div>

        </template>


      </pv-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "payment-methods"
}
</script>

<style scoped>

</style>