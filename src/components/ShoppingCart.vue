<template>
  <div>
    <h2>Shopping cart</h2>
    <p v-if="!items.length">Shopping cart is empty, please buy some products</p>
    <ul>
      <li v-for="(item, idx) in items" :key="idx">{{item.name}} - number: {{item.count}}</li>
    </ul>
    total price: ${{totalPrice}}
    <button :disabled="!items.length" @click="checkout">Checkout</button>
    <p v-if="checkoutStatus=='failed'">Failed to checkout, please try again</p>
    <p v-if="checkoutStatus=='success'">Purchase success</p>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters({
      items: "cart/cartProducts",
      totalPrice: "cart/totalPrice"
    }),
    ...mapState("cart", ["checkoutStatus"])
  },
  methods: {
    ...mapActions("cart", ["checkout"])
  }
};
</script>

<style lang="scss" scoped>
</style>