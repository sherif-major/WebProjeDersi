<template>
  <div class="cart-container">
    <h1 class="cart-title">Sepetim</h1>
    <div v-if="isCartEmpty" class="empty-cart-message">Sepetiniz boş.</div>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image" alt="Ürün Resmi" class="cart-item-image" />
        <div class="cart-item-details">
          <h3 class="cart-item-name">{{ item.name }}</h3>
          <p class="cart-item-price">{{ item.price }} x {{ item.quantity }}</p>
           <!-- Adet ve Hediye Paketi -->
           <div class="actions">
            <label>
              Adet:
              <select v-model="item.quantity">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </label>

            <label>
              <input
                type="checkbox"
                v-model="item.giftWrap"
              />
              Hediye Paketi İstiyorum
            </label>
          </div>

          <button @click="remove(item.id)" class="remove-btn">Kaldır</button>
        </div>
      </div>
      <div class="cart-summary">
        <div class="cart-total">
          <h2>Ödenecek Tutar: <span class="total-price">{{ cartTotal }} TL</span></h2>
        </div>
        <div class="checkout-buttons">
          <button class="checkout-btn">SATIN AL</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();

// Store'dan reaktif veriler
const cart = cartStore.cart;
const cartTotal = cartStore.cartTotal;
const isCartEmpty = cartStore.isCartEmpty;

// Miktar artırma
function increment(productId) {
  cartStore.incrementQuantity(productId);
}

// Miktar azaltma
function decrement(productId) {
  cartStore.decrementQuantity(productId);
}

// Ürün kaldırma
function remove(productId) {
  cartStore.removeFromCart(productId);
}
</script>

<style scoped>
.cart-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.cart-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.empty-cart-message {
  text-align: center;
  font-size: 1.2rem;
  color: #888;
}

.actions {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}


.cart-item {
  display: flex;
  align-items: center;
  padding: 30px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.cart-item-image {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
}

.cart-item-details {
  flex-grow: 1;
}

.cart-item-name {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

.cart-item-price {
  font-size: 1rem;
  color: #666;
}

.quantity-controls {
  display: flex;
  margin: 10px 0;
}

.quantity-btn {
  background-color: #000000;
  color: #fff;
  border: none;
  padding: 8px 15px;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.3s;
}

.quantity-btn:hover {
  background-color: #4b4b4b;
}

.remove-btn {
  background-color: #ffffff;
  color: #ff0000;
  border: none;
  padding: 8px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #e29e9e;
}

.cart-summary {
  margin-top: 30px;
  background-color: #fff;
  text-align: justify;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.cart-total {
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}

.total-price {
  color: #000000;
}

.checkout-buttons {
  display: flex;
  justify-content: space-between;
}

.checkout-btn{
  background-color: #000000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1.1rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
}

.checkout-btn:hover {
  background-color: #424242;
}
</style>
