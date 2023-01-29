<template>
  <div class="product-item">
    <div class="product-avatar">
      <img :src="product.images[0]" :alt="product.name" />
    </div>
    <div class="product-info">
      <div class="product-name">{{ product.title }} {{product?.category?.name}}</div>
      <div class="product-email">{{ product.description }}</div>
      <div class="buttons">
        <button class="btn btn-sm btn-primary" style="background-color: #7b1d49d6" @click="$emit('addCart', product)">
          Añadir al carrito
        </button>
        <button class="btn btn-sm btn-success" @click="$emit('goDetail', product)">
          Ver detalle
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from "@/models/product";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>

<style scoped>
.product-item {
  width: 300px;
  display: flex;
  border: 1px solid black;
}

.product-avatar {
  width: 50%;
}
.product-avatar > img {
  width: 100%;
  height: auto;
}
</style>
