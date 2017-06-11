import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homePage'
import Issues from '@/pages/issues'
import Products from '@/pages/products'
import ProductsHome from '@/pages/productsHome'
import GoodsCart from '@/pages/goodsCart'
import Login from '@/pages/login'
import ProductsDetailInfo from '@/pages/productsDetailInfo'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/issues',
    name: 'Issues',
    component: Issues
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    // redirect: '/products',
    children: [{
      path: '/',
      component: ProductsHome
    },
    {
      path: 'swifter-tips',
      component: ProductsDetailInfo
    },
    {
      path: 'functional-swift',
      component: ProductsDetailInfo
    },
    {
      path: 'core-data',
      component: ProductsDetailInfo
    },
    {
      path: 'advanced-swift',
      component: ProductsDetailInfo
    }
    ]
  },
  {
    path: '/goodscart',
    name: 'GoodsCart',
    component: GoodsCart
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }

  ]
})
