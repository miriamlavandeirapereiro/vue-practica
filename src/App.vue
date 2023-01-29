<template>
  <NavBar
    title="Fake Shop"
    :color="'blue'"
    @buttonClicked="alertaClick($event)"
  />

  <router-view />

  <CartList v-show="isCartOpen" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import { Link } from "./interfaces/link";
import CartList from "./components/CartList.vue";
import { useCart } from "./composables/useCart";

export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar,
    CartList,
  },
  setup() {
    const { isCartOpen } = useCart();

    return {
      alertaClick: (link: Link) => alert(link.label + " Pulsado!"),
      isCartOpen,
    };
  },
});
</script>


<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
