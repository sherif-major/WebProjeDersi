<template>
  <header class="navbar">
    <!-- Üst Menü -->
    <div class="navbar-header">
      <ul class="header-links">
        <li class="spacer"></li> <!-- Boşluk bırakmak için kullanıldı -->
        <li><a href="#">Sipariş Takibi</a></li>
        <li><a href="#">Kampanyalar</a></li>
        <li><a href="#">The One</a></li>
        <li><a href="#">Servisler</a></li>
        <li class="language">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" alt="TR" />
          <span>TR</span>
        </li>
      </ul>
    </div>

    <!-- Orta Menü -->
    <div class="navbar-top">
      <!-- Logo -->
      <div class="logo">
        <img src="https://cdn.beymen.com/assets/desktop/img/beymen-logo-dot-blue.svg" alt="Beymen Logo" />
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
        <div class="user-action">
          <i class="fas fa-user"></i>
          <span>Hesabım</span>
        </div>
        <div class="user-action">
          <i class="fas fa-heart"></i>
          <span>Favorilerim</span>
        </div>
        <div class="user-action">
          <i class="fas fa-shopping-bag"></i>
          <span>Sepetim</span>
        </div>
      </div>
    </div>

    <!-- Alt Menü -->
    <nav class="navbar-bottom">
      <ul>
        <li><a href="#">Kadın</a></li>
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
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* Genel Ayarlar */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Üst Menü */
.navbar-header {
  background-color: #f8f8f8;
  padding: 5px 20px;
  font-size: 12px;
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
  margin-left: 20px;
  display: flex;
  align-items: center;
}

.header-links a {
  text-decoration: none;
  color: #333;
}

.language img {
  height: 12px;
  width: 18px;
  border: 1px solid #ccc;
  border-radius: 2px;
}

/* Orta Menü */
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
  border-radius: 4px 0 0 4px;
  font-size: 14px;
}

.search-bar .search-button {
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
}

.user-actions {
  display: flex;
  gap: 30px; /* Daha geniş boşluk */
}

.user-action {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  cursor: pointer;
  color: #333;
}

.user-action i {
  font-size: 18px;
}

/* Alt Menü */
.navbar-bottom {
  background-color: #f8f8f8;
  padding: 10px 20px;
}

.navbar-bottom ul {
  list-style: none;
  display: flex;
  gap: 50px;
  margin: 0;
  padding: 0;
}

.navbar-bottom ul li {
  position: relative; /* Alt çizgi için konumlandırma ayarı */
}

.navbar-bottom ul li a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  position: relative; /* Alt çizgi için gerekli */
  transition: all 0.3s ease; /* Animasyon */
}

.navbar-bottom ul li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px; /* Yazının altına çizgi ekler */
  width: 0;
  height: 2px;
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
</style>
