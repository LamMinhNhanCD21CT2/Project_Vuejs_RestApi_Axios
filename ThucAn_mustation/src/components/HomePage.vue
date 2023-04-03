<template>
    <div class="container">
        <div class="row box-product">
            <Product v-for="product in filterProduct" :key="product.id" :product="product" class="col-4" />
        </div>
    </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
import Product from './Product.vue'
export default {
    name: 'HomePage',

    components: {
        Product
    },
    computed: {
        ...mapState(['products']),
        ...mapGetters(['filterProduct'])
    }

}
</script>

<style>
.box-product {
    margin: 30px 0px;
}
</style>
