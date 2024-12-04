<template>
  <div class="layout-container">
    <!-- Sol Taraf: Nav Bar -->
    <nav class="nav-bar" :class="{ closed: isNavClosed }">
      <div class="nav-header">
        <button class="close-button" @click="toggleNav">
          {{ isNavClosed ? "☰" : "✖" }}
        </button>
      </div>
      <div v-if="!isNavClosed" class="nav-items">
        <button
          v-for="(item, index) in components"
          :key="index"
          @click="setActiveComponent(item.component)"
        >
          {{ item.label }}
        </button>
      </div>
    </nav>

    <!-- Sağ Taraf: Dinamik Bileşen Alanı -->
    <main class="main-content">
      <component
        v-if="activeComponent"
        :is="activeComponent"
      />
      <div v-else class="placeholder">
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Component1 from "~/Components/Component1.vue";
import Component2 from "~/Components/Component2.vue";
import Component3 from "~/Components/Component3.vue";
import Component4 from "~/Components/Component4.vue";
import Component5 from "~/Components/Component5.vue";
import Component6 from "~/Components/Component6.vue";
import Component7 from "~/Components/Component7.vue";
import Component8 from "~/Components/Component8.vue";
import Component9 from "~/Components/Component9.vue";
import Component10 from "~/Components/Component10.vue";

// Bileşen Listesi
const components = [
  { label: "Giriş", component: Component1 },
  { label: "Hesabım", component: Component2 },
  { label: "Favorilerim", component: Component3 },
  { label: "Sepetim", component: Component4 },
  { label: "Sipariş Takibi", component: Component5 },
  { label: "Slider", component: Component6 },
  { label: "Kampanyalar", component: Component7 },
  { label: "Kadın", component: Component8 },
  { label: "Mağazalar", component: Component9 },
  { label: "Bilgi Kısmı", component: Component10 },
];

// Aktif bileşen
const activeComponent = ref(null);

// Bileşeni aktif hale getiren fonksiyon
const setActiveComponent = (component) => {
  activeComponent.value = component;
};

// Navbar kapalı/açık durumu
const isNavClosed = ref(false);

// Navbar'ı açıp kapatan fonksiyon
const toggleNav = () => {
  isNavClosed.value = !isNavClosed.value;
};
</script>

<style scoped>
.layout-container {
  display: flex;
  height: 100vh;
}

/* Sol Menü */
.nav-bar {
  width: 20%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  overflow: hidden; /* Kapandığında taşan içerik gizlenir */
  position: relative; /* Close button için referans noktası */
}

.nav-bar.closed {
  width: 60px; /* Kapalı durumdaki genişlik */
}

.nav-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.close-button {
  background-color: transparent;
  color: #007bff;
  font-size: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.close-button:hover {
  transform: scale(1.1);
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
}

.nav-bar button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-bar button:hover {
  background-color: #0056b3;
}

/* Sağ Alan */
.main-content {
  flex-grow: 1;
  padding: 20px;
  display: flex;
  justify-content: stretch; /* Esnek genişleme */
  align-items: stretch; /* Esnek dikey genişleme */
  background-color: #ffffff;
}

.placeholder {
  text-align: center;
  color: #555;
}

.placeholder h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.placeholder p {
  font-size: 18px;
}
</style>
