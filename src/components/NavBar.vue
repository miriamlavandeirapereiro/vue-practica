<template>
  <nav :class="{ 'bg-red': color === 'red' }">
    <div class="title">
      <h4>{{ title }}</h4>
    </div>
    <NavBarLinks />

    <button @click="toggleCart" class="btn btn-secondary">Carrito</button>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Link } from "@/interfaces/link";
import { useStore } from "vuex";
import { useCart } from "@/composables/useCart";
import NavBarLinks from "@/components/NavBarLinks.vue";

interface NavbarProps {
  title: string;
  color?: string;
}

export default defineComponent({
  name: "NavBar",
  components: {
    NavBarLinks,
  },
  emits: ["buttonClicked"],
  props: {
    title: {
      type: String,
      required: true,
    },
    color: String,
  },
  setup(props: NavbarProps, ctx) {
    const store = useStore();

    const { toggleCart } = useCart();
    return {
      greeting: computed(() => store.getters["saludo"]),
      onClick: (link: Link) => {
        console.log("onClick", link);
        ctx.emit("buttonClicked", link);
      },
      changeGreeting: () => {
        store.commit("cambiaSaludo", "Qué locura de Vuex");
      },
      toggleCart,
    };
  },
});
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a2255f6f;
  color: white;
}
h4 {
  color: white;
}
.links,
.title {
  padding: 20px;
}
nav a {
  font-weight: bold;
  color: white;
  padding: 10px;
}
.bg-red {
  background-color: red;
}

.important-link {
  font-size: larger;
}
</style>