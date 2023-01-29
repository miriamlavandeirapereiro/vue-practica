<template>
  <div v-if="!isLoading">
    <h1>Nombre: {{ product.name }}</h1>
    <h2>Categoria: {{ product?.category?.name }}</h2>
    <img :src="product.images[0]" alt="" />
    <p>{{product.description}}</p>

    <button @click="addElementToCart(product)" class="btn btn-success">
      Añadir al Carrito
    </button>
  </div>
  <div v-else>Cargando...</div>
</template>

<script lang="ts">
import { useCart } from "@/composables/useCart";
import useProducts from "@/composables/useProducts";
import { defineComponent } from "vue";


export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    userRole: String,
  },
  setup(props) {
    const { addElementToCart } = useCart();
    const { product, fetchProductById, isLoading } = useProducts();

    fetchProductById(props.id);
    return {
      product,
      addElementToCart,
      isLoading
    };
  },
});
</script>

