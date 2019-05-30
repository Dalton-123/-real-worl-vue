import Vue from "vue";
import Router from "vue-router";



import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.css'
UIkit.use(Icons);


import GMap from "./components/home/GMap.vue";
import Singup from "./components/auth/Signup.vue";
import logins from "./components/auth/login.vue";
import prof from "./components/auth/profile.vue";
import chat from "./components/Chat";
import test from "./components/testSidebar";
import firebase from "firebase";
import about from '@/components/pages/about'
Vue.use(Router);

const router = new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "GMap",
      component: GMap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signup",
      name: "signup",
      component: Singup
    },
    {
      path: "/login",
      name: "login",
      component: logins
    },

    {
      path: "/profile/:id",
      name: "profile",
      component: prof
    },

    {
      path: "/chat",
      name: "chat",
      component: chat,
      props:true,
      beforeEnter:((to, from, next) => {
     if(to.params.name){
       next()
     }else{
       next({name:'GMap'})
     }
})


    },
      {
          path: "/test",
          name: "testSidebar",
          component: test,

      },{
          path: "/about",
          name: "about",
          component: about,

      }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    let user = firebase.auth().currentUser;
    if (user) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});
export default router;
