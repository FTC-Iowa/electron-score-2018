/* eslint-disable */

// import('roboto-fontface/css/roboto/roboto-fontface.css')
// console.log('main.js')


import Vue from 'vue'
import axios from 'axios'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

import VueGun from 'vue-gun'
import Gun from 'gun/gun'


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/theme/default-dark.css'
Vue.use(VueMaterial)

 import console from './components/Console'
 Vue.use(console)

import App from './App'
import router from './electron/router'
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

const gunPeers = [
    'http://localhost:5000/gun'
]
const gun = new Gun({peers: gunPeers}) // , radisk: true, localStorage: true
Vue.use(VueGun, {
    gun: gun
})


//import gunFire from './gunfire'
//Vue.use(gunFire)


// console.log("starting vue")

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
