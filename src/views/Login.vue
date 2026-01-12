<script setup lang="ts">
import { ref } from 'vue'

// 表单数据
const email = ref('')
const password = ref('')

// 处理登录提交
const handleLogin = (event: Event) => {
  event.preventDefault()
  // 这里可以添加登录逻辑
  console.log('Login submitted:', { email: email.value, password: password.value })
}
</script>

<template>
  <div class="login-container">
    <!-- 品牌名称 -->
    <div class="brand-section">
      <router-link to="/" class="brand-link">
        <h1 class="brand-title">PHOEBE<br>PHILO</h1>
      </router-link>
    </div>

    <!-- 登录表单 -->
    <div class="login-form-container">
      <div class="login-form">
        <h2 class="login-title">LOG IN</h2>
        <p class="login-subtitle">Use stored information to expedite checkout, or create an account here.</p>
        
        <form @submit="handleLogin">
          <div class="form-group">
            <label for="email" class="form-label">EMAIL*<span class="required">*</span></label>
            <input 
              type="email" 
              id="email" 
              v-model="email"
              class="form-input"
              required
            >
          </div>
          
          <div class="form-group">
            <label for="password" class="form-label">PASSWORD*<span class="required">*</span></label>
            <input 
              type="password" 
              id="password" 
              v-model="password"
              class="form-input"
              required
            >
            <a href="#" class="forgot-password">Forgot password?</a>
          </div>
          
          <button type="submit" class="login-button">LOG IN</button>
          
          <div class="register-link">
            <a href="#">Register</a>
          </div>
        </form>
      </div>
    </div>

    <!-- 底部品牌名称 -->
    <div class="brand-section">
      <router-link to="/" class="brand-link">
        <h1 class="brand-title">PHOEBE<br>PHILO</h1>
      </router-link>
    </div>

    <!-- 页脚 -->
    <div class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <span class="shipping-info">SHIPPING TO: UNITED STATES</span>
        </div>
        <div class="footer-links">
          <a href="#" class="footer-link">HELP</a>
          <a href="#" class="footer-link">IMPACT</a>
          <a href="#" class="footer-link">LEGAL</a>
          <a href="#" class="footer-link">SUBSCRIBE</a>
          <a href="#" class="footer-link">INSTAGRAM</a>
          <span class="copyright">© 2023</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  width: 100%;
  min-height: 100vh;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 品牌区域 */
.brand-section {
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-link {
  text-decoration: none;
  color: #000;
}

.brand-link:hover {
  text-decoration: none;
}

.brand-title {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 4px;
  text-align: center;
  line-height: 1;
  margin: 0;
}

/* 登录表单 */
.login-form-container {
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
  margin-bottom: 60px;
}

.login-form {
  width: 100%;
}

.login-title {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 10px;
  text-align: center;
}

.login-subtitle {
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 40px;
  text-align: center;
  line-height: 1.5;
  color: #666;
}

/* 表单样式 */
.form-group {
  margin-bottom: 30px;
}

.form-label {
  display: block;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.required {
  color: #000;
}

.form-input {
  width: 100%;
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 14px;
  font-weight: 400;
  background: transparent;
  outline: none;
}

.form-input:focus {
  border-bottom: 2px solid #000;
}

.forgot-password {
  display: block;
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: 12px;
  background: #000;
  color: #fff;
  border: none;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 20px;
  transition: opacity 0.3s ease;
}

.login-button:hover {
  opacity: 0.8;
}

.register-link {
  text-align: center;
}

.register-link a {
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.register-link a:hover {
  text-decoration: underline;
}

/* 页脚 */
.footer {
  width: 100%;
  padding: 40px 20px;
  border-top: 1px solid #eee;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.footer-left {
  text-align: center;
}

.shipping-info {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.footer-link {
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-link:hover {
  text-decoration: underline;
}

.copyright {
  font-size: 12px;
  font-weight: 400;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .brand-title {
    font-size: 32px;
    letter-spacing: 3px;
  }
  
  .login-form-container {
    max-width: 300px;
  }
  
  .footer-links {
    gap: 15px;
  }
  
  .footer-link {
    font-size: 11px;
  }
}
</style>