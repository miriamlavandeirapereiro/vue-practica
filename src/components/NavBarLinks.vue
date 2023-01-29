<template>
  <ul>
    <li>
      <router-link :to="{ name: 'home' }">Productos</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'profile' }">Perfil</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
nav {
  min-height: 50px;
  background-color: coral;
}

ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
}

li {
  padding: 1rem;
  font-weight: bold;
}
a {
  color: white;
  text-decoration: none;
}
a:visited {
  color: white;
}
</style>
