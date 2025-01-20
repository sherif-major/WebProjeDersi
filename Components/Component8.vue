<template>
  <div class="product-page">
    <!-- Filtrele, Kadın (49464 Ürün), ve Sırala -->
    <div class="header-buttons">
      <button class="filter-button">Filtrele</button>
      <div class="breadcrumb">
        <span class="product-count">Kadın (49464 Ürün)</span>
        <span>Ana Sayfa / Kadın</span>
        
      </div>
      <button class="sort-button">Sırala</button>
    </div>

    <!-- Ürün Listesi -->
    <div class="product-container">
      <div v-for="product in products" :key="product.id" class="product">
        <img :src="product.image" alt="Ürün Resmi" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p class="price">{{ product.price }}</p>
        <button @click="addToCart(product)" class="add-to-cart-button">Sepete Ekle</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "~/stores/cart";

// Örnek ürün listesi
const products = ref([
  { id: "1", name: "Polo Ralph Lauren Polo Bear Lacivert Logo Jakarlı Kazak", image: "https://cdn.beymen.com/mnresize/335/-/productimages/tzfyxpzw.2ti_IMG_01_2110095268181.jpg", price: "22450 TL", quantity: 1 },
  { id: "2", name: "Polo Ralph Lauren Antrasit Sweatshirt", image: "https://cdn.beymen.com/mnresize/335/-/productimages/lmgvgsvh.zkn_IMG_01_2110097701228.jpg", price: "10450 TL", quantity: 1 },
  { id: "3", name: "Polo Ralph Lauren Polo Bear Lacivert Beyaz T-shirt", image: "https://cdn.beymen.com/mnresize/335/-/productimages/ajfh3n2w.rgh_IMG_01_2110097702218.jpg", price: "5950 TL", quantity: 1 },
  { id: "4", name: "George Hogg Siyah Deri Gova", image: "https://cdn.beymen.com/mnresize/335/-/productimages/1r4nbeym.jer_IMG_01_8683798436699.jpg", price: "4899 TL", quantity: 1 },
]);

const cartStore = useCartStore();

// Sepete ürün ekleme
function addToCart(product) {
  cartStore.addToCart(product);
  alert(`${product.name} sepete eklendi!`);
}
</script>

<style>
/* Sayfa düzeni */
.product-page {
  position: relative;
  padding: 20px;
}

/* Kategori yolu ve ürün sayısı */
.breadcrumb {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  line-height: 1.4; /* Daha yakın aralık */
}

.breadcrumb .product-count {
  font-size: 16px;
  font-weight: bold;
  color: #000;
  display: block; /* Yeni satıra geçmesi için */
  margin-top: 4px; /* Üst metne yakınlaştırma */
  text-align: center;
}

/* Filtrele ve Sırala düğmeleri */
.header-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.filter-button,
.sort-button {
  padding: 12px 20px;
  font-size: 14px;
  background-color: #000000;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.filter-button:hover,
.sort-button:hover {
  background-color: #404040;
  transform: scale(1.05);
}

.filter-button:active,
.sort-button:active {
  background-color: #292a2a;
}

/* Ürün listeleme */
.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.product {
  width: calc(25% - 20px); /* Her ürün kutusu ekranın dörtte birini kaplar */
  box-sizing: border-box;
  margin-bottom: 20px;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  margin: 10px 0;
}

.add-to-cart-button {
  padding: 12px 24px;
  font-size: 14px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.add-to-cart-button:hover {
  background-color: #404040;
  transform: scale(1.05);
}

.add-to-cart-button:active {
  background-color: #292a2a;
}
</style>
