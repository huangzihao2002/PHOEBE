<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(true)
const showNav = ref(false)
const navTimer = ref<number | null>(null)
const hoveredMenu = ref<string | null>(null)

const togglePlay = () => {
  if (videoRef.value) {
    if (isPlaying.value) {
      videoRef.value.pause()
    } else {
      videoRef.value.play()
    }
    isPlaying.value = !isPlaying.value
  }
}

const handleJump = (url: string) => {
  router.push(url)
}

const handleTopAreaEnter = () => {
  showNav.value = true
  if (navTimer.value) {
    clearTimeout(navTimer.value)
    navTimer.value = null
  }
}

const handleNavLeave = () => {
  navTimer.value = window.setTimeout(() => {
    showNav.value = false
    hoveredMenu.value = null
  }, 300)
}

const handleMenuEnter = (menu: string) => {
  hoveredMenu.value = menu
}

const handleMenuLeave = () => {
  hoveredMenu.value = null
}

const handleShopClick = () => {
  router.push('/new-arrivals')
}

const handleCollectionsClick = () => {
  router.push('/b-jan-jun-2025')
}
</script>

<template>
  <div class="app">
    <div class="top-area" @mouseenter="handleTopAreaEnter"></div>
    <nav 
      class="navbar" 
      :class="{ 'navbar-visible': showNav }"
      @mouseleave="handleNavLeave"
    >
      <div class="nav-content">
        <div class="nav-left">
          <div 
            class="nav-item"
            @mouseenter="handleMenuEnter('shop')"
            @mouseleave="handleMenuLeave"
            @click="handleShopClick"
          >
            SHOP
          </div>
          <div 
            class="nav-item"
            @mouseenter="handleMenuEnter('collections')"
            @mouseleave="handleMenuLeave"
            @click="handleCollectionsClick"
          >
            COLLECTIONS
          </div>
        </div>
        <div class="nav-right">
          <button class="nav-button">SUBSCRIBE</button>
          <button class="nav-button">LOG IN</button>
          <button class="nav-button">BAG</button>
        </div>
      </div>
      <div 
        class="dropdown-menu"
        :class="{ 'dropdown-menu-visible': hoveredMenu === 'shop' }"
        @mouseenter="handleMenuEnter('shop')"
        @mouseleave="handleMenuLeave"
      >
        <div class="dropdown-content">
          <div class="dropdown-item" @click="handleJump('/new-arrivals')">NEW ARRIVALS</div>
          <div class="dropdown-item" @click="handleJump('/ready-to-wear')">READY TO WEAR</div>
          <div class="dropdown-item" @click="handleJump('/accessories')">ACCESSORIES</div>
          <div class="dropdown-item" @click="handleJump('/bags')">BAGS</div>
          <div class="dropdown-item" @click="handleJump('/shoes')">SHOES</div>
        </div>
      </div>
      <div 
        class="dropdown-menu"
        :class="{ 'dropdown-menu-visible': hoveredMenu === 'collections' }"
        @mouseenter="handleMenuEnter('collections')"
        @mouseleave="handleMenuLeave"
      >
        <div class="dropdown-content">
          <div class="dropdown-item" @click="handleJump('/d-preview')">D PREVIEW</div>
          <div class="dropdown-item" @click="handleJump('/c-jul-dec-2025')">C JUL-DEC 2025</div>
          <div class="dropdown-item" @click="handleJump('/b-jan-jun-2025')">B JAN-JUN 2025</div>
          <div class="dropdown-item" @click="handleJump('/d-oct-2023-dec-2024')">D OCT 2023 - DEC 2024</div>
        </div>
      </div>
    </nav>

    <div class="scroll-container">
      <section class="section video-section">
        <img 
          src="/253D6653B9435F32E789EDB11B054579.jpg"
          alt="Hero"
          class="video-background"
          @click="handleJump('/new-arrivals')"
        >
        <div class="video-overlay" @click="handleJump('/new-arrivals')"></div>
        <h1 class="page-title">PHOEBE PHILO</h1>
        <p class="page-subtitle">NEW ARRIVALS</p>
      </section>

      <section class="section split-section">
        <div class="split-left" @click="handleJump('/bags')">
          <img src="/4EDC00D1C0BEB62EC362A93A70C69904.jpg" alt="BAGS" class="split-image">
          <p class="page-subtitle">BAGS</p>
        </div>
        <div class="split-right" @click="handleJump('/accessories')">
          <img src="/40D7E8A19689CBA4431B6DC02F81C812.jpg" alt="ACCESSORIES" class="split-image">
          <p class="page-subtitle">ACCESSORIES</p>
        </div>
      </section>

      <section class="section image-section" @click="handleJump('/ready-to-wear')">
        <img src="/4C6B4653D148C7E8F69D748F54B34ED3.jpg" alt="READY TO WEAR" class="full-image">
        <p class="page-subtitle">READY TO WEAR</p>
      </section>

      <section class="section image-section" @click="handleJump('/page4')">
        <img src="/1144C6DD28A14A5995C513FC8C5C4BE8.jpg" alt="页面4" class="full-image">
        <p class="page-subtitle">点击查看更多</p>
      </section>

      <section class="section footer-section">
        <div class="footer-content">
          <button class="footer-btn" @click="handleJump('/new-arrivals')">NEW ARRIVALS</button>
          <button class="footer-btn" @click="handleJump('/bags')">BAGS</button>
          <button class="footer-btn" @click="handleJump('/accessories')">ACCESSORIES</button>
          <button class="footer-btn" @click="handleJump('/ready-to-wear')">READY TO WEAR</button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.top-area {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 999;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(0, 0, 0, 0.8);
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;
}

.navbar-visible {
  transform: translateY(0);
}

.nav-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  color: white;
}

.nav-left {
  display: flex;
  gap: 60px;
}

.nav-right {
  display: flex;
  gap: 30px;
}

.nav-item {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  cursor: pointer;
  padding: 10px 20px;
  transition: color 0.3s ease;
}

.nav-item:hover {
  color: #ff4444;
}

.nav-button {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 8px 20px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.8);
}

.dropdown-menu {
  position: absolute;
  top: 60px;
  left: 40px;
  height: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.9);
  transition: height 0.3s ease;
}

.dropdown-menu-visible {
  height: 250px;
}

.dropdown-content {
  padding: 20px 0;
}

.dropdown-item {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.dropdown-item:hover {
  color: #ff4444;
}

.scroll-container {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.section {
  width: 100%;
  height: 100vh;
  position: relative;
  cursor: pointer;
}

.video-section {
  position: relative;
  overflow: hidden;
}

.page-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  font-weight: 700;
  color: #ff0000;
  letter-spacing: 8px;
  text-transform: uppercase;
  z-index: 10;
  margin: 0;
  pointer-events: none;
}

.page-subtitle {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: white;
  letter-spacing: 2px;
  text-transform: uppercase;
  z-index: 10;
  margin: 0;
  pointer-events: none;
}

.video-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.play-pause-btn {
  position: absolute;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.play-pause-btn:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

.image-section {
  overflow: hidden;
}

.full-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.split-section {
  display: flex;
  width: 100%;
  height: 100vh;
}

.split-left,
.split-right {
  flex: 1;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.split-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.footer-section {
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-content {
  display: flex;
  gap: 30px;
}

.footer-btn {
  padding: 12px 24px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.footer-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #777;
}
</style>
