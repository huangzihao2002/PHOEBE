<script setup lang="ts">
import { ref } from 'vue'

// 图片数据 - 实际项目中应该从API获取
const images = [
  '/253D6653B9435F32E789EDB11B054579.jpg',
  '/4EDC00D1C0BEB62EC362A93A70C69904.jpg',
  '/40D7E8A19689CBA4431B6DC02F81C812.jpg',
  '/4C6B4653D148C7E8F69D748F54B34ED3.jpg',
  '/1144C6DD28A14A5995C513FC8C5C4BE8.jpg',
  '/2676EF29A480EEAD108E9535099CCA13.jpg',
  '/294827D51EB59FCA920FC095E07013C9.jpg',
  '/2CFDF37446FBA0DE0F0A83039B4C10FF.jpg',
  '/49CA9B1F750CF0DA400FED3B26E31276.jpg',
  '/4CEB30580A1E93AB3D6B4D376BDFDA00.jpg',
  '/7AE629A08FC599345978EA9330F56B13.jpg',
  '/9145FADE6D3C52BC164D2593792440A9.jpg',
  '/A155C208F9572A793B83A5722634F9E0.jpg',
  '/B418CE5D205703EA374BED85C0015546.jpg',
  '/B6EBA45F6F1A6C1EBED35446ECA3F9DF.jpg',
  '/B8C6BFDA133E67F0397912714A5D7FEE.jpg',
  '/D59E122FD0AA0490129646314B857082.jpg',
  '/D8C52231A87A7AABC6990DCB59317834.jpg',
  '/E0CE24C280085DB46F8EA0084A26B9AF.jpg',
  '/F34DD26DA7A21F043C87B4E977D7732A.jpg'
]

// 大图查看状态
const selectedImage = ref<string | null>(null)
const currentIndex = ref<number>(-1)

// 打开大图
const openImage = (image: string) => {
  selectedImage.value = image
  currentIndex.value = images.indexOf(image)
}

// 关闭大图
const closeImage = () => {
  selectedImage.value = null
  currentIndex.value = -1
}

// 导航图片
const navigateImage = (direction: number) => {
  const newIndex = currentIndex.value + direction
  if (newIndex >= 0 && newIndex < images.length) {
    currentIndex.value = newIndex
    selectedImage.value = images[newIndex] ?? null
  }
}
</script>

<template>
  <div class="collection-container">


    <!-- 图片网格 -->
    <div class="image-grid">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="image-item"
        @click="openImage(image)"
      >
        <img :src="image" :alt="`Collection item ${index + 1}`" class="grid-image">
      </div>
    </div>

    <!-- 品牌名称 -->
    <div class="brand-section">
      <h1 class="brand-title">PHOEBE<br>PHILO</h1>
    </div>

    <!-- 页脚 -->
    <div class="footer">
      <div class="footer-links">
        <a href="#" class="footer-link">NEWSLETTER SIGN UP</a>
        <a href="#" class="footer-link">HELP</a>
        <a href="#" class="footer-link">SHIPPING & RETURNS</a>
        <a href="#" class="footer-link">PRIVACY POLICY</a>
        <a href="#" class="footer-link">TERMS & CONDITIONS</a>
        <a href="#" class="footer-link">TRADEMARKS</a>
        <a href="#" class="footer-link">SITEMAP</a>
        <a href="#" class="footer-link">CONTACT</a>
      </div>
      <div class="copyright">
        <p>&copy; 2024 PHOEBE PHILO LIMITED. ALL RIGHTS RESERVED.</p>
        <p>Visit www.phoebephilo.com to shop the official Phoebe Philo collection online.</p>
      </div>
    </div>

    <!-- 大图查看模态框 -->
    <div 
      v-if="selectedImage"
      class="modal-overlay"
      @click="closeImage"
    >
      <button class="close-button" @click="closeImage">CLOSE</button>
      <div class="image-count">IMAGE {{ currentIndex + 1 }}</div>
      
      <button 
        class="nav-button prev-button" 
        @click.stop="navigateImage(-1)"
        :disabled="currentIndex === 0"
      >
        <span class="nav-arrow">&lt;</span>
      </button>
      
      <div class="modal-content" @click.stop>
        <img :src="selectedImage" :alt="'Selected image'" class="modal-image">
      </div>
      
      <button 
        class="nav-button next-button" 
        @click.stop="navigateImage(1)"
        :disabled="currentIndex === images.length - 1"
      >
        <span class="nav-arrow">&gt;</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.collection-container {
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: white;
}



/* 图片网格 */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1px;
  background: #1a1a1a;
}

.image-item {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 1;
}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-item:hover .grid-image {
  transform: scale(1.05);
}

/* 品牌区域 */
.brand-section {
  width: 100%;
  padding: 80px 0;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-title {
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 6px;
  text-align: center;
  line-height: 1;
}

/* 页脚 */
.footer {
  padding: 40px;
  background: #000;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  opacity: 1;
}

.copyright {
  font-size: 12px;
  font-weight: 400;
  opacity: 0.6;
  line-height: 1.6;
}

/* 大图查看模态框 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.close-button {
  position: fixed;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  cursor: pointer;
  padding: 10px 20px;
  z-index: 2100;
}

.image-count {
  position: fixed;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  z-index: 2100;
}

.modal-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.nav-button {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  font-size: 48px;
  font-weight: 400;
  cursor: pointer;
  padding: 20px;
  z-index: 2100;
  transition: opacity 0.3s ease;
  opacity: 0.7;
}

.nav-button:hover {
  opacity: 1;
}

.nav-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.prev-button {
  left: 20px;
}

.next-button {
  right: 20px;
}

.nav-arrow {
  font-size: 36px;
}

/* 响应式设计 */
@media (max-width: 768px) {


  .image-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .brand-title {
    font-size: 40px;
    letter-spacing: 4px;
  }

  .footer {
    padding: 20px;
  }

  .footer-links {
    gap: 20px;
  }
}
</style>
