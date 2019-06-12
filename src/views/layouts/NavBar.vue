<template>
  <div class="me " style="">
    <nav class="me ">
      <div class=" container left">
        <router-link :to="{ name: 'GMap' }" class="brand-logo left">
<!--          <img-->
<!--            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULv4U4pJpoX_qZkAxU969hRb-1eCzWVxTS4-bNrV32qfAfQCuEg"-->
<!--            style="width: 100px;padding-left: 50px"-->
<!--            alt=""-->
<!--          />-->
          <span><h2 style="color: white">Meme Galleries</h2></span></router-link
        >
      </div>
      <div style="margin-left: 50px" class="me ">
        <ul class="right me ">
          <li v-if="user">
            <router-link to="/about"
            ><i class="fa fa-users" >about us</i></router-link
            >
          </li>
          <li v-if="!user">
            <router-link to="/signup"
              ><i class="fa fa-sign-out" >Signup</i></router-link
            >
          </li>
          <li v-if="!user">
            <router-link :to="{ name: 'login' }"
              ><span class="	fa fa-unlock" >Login</span></router-link
            >
          </li>
          <li v-if="user">
            <i href=""><span class="fa fa-shopping-cart">cart</span></i>
          </li>
          <li v-if="user">
            <i class="fa fa-user">{{ user.email }}</i>
          </li>
          <li v-if="user">
            <a href="" @click="logout"
              ><i class="fa fa-sign-out" >logout</i></a
            >
          </li>
        </ul>
      </div>
    </nav>
    <nav class="uk-navbar-container test" uk-navbar style="margin-top: -10px">
      <div class="uk-navbar-left il">

        <ul class="uk-navbar-nav center">
          <li class="uk-active "><h3>Teaching the world to love better through Meme Technology.</h3></li>
        </ul>

      </div>

    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";



export default {
  name: "NavBar",
  data() {
    return {
      user: null,
      password: ""
    };
  },
  computed: {
    ...mapGetters(["CurrentUser"])

  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setUser=""
          this.$router.push("/login")
        });
    },
    setUser() {
      this.$store.dispatch("set_user", { payload: "kjfldsjkdf" });

    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      } else {
        this.user = user
      }
    });

  }
};
</script>

<style scoped>
  .test{
    margin-top: 0px;
    background-color: #0a2b4e;
    border-bottom: 1px solid orangered;

  }
.me{background: #0a2b4e}
h3 {
 padding-left: 400px;
  color: white;

}
  i{margin-right: 15px;
  font-size: 1.2em;
  }
  .right{
    padding-right: 0px;
  }
</style>
