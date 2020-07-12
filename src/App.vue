<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr />
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ProductList from "./components/ProductList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  name: "App",
  components: {
    ProductList,
    ShoppingCart
  }
};
</script>


