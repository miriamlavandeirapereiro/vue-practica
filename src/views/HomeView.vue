<template>
  <div class="home">
    <div v-if="isLoading">Cargando...</div>
    <div class="user-list" v-else>
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @addCart="addElementToCart"
        @goDetail="goDetail"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductItem from "@/components/ProductItem.vue";
import { useCart } from "@/composables/useCart";
import { useRouter } from "vue-router";
import { Product } from "@/models/product";
import useProducts from "@/composables/useProducts";

export default defineComponent({
  name: "HomeView",
  components: {
    ProductItem,
  },
  setup() {
    const { products, isLoading, fetchProducts } = useProducts();
    const { addElementToCart } = useCart();
    const router = useRouter();

    fetchProducts();

    return {
      products,
      isLoading,
      addElementToCart,
      goDetail: (product: Product) =>
        router.push({ name: "detail", params: { id: product.id } }),
    };
  },
});
</script>

<style scoped>
.home {
  padding: 2% 10%;
}

.user-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
  justify-content: space-between;
}
</style>
