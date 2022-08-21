const product = "Socks";
const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "a piece of clothing that is worn on your foot and that covers your ankle and sometimes the lower part of your leg usually plural.",
      image: "./assets/images/socks_green.jpg",
      inventory: 5,
      onSale: true,
      url: "https://www.britannica.com/dictionary/sock",
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 1212, color: "Green" },
        { id: 1213, color: "Blue" }
      ],
    };
  },
});
