const product = "Socks";
const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeCart(id) {
      const index = this.cart.indexOf(id);
      console.log(index);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    }
  },
});
