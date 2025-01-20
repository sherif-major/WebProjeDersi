<template>
  <div>
    <!-- Navbar -->
    <header class="navbar">
      <!-- Üst Menü -->
      <div class="navbar-header">
        <ul class="header-links">
          <li class="spacer"></li> <!-- Boşluk bırakmak için kullanıldı -->
          <li><a href="#">Repair</a></li>
          <li><button @click="navigateToComponent5" class="header-button">Sipariş Takibi</button></li>
          <li><button @click="navigateToComponent7" class="header-button">Kampanyalar</button></li>
          <li><a href="#">The One</a></li>
          <li><a href="#">Servisler</a></li>
          <li class="language">
            <img src="public/world.png" alt="TR" />
            <span>TR</span>
          </li>
        </ul>
      </div>

      <!-- Orta Menü -->
      <div class="navbar-top">
        <!-- Logo -->
        <div class="logo">
          <button class="logo-button" @click="navigateToComponent6">
            <img src="https://cdn.beymen.com/assets/desktop/img/beymen-logo-dot-blue.svg" alt="Beymen Logo" />
          </button>
        </div>

        <!-- Arama Çubuğu -->
        <div class="search-bar">
          <input type="text" placeholder="Ürün, Marka Arayın" />
          <button class="search-button">
            <i class="fas fa-search"></i>
          </button>
        </div>

        <!-- Kullanıcı İşlemleri -->
        <div class="user-actions">
          <button class="user-action" @click="navigateToComponent2">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M480-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.29-49 61.29-17 124.5-17t124.71 17Q666-398 721-366q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.18-3.03-9.41-3.02-4.24-7.97-6.59-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.72-3 3.73-3 8.28v24Zm216.21-288Q510-552 531-573.21t21-51Q552-654 530.79-675t-51-21Q450-696 429-674.79t-21 51Q408-594 429.21-573t51 21Zm-.21-72Zm0 360Z"/></svg>
            <span>Hesabım</span>
          </button>
          <button class="user-action" @click="navigateToComponent3">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z"/></svg>
            <span>Favorilerim</span>
          </button>
          <button class="user-action" @click="navigateToComponent4">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000">
              <path d="M263.72-96Q234-96 213-117.15T192-168v-456q0-29.7 21.15-50.85Q234.3-696 264-696h72v-16q0-60 40.5-106T480-864q60 0 102 42t42 102v24h72q29.7 0 50.85 21.15Q768-653.7 768-624v456q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72Zm.28-72h432v-456h-72v60q0 15.3-10.29 25.65Q603.42-528 588.21-528t-25.71-10.35Q552-548.7 552-564v-60H408v60q0 15.3-10.29 25.65Q387.42-528 372.21-528t-25.71-10.35Q336-548.7 336-564v-60h-72v456Zm144-528h144v-24q0-29.7-21.21-50.85-21.21-21.15-51-21.15T429-770.85Q408-749.7 408-720v24ZM264-168v-456 456Z" />
            </svg>
            <span>Sepetim ({{ cartCount }})</span>
          </button>
        </div>
      </div>

      <!-- Alt Menü -->
      <nav class="navbar-bottom">
        <ul>
          <li><button class="menu-button" @click="navigateToComponent8">Kadın</button></li>
          <li><a href="#">Erkek</a></li>
          <li><a href="#">Çocuk</a></li>
          <li><a href="#">Kozmetik</a></li>
          <li><a href="#">Ev & Mobilya</a></li>
          <li><a href="#">Anne & Bebek & Oyuncak</a></li>
          <li><a href="#">Teknoloji</a></li>
          <li><a href="#">Spor & Outdoor</a></li>
          <li><a href="#">Yaşam</a></li>
          <li><a href="#">Outlet</a></li>
          <li><a href="#">Reborn</a></li>
        </ul>
      </nav>
    </header>
    <main class="main-content">
      <component :is="activeComponent" :cartCount="cartCount" />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-column">
          <h4>Beymen Hakkında</h4>
          <ul>
            <li><a href="#">Markalar</a></li>
            <li><a href="#">Koşulsuz Müşteri Mutluluğu</a></li>
            <li><a href="#">The One Card</a></li>
            <li><a href="#">Özel Dikim</a></li>
            <li><a href="#">Hediye Danışmanlığı</a></li>
            <li><a href="#">Beymen Privé – Stil Danışmanlığı</a></li>
            <li><a href="#">Kurumsal Satış</a></li>
            <li><a href="#">Bilgi Toplumu Hizmetleri</a></li>
            <li><a href="#">İnsan Kaynakları</a></li>
            <li><a href="#">About Beymen</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Müşteri Hizmetleri</h4>
          <ul>
            <li><a href="#">Bize Sorun</a></li>
            <li><a href="#">Sıkça Sorulan Sorular</a></li>
            <li><a href="#">İşlem Rehberi</a></li>
            <li><a href="#">Ücretsiz Kargo ve İade</a></li>
            <li><a href="#">Mağazadan Teslim</a></li>
            <li><a href="#">Üyelik Sözleşmesi</a></li>
            <li><a href="#">Site Haritası</a></li>
            <li><a href="#">Kişisel Verilerin Korunması</a></li>
            <li><a href="#">İletişim</a></li>
            <li><a href="#">Satıcı Olmak İstiyorum</a></li>
            <li><a href="#">Kampanya Koşulları</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Hesabım</h4>
          <ul>
            <li><a href="#">Siparişlerim</a></li>
            <li><a href="#">Adreslerim</a></li>
            <li><a href="#">Üyelik Bilgilerim</a></li>
          </ul>
          <ul>
            <li><button @click="navigateToComponent9" class="footer-button">MAĞAZALAR</button></li>
            <li><a href="#"> BEYMEN BLOG</a></li>
            <li><a href="#"> BEYMEN MAGAZİNE</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Özel Sayfalar</h4>
          <ul>
            <li><a href="#">Yılbaşı</a></li>
            <li><a href="#">Sevgililer Günü</a></li>
            <li><a href="#">Anneler Günü</a></li>
            <li><a href="#">Babalar Günü</a></li>
            <li><a href="#">11.11 Kampanyası</a></li>
            <li><a href="#">Nişan ve Düğün Elbiseleri</a></li>
            <li><a href="#">Mezuniyet ve Balo Elbise</a></li>
            <li><a href="#">Dünya Kadınlar Günü</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="social-media">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-x-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-pinterest"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
        <div class="app-links">
          <a href="#"><img src="https://cdn.beymen.com/assets/desktop/img/google-play-icon.svg" alt="App Store" /></a>
          <a href="#"><img src="https://cdn.beymen.com/assets/desktop/img/apple-icon.svg" alt="Google Play" /></a>
          <a href="#"><img src="https://cdn.beymen.com/bannerimages/huawei-app-logo_2024020914493978538.svg" alt="App Gallery" /></a>
        </div>
        <p>&copy; 2025 Beymen, Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Component2 from '~/Components/Component2.vue';
  import Component3 from '~/Components/Component3.vue';
  import Component4 from '~/Components/Component4.vue';
  import Component5 from '~/Components/Component5.vue';
  import Component7 from '~/Components/Component7.vue';
  import Component8 from '~/Components/Component8.vue';
  import Component9 from '~/Components/Component9.vue';
  import Component6 from '~/Components/Component6.vue';
  
  const activeComponent = ref(null);
  
  // Sepet durumu
  const cartCount = ref(0);
  
  const navigateToComponent2 = () => {
    activeComponent.value = Component2;
  };
  
  const navigateToComponent3 = () => {
    activeComponent.value = Component3;
  };
  
  const navigateToComponent4 = () => {
    activeComponent.value = Component4;
  };
  
  const navigateToComponent5 = () => {
    activeComponent.value = Component5;
  };
  
  const navigateToComponent7 = () => {
    activeComponent.value = Component7;
  };
  
  const navigateToComponent8 = () => {
    activeComponent.value = Component8;
  };
  
  const navigateToComponent6 = () => {
    activeComponent.value = Component6; // Ana sayfaya dönmek için
  };
  
  const navigateToComponent9 = () => {
    activeComponent.value = Component9;
  };
  // Sepete ürün ekleme fonksiyonu
  const addToCart = () => {
    cartCount.value += 1; // Ürün sayısını 1 artır
};
  </script>

<style scoped>
/**********************************
 * Genel Ayarlar
 **********************************/
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/**********************************
 * Üst Menü
 **********************************/
.navbar-header {
  background-color: #ffffff;
  padding: 5px 20px;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
}

.header-links {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.header-links li {
  margin-left: 40px;
  display: flex;
  align-items: center;
}

.header-links a {
  text-decoration: none;
  color: #333;
}

.header-button {
  background: none;
  border: none;
  font-size: 12px;
  color: #333;
  cursor: pointer;
  padding: 0;
}

.language img {
  height: 12px;
  width: 18px;
  border: 1px solid #ccc;
  border-radius: 2px;
}

/**********************************
 * Orta Menü
 **********************************/
.navbar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}

.logo img {
  height: 24px;
}

.logo-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.search-bar {
  flex: 1;
  margin: 0 200px;
  display: flex;
  align-items: center;
}

.search-bar input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 0px 0 0 0px;
  font-size: 15px;
}

.search-bar .search-button {
  padding: 10px;
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 0 0px 0px 0;
}

.user-actions {
  display: flex;
  gap: 30px; /* Daha geniş boşluk */
}

.user-action {
  display: flex;
  flex-direction: column; /* Öğeleri dikey hizala */
  align-items: center; /* Ortalamak için */
  gap: 5px;
  font-size: 14px;
  cursor: pointer;
  color: #333;
  background: none;
  border: none;
  padding: 0;
  text-align: center; /* Metni ortalamak için */
}
.user-action i {
  font-size: 18px;
}

/**********************************
 * Alt Menü
 **********************************/
.navbar-bottom {
  background-color: #ffffff;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
}

.navbar-bottom ul {
  list-style: none;
  display: flex;
  gap: 70px;
  margin: 10;
  padding: 10;
}

.navbar-bottom ul li {
  position: relative; /* Alt çizgi için konumlandırma ayarı */
}

/*KADIN hariç NAVBAR*/
.navbar-bottom ul li a {
  text-decoration: none;
  text-align: center;
  color: #333;
  font-size: 16px;
  position: relative; /* Alt çizgi için gerekli */
  transition: all 0.3s ease; /* Animasyon */
}

/*KADIN NAVBAR*/
.menu-button {
  background: none;
  border: none;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  padding: 0;
  position: relative; /* Alt çizgi için gerekli */
  transition: all 0.3s ease; /* Animasyon */
}

.navbar-bottom ul li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px; /* Yazının altına çizgi ekler */
  width: 0;
  height: 1px;
  background-color: #000;
  transition: all 0.3s ease; /* Animasyon */
}

.navbar-bottom ul li a:hover {
  font-weight: bold;
  color: #000;
}

.navbar-bottom ul li a:hover::after {
  width: 100%; /* Çizginin genişliğini artırır */
}

.menu-button:hover {
  font-weight: bold;
  color: #000;
}

.menu-button:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px; /* Yazının altına çizgi ekler */
  width: 100%;
  height: 1px;
  background-color: #000;
}

/**********************************
 * Ana İçerik Alanı
 **********************************/
.main-content {
  padding: 20px;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  background-color: #ffffff;
  height: calc(100vh - 120px); /* Navbar yüksekliği çıkarıldı */
}

/**********************************
 * Footer Alanı
 **********************************/
.footer {
  background-color: #000;
  color: #fff;
  width : 100%;
  max-width: 1950px;
  padding: 100px 30px;
  margin-top:190px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-column {
  flex: 1;
  min-width: 200px;
}

.footer-column h4 {
  font-size: 20px;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 8px;
}

.footer-column ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 12px;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}
.footer-button {
  background: none;
  border: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
}

.footer-button:hover {
  text-decoration: underline;
}


.footer-bottom {
  margin-top: 20px;
  text-align: center;
}

.social-media {
  margin-bottom: 10px;
}

.social-media a {
  margin: 0 10px;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
}

.social-media a:hover {
  color: #ddd;
}

.app-links img {
  height: 40px;
  margin: 0 5px;
}
</style>
