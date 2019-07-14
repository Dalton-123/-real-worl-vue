<template>
  <div>
    <div class="me">
      <a href="#offcanvas-usage" uk-toggle><i class="fa fa-navicon"></i></a>
    </div>

    <div id="offcanvas-usage" uk-offcanvas="bg-close:false">
      <div class="uk-offcanvas-bar test">
        <!--        <div class="d-flex">-->
        <a @click="home" class="uk-offcanvas-close">
          <i style="margin-top: 0%" class="fa fa-home me"></i
        ></a>

        <hr />
        <div >
<!--          <div class="first">-->
<!--            <p class="user-role">-->
<!--              <i class="fa fa-briefcase"></i>{{ crab.job }}-->
<!--            </p>-->
<!--          </div>-->
          <hr />
          <span class="user-status">
            <i style="color:green" class="fa fa-circle"></i>
            <span>Online</span>

          </span>
            <hr />
          <div class="last">
              <hr>
            <ul>
              <span class="tests">
                <a href="#">
                  <i class="fa fa-tachometer-alt"></i>
                  <span @click="profile">View Profile</span>
                  >
                </a>
              </span>
              <hr />
              <span class="tests ">
                <a href="#">
                  <i class="far fa-gem"></i>
                  <router-link to="/user" class="menu-text"
                    ><span class="">Create Profile</span></router-link
                  >
                </a>
              </span>
              <hr />
              <span class="tests">
                <a href="#">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="menu-text">Add to cart</span>
                </a>
              </span>
              <hr />
              <span class="tests">
                <a href="#">
                  <i class="material-icons">broken_image</i>
                  <router-link to="/gallery" class="menu-text"
                    ><span>Gallery</span></router-link
                  >
                </a>
              </span>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import UIkit from "uikit";
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "mainPage",
  data() {
    return {
      crabs: [],
      alias:null,
      id:firebase.auth().currentUser.uid,
    };
  },
  methods: {
    home() {
      this.$router.push({ name: "GMap", params: { id: "Animated" } });
    },
    profile() {
      this.$router.push({ name: "profile", params: { id:this.alias } });
    }
  },
  created() {
    db.collection("Profile")
            .where('id','==',this.id)
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {

                this.alias=doc.data().alias
              });
            })
            .catch(error => {
              console.log("Error getting documents: ", error);
            });
  },
  mounted() {
    UIkit.offcanvas("#offcanvas-usage").show();
  }
};
</script>

<style scoped>
.test {
  background-image: url("https://cdn.pixabay.com/photo/2019/04/27/08/29/forest-4159500__340.jpg");
  /* width: 1500px;*/
  /* height: 1000px;*/
  /*!*margin-top: 0px;*!*/
  /* padding-top: 0px;*/
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
  overflow-scrolling: auto;

  width: 250px;
}
i {
  font-size: 25px;
  color: orangered;
  /*margin-top: 5px;*/
  margin-right: 8px;
  /*border: 1px solid black;*/
  padding: 3px;
  /*background: black;*/
  opacity: 0.8;
}
.d-flex span {
  margin-left: 10px;
  font-size: 16px;
  margin-top: 20px;
  color: black;
  font-weight: bold;
}
img {
  width: 60px;
  height: 60px;
}
.first p {
  margin-top: 30px;

  font-size: 16px;
  color: black;
}
.last li {
  /*margin-top: 30px;*/
  margin-right: 4px;
  padding: 5px;
}

.last span {
  margin-right: 10px;
}

.me i {
  border: none;
  background: none;
}
.uk-offcanvas-close i {
  border: none;
  background: none;
}
::-webkit-scrollbar {
  width: 10px;
}
.me {
  border: none;
  background: none;
}
.main {
  margin-left: 250px; /* Same as the width of the sidenav */
  height: 700px;
  overflow: auto;
}
span {
  color: black;
}
</style>
