<template>
    <div>
        <div class="card">
            <!-- Toolbar Section -->
            <pv-toolbar class="mb-4">
                <template #start>
                    <pv-button label="New" icon="pi pi-plus"
                               class="p-button-success mr-2"
                               @click="openNew"></pv-button>
                    <pv-button label="Delete" icon="pi pi-trash"
                               class="p-button-danger"
                               @click="confirmDeleteSelected"
                               :disabled="!selectedProducts || !selectedProducts.length"></pv-button>
                </template>
                <template #end>
                    <pv-button label="Export" icon="pi pi-download"
                               class="p-button-help"
                               @click="exportToCsv($event)"></pv-button>
                </template>
            </pv-toolbar>

            <!-- Data Table Section -->
            <pv-data-table ref="dt" :value="products"
                           v-model:selection="selectedProducts"
                           dataKey="id"
                           :paginator="true"
                           :rows="10"
                           :filters="filters"
                           paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                           :rowsPerPageOptions="[5, 10, 25]"
                           currentPageReportTemplate="Showing {first} to {last} of {totalRecords} tutorials"
                           responsiveLayout="scroll">
                <template #header>
                    <div class="table-header flex flex-column md:flex-row md:justify-content-between">
                        <h5 class="mb-2 md:m-0 p-as-md-center text-xl">Manage Inventory</h5>
                        <span class="p-input-icon-left">
                          <i class="pi pi-search"></i>
                          <pv-input-text v-model="filters['global'].value"
                                         placeholder="Search..."></pv-input-text>
                      </span>
                    </div>
                </template>

                <pv-column selectionMode="multiple" style="width: 3rem" :exportable="false"></pv-column>
                <pv-column field="id" header="Id" :sortable="true" style="min-width: 8rem"></pv-column>
                <pv-column field="code" header="Code" :sortable="true" style="min-width: 8rem"></pv-column>
                <pv-column field="title" header="Title" :sortable="true" style="min-width: 12rem"></pv-column>
                <pv-column field="gender" header="Gender" :sortable="true" style="min-width: 8rem" ></pv-column>
                <pv-column field="description" header="Description" :sortable="true"
                           style="min-width: 16rem"></pv-column>
                <pv-column field="material" header="Material" :sortable="true" style="min-width: 12rem"></pv-column>
                <pv-column field="price" header="Price" :sortable="true" style="min-width: 8rem"></pv-column>
                <pv-column field="color" header="Color" :sortable="true" style="min-width: 12rem"></pv-column>
                <pv-column field="quantity" header="Quantity" :sortable="true" style="min-width: 8rem"></pv-column>
                <pv-column field="stock" header="Stock" :sortable="true" style="min-width: 8rem"></pv-column>
                <pv-column field="inventoryStatus" header="InventoryStatus" :sortable="true" style="min-width: 8rem"></pv-column>
                <pv-column field="state" header="State" :sortable="true" style="min-width: 12rem">
                    <template #body="slotProps">
                        <pv-tag v-if="slotProps.data.status === 'Published'"
                                severity="success">{{ slotProps.data.status }}
                        </pv-tag>
                        <pv-tag v-else severity="info">{{ slotProps.data.status }}</pv-tag>
                    </template>
                </pv-column>
                <pv-column :exportable="false" style="min-width: 8rem">
                    <template #body="slotProps">
                        <pv-button icon="pi pi-pencil" class="p-button-text p-button-rounded"
                                   @click="editProduct(slotProps.data)"></pv-button>
                        <pv-button icon="pi pi-trash" class="p-button-text p-button-rounded"
                                   @click="confirmDeleteProduct(slotProps.data)"></pv-button>
                    </template>
                </pv-column>
            </pv-data-table>

            <!-- Add/Edit Products Dialog -->
            <pv-dialog v-model:visible="productDialog"
                       :style="{width: '450px'}"
                       header="Product Information"
                       :modal="true"
                       class="p-fluid">

                <div class="field">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="product.code"
                                     required="true"
                                     rows="2" cols="20"/>
                      <label for="code">Code</label>
                  </span>
                </div>
                <div class="field mt-3">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="product.title"
                                     required="true"
                                     autofocus
                                     :class="{'p-invalid': submitted && !product.title}"/>
                      <label for="title">Title</label>
                      <small class="p-error" v-if="submitted && !product.title">Title is required.</small></span>
                </div>

                <div class="field">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="product.photoUrl"
                                     required="true"
                                     rows="2" cols="20"/>
                      <label for="photoUrl">Photo</label>
                  </span>
                </div>

                <div class="field">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="product.gender"
                                     required="true"
                                     rows="2" cols="20"/>
                      <label for="gender">Gender</label>
                  </span>
                </div>

                <div class="field">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="product.description"
                                     required="true"
                                     rows="2" cols="20"/>
                      <label for="description">Description</label>
                  </span>
                </div>

                <div class="field">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="product.material"
                                     required="true"
                                     rows="2" cols="20"/>
                      <label for="material">Material</label>
                  </span>
                </div>

                <div class="field">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="product.price"
                                     required="true"
                                     rows="2" cols="20"/>
                      <label for="price">Price</label>
                  </span>
                </div>

                <div class="field">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="product.color"
                                     required="true"
                                     rows="2" cols="20"/>
                      <label for="color">Color</label>
                  </span>
                </div>

                <div class="field">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="product.quantity"
                                     required="true"
                                     rows="2" cols="20"/>
                      <label for="quantity">Quantity</label>
                  </span>
                </div>

                <div class="field">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="product.stock"
                                     required="true"
                                     rows="2" cols="20"/>
                      <label for="stock">Stock</label>
                  </span>
                </div>

                <div class="field">
                  <span class="p-float-label">
                      <pv-input-text type="text"
                                     v-model.trim="product.inventoryStatus"
                                     required="true"
                                     rows="2" cols="20"/>
                      <label for="inventoryStatus">Status</label>
                  </span>
                </div>



                <div class="field">
                    <pv-dropdown id="published"
                                 v-model="product.status"
                                 :options="statuses"
                                 optionLabel="label"
                                 placeholder="Select an Status">
                        <template #value="slotProps">
                            <div v-if="slotProps.value && !slotProps.value.value">
                                <span :class="'product-badge status-' + slotProps.value.toLowerCase()">
                                    {{ slotProps.value.label }}
                                </span>
                            </div>
                            <div v-else-if="slotProps.value && !slotProps.value.value">
                                <span :class="'product-badge status-' + slotProps.value.toLowerCase()">
                                    {{ slotProps.value }}
                                </span>
                            </div>
                            <span v-else>{{ slotProps.placeholder }}</span>
                        </template>
                    </pv-dropdown>
                </div>
                <template #footer>
                    <pv-button :label="'Cancel'.toUpperCase()" icon="pi pi-times"
                               class="p-button-text"
                               @click="hideDialog"/>
                    <pv-button :label="'Save'.toUpperCase()" icon="pi pi-check"
                               class="p-button-text"
                               @click="saveTutorial"/>
                </template>
            </pv-dialog>
            <!-- Delete Tutorial Confirmation Dialog -->
            <pv-dialog v-model:visible="deleteProductDialog"
                       header="Confirm"
                       :modal="true"
                       :style="{width: '450px'}">
                <div class="confirmation-content">
                    <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem"/>
                    <span v-if="product">Are you sure you want to delete <b>{{ product.title }}</b>?</span>
                </div>

                <template #footer>
                    <pv-button :label="'No'.toUpperCase()" icon="pi pi-times"
                               class="p-button-text"
                               @click="deleteProductDialog = false"/>
                    <pv-button :label="'Yes'.toUpperCase()" icon="pi pi-check"
                               class="p-button-text"
                               @click="deleteProduct"/>
                </template>
            </pv-dialog>

            <!-- Delete Selected Products Confirmation Dialog -->
            <pv-dialog v-model:visible="deleteProductsDialog"
                       header="Confirm"
                       :modal="true"
                       :style="{width: '450px'}">
                <div class="confirmation-content">
                    <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem"/>
                    <span v-if="selectedProducts">Are you sure you want to delete the selected products?</span>
                </div>

                <template #footer>
                    <pv-button :label="'No'.toUpperCase()" icon="pi pi-times"
                               class="p-button-text"
                               @click="deleteProductsDialog = false"/>
                    <pv-button :label="'Yes'.toUpperCase()" icon="pi pi-check"
                               class="p-button-text"
                               @click="deleteSelectedProducts"/>
                </template>
            </pv-dialog>


        </div>
    </div>
</template>

<script>
import {ProductsApiService} from "../services/products-api.service.js";
import {FilterMatchMode} from "primevue/api";

export default {
    name: "product-list",
    title: "Products",
    data() {
        return {
            products: [],
            productDialog: false,
            deleteProductDialog: false,
            deleteProductsDialog: false,
            product: {},
            selectedProducts: null,
            filters: {},
            submitted: false,
            statuses: [
                {label: "Published", value: "published"},
                {label: "Unpublished", value: "unpublished"},
            ],
            productsService: null,
        };

    },
    created() {
        console.log("created");
        this.productsService = new ProductsApiService();
        this.productsService.getAll()
            .then((response) => {
                this.products = response.data;
                this.products.forEach((product) =>
                    this.getDisplayableProduct(product));
                console.log(response);
            });
        console.log(this.products);
        this.initFilters();
    },

    methods: {
        getDisplayableProduct(product) {
            product.status = product.published
                ? this.statuses[0].label
                : this.statuses[1].label;
            return product;
        },
        getStorableProduct(displayableProduct) {
            return {
                id: displayableProduct.id,
                code: displayableProduct.code,
                title: displayableProduct.title,
                gender: displayableProduct.gender,
                photoUrl: displayableProduct.photoUrl,
                description: displayableProduct.description,
                material: displayableProduct.material,
                price: displayableProduct.price,
                color: displayableProduct.color,
                quantity: displayableProduct.quantity,
                stock: displayableProduct.stock,
                inventoryStatus: displayableProduct.inventoryStatus,
                published: displayableProduct.status.label === "Published",
            }
        },
        openNew() {
            this.product = {};
            this.submitted = false;
            this.productDialog = true;
        },
        hideDialog() {
            this.productDialog = false;
            this.submitted = false;
        },
        findIndexById(id) {
            console.log(`current id is ${id}`);
            return this.products
                .findIndex((product) => product.id === id);
        },
        saveTutorial() {
            this.submitted = true;
            if (this.product.title.trim()) {
                if (this.product.id) {
                    console.log(this.product);
                    this.product = this.getStorableProduct(this.product);
                    this.productsService
                        .update(this.product.id, this.product)
                        .then((response) => {
                            console.log(response.data.id);
                            this.products[this.findIndexById(response.data.id)] =
                                this.getDisplayableProduct(response.data);
                            this.$toast.add({
                                severity: "success",
                                summary: "Success",
                                detail: "Product Updated",
                                life: 3000,
                            });
                            console.log(response);
                        });
                } else {
                    this.product.id = 0;
                    console.log(this.product);
                    this.product = this.getStorableProduct(this.product);
                    this.productsService.create(this.product)
                        .then((response) => {
                            console.log(response.data.id);
                            this.product = this.getDisplayableProduct(response.data);
                            this.products.push(this.getDisplayableProduct(this.product));
                            this.$toast.add({
                                severity: "success",
                                summary: "Success",
                                detail: "Product Created",
                                life: 3000,
                            });
                            console.log(response);
                        });
                }
                this.productDialog = false;
                this.product = {};
            }

        },
        editProduct(product) {
            console.log(product);
            this.product = {...product};
            console.log(this.product);
            this.productDialog = true;
        },
        confirmDeleteProduct(product) {
            this.product = product;
            this.deleteProductDialog = true;
        },

        deleteProduct() {
            this.productService.delete(this.product.id)
                .then((response) => {
                    this.products = this.product.filter(
                        (t) => t.id !== this.product.id
                    );
                    this.deleteProductDialog = false;
                    this.product = {};
                    this.$toast.add({
                        severity: "success",
                        summary: "Success",
                        detail: "Product Deleted",
                        life: 3000,
                    });
                    console.log(response);
                });
        },

        exportToCsv() {
            this.$refs.dt.exportToCsv();
        },

        confirmDeleteSelected() {
            this.deleteProductDialog = true;
        },

        deleteSelectedProducts() {
            this.selectedProducts.forEach((product) => {
                this.productsService.delete(product.id).then((response) => {
                    this.products = this.product.filter((t) => t.id !== this.product.id);
                    console.log(response);
                });
            });
            this.deleteProductDialog = false;
        },

        initFilters() {
            this.filters = {global: {value: null, matchMode: FilterMatchMode.CONTAINS}};
        }

    }
}
</script>

<style scoped>

.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 960px) {
    :deep(.p-toolbar) {
        flex-wrap: wrap;

    }

}
</style>
