//Routing Module
import {createRouter, createWebHistory} from "vue-router";
import MarketComponent from "../store-inventory-management/pages/market.component.vue";
import MarketBuyerComponent from "../store-inventory-management/pages/market-Buyer.component.vue";
import MarketSupplierComponent from "../store-inventory-management/pages/market-Supplier.component.vue";
import doctorPersonalDataComponent from "../profiles-management/pages/doctor-personal-data.component.vue";
import doctorHomeContentComponent from "../profiles-management/pages/doctor-home-content.component.vue";
import supplierHomeContentComponent from "../profiles-management/pages/supplier-home-content.component.vue";
import supplierPersonalDataComponent from "../profiles-management/pages/supplier-personal-data.component.vue";
import supplierBussinessInformationComponent from "../profiles-management/pages/supplier-business-information.component.vue";
import InventoryComponent from "../store-inventory-management/components/inventory.component.vue";
import paymentMethodsBuyerComponent from "../payments/pages/payment-methods-buyer.component.vue";
import PaypalComponent from "../payments/components/paypal.component.vue";
import StripeComponent from "../payments/components/stripe.component.vue";
import CreditCardComponent from "../payments/components/credit-card.component.vue";
import notificationsComponent from "../profiles-management/components/notifications.component.vue";
import loginComponent from "../identity-and-access-management/pages/login.component.vue";
import loginSupplierComponent from "../identity-and-access-management/pages/login-supplier.component.vue";
import selectUserComponent from "../public/pages/select-user.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [

        { path: "/frontend", redirect: 'select-user'},
        { path: "/frontend/select-user", redirect: 'select-user'},
        { path: "/", redirect: 'select-user'},

        { path: "/login-doctor", name: 'login-doctor', component: loginComponent},
        { path: "/doctor/:id/home", name:'doctor-home', component: doctorHomeContentComponent},
        { path: "/doctor/:id/personal-data", name: 'doctor-personal-data',component: doctorPersonalDataComponent},
        { path: "/doctor/payment-methods", name: 'doctor-payment-methods', component: paymentMethodsBuyerComponent},
        { path: "/notifications", component: notificationsComponent},
        { path: "/paypal", component: PaypalComponent},
        { path: "/stripe", component: StripeComponent},
        { path: "/credit-card", component: CreditCardComponent},

        { path: "/login-supplier", name: 'login-supplier', component: loginSupplierComponent},
        { path: "/supplier/:id/home", name: 'supplier-home', component: supplierHomeContentComponent},
        { path: "/supplier/:id/personal-data", name: 'supplier-personal-data', component: supplierPersonalDataComponent},
        { path: "/supplier/:id/business-information", name: 'supplier-business-information', component: supplierBussinessInformationComponent},

        { path: "/market", name: "Market", component: MarketComponent},
        { path: "/supplier/market", name: "Market-Supplier", component: MarketSupplierComponent},
        { path: "/buyer/market", name: "Market-buyer", component: MarketBuyerComponent},

        { path: "/supplier/inventory/add", name: 'Inventory', component: InventoryComponent },
    ]
})

export default router;
