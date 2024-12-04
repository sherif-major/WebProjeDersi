<template>
  <div class="slider-container">

    <!-- Slider Wrapper -->
    <div class="slider-wrapper">
      <!-- Sol Ok -->
      <button class="slider-arrow left" @click="prevSlide">◀</button>

      <!-- Slider İçerik -->
      <div class="slider-content" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="slide" v-for="(item, index) in sliderItems" :key="index">
          <img :src="item.image" :alt="item.title" />
          <p class="slide-title">{{ item.title }}</p>
          <p class="slide-description">{{ item.description }}</p>
          <button class="shop-now">Alışverişe Başla</button>
        </div>
      </div>

      <!-- Sağ Ok -->
      <button class="slider-arrow right" @click="nextSlide">▶</button>
    </div>

    <!-- Slider Göstergeleri -->
    <div class="slider-indicators">
      <span
        v-for="(item, index) in sliderItems"
        :key="index"
        class="indicator"
        :class="{ active: currentSlide === index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliderItems: [
        {
          image: "https://cdn.beymen.com/bannerimages/12G_Fullwith_2496x988-kis-sezonu-1_2024120215000563013.webp",
          title: "Kış Modası",
          description: "50.000 TL ve üzeri alışverişinize 12.000 TL indirim.",
        },
        {
          image: "https://cdn.beymen.com/bannerimages/YILDIZLI12G_Fullwith_2496x988_2024113017490447833.webp",
          title: "Yeni Koleksiyon",
          description: "Sonbahar/Kış sezonuna özel fırsatlar.",
        },
        {
          image: "https://cdn.beymen.com/bannerimages/G_2024120211400896667.jpg",
          title: "Kampanyalar",
          description: "Seçili ürünlerde cazip indirimler.",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      // Sağ buton (nextSlide) tıklandığında bir sonraki slayta geç
      this.currentSlide = (this.currentSlide + 1) % this.sliderItems.length;
    },
    prevSlide() {
      // Sol buton (prevSlide) tıklandığında bir önceki slayta geç
      this.currentSlide =
        (this.currentSlide - 1 + this.sliderItems.length) %
        this.sliderItems.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
  },
};
</script>

<style scoped>
.slider-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.slider-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px;
}

.slider-content {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  text-align: center;
}

.slide img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.shop-now {
  padding: 10px 20px;
  background-color: #8A2BE2;
  color: #fff;
  border: none;
  border-radius: 4px;
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
}

.slider-arrow.left {
  left: 10px; /* Sol ok için konum */
}

.slider-arrow.right {
  right: 10px; /* Sağ ok için konum */
}

.slider-indicators {
  margin-top: 10px;
}

.indicator {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: gray;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;
}

.indicator.active {
  background: #8A2BE2;
}
</style>
