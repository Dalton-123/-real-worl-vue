import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase'
import foot from '@/views/layouts/footer'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)
Vue.component('foot',foot)


let app = null
firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    new Vue({
      router,
      store,
      render: function(h) {
        return h(App);
      }
    }).$mount("#app");

  }
})



