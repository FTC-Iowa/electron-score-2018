/* eslint-disable */

import Vue from 'vue'
import axios from 'axios'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueFire)
firebase.initializeApp({
    apiKey: "AIzaSyDQOhAqHtOOjWetSbzfvdlpXB_RMtfb_NU",
    authDomain: "firstinspiresiowa2018.firebaseapp.com",
    databaseURL: "https://firstinspiresiowa2018.firebaseio.com",
    projectId: "firstinspiresiowa2018",
    storageBucket: "firstinspiresiowa2018.appspot.com",
    messagingSenderId: "42095702430"
})
const firestore = firebase.firestore()
firestore.settings({timestampsInSnapshots: true})
export const db = firestore
const firestorage = firebase.storage()
export const storage = firestorage

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
