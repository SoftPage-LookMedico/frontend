<template>

  <!--buttons addCaterory + Inventory-->

  <!--/buttons addCaterory + Inventory-->

  <!--products load-->

    <div class="font-bold flex align-items-center justify-content-center p-4 border-round">
        <h2>All Produtcs</h2>
    </div>
    <div class="pv-card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="`https://norvil-web.storage.googleapis.com/cms_multimedia/cms_medias/files/000/002/134/tablet_webp/1739_593.c141.webp?1615459779`" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold">{{ slotProps.data.title }}</div>
                                <div class="text-2xl ">{{ slotProps.data.description }}</div>
                                <pv-rating :modelValue="slotProps.data.rating" readonly :cancel="false">
                                    <div class="card flex justify-content-center">
                                        <Rating v-model="value" :cancel="false"  />
                                    </div>
                                </pv-rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <pv-tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></pv-tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                                <pv-button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></pv-button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                    <div class="p-4 border-1 surface-border surface-card border-round">
                        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                            <div class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </div>
                            <pv-tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></pv-tag>
                        </div>
                        <div class="flex flex-column align-items-center gap-3 py-5">
                            <img class="w-9 shadow-2 border-round" :src="`https://norvil-web.storage.googleapis.com/cms_multimedia/cms_medias/files/000/002/134/tablet_webp/1739_593.c141.webp?1615459779`" :alt="slotProps.data.name" @click="navigate" v-on:click ="clicked = !clicked" />
                            <div class="text-2xl font-bold">{{ slotProps.data.title }}</div>
                            <div class="text-2xl ">{{ slotProps.data.description }}</div>
                            <div class="card flex justify-content-center">
                                <Rating v-model="value" :cancel="false"  />
                            </div>
                        </div>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                            <pv-button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"
                            v-if="!products.cart" @click="products.cart=true, addtocart(JSON.parse(JSON.stringify(products)))" block href="#"
                            variant="success"></pv-button>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
  <!--/products load-->



</template>

<script>
import { ProductsApiService } from '../services/products-api.service.js';
import {Stripe} from "stripe";


export default {
    data() {
        return {
            cart: [],
            selectedItem: null,
            items: Array.from({ length: 30 }, (_, i) => ({ label: `Item #${i+1}`, value: i })),
            products: {},
            layout: 'grid',
            productsService: null,
            value: null
        };
    },
    created() {
        console.log("created");
        this.productsService = new ProductsApiService();
        this.productsService.getAll()
            .then((response) => {
                this.products = response.data;
                console.log(response);
            });
        console.log(this.products);
    },

    methods: {
        addtocart(product){
          let cart=[]
          if (JSON.parse(localstorage.getItem('products'))) {
              cart = JSON.parse(localstorage.getItem('products'))
          }  else {
              cart.push(product);
              localStorage.setItem('products',JSON.stringify(cart))
          }
        },

        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        },
      openStripeCheckout() {
        const stripe = Stripe('pk_test_51NMxLnC29rKxCqsY8s6Nyoi5AagIK7aV9QusoCCUK4crdqt8R25iX5zPlXrRHUr2rCt4f1ZM5awRLt7bbNlDq5Wa00774GFYAT');

        stripe.redirectToCheckout({
          sessionId: 'ID_DE_LA_SESIÓN_DE_PAGO_GENERADA_EN_TU_BACKEND',
        })
          .then(result => {
            alert('Pago exitoso')
          })
          .catch(error => {
            alert('Ocurrio un error durante el pago')
          });
      }
    }
};
</script>

<style scoped>

.lightblue {
    background-color: #0099AD;
    position: relative;
    border-radius: 20px;
    width: 150px;
    text-align: center;
    display:table-cell;
    vertical-align:middle;
}

.green {
    background-color: #2D8425;
}

h2{
    text-align: left;
    color: black;
}
.container {
    padding: 0px !important;
}
.v-btn.withoutupercase {
    text-decoration: none;
}
.v-chip.v-size--default {
    border-radius: 50px !important;
    font-size: 14px !important;
    height: 40px !important;
    width: 40px !important;
}
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position: absolute;
    width: 100%;
}
.card1 {
    z-index: 10;
}
.card2 {
    z-index: 1;
}

</style>

