import Vue from "vue";
import Router from "vue-router";

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.css";
UIkit.use(Icons);

import GMap from "./components/home/GMap.vue";
import start from "./components/home/GetStarted.vue";
import Singup from "./components/auth/Signup.vue";
import logins from "./components/auth/login.vue";
import prof from "./components/auth/profile.vue";
import chat from "./components/Chat";
import firebase from "firebase";
import about from "@/components/pages/about";
import user from "@/components/User/createProfile";
import profile from "@/components/User/viewProfile";
import news from "@/components/new";
import sidebar from '@/components/frames/sidebar'
import memes from '@/views/UploadImages'
import gal from  "@/components/pages/gallery";
import img from  "@/components/frames/Images";
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
    },{
      path: "/img",
      name: "Images",
      component: img
    },


    {
      path: "/new",
      name: "new",
      component: news,
      children: [
        {
          path: "/profile",
          name: "Profile",
          component: profile
        },
        {
          path: "/user",
          name: "UserProfile",
          component: user
        },
        {
          path: "/chat",
          name: "chat",
          component: chat,
          props: true,

        },
        {
          path: "/memes",
          name: "memes",
          component: memes,
          props: true,

        },
        {
          path: "/gallery",
          name: "gallery",
          component: gal,
          props: true,


        },
        {
          path: "/profile/:id",
          name: "profile",
          component: prof,
          meta: {
            requiresAuth: true
          }
        },

      ]
    },


    ,
    {
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "/user",
      name: "UserProfile",
      component: user
    },
    {
      path: "/profile",
      name: "Profile",
      component: profile
    },
    {
      path: "/sidebar",
      name: "sidebar",
      component: sidebar
    },
    {
      path: "/start/:id",
      name: "GetStarted",
      component:start,
props:true

    },
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
