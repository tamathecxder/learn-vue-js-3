app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
    /*html*/
    `
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :src="image" :alt="description" :class="[ inStock ? '' : 'out-of-stock-img' ]">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p>{{ displayOnSale }}</p>

          <h3 v-if="inStock">In Stock</h3>
          <h3 v-else>Out of Stock</h3>

          <p>Shipping: {{ shipping }}</p>
          <product-details :details="details"></product-details>
          <div class="d-flex gap-3">
            <div 
              v-for="(variant, index) in variants" 
              class="color-circle"
              :key="variant.id"
              @mouseover="updateVariant(index)"
              :style="{ backgroundColor: variant.color }">
            </div>            
          </div>
          <p>Socks sizes: <span v-for="size in sizes">{{ size }}, &nbsp;</span></p>

          <div class="w-100 d-flex">
            <button class="button" :class="{ disabledButton: !inStock }" @click="addToCart" :disabled="!inStock">Add to Cart</button>
            <button class="button" @click="decrementCart">Decrement</button>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      product: "Socks",
      brand: "Balenciaga",
      description: "a piece of clothing that is worn on your foot and that covers your ankle and sometimes the lower part of your leg usually plural.",
      selectedVariant: 0,
      inventory: 5,
      onSale: true,
      url: "https://www.britannica.com/dictionary/sock",
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 1212,
          color: "Green",
          image: "./assets/images/socks_green.jpg",
          quantity: 100,
        },
        {
          id: 1213,
          color: "Blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      sizes: ["small", "middle", "large", "extra large"],
    };
  },
  methods: {
    addToCart() {
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
    },
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
    },
    shipping() {
      if (this.premium) {
        return `Free`;
      } 

      return 2.99 + "$";
    }
  },
});
