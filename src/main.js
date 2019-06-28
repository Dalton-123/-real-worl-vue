import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase'
import home from '@/views/layouts/foot'
import VueChatScroll from 'vue-chat-scroll'
import profiles from '@/components/User/viewProfile'
import navbar from '@/views/layouts/NavBar'
import foot from '@/views/layouts/foot'
import photo from '@/components/frames/Photo'
import sidebar from '@/components/frames/sidebar'
import sidegal from '@/components/frames/sidegallery'
import bars from '@/components/frames/pushbar'
import banner from '@/views/layouts/banner'
import upload from '@/views/UploadImages'
import imageInfo from '@/components/frames/imageInfo'
import pro from '@/components/frames/pro'
import topMemes from '@/components/topMemes/topMemes'


Vue.filter('convert',(value)=>{
  return value.slice(0,80)
})

Vue.use(VueChatScroll)


Vue.component('home',home)
Vue.component('profiles',profiles)
Vue.component('navbar',navbar)
Vue.component('foot',foot)
Vue.component('photo',photo)
Vue.component('sidebar',sidebar)
Vue.component('sidegal',sidegal)
Vue.component('pushbar',bars )
Vue.component('banner',banner)
Vue.component('upload',upload)
Vue.component('imageInfo',imageInfo)
Vue.component('pro',pro)
Vue.component('topMemes',topMemes)

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



