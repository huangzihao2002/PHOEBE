<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="app">


    <div class="scroll-container">
      <section class="section video-section">
        <img 
          src="/253D6653B9435F32E789EDB11B054579.jpg"
          alt="Hero"
          class="video-background"
        >
        <h1 class="page-title">PHOEBE<br>PHILO</h1>
      </section>

      <section class="section split-section">
        <div class="split-left">
          <img src="/4EDC00D1C0BEB62EC362A93A70C69904.jpg" alt="BAGS" class="split-image">
        </div>
        <div class="split-right">
          <img src="/40D7E8A19689CBA4431B6DC02F81C812.jpg" alt="ACCESSORIES" class="split-image">
        </div>
      </section>

      <section class="section image-section">
        <img src="/4C6B4653D148C7E8F69D748F54B34ED3.jpg" alt="Model" class="full-image">
      </section>

      <section class="section image-section">
        <img src="/1144C6DD28A14A5995C513FC8C5C4BE8.jpg" alt="Model" class="full-image">
      </section>

      <section class="section footer-section">
        <h2 class="footer-title">PHOEBE PHILO</h2>
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
    line-height: 0.9;
    text-align: center;
  }

.video-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-title {
    font-size: 40px;
    font-weight: 700;
    color: white;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0;
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
