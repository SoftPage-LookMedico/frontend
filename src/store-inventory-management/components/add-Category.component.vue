<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Add Category</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="categoryName" />
                    </div>
                    <div class="form-group">
                        <label class="pt-3">Description</label>
                        <textarea type="text" class="form-control" v-model="description" />
                    </div>
                    <div class="form-group">
                        <label class="pt-3">Image</label>
                        <input type="text" class="form-control" v-model="photoUrl" />
                    </div>
                    <div class="pt-3">
                        <button type="button" class="btn btn-primary" @click="addCategory">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>


</script>

<style scoped>

</style>