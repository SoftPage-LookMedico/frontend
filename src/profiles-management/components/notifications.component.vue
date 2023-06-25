<template>
    <h1>Notifications</h1>
    <div class="notifications">
        <br>
        <div class="today">
            <h3>Today</h3>
            <hr>
            <div class="activities">
                <pv-card class="activity">
                    <template #content>
                        <div class="flex inline-block justify-content-around text-gray-700">
                            <span class="material-icons">sell</span>
                            <span>Promotion in shirts</span>
                            <div>
                                <pv-button>
                                    CHECK
                                </pv-button>
                            </div>
                        </div>
                    </template>
                </pv-card>
            </div>
        </div>
        <div class="yesterday">
            <h3>Yesterday</h3>
            <hr>
            <div class="activities">
                <pv-card class="activity">
                    <template #content>
                        <div class="flex inline-block justify-content-around text-gray-700">
                            <span class="material-icons">mail</span>
                            <span>Provider request</span>
                            <div>
                                <pv-button>
                                    CHECK
                                </pv-button>
                            </div>
                        </div>
                    </template>
                </pv-card>
                <pv-card class="activity">
                    <template #content>
                        <div class="flex inline-block justify-content-around text-gray-700">
                            <span class="material-icons">payments</span>
                            <span>Payment accepted</span>
                            <div>
                                <pv-button>
                                    CHECK
                                </pv-button>
                            </div>
                        </div>
                    </template>
                </pv-card>
                <pv-card class="activity">
                    <template #content>
                        <div class="flex inline-block justify-content-around text-gray-700">
                            <span class="material-icons">block</span>
                            <span>End: discount in scrubs</span>
                            <div>
                                <pv-button>
                                    CHECK
                                </pv-button>
                            </div>
                        </div>
                    </template>
                </pv-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "notifications"
}
</script>

<style scoped>
h1, h3{
    color:black;
}
</style>