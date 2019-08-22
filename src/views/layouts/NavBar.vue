<template>
  <div class=" " style="">


    <nav class="uk-navbar-container header-holder tt-logo-center" uk-navbar>
                <div class="uk-navbar-left uk-container">

                    <ul class="uk-navbar-nav">
                      <li><a ><img src="https://cdn.pixabay.com/photo/2012/04/26/19/07/crab-42880__340.png" width="70" height="70" alt=""/></a></li>
<!--                      <li ><hr class="uk-divider-vertical" ></li>-->
<!--                      <li><a href=""><h1>Meme Galleries</h1></a></li>-->
                      <li class="">

                        <a href=""><div class="input-group-prepend">
                          <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
                        </div><input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></a>
                      </li>

                    </ul>

                </div>

      <div class="uk-navbar-right ">
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
            <a href="" @click="profile"
              ><i class="fa fa-user">{{ user.email }}</i></a
            >
          </li>

<!--          <li v-if="user">-->
<!--            <span> <sidebar></sidebar></span>-->
<!--          </li>-->
<!--          <li v-if="user">-->
<!--            <a> <requests></requests></a>-->
<!--          </li>-->
<!--          <li v-if="user">-->
<!--            <a> <notification></notification></a>-->
<!--          </li>-->
<!--          <li v-if="user">-->
<!--            <span> <frens></frens></span>-->
<!--          </li>-->
<!--          <li v-if="user">-->
<!--            <a> <upload></upload></a>-->
<!--          </li>-->

          <li v-if="user">
            <a href="" @click="logout"><i class="fa fa-sign-out">logout</i></a>
          </li>

          <li v-if="user">
            <a href="" ><pro></pro></a>
          </li>
        </ul>
      </div>
    </nav>
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
        background-image: linear-gradient(to bottom, #fed100, #009b3a  84%);
        -pie-background: linear-gradient(to bottom, #fed100, #009b3a  84%);
      background-color: #4267b2;
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
</style>
