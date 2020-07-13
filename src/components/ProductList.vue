<template>
  <div>
    <h2>Products</h2>
    <ul>
      <p v-if="!loadingCompleted">Loading products...</p>
      <li v-for="(product, index) in products" :key="index">
        {{product.name}} - ${{product.price}}: Available number - {{product.inventory}}
        <br />
        <button :disabled="!product.inventory" @click="addProduct(product)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      products: state => state.products.all
    }),
    ...mapState("products", ["loadingCompleted"])
  },
  methods: {
    ...mapActions({
      getProductList: "products/getProductList",
      addProduct: "cart/addProductToCart"
    })
  },
  created() {
    this.getProductList();
  }
};
</script>

<style lang="scss" scoped>
</style>