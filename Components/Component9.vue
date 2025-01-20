<template>
  <div class="store-container">
    <!-- Sol Menü (Şehirler) -->
    <div class="store-menu">
      <h3>MAĞAZALAR</h3>
      <ul>
        <li
          v-for="(city, index) in cities"
          :key="index"
          :class="{ active: selectedCity === city.name }"
          @click="selectCity(city)"
        >
          {{ city.name }} <span>{{ city.storeCount }} Mağaza</span>
        </li>
      </ul>
    </div>

    <!-- Sağ Menü (Şehir Bilgileri) -->
    <div class="store-details" v-if="selectedCityDetails">
      <h3>{{ selectedCityDetails.name }}</h3>
      <div v-for="(store, index) in selectedCityDetails.stores" :key="index" class="store-card">
        <p class="store-title">{{ store.title }}</p>
        <p><i class="fas fa-map-marker-alt"></i> {{ store.address }}</p>
        <p><i class="fas fa-clock"></i> {{ store.hours }}</p>
        <p><i class="fas fa-phone"></i> {{ store.phone }}</p>
        <a :href="store.mapLink" target="_blank" class="store-link">HARİTADA GÖSTER</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";

interface Store {
  title: string;
  address: string;
  hours: string;
  phone: string;
  mapLink: string;
}

interface City {
  name: string;
  storeCount: number;
}

interface CityDetails {
  [key: string]: {
    name: string;
    stores: Store[];
  };
}

export default defineComponent({
  name: "StoreComponent",
  setup() {
    // Şehirler
    const cities = ref<City[]>([
      { name: "İstanbul", storeCount: 13 },
      { name: "Adana", storeCount: 1 },
      { name: "Ankara", storeCount: 3 },
      { name: "Antalya", storeCount: 2 },
      { name: "Bursa", storeCount: 1 },
    ]);

    // Varsayılan seçili şehir
    const selectedCity = ref<string>("");

    // Şehir detayları
    const cityDetails = ref<CityDetails>({
      İstanbul: {
        name: "İstanbul",
        stores: [
          {
            title: "Beymen Akasya",
            address: "Akasya Acıbadem AVM Çeçen Sk. No:433-411 Acıbadem",
            hours: "10:00-22:00",
            phone: "444 4 700",
            mapLink: "https://www.google.com/maps?q=41.001179,29.054639",
          },
          {
            title: "Beymen Aqua Florya",
            address: "Aqua Florya AVM Şenlikköy Mah. Yeşilköy Halkalı Cad. No:93 Florya",
            hours: "10:00-22:00",
            phone: "444 4 700",
            mapLink: "https://www.google.com/maps?q=40.965939,28.798398",
          },
          {
            title: "Beymen Ataköy",
            address: "Ataköy A Plus AVM Ataköy Konakları Adnan Kahveci Bulvarı 6.Kısım No: 2/47",
            hours: "10:00-22:00",
            phone: "444 4 700",
            mapLink: "https://www.google.com/maps?q=40.978623,28.851048",
          },
        ],
      },
      Adana: {
        name: "Adana",
        stores: [
          {
            title: "Beymen Adana 01",
            address: "01 Burda AVM Ahmet Remzi Yüreğir Mahallesi Erdal Acet Cad No:1 Seyhan",
            hours: "10:00-22:00",
            phone: "444 4 700",
            mapLink: "https://www.google.com/maps?q=36.993579,%2035.307527",
          },
        ],
      },
      Ankara: {
          name: "Ankara",
          stores: [
            {
              title: "Beymen Armada",
              address: " Armada AVM Eskişehir Yolu No:6 Söğütözü",
              hours: "10:00-22:00",
              phone: "444 4 700",
              mapLink: "https://www.google.com/maps?q=39.91348,32.809609",
            },
            {
              title: "Beymen Kavaklıdere",
              address: " Tahran Caddesi No:2 Kavaklıdere",
              hours: "10:00-22:00",
              phone: "444 4 700",
              mapLink: "https://www.google.com/maps?q=39.899076,32.863185",
            },
            {
            title: "Beymen Panora",
            address: " Beymen Panora AVM Oran Mh. Turan Güneş Blv. No:182 06550",
            hours: "10:00-22:00",
            phone: "444 4 700",
            mapLink: "https://www.google.com/maps?q=39.84796,32.832813",
          },
        ],
      },
        Antalya: {
          name: "Antalya",
          stores: [
            {
              title: "Beymen Antalya",
              address: " Şirinyalı Mah. Tekelioğlu Cad. No: 12 Lara",
              hours: "10:00-22:00",
              phone: "444 4 700",
              mapLink: "https://www.google.com/maps?q=36.856952,30.746098",
            },
            {
              title: "Beymen Antalya Rixos",
              address: "Kadriye Mahallesi, Atatürk Cd. 515-1, 07525 Serik",
              hours: "10:00-22:00",
              phone: "444 4 700",
              mapLink: "https://www.google.com/maps?q=36.876295,31.002785",
            },
          ],
        },
        Bursa: {
          name: "Bursa",
          stores: [
            {
              title: "Beymen Bursa Korupark",
              address: " Emek Adnan Menderes Mah. Mudanya Cad No:2, 16160 Osmangazi/Bursa",
              hours: "10:00-22:00",
              phone: "444 4 700",
              mapLink: "https://www.google.com/maps?q=40.250264,28.958253",
            },
          ],
        },
    });

    // İlk yüklemede "İstanbul" seçili olsun
    onMounted(() => {
      selectedCity.value = "İstanbul";
    });

    // Seçilen şehrin detayları
    const selectedCityDetails = computed(() => {
      return cityDetails.value[selectedCity.value] || null;
    });

    // Şehir seçme fonksiyonu
    const selectCity = (city: City) => {
      selectedCity.value = city.name;
    };

    return {
      cities,
      selectedCity,
      cityDetails,
      selectedCityDetails,
      selectCity,
    };
  },
});
</script>
<style scoped>
.store-container {
  display: flex;
  justify-content: center; /* Yatayda ortalar */
  align-items: flex-start; /* Dikeyde hizayı yukarı alır */
  gap: 80px; /* Araya boşluk ekler */
  font-family: Arial, sans-serif;
  margin: 20px;
  box-sizing: border-box;
  
}

/* Sol Menü */
.store-menu {
  position: relative;
  max-height: 458px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.store-menu h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center; /* Başlığı ortalar */
}

.store-menu ul {
  list-style: none;
  padding: 0;
}

.store-menu li {
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  transition: background-color 0.3s ease;
}

.store-menu li:hover,
.store-menu li.active {
  background-color: #e9ecef;
  font-weight: bold;
}

/* Sağ Menü */
.store-details {
  width: 50%; /* Daha geniş bir alan verir */
  padding-left: 20px;
}

.store-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: box-shadow 0.3s ease;
}

.store-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.store-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.store-card p {
  margin: 5px 0;
}

.store-card i {
  margin-right: 8px;
  color: #333;
}

.store-link {
  color: #007bff;
  text-decoration: none;
}

.store-link:hover {
  text-decoration: underline;
}
</style>
