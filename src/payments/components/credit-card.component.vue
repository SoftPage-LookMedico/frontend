<template>
  <div class="flex inline-block mr-8 ml-8 justify-content-between pr-8 pl-8 align-items-center" >
    <div class="m-0">

      <h2>Cards</h2>

      <pv-card class="activity">
        <template #content>
          <div class="flex inline-block justify-content-between text-gray-700">
            <span class="material-icons">payments</span>
            <span>Credit Cards</span>
            <div>
              <div class=" text-white font-bold flex align-items-center justify-content-center p-4 border-round">
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
          </div>
          <div>
            <h3>1. Add a credit/debit card information</h3>
            <div>
              <h4>Card details*</h4>
              <input v-model.number="card" placeholder="Card number">
              <h4>Expiry date*</h4>
              <input v-model.number="date" placeholder="Date">
              <h4>CVC*</h4>
              <input v-model.number="cvc" placeholder="CVC">
              <h4>Cardholder name*</h4>
              <input v-model="message" placeholder="Cardholder name">

            </div>

            <h3>2. Add your billing address</h3>
            <div>
              <h4>Country*</h4>
              <input v-model="message" placeholder="Choose Country ">
              <h4>City*</h4>
              <input v-model="message" placeholder="City">
              <h4>State/Province</h4>
              <input v-model="message" placeholder="State/Province">
              <h4>ZIP code*</h4>
              <input v-model="message" placeholder="Zip code">
            </div>

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
pv-card.activity{
  border-color: dimgray;
  border-radius: 20px;
  border-style: solid;
  margin: 0px;
  padding: 0;
}
</style>
