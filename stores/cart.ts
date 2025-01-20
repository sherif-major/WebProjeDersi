import { defineStore } from 'pinia';

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Product[], // Sepet ürünlerini tutan dizi
  }),

  getters: {
    // Sepetteki toplam ürün sayısı
    itemCount: (state) => state.cart.reduce((count, item) => count + item.quantity, 0),
    // Sepet toplam fiyatı
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('TL', '').trim());
        return total + price * item.quantity;
      }, 0);
    },
  },

  actions: {
    // Sepete ürün ekle
    addToCart(product: Product) {
      const existingProduct = this.cart.find(item => item.id === product.id);
      if (existingProduct) {
        // Eğer ürün zaten varsa, miktarını artır
        existingProduct.quantity++;
      } else {
        // Ürün yoksa, sepete ekle
        this.cart.push({ ...product, quantity: 1 });
      }
    },

    // Sepetten ürün çıkar
    removeFromCart(productId: string) {
      const index = this.cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        this.cart.splice(index, 1); // Ürünü sepetten kaldır
      }
    },

    // Ürün miktarını güncelle
    updateQuantity(productId: string, newQuantity: number) {
      const product = this.cart.find(item => item.id === productId);
      if (product && newQuantity > 0) {
        product.quantity = newQuantity;
      }
    },

    // Ürün miktarını artır
    incrementQuantity(productId: string) {
      const product = this.cart.find(item => item.id === productId);
      if (product) {
        product.quantity++;
      }
    },

    // Ürün miktarını azalt
    decrementQuantity(productId: string) {
      const productIndex = this.cart.findIndex(item => item.id === productId);
      if (productIndex !== -1) {
        const product = this.cart[productIndex];
        if (product.quantity > 1) {
          product.quantity--;
        } else {
          this.cart.splice(productIndex, 1); // Miktar 1'den küçükse ürünü çıkar
        }
      }
    },
  },
});
