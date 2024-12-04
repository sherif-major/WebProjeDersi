<template>
  <div class="login-page">
    <!-- Giriş Yap Bölümü -->
    <div class="login-section">
      <h2>GİRİŞ YAP</h2>
      <form class="login-form">
        <label for="email">E-POSTA ADRESİNİZ *</label>
        <input type="email" id="email" placeholder="Lütfen e-posta adresinizi yazınız" />

        <label for="password">ŞİFRENİZ *</label>
        <div class="password-input">
          <input type="password" id="password" placeholder="Lütfen şifrenizi yazınız" />
          <button type="button" class="toggle-password">
            <i class="fas fa-eye-slash"></i>
          </button>
        </div>

        <div class="remember-forgot">
          <label>
            <input type="checkbox" /> Beni Hatırla
          </label>
          <a href="#" class="forgot-password">Şifremi Unuttum</a>
        </div>

        <button type="submit" class="login-button">GİRİŞ YAP</button>
      </form>
    </div>

    <!-- Üye Ol Bölümü -->
    <div class="signup-section">
      <h2>ÜYE OL</h2>
      <p>Beymen.com'a üye olarak birçok avantajdan faydalanabilirsiniz. Öne çıkan avantajlar:</p>
      <ul class="advantages">
        <li>
          <i class="fas fa-bullhorn"></i>
          Kampanyalardan öncelikli olarak haberdar olabilirsiniz.
        </li>
        <li>
          <i class="fas fa-mobile-alt"></i>
          Beymen mobil uygulamaları ile alışveriş keyfinize telefonunuzdan devam edebilirsiniz.
        </li>
        <li>
          <i class="fas fa-credit-card"></i>
          The One Card'ınızı kayıt edebilir ve puanlarınızı kullanabilirsiniz.
        </li>
      </ul>
      <button class="signup-button">ÜYE OL</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped>
/* Genel Ayarlar */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}

/* Sayfa Yapısı */
.login-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding: 50px;
  background-color: #fff;
}

/* Giriş Yap Bölümü */
.login-section,
.signup-section {
  width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.login-section h2,
.signup-section h2 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.login-form label {
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
  color: #333;
}

.login-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.password-input {
  position: relative;
}

.password-input .toggle-password {
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
}

.remember-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #555;
}

/* Üye Ol Bölümü */
.signup-section p {
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
}

.advantages {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.advantages li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  margin-bottom: 10px;
  color: #333;
}

.advantages i {
  font-size: 16px;
  color: #333;
}

.signup-button {
  width: 100%;
  padding: 10px;
  border: 1px solid #333;
  background-color: #fff;
  color: #333;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.signup-button:hover {
  background-color: #333;
  color: #fff;
}
</style>
