import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    catalogs: JSON.parse(localStorage.getItem('catalogs') || '[]'),
    categories: JSON.parse(localStorage.getItem('categories') || '[]'),
    products: [],
    productitem: [],
    // products: JSON.parse(localStorage.getItem('products') || '[]'),
    // productitem: JSON.parse(localStorage.getItem('productitem') || '[]'),
    // cart: [],
    // beforecart: [],
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),
    beforecart: JSON.parse(localStorage.getItem('beforecart') || '[]')
  },
  mutations: {
    SET_CATALOGS (state, catalogs) {
      state.catalogs = catalogs
      localStorage.setItem('catalogs', JSON.stringify(state.catalogs))
    },
    SET_CATEGORIES (state, categories) {
      state.categories = categories
      localStorage.setItem('categories', JSON.stringify(state.categories))
    },
    SET_PRODUCTS (state, products) {
      state.products = products
      // localStorage.setItem('products', JSON.stringify(state.products))
    },
    SET_PRODUCTITEM (state, productitem) {
      state.productitem = productitem
      // localStorage.setItem('productitem', JSON.stringify(state.productitem))
    },
    SET_CART (state, product) {
      state.cart.push(product)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    REMOVEALL_FROM_CART (state) {
      state.cart = []
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    REMOVEALL_FROM_BEFORECART (state) {
      state.beforecart = []
      localStorage.setItem('beforecart', JSON.stringify(state.beforecart))
    },
    REMOVE_FROM_CART (state, index) {
      state.cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    REMOVE_FROM_BEFORECART (state, index) {
      state.beforecart.splice(index, 1)
      localStorage.setItem('beforecart', JSON.stringify(state.beforecart))
    }
  },
  actions: {
    ADD_TO_CART ({ commit }, product) {
      commit('SET_CART', product)
    },
    // BEFORE_CART({ commit }, item) {
    //   commit('SET_BEFORE_CART', item)
    // },
    DELETE_FROM_CART ({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    },
    DELETE_FROM_BEFORE ({ commit }, index) {
      commit('REMOVE_FROM_BEFORECART', index)
    },
    DELETEALL_FROM_CART ({ commit }) {
      commit('REMOVEALL_FROM_CART')
    },
    DELETEALL_FROM_BEFORE ({ commit }) {
      commit('REMOVEALL_FROM_BEFORECART')
    },
    // GET_CATALOGS({
    //   commit
    // }) {
    //   return axios('https://e430fbd60ad0.ngrok.io/api/catalog', {
    //     method: "GET"
    //   })
    //     .then((catalogs) => {
    //       commit('SET_CATALOGS', catalogs.data)

    //       return catalogs;
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //       return error;
    //     })
    // },
    GET_CATALOGS ({
      commit
    }, catalogs) {
      commit('SET_CATALOGS', catalogs)
    },
    GET_CATEGORIES ({
      commit
    }, categories) {
      commit('SET_CATEGORIES', categories)
    },
    // GET_CART({
    //   commit
    // }, cart) {

    //   commit('SET_CART', cart)
    // },
    GET_PRODUCTS ({
      commit
    }, products) {
      commit('SET_PRODUCTS', products)
    },
    GET_PRODUCTITEM ({
      commit
    }, productitem) {
      commit('SET_PRODUCTITEM', productitem)
    }
  },

  getters: {
    CATALOGS (state) {
      return state.catalogs
    },
    CATEGORIES (state) {
      return state.categories
    },
    PRODUCTS (state) {
      return state.products
    },
    PRODUCTID (state) {
      return state.productitem
    },
    BEFORECART (state) {
      return state.beforecart
    },
    CART (state) {
      return state.cart
    },
    CartSect: state => section => {
      return state.cart.find(todo => todo.section === section)
    },
    CatalogPath: state => path => {
      return state.catalogs.find(todo => todo.path === path)
    },
    CategoriesPath: state => categpath => {
      return state.categories.find(todo => todo.categpath === categpath)
    },
    ProductId: state => id => {
      return state.products.find(todo => todo.id === id)
    }

  }

})
