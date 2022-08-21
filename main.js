const product = "Socks";
const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      brand: "Balenciaga",
      description: "a piece of clothing that is worn on your foot and that covers your ankle and sometimes the lower part of your leg usually plural.",
      selectedVariant: 0,
      inventory: 5,
      onSale: true,
      url: "https://www.britannica.com/dictionary/sock",
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { 
          id: 1212, 
          color: "Green",
          image: "./assets/images/socks_green.jpg",
          quantity: 100
        },
        { 
          id: 1213, 
          color: "Blue" ,
          image: "./assets/images/socks_blue.jpg",
          quantity: 0
        }
      ],
      sizes: ["small", "middle", "large", "extra large"],
      cart: 0,
    };
  },
  methods: {
    addToCart(){
      this.cart += 1;
    },
    decrementCart() {
      if (this.cart <= 0) {
        return;
      }
      this.cart -= 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    displayOnSale() {
      const brand = this.brand;
      const product = this.product;

      if (this.onSale) {
        return `${brand} ${product} is on sale`;
      } else {
        return `Sorry, that product is already sold out...`;
      }
    }
  }
});
