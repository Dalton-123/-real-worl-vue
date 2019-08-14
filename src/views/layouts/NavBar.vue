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
      <div style="" class="right">
        <ul class= "" style="margin-left: 550px">

          <li v-if="user">
            <router-link to="/about"
            ><i class="fas fa-grin-alt" >about us</i></router-link
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
            <a href="" @click="profile"><i class="fa fa-user">{{ user.email }}</i></a>
          </li>

          <li v-if="user">
            <span> <sidebar></sidebar></span>
          </li>
            <li v-if="user">
            <span> <requests></requests></span>
          </li>
            <li v-if="user">
                <span> <notification></notification></span>
            </li>
            <li v-if="user">
            <span> <frens></frens></span>
          </li> <li v-if="user">
            <span> <upload></upload></span>
          </li>
          <li v-if="user">
            <a href="" @click="logout"
              ><i class="fa fa-sign-out" >logout</i></a
            >
          </li>

        </ul>
      </div>
    </nav>
    <nav class="uk-navbar-container test" uk-navbar style="">
      <div class="uk-navbar-left il">
<!--side bar-->

<!--<bar></bar>-->
        <ul class="uk-navbar-nav center">
          <li class="uk-active "><h3>Teaching the world to love better through Meme Technology.</h3></li>
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
  components:{

  },
  data() {
    return {
      user: null,
      password: "",
        alias:null
    };
  },
  computed: {


  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {

          this.$router.push("/")
        });
    },
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      } else {
        this.user = user
      }
    });
     if(this.user){
         db.collection("Profile")
             .where('id','==',this.user.uid)
             .get()
             .then(querySnapshot => {
                 querySnapshot.forEach(doc => {

                     this.alias=doc.data().alias
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
  .test{
    margin-top: 0px;
    background-color: #0a2b4e;
    border-bottom: 1px solid orangered;

  }
.me{background: #0a2b4e}
h3 {
 padding-left: 500px;
  color: white;

}
  i{margin-right: 15px;
  font-size: 1.2em;
    color: orangered;
  }
  .right{
    padding-right: 0px;
  }
    nav{width: 100%}
</style>
