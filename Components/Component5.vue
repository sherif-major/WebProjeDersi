<template>
  <div class="order-tracking-container">
    <!-- Sipariş Takip Başlığı -->
    <h2>SİPARİŞ TAKİBİ</h2>
    <p>
      Sipariş numaranız ve siparişi vermek için kullandığınız e-posta adresiniz ile
      siparişinizi görüntüleyebilirsiniz.
    </p>

    <!-- Sipariş Formu -->
    <form @submit.prevent="viewOrder">
      <!-- E-posta Adresi -->
      <label for="email">E-POSTANIZ *</label>
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="Lütfen e-posta adresinizi yazınız"
        required
      />

      <!-- Sipariş Numarası -->
      <label for="order-number">SİPARİŞ NO *</label>
      <input
        type="text"
        id="order-number"
        v-model="orderNumber"
        placeholder="BEY-XXXXXXXXX"
        required
      />
      <button type="submit" class="view-order-button">SİPARİŞİNİZİ GÖRÜNTÜLEYİN</button>
    </form>

    <!-- Hesabınız Var mı? -->
    <p class="login-prompt">
      Hesabınız var mı?
      <router-link >Giriş Yapın</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "OrderTracking",
  data() {
    return {
      email: "",
      orderNumber: "",
    };
  },
  methods: {
    viewOrder() {
      // Sipariş görüntüleme işlemi
      console.log("E-posta:", this.email);
      console.log("Sipariş Numarası:", this.orderNumber);
      alert("Siparişiniz görüntülendi! (Bu sadece bir örnek.)");
    },
  },
};
</script>

<style scoped>
/* Konteyner */
.order-tracking-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f5f6;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

/* Başlık ve Açıklama */
h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

/* Form Alanları */
label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

input {
  width: 95%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

/* Buton */
.view-order-button {
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.view-order-button:hover {
  background-color: #555;
}

/* Hesabınız Var mı? */
.login-prompt {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
}

.login-prompt a {
  color: #007bff;
  text-decoration: none;
}

.login-prompt a:hover {
  text-decoration: underline;
}
</style>
