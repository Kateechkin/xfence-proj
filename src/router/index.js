import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Contact from '../views/contact.vue'
import Slader from '../views/slader.vue'
import Catalog from '../views/catalog.vue'
import Order from '../views/order.vue'
import OrderReary from '../views/order-ready.vue'
import Guard from '../views/catalog-item/guard.vue'
import GuardItem from '../views/catalog-item/guard-item.vue'
import GuardList from '../views/catalog-item/guard-list.vue'
import Errors from '../views/error.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      showCart2: true
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      showCart2: true
    }
  },
  {
    path: '/slader',
    name: 'slader',
    component: Slader,
    meta: {
      showCart2: true
    }

  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog,
    meta: {
      showCart2: true
    }
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    meta: {
      showCart2: true
    }
  },
  {
    path: '/ready',
    name: 'ready',
    component: OrderReary,
    meta: {
      showCart2: true
    }
  },
  {
    path: '/catalog/:path',
    name: 'catalogItem',
    component: Guard,
    meta: {
      showCart2: true
    }
  },
  {
    path: '/catalog/:path/:categpath',
    name: 'catalogItemList',
    component: GuardList,
    meta: {
      showCart2: true
    }
  },
  {
    path: '/catalog/:path/:categpath/:id',
    name: 'catalogItemItem',
    component: GuardItem,
    meta: {
      showCompPage: false,
      showCart2: true

    }
  },
  { path: '/:pathMatch(.*)*', component: Errors }
  // {
  //   path: '/catalog/guard',
  //   name: 'guard',
  //   component: Guard
  // },
  // {
  //   path: '/catalog/prestige',
  //   name: 'prestige',
  //   component: Guard
  // },
  // {
  //   path: '/catalog/standart',
  //   name: 'standart',
  //   component: Guard
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    document.getElementById('app').scrollIntoView()
  }
})

export default router
