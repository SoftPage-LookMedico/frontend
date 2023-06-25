<template>
<!--
    <div class="card flex flex-column align-items-center gap-3">
        <Toast />
        <div v-if="selectedProduct" class="p-5 surface-card shadow-2 border-round">
            <div class="relative">
                <img :src="`https://primefaces.org/cdn/primevue/images/product/${selectedProduct.image}`" :alt="selectedProduct.name" />
            </div>
            <div class="flex align-items-center justify-content-between mt-3 mb-2">
                <span class="text-900 font-medium text-xl">{{ selectedProduct.name }}</span>
                <span class="text-900 text-xl ml-3">{{ '$' + selectedProduct.price }}</span>
            </div>
            <span class="text-600">{{ selectedProduct.category }}</span>
        </div>
    </div>

-->

    <div class="font-bold flex align-items-center justify-content-center p-4 border-round">
        <h2>Product Selected</h2>
    </div>


</template>

<script>
/*
import {defineComponent} from 'vue'
import { ProductsApiService } from '../services/products-api.service.js';

export default defineComponent({
    data() {
        return {
            selectedProduct: null,
            products: {},
            layout: 'grid',
            productsService: null,
            value: null
        };
    },
    created() {
        console.log("created");
        this.productsService = new ProductsApiService();
        this.productsService.getCategoryAll()
            .then((response) => {
                this.products = response.data;
                console.log(response);
            });
        console.log(this.products);
    },
    methods: {
        onProductSelect(event) {
            this.$refs.op.hide();
            this.$toast.add({ severity: 'info', summary: 'Product Selected', detail: event.data.title, life: 3000 });
        }
    }
})
 */
</script>

<style scoped>

</style>