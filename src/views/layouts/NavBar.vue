<template>
  <div class=" " style="">
<div class="">
  <nav class="uk-navbar-container header-holder tt-logo-center" uk-navbar>
    <div class="uk-navbar-left uk-container@l">

      <ul class="uk-navbar-nav">
        <li  > <router-link to="/GMap/Animated"><a ><img  src="https://cdn.pixabay.com/photo/2012/04/26/19/07/crab-42880__340.png" width="70" height="70" alt=""/></a></router-link></li>
<!--        <li ><hr class="uk-divider-vertical" ></li>-->
<!--        <li><a href=""><h1>Meme Galleries</h1></a></li>-->
        <li class="uk-visible@l">

          <a href=""><div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
          </div><input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></a>
        </li>

      </ul>

    </div>
    <div class="uk-navbar-right uk-visible@l">
      <ul class="uk-navbar-nav">
        <li v-if="user">
          <router-link to="/about"
          ><i class="fas fa-grin-alt">about us</i></router-link
          >
        </li>

        <li v-if="!user">
          <router-link to="/signup"
          ><i class="fa fa-sign-out">Signup</i></router-link
          >
        </li>
        <li v-if="!user">
          <router-link :to="{ name: 'login' }"
          ><i class=" fa fa-unlock">Login</i></router-link
          >
        </li>
        <li v-if="user">
          <a href=""> <i class="fa fa-shopping-cart">cart</i></a>
        </li>
        <li v-if="user">
          <a href=""
          ><i class="fa fa-user">{{ user.email }}</i></a
          >
        </li>


        <li v-if="user">
          <a href="" @click="logout"><i class="fa fa-sign-out">logout</i></a>
        </li>

        <li v-if="user">
          <a href="" ><pro></pro></a>
        </li>
      </ul>
    </div>

    <div class="uk-navbar-right uk-hidden@l uk-text-justify">
      <div style="" class="uk-navbar-right" >
        <ul class="uk-navbar-nav"  >
          <li><a href="#offcanvas-slide" uk-toggle ><span uk-icon="menu" style="width:30px;color: #FF2500;"></span></a></li>
        </ul>
      </div>


      <div id="offcanvas-slide" uk-offcanvas>

        <div class="uk-offcanvas-bar">

          <a href="http://www.ncu.edu.jm" class="uk-button-link uk-text-center uk-align-center ">
            <img src="https://cdn.pixabay.com/photo/2012/04/26/19/07/crab-42880__340.png"  alt=""  style="width:100px;padding-top:50px">
          </a>

          <div class="uk-width-1-1@s small">
            <ul class="uk-nav-default uk-nav-parent-icon" uk-nav="multiple: false">
              <li v-if="user">
                <a href="" ><pro></pro></a>
              </li>
              <li v-if="user">
                <router-link to="/about"
                ><i class="fas fa-grin-alt"><span>about us</span></i></router-link
                >
              </li>

              <li v-if="!user">
                <router-link to="/signup"
                ><i class="fa fa-sign-out"><span>Signup</span></i></router-link
                >
              </li>

              <li v-if="!user">
                <router-link :to="{ name: 'login' }"
                ><i class=" fa fa-unlock"><span>Login</span></i></router-link
                >
              </li>

              <li v-if="user">
                <a href=""> <i class="fa fa-shopping-cart"><span>cart</span></i></a>
              </li>
              <li v-if="user">
                <a href=""
                ><i class="fa fa-user"><span>{{ user.email }}</span></i></a
                >
              </li>
              <li v-if="user">
                <a href="" @click="logout"><i class="fa fa-sign-out"><span>logout</span></i></a>
              </li>


            </ul>
          </div>

        </div>
      </div>


    </div>

  </nav>
</div>


  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/init";

export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      user: null,
      password: "",
      alias: null
    };
  },
  computed: {},
  methods: {
    logout() {
      this.$router.push({name:'login'});
      firebase
        .auth()
        .signOut()

    },
    home(){
      this.$router.push({name:'GMap',params:{id:'Animated'}})
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = user;
      }
    });
    if (this.user) {
      db.collection("Profile")
        .where("id", "==", this.user.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.alias = doc.data().alias;
          });
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
        });
    }
  }
};
</script>

<style scoped>
    .header-holder.tt-logo-center {
        /*background-image: linear-gradient(to bottom, #fed100, #009b3a  84%);*/
        /*-pie-background: linear-gradient(to bottom, #fed100, #009b3a  84%);*/
      background-color: white;
      border-bottom: 1px solid #29487d;
      opacity: 0.9;
    }
.test {
  margin-top: 0px;
  background-color: #0a2b4e;
  border-bottom: 1px solid orangered;
}
.me {
  background: #0a2b4e;
}
h3 {
  padding-left: 500px;
  color: white;
}
i {
  /*margin-right: 15px;*/
  font-size: 1.2em;
  color: black;
}
.right {
  padding-right: 0px;
}
nav {
  width: 100%;
}
  h1{font-size:2.2em}
  .small i{
    color:green;
  }
    .small span{
    padding-left: 10px;
  }
</style>
