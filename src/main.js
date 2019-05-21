import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase'
import VueChatScroll from 'vue-chat-scroll'
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';
//
// // loads the Icon plugin
// UIkit.use(Icons);

// components can be called from the imp
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



