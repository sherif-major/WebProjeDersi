<template>
  <div class="product-page">
    <!-- Üst Menü -->
    <div class="top-bar">
      <button class="filter-button" @click="toggleFilterMenu">
        Filtreler
      </button>
      <div class="breadcrumb">Kadın Giyim / Tümü</div>
      <button class="sort-button">Akıllı Sıralama</button>
    </div>

    <!-- Filtre Menüsü -->
    <transition name="slide-down">
      <div
        v-if="showFilterMenu"
        class="filter-menu"
      >
        <ul class="filter-list">
          <li
            v-for="(filter, index) in filters"
            :key="index"
            @mouseenter="filter === 'Marka' ? openSubmenu() : closeSubmenu()"
          >
            {{ filter }}
          </li>
        </ul>

        <!-- Marka Alt Menü -->
        <div v-if="showSubmenu" class="submenu">
          <h4>Markalar</h4>
          <div class="checkbox-group">
            <label
              v-for="(brand, index) in brands"
              :key="index"
              class="checkbox-label"
            >
              <input type="checkbox" :value="brand" /> {{ brand }}
            </label>
          </div>
        </div>
      </div>
    </transition>

    <!-- Kategori Menüsü -->
    <div class="category-menu">
      <button
        v-for="(category, index) in categories"
        :key="index"
        class="category-button"
      >
        {{ category }}
      </button>
    </div>

    <!-- Ürün Listesi -->
    <div class="product-grid">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
      >
        <img :src="product.image" :alt="product.name" />
        <p class="product-brand">{{ product.brand }}</p>
        <p class="product-name">{{ product.name }}</p>
        <p class="product-price">{{ product.price }}</p>
        <button class="add-to-cart">Sepete Ekle</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFilterMenu: false, // Filtre menüsü görünürlüğü
      showSubmenu: false, // Alt menü (Marka) görünürlüğü
      filters: ["Ürün Çeşidi", "Beden", "Renk", "Sezon", "Doğa Dostu", "Marka"],
      brands: ["Nike", "Adidas", "Puma"], // Marka isimleri
      categories: [
        "Tümünü Gör",
        "Elbise",
        "Dış Giyim",
        "Pantolon",
        "Gömlek & Bluz",
        "T-Shirt",
        "Ceket",
        "Triko & Kazak",
        "Spor Giyim",
        "Sweatshirt",
      ],
      products: [
        {
          image:
            "https://cdn.beymen.com/mnresize/435/-/productimages/vszpq1cb.ksf_IMG_02_2110093632069.jpg",
          brand: "Les Benjamins",
          name: "Siyah Sweatshirt",
          price: "3.999 TL",
        },
        {
          image:
            "https://cdn.beymen.com/mnresize/435/-/productimages/okgwza32.wav_IMG_01_8683791428998.jpg",
          brand: "Beymen Club",
          name: "Siyah Kruvaze Blazer",
          price: "8.950 TL",
        },
        {
          image:
            "https://cdn.beymen.com/mnresize/435/-/productimages/dcvoxlza.peu_IMG_01_2110097546232.jpg",
          brand: "Moncler",
          name: "Bady Siyah Kapüşonlu Puff Mont",
          price: "55.950 TL",
        },
        {
          image:
            "https://cdn.beymen.com/mnresize/435/-/productimages/z4xhgz0m.xuy_IMG_01_2110093618865.jpg",
          brand: "Polo Ralph Lauren",
          name: "Polo Bear Bisiklet Yaka Kazak",
          price: "18.750 TL",
        },
      ],
    };
  },
  methods: {
    toggleFilterMenu() {
      this.showFilterMenu = !this.showFilterMenu;
    },
    openSubmenu() {
      this.showSubmenu = true;
    },
    closeSubmenu() {
      this.showSubmenu = false;
    },
  },
};
</script>

<style scoped>
/* Genel Sayfa Yapısı */
.product-page {
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  position: relative;
}

/* Üst Menü */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.filter-button,
.sort-button {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.breadcrumb {
  font-size: 14px;
  color: #666;
}

/* Filtre Menüsü */
.filter-menu {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
}

.filter-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.filter-list li {
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
}

.filter-list li:last-child {
  border-bottom: none;
}

/* Marka Alt Menü */
.submenu {
  position: absolute;
  top: 0;
  left: 105%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 200px;
  padding: 15px;
  z-index: 1000;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
}

.checkbox-label {
  margin-bottom: 10px;
  font-size: 14px;
}

.checkbox-label input {
  margin-right: 10px;
}

/* Transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Kategori Menüsü */
.category-menu {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-bottom: 20px;
  padding: 10px 0;
}

.category-button {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px 15px;
  margin-right: 10px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  white-space: nowrap;
}

.category-button:hover {
  background-color: #000;
  color: #fff;
}

/* Ürün Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

/* Ürün Kartı */
.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-card img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
}

.product-brand {
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
}

.product-name {
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
}

.product-price {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.add-to-cart {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}

.add-to-cart:hover {
  background-color: #555;
}
</style>
