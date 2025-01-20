<template>
  <div class="campaign-container">
    <!-- Model Görseli -->
    <div class="campaign-visual">
      <img src="https://cdn.beymen.com/bannerimages/desktop_2024042512474655621.png" alt="Model Görseli" />
    </div>

    <!-- Kampanya Butonları -->
    <div class="campaign-buttons">
      <button
        v-for="(button, index) in campaignButtons"
        :key="index"
        class="campaign-button"
      >
        {{ button }}
      </button>
    </div>

    <!-- Ekstra Bilgi Bölgesi -->
    <div class="campaign-info">
      <!-- Ücretsiz Kargo -->
      <div class="info-box">
        <i class="fas fa-truck info-icon"></i>
        <div>
          <h4>ÜCRETSİZ KARGO</h4>
          <p>1500 TL ve üzeri alışverişlerinizde kargo ücretsiz.</p>
        </div>
      </div>
      <!-- Mağazadan Teslim -->
      <div class="info-box">
        <i class="fas fa-store info-icon"></i>
        <div>
          <h4>MAĞAZADAN TESLİM</h4>
          <p>Online olarak satın aldığınız ürünleri mağazalarımızdan teslim alabilirsiniz.</p>
        </div>
      </div>
      <!-- Kolay İade -->
      <div class="info-box">
        <i class="fas fa-undo info-icon"></i>
        <div>
          <h4>KOLAY İADE</h4>
          <p>Beymen.com'dan satın aldığınız ürünleri kolayca iade edebilirsiniz.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      campaignButtons: [
        "Anne&Bebek&Oyuncak Ürünlerinde Seçili Markalarda %30’a Varan İndirim",
        "Anne&Bebek&Oyuncak Ürünlerinde Sepette %30’a Varan İndirim",
        "Bebek Arabası & Oto Koltuğu Ürünlerinde Sepette %25 İndirim",
        "Atelier Rebul Tasarımlarında 2. Ürüne Sepette %50 İndirim",
        "Beymen Club'da 2 ve üzeri üründe %30 İndirim",
        "Beymen Outlet 2 Ürüne %20, 3 Ürün ve Üzerine %40 İndirim",
        "Chloe Parfümlerde Sepette %15 İndirim",
        "BTS Ürün Seçimi Anne Bebek",
        "ICA Markalı Ürünlerde %30’a Varan İndirim",
      ],
    };
  },
};
</script>

<style scoped>
.campaign-container {
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

/* Model Görseli */
.campaign-visual {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.campaign-visual img {
  max-width: 1100px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

/* Butonlar Bölgesi */
.campaign-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.campaign-button {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  color: #333;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.campaign-button:hover {
  background-color: #000;
  color: #fff;
}

/* Bilgi Kutuları Bölgesi */
.campaign-info {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.info-box {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 0 10px;
}

.info-box:first-child {
  margin-left: 0;
}

.info-box:last-child {
  margin-right: 0;
}

/* İkonlar */
.info-icon {
  font-size: 24px;
  color: #007bff;
  margin-right: 15px;
}

/* Başlık ve Metin */
.info-box h4 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.info-box p {
  font-size: 14px;
  color: #555;
}
</style>
