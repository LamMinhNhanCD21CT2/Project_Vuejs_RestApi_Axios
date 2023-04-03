<template>
    <div class="col mb-4">
        <div class="card">
            <img :src="product.image" class="card-img-top" alt="..." />
            <div class="card-body">
                <router-link :to="`/detail-product/${product.id}`">
                    <h5 class="card-title">{{ product.name }}</h5></router-link
                >
                <p class="card-text">
                    {{ product.price }} $
                    <br />
                    <small> {{ product.description }} </small>
                </p>
                <button
                    class="btn btn-primary btn-block"
                    @click="handleUpdateCart(product)"
                >
                    Add To Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: 'Product',
    props: ['product'],
    methods:{
        ...mapMutations(['handleUpdateCart'])
    }
}
</script>

<style></style>
