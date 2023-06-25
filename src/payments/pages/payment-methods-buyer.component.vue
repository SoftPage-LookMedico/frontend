
<template>
  <div class="my-activity">
    <h1>Payment Methods</h1>
    <h3>Cards</h3>
    <hr>
    <div class="activities">
      <pv-card class="activity">
        <template #content>
          <div class="flex inline-block justify-content-between text-gray-700">
            <span class="material-icons">payments</span>
            <span>Credit Card / Debit Card</span>

            <div>
              <router-link
                  to="/credit-card"
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
        </template>
      </pv-card>

    </div>
  </div>

  <div class="my-activity">
    <h3>E-wallet</h3>
    <hr>
    <div class="activities">
      <pv-card class="activity">
        <template #content>
          <div class="flex inline-block justify-content-between text-gray-700">
            <span class="material-icons">paypal</span>
            <span>Paypal</span>

            <div>
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
        </template>
      </pv-card>

      <pv-card class="activity">
        <template #content>
          <div class="flex inline-block justify-content-between text-gray-700">
            <i class="fa-brands fa-stripe-s"></i>
            <span>Stripe</span>

            <router-link
                to="/stripe"
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
        </template>
      </pv-card>

    </div>
  </div>
</template>

<script>
export default {
  name: "payment-methods",
  data(){
    return {
      selectedItem: null
    }
  }

}
</script>

<style scoped>
h1,h3{
    color: black;
}

</style>