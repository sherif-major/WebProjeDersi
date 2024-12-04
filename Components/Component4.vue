<template>
  <div class="cart-container">
    <!-- Sol: Ürün Listesi -->
    <div class="cart-items">
      <h2>SEPETİM</h2>

      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <!-- Ürün Görseli -->
        <img :src="item.image" :alt="item.name" class="product-image" />

        <!-- Ürün Bilgileri -->
        <div class="product-info">
          <p class="product-brand">{{ item.brand }}</p>
          <p class="product-name">{{ item.name }}</p>
          <p class="product-price">{{ item.price }}</p>
          <p>Renk: {{ item.color }} | Beden: {{ item.size }}</p>

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

          <!-- Alt Bilgi -->
          <p class="promotion">{{ item.promotion }}</p>
        </div>

        <!-- Favorilere Taşı ve Sil -->
        <div class="product-actions">
          <button class="favorite">Favorilere Taşı</button>
          <button @click="removeItem(index)" class="delete">Sil</button>
        </div>
      </div>
    </div>

    <!-- Sağ: Sipariş Özeti ve Kupon -->
    <div class="sidebar">
      <!-- Sipariş Özeti -->
      <div class="summary">
        <h3>SİPARİŞ ÖZETİ</h3>
        <p>Toplam Tutar: {{ totalPrice }} TL</p>
        <button class="checkout">SATIN AL</button>
      </div>

      <!-- Size Özel Kupon -->
      <div class="coupon">
        <h3>Size Özel Kupon</h3>
        <div class="coupon-detail">
          <p class="coupon-code">KUPON KODU: <span>INDIRIM2024</span></p>
          <button class="apply-coupon">Kuponu Uygula</button>
        </div>
        <p class="coupon-info">Kupon sadece bu alışverişte geçerlidir.</p>
      </div>

      <!-- Bilgilendirme -->
      <div class="info">
        <h4>Bilgilendirme</h4>
        <ul>
          <li>Sepette yapılan değişiklikler otomatik olarak güncellenir.</li>
          <li>Hediye paketi seçimi ek ücret gerektirmez.</li>
          <li>Toplam tutar kupon indirimi sonrası hesaplanır.</li>
        </ul>
      </div>
    </div>
    <!-- Ürün Silindi Bildirimi -->
    <div v-if="showMessage" class="message">
      Ürün Silindi <br />
      Sepetinizden ürün başarılı bir şekilde silinmiştir.
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      cartItems: [
        {
          image: "https://cdn.beymen.com/mnresize/300/300/productimages/4wkr0bxv.uzb_IMG_01_2110096836754.jpg",
          brand: "Valentino",
          name: "Siyah Mini Kokteyl Elbisesi",
          price: "568.950,00 TL",
          color: "Siyah",
          size: "40",
          quantity: 1,
          giftWrap: false,
          promotion: "Her 140.000 TL'ye 40.000 TL Hediye",
        },
        {
          image: "https://cdn.beymen.com/mnresize/300/300/productimages/dlxhcrdy.rwf_IMG_01_2110097220194.jpg",
          brand: "Marc Jacobs",
          name: "The Snapshot Siyah Kadın Deri Çanta",
          price: "21.450,00 TL",
          color: "Siyah",
          size: "Standart",
          quantity: 1,
          giftWrap: false,
          promotion: "Her 50.000 TL'ye 12.000 TL Hediye",
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9,]/g, "").replace(",", "."));
        return total + price * item.quantity;
      }, 0).toFixed(2);
    },
  },
  methods: {
    removeItem(index) {
      this.cartItems.splice(index, 1);
      this.showTemporaryMessage();
    },
    showTemporaryMessage() {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 3000); // Mesaj 3 saniye sonra kaybolacak
    },
  },
};
</script>

<style scoped>
.cart-container {
  display: flex;
  gap: 20px;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #fff;
}

/* Sol: Ürün Listesi */
.cart-items {
  flex: 2;
}

h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.product-image {
  width: 150px;
  height: auto;
  border-radius: 4px;
}

.product-info {
  flex: 1;
  margin-left: 20px;
}

.product-brand {
  font-weight: bold;
}

.product-name {
  margin: 5px 0;
  color: #555;
}

.product-price {
  font-size: 16px;
  color: #333;
  font-weight: bold;
}

.actions {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.promotion {
  font-size: 12px;
  color: #007bff;
  margin-top: 10px;
}

.product-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.favorite {
  background-color: #eee;
  border: 1px solid #ddd;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.delete {
  background-color: #ff3333;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

/* Sağ: Sidebar */
.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.summary,
.coupon,
.info {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
}

.summary h3,
.coupon h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.checkout {
  width: 100%;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

.coupon-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.coupon-code span {
  font-weight: bold;
  color: #007bff;
}

.apply-coupon {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.info ul {
  list-style: disc;
  padding-left: 20px;
  font-size: 14px;
  color: #555;
}
/* Silme Mesajı */
.message {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  font-size: 14px;
}
</style>
