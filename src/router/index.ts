import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/new-arrivals',
    name: 'new-arrivals',
    component: () => import('../views/NewArrivals.vue')
  },
  {
    path: '/ready-to-wear',
    name: 'ready-to-wear',
    component: () => import('../views/ReadyToWear.vue')
  },
  {
    path: '/accessories',
    name: 'accessories',
    component: () => import('../views/Accessories.vue')
  },
  {
    path: '/bags',
    name: 'bags',
    component: () => import('../views/Bags.vue')
  },
  {
    path: '/shoes',
    name: 'shoes',
    component: () => import('../views/Shoes.vue')
  },
  {
    path: '/d-preview',
    name: 'd-preview',
    component: () => import('../views/DPreview.vue')
  },
  {
    path: '/c-jul-dec-2025',
    name: 'c-jul-dec-2025',
    component: () => import('../views/CJulDec2025.vue')
  },
  {
    path: '/b-jan-jun-2025',
    name: 'b-jan-jun-2025',
    component: () => import('../views/BJanJun2025.vue')
  },
  {
    path: '/d-oct-2023-dec-2024',
    name: 'd-oct-2023-dec-2024',
    component: () => import('../views/DOct2023Dec2024.vue')
  },
  {
    path: '/product-1',
    name: 'product-1',
    component: () => import('../views/Product1.vue')
  },
  {
    path: '/product-2',
    name: 'product-2',
    component: () => import('../views/Product2.vue')
  },
  {
    path: '/product-3',
    name: 'product-3',
    component: () => import('../views/Product3.vue')
  },
  {
    path: '/product-4',
    name: 'product-4',
    component: () => import('../views/Product4.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
