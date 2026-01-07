<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showNav = ref(false)
const navTimer = ref<number | null>(null)
const hoveredMenu = ref<string | null>(null)

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

    <router-view></router-view>
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
  min-height: 100vh;
  background: #000;
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
</style>
