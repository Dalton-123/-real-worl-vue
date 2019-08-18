<template>
  <div class=" " style="">
    <!--      <nav class="me ">-->
    <!--          <div class=" container left">-->
    <!--              <router-link :to="{ name: 'GMap' }" class="brand-logo left">-->
    <!--                  &lt;!&ndash;          <img&ndash;&gt;-->
    <!--                  &lt;!&ndash;            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULv4U4pJpoX_qZkAxU969hRb-1eCzWVxTS4-bNrV32qfAfQCuEg"&ndash;&gt;-->
    <!--                  &lt;!&ndash;            style="width: 100px;padding-left: 50px"&ndash;&gt;-->
    <!--                  &lt;!&ndash;            alt=""&ndash;&gt;-->
    <!--                  &lt;!&ndash;          />&ndash;&gt;-->
    <!--                  <span><h2 style="color: white">Meme Galleries</h2></span></router-link-->
    <!--              >-->
    <!--          </div>-->
    <!--          <div style="" class="right">-->
    <!--              <ul class= "" style="margin-left: 550px">-->

    <!--              </ul>-->
    <!--          </div>-->
    <!--      </nav>-->
    <!--      <nav class="uk-navbar-container test" uk-navbar style="">-->
    <!--          <div class="uk-navbar-left il">-->
    <!--              &lt;!&ndash;side bar&ndash;&gt;-->

    <!--              &lt;!&ndash;<bar></bar>&ndash;&gt;-->
    <!--              <ul class="uk-navbar-nav center">-->
    <!--                  <li class="uk-active "><h3>Teaching the world to love better through Meme Technology.</h3></li>-->
    <!--              </ul>-->

    <!--          </div>-->

    <!--      </nav>-->

    <nav class="uk-navbar-container header-holder tt-logo-center" uk-navbar>
<!--                <div class="uk-navbar-left">-->

<!--                    <ul class="uk-navbar-nav">-->
<!--                        <li class="uk-active"><a href="#">Active</a></li>-->
<!--                        <li>-->
<!--                            <a href="#">Parent</a>-->
<!--                            <div class="uk-navbar-dropdown">-->
<!--                                <ul class="uk-nav uk-navbar-dropdown-nav">-->
<!--                                    <li class="uk-active"><a href="#">Active</a></li>-->
<!--                                    <li><a href="#">Item</a></li>-->
<!--                                    <li><a href="#">Item</a></li>-->
<!--                                </ul>-->
<!--                            </div>-->
<!--                        </li>-->
<!--                        <li><a href="#">Item</a></li>-->
<!--                    </ul>-->

<!--                </div>-->

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
          <li v-if="user">
            <a> <requests></requests></a>
          </li>
          <li v-if="user">
            <a> <notification></notification></a>
          </li>
<!--          <li v-if="user">-->
<!--            <span> <frens></frens></span>-->
<!--          </li>-->
          <li v-if="user">
            <a> <upload></upload></a>
          </li>
          <li v-if="user">
            <a href="" @click="logout"><i class="fa fa-sign-out">logout</i></a>
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
