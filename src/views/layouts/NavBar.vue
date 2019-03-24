<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <router-link :to="{ name: 'GMap' }" class="brand-logo left"
          ><img src="@/assets/logo.png" style="width: 80px;padding-left: 50px" alt=""> Muscle Crab</router-link>
        <ul class="right">
          <li v-if="!user"><router-link to="/signup">Signup</router-link></li>
          <li v-if="!user"><router-link :to="{ name: 'login' }">Login</router-link></li>
          <li v-if="user"><a>{{user.email}}</a></li>
          <li v-if="user"><a href="" @click="logout">logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "NavBar",
  data() {
    return {
      user:null
    };
  },
  methods: {
    logout() {
      fireba.auth().signOut().then(() => this.$router.push("/login"));
    }
  },
  created(){
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      this.user=user
    }else{
      this.user=null
    }
  })
  }
};
</script>

<style scoped></style>
