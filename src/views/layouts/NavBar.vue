<template>
  <div class=" " style="background: #0a2b4e">
    <nav class="">
      <div class=" left">
<!--        <router-link :to="{ name: 'GMap' }" class="brand-logo left">-->
<!--          <img-->
<!--            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmrga1rLMfSbwLGHoNXhwMcS__9vHP3JXq0JY74jaUEFyXLza"-->
<!--            style="width: 100px;padding-left: 50px"-->
<!--            alt=""-->
<!--          />-->
<!--          Meme Galleries</router-link-->
<!--        >-->
      </div>
      <div style="margin-left: 50px">
        <ul class="centre ">
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
.test {
  /*background: #0a2b4e;*/
    /*width: 3000px;*/

}

.right {
 margin-left: 40px;

}
  i{margin-right: 15px;
  font-size: 1.2em;
  }
</style>
