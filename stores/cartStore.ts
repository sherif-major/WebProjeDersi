import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  // State
  state: () => ({
    items: [] as { id: number; name: string; price: number; quantity: number }[],
  }),
  
  // Getters
  getters: {
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    itemCount: (state) => {
      return state.items.length;
    },
  },
  
  // Actions
  actions: {
    addItem(item: { id: number; name: string; price: number; quantity: number }) {
      const existingItem = this.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.items.push(item);
      }
    },
    removeItem(itemId: number) {
      this.items = this.items.filter((item) => item.id !== itemId);
    },
    clearCart() {
      this.items = [];
    },
  },
});
