<template>
  <div class="favorites-container">
    <!-- Başlık -->
    <h2>Favorilerim (4 Ürün)</h2>
    <!-- Ürün Kartları -->
    <div class="favorites-grid">
      <!-- Ürün 1 -->
      <div class="product-card">
        <img src="https://cdn.beymen.com/mnresize/377/-/productimages/llyrjuuy.vmu_MP_71a60ccb-fb15-4f5b-b2eb-d768e8db86dd_1_94333332033350743478513816041_345.jpg" alt="Ürün 1" />
        <p class="product-brand">Prada</p>
        <p class="product-name">Re-Nylon ve Kürklü Balıkçı Şapkası</p>
        <span class="product-price">35.200 TL</span>
        <select class="product-size">
          <option>Beden: S</option>
        </select>
        <button class="add-to-cart">Sepete Ekle</button>
      </div>
      <!-- Ürün 2 -->
      <div class="product-card">
        <img src="https://cdn.beymen.com/mnresize/377/-/productimages/sqpnjsuv.t5r_IMG_01_2110093699758.jpg" alt="Ürün 2" />
        <p class="product-brand">Rimowa</p>
        <p class="product-name">Classic Trunk Siyah Bavul</p>
        <span class="product-price">81.950 TL</span>
        <select class="product-size">
          <option>Beden: Standart</option>
        </select>
        <button class="add-to-cart">Sepete Ekle</button>
      </div>
      <!-- Ürün 3 -->
      <div class="product-card">
        <img src="https://cdn.beymen.com/mnresize/377/-/productimages/wihs5rjb.b1m_IMG_01_8683791475381.jpg" alt="Ürün 3" />
        <p class="product-brand">Academia</p>
        <p class="product-name">Siyah Saten Yakalı Smokin Ceket</p>
        <span class="product-price">15.950 TL</span>
        <span class="product-discount">11.165 TL</span>
        <select class="product-size">
          <option>Beden: 40</option>
        </select>
        <button class="add-to-cart">Sepete Ekle</button>
      </div>
      <!-- Ürün 4 -->
      <div class="product-card">
        <img src="https://cdn.beymen.com/mnresize/377/-/productimages/zyhlddva.bag_IMG_01_5056446603836.jpg" alt="Ürün 4" />
        <p class="product-brand">Charlotte Tilbury</p>
        <p class="product-name">Magic Serum Crystal Elixir</p>
        <span class="product-price">7.899 TL</span>
        <span class="product-tag">HEDİYELİ</span>
        <select class="product-size">
          <option>Beden: Standart</option>
        </select>
        <button class="add-to-cart">Sepete Ekle</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favorites",
};
</script>

<style scoped>
/* Ana Konteyner */
.favorites-container {
  padding: 20px;
  background-color: #fff;
  font-family: Arial, sans-serif;
}

/* Başlık */
.favorites-container h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Ürün Grid */
.favorites-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* Ürün Kartı */
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 4px;
}

/* Ürün Markası ve Adı */
.product-brand {
  font-weight: bold;
  margin-bottom: 5px;
}

.product-name {
  font-size: 14px;
  margin-bottom: 10px;
  color: #555;
}

/* Ürün Fiyatı */
.product-price {
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

.product-discount {
  font-size: 14px;
  color: #d00;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-tag {
  font-size: 12px;
  color: #007bff;
  margin-bottom: 10px;
}

/* Beden Seçimi */
.product-size {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

/* Sepete Ekle Butonu */
.add-to-cart {
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.add-to-cart:hover {
  background-color: #555;
}
</style>
