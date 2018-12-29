import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {fb, db} from '../firebase-config'
import firebase from 'firebase'
import Social from './components/Social.vue'

Vue.config.productionTip = false


Vue.component('social', Social)
/* för att slippa importera firebase överallt */

window.firebase=firebase;

let app = '';
firebase.auth().onAuthStateChanged(() =>{
  if (!app){

   app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});

