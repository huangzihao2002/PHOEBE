<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const hoveredMenu = ref<string | null>(null)

const handleJump = (url: string) => {
  router.push(url)
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
  router.push('/d-preview')
}
</script>

<template>
  <div class="app">
    <nav 
      class="navbar" 
      :class="{ 'navbar-expanded': hoveredMenu }"
      @mouseleave="handleMenuLeave"
    >
      <div class="nav-content">
        <div class="nav-left">
          <div 
            class="nav-item"
            @mouseenter="handleMenuEnter('shop')"
            @click="handleShopClick"
          >
            SHOP
          </div>
          <div 
            class="nav-item"
            @mouseenter="handleMenuEnter('collections')"
            @click="handleCollectionsClick"
          >
            COLLECTIONS
          </div>
        </div>
        <div class="nav-right">
          <button class="nav-button">SUBSCRIBE</button>
          <button class="nav-button" @click="handleJump('/login')">LOG IN</button>
          <button class="nav-button">BAG</button>
        </div>
      </div>
      <div class="nav-dropdown">
        <div 
          class="dropdown-content shop"
          :class="{ 'dropdown-content-visible': hoveredMenu === 'shop' }"
          @mouseenter="handleMenuEnter('shop')"
        >
          <div class="dropdown-item" @click="handleJump('/new-arrivals')">NEW ARRIVALS</div>
          <div class="dropdown-item" @click="handleJump('/ready-to-wear')">READY TO WEAR</div>
          <div class="dropdown-item" @click="handleJump('/accessories')">ACCESSORIES</div>
          <div class="dropdown-item" @click="handleJump('/bags')">BAGS</div>
          <div class="dropdown-item" @click="handleJump('/shoes')">SHOES</div>
        </div>
        <div 
          class="dropdown-content collections"
          :class="{ 'dropdown-content-visible': hoveredMenu === 'collections' }"
          @mouseenter="handleMenuEnter('collections')"
        >
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

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: transparent;
    z-index: 1000;
  }

  .navbar-expanded {
    height: auto;
    background: black;
  }

  .nav-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    color: black;
  }

  .navbar-expanded .nav-content {
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
    border: 1px solid rgba(0, 0, 0, 0.5);
    color: black;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .navbar-expanded .nav-button {
    color: white;
    border-color: rgba(255, 255, 255, 0.5);
  }

  .nav-dropdown {
    overflow: hidden;
    height: 0;
    transition: height 0.3s ease;
  }

  .navbar-expanded .nav-dropdown {
    height: auto;
  }

  .dropdown-content {
    display: none;
    flex-direction: column;
    gap: 10px;
    padding: 0 40px;
  }

  .dropdown-content-visible {
    display: flex;
    padding: 20px 40px;
  }

  .dropdown-item {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 2px;
    color: white;
    padding: 5px 0;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .dropdown-item:hover {
    color: #ff4444;
  }
</style>
