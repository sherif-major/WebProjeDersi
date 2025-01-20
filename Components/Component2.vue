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
    <div class="page-container">

      <!-- Üye Ol Formu -->
      <div class="form-container">
        <h2>ÜYE OL</h2>
        <form @submit.prevent="handleSignup">
          <label for="first-name">ADINIZ *</label>
          <input type="text" id="first-name" placeholder="Lütfen adınızı yazınız" v-model="firstName" />
  
          <label for="last-name">SOYADINIZ *</label>
          <input type="text" id="last-name" placeholder="Lütfen soyadınızı yazınız" v-model="lastName" />
  
          <label for="signup-email">E-POSTA ADRESİNİZ *</label>
          <input type="email" id="signup-email" placeholder="Lütfen e-posta adresinizi yazınız" v-model="signupEmail" />
  
          <label for="phone">CEP TELEFONUNUZ *</label>
          <input type="tel" id="phone" placeholder="555-555-55-55" v-model="phoneNumber" />
  
          <label for="birthdate">DOĞUM TARİHİNİZ *</label>
          <div class="birthdate-select">
            <select v-model="birthDay">
              <option value="" disabled selected>Gün</option>
              <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
            </select>
            <select v-model="birthMonth">
              <option value="" disabled selected>Ay</option>
              <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
            </select>
            <select v-model="birthYear">
              <option value="" disabled selected>Yıl</option>
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
          </div>
  
          <label>CİNSİYETİNİZ *</label>
          <div class="gender-select">
            <label><input type="radio" value="Kadın" v-model="gender" /> Kadın</label>
            <label><input type="radio" value="Erkek" v-model="gender" /> Erkek</label>
          </div>
  
          <label for="signup-password">ŞİFRENİZ *</label>
          <input type="password" id="signup-password" placeholder="Lütfen şifrenizi yazınız" v-model="signupPassword" />
  
          <div class="agreements">
            <label>
              <input type="checkbox" v-model="acceptedKvkk" />
              <span>Lütfen üye olmadan önce <a href="#">Aydınlatma Metnini</a> okuyunuz.</span>
            </label>
            <label>
              <input type="checkbox" v-model="acceptedMarketing" />
              Beymen’in kampanyalarından haberdar olmak istiyorum.
            </label>
          </div>
  
          <button type="submit" class="signup-button">ÜYE OL</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import { auth, db } from "../server/firebase"; // firebase.js'i bağla
  import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
  import { doc, setDoc } from 'firebase/firestore';
  
  export default defineComponent({
    name: 'LoginPage',
    setup() {
      const showLogin = ref(true);
      const loginEmail = ref('');
      const loginPassword = ref('');
      const firstName = ref('');
      const lastName = ref('');
      const signupEmail = ref('');
      const signupPassword = ref('');
      const phoneNumber = ref('');
      const birthDay = ref('');
      const birthMonth = ref('');
      const birthYear = ref('');
      const gender = ref('');
      const acceptedKvkk = ref(false);
      const acceptedMarketing = ref(false);
  
      // Gün, ay ve yıl için seçenekler
      const days = Array.from({ length: 31 }, (_, i) => i + 1);
      const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
      const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  
      // Giriş Yap
      const handleLogin = async () => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value);
          console.log('Giriş başarılı:', userCredential.user);
          alert('Giriş başarılı!');
        } catch (error) {
          console.error('Giriş hatası:', error.message);
          alert('Giriş başarısız. Hata: ' + error.message);
        }
      };
  
      // Üye Ol ve Firestore'a Kaydet
      const handleSignup = async () => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value);
          const user = userCredential.user;
  
          // Kullanıcı bilgilerini Firestore'a kaydet
          await setDoc(doc(db, 'users', user.uid), {
            firstName: firstName.value,
            lastName: lastName.value,
            email: signupEmail.value,
            phoneNumber: phoneNumber.value,
            birthDate: `${birthDay.value} ${birthMonth.value} ${birthYear.value}`,
            gender: gender.value,
            acceptedKvkk: acceptedKvkk.value,
            acceptedMarketing: acceptedMarketing.value,
          });
  
          console.log('Üyelik başarılı ve kullanıcı Firestore\'a kaydedildi:', user.uid);
          alert('Üyelik başarılı!');
        } catch (error) {
          console.error('Üyelik hatası:', error.message);
          alert('Üyelik başarısız. Hata: ' + error.message);
        }
      };
  
      const toggleForm = () => {
        showLogin.value = !showLogin.value;
      };
  
      return {
        showLogin,
        loginEmail,
        loginPassword,
        firstName,
        lastName,
        signupEmail,
        signupPassword,
        phoneNumber,
        birthDay,
        birthMonth,
        birthYear,
        gender,
        acceptedKvkk,
        acceptedMarketing,
        days,
        months,
        years,
        toggleForm,
        handleLogin,
        handleSignup,
      };
    },
  });
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
  align-items: center;
  gap: 30px;
  padding: 50px;
  background-color: #fff;
  padding:270px;
}

/* Giriş Yap Bölümü */
.login-section,
.signup-section {
  width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f4f5f6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.login-section h2 {
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
  width: 95%;
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

    .page-container {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      padding: 1px;
      margin-top: 200px;
    }
    
    .form-container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f5f6;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    h2 {
      font-size: 20px;
      margin-bottom: 20px;
      text-align: center;
      color: #333;
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
    }
    
    label {
      display: block;
      margin-bottom: 5px;
      font-size: 14px;
      color: #333;
    }
    
    input,
    select {
      width: 95%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }
    
    .birthdate-select {
      display: flex;
      gap: 10px;
      margin-bottom: 15px;
    }
    
    .birthdate-select select {
      flex: 1;
    }
    
    .gender-select {
      display: flex;
      gap: 15px;
      margin-bottom: 5px;
      align-items: center;
    }
    
    .gender-select label {
      font-size: 14px;
      color: #333;
    }
    
    .agreements {
      font-size: 12px;
      margin-bottom: 15px;
    }
    
    .agreements a {
      color: #333;
      text-decoration: underline;
    }
    
    .signup-button {
      width: 100%;
      padding: 10px;
      background-color: #333;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    
    .signup-button:hover {
      background-color: #555;
    }
</style>
