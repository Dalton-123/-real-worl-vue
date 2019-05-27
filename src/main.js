import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)



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



