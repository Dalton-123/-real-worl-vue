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
import firebase from "firebase";
import about from "@/components/pages/about";
import user from "@/components/User/createProfile";
import memes from "@/views/UploadImages";
import gal from "@/components/pages/gallery";
import main from "./components/frames/bar";
import testing from "./components/testing";
import timestamp from "./components/timestamp";
import Gif from "./components/Gif";

Vue.use(Router);

const router = new Router({
  mode: "history",

  routes: [
    {
      path: "/GMap/:id",
      name: "GMap",
      component: GMap,
      props: true,
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
      path: "/",
      name: "login",
      component: logins
    },

    {
      path: "/bar",
      name: "bar",
      component: main,
      children: [
        {
          path: "/gallery",
          name: "gallery",
          component: gal,
          props: true
        },

        {
          path: "/user",
          name: "UserProfile",
          component: user
        },
        {
          path: "/start/:id",
          name: "GetStarted",
          component: start,
          props: true
        },

        {
          path: "/memes",
          name: "memes",
          component: memes,
          props: true
        }
      ]
    },

    ,
    {
      path: "/about",
      name: "about",
      component: about
    },

    {
      path: "/testing",
      name: "testing",
      component: testing
    },

    {
      path: "/timestamp",
      name: "timestamp",
      component: timestamp
    },

    {
      path: "/Gif",
      name: "Gif",
      component:Gif
    },

    {
      path: "/profile/:id",
      name: "profile",
      component: prof,
      meta: {
        requiresAuth: true
      }
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
