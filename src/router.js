import Vue from "vue";
import Router from "vue-router";
// import welcome from "./components/Welcome.vue";
// import Chat from "./components/Chat.vue";
// import eventlist from "./views/EventList.vue";
// import eventCreate from "./views/EventCreate.vue";
import GMap from "./components/home/GMap.vue";
import Singup from "./components/auth/Signup.vue";
import logins from "./components/auth/login.vue";
import firebase from 'firebase'


Vue.use(Router);

const router =  new Router({
  mode: "history",

  routes: [
    // {
    //   path: "/",
    //   name: "welcome",
    //   component:welcome
    // },
    // {
    //   path: "/chat",
    //   name: "Chat",
    //   component:Chat,
    //   props:true,
    //   beforeEnter:(to,enter,next)=>{
    //     if(to.params.name){
    //       next()
    //     }else{
    //       next({name:'welcome'})
    //     }
    //
    //   }
    // },

    // {
    //   path: "/event/:id",
    //   name: "event-show",
    //   component:eventshow,
    //   props:true
    //
    // },
    // {
    //   path: "/event/create",
    //   name: "event-create",
    //   component:eventCreate,
    //
    // },
    {
      path: "/",
      name: "GMap",
      component:GMap,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: "/signup",
      name: "signup",
      component:Singup
    },
    {
      path: "/login",
      name: "login",
      component:logins
    },

  ]
})
router.beforeEach((to,from,next)=>{
  if(to.matched.some(rec=>rec.meta.requiresAuth)){
    let user=firebase.auth().currentUser
    if(user){
      next()
    }else{
      next({name:'login'})
    }
  }else{
    next()
  }
})
export default router
