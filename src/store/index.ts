import { createStore } from "vuex";
import cartModule from "./cart";
import productsModule from "./products";


export interface IState {
  authUser: any; 
  greeting: string;
}

export default createStore<IState>({
  state: {
    authUser: null,
    greeting: "Hola a todas!",
  },
  mutations: {
    cambiaSaludo(state, saludo: string) {
      state.greeting = saludo;
    },
  },
  getters: {
    saludo(state) {
      return state.greeting;
    }
  },
  actions: {},
  modules: {
    cart: cartModule,
    products: productsModule
  },
});
