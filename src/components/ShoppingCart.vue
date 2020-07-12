<template>
  <div>
    <h2>Shopping cart</h2>
    <ul>
      <li v-for="(item, idx) in items" :key="idx">{{item.name}} - number: {{item.count}}</li>
    </ul>
    total price: ${{totalPrice}} choosed items:
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      items: "cart/cartProducts",
      totalPrice: "cart/totalPrice"
    })
  },
  methods: {
    ...mapActions({
      addProduct: "cart/addProductToCart"
    })
  }
};
</script>

<style lang="scss" scoped>
</style>