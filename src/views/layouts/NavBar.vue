<template>
  <div class="navbar">
    <nav class="test">
      <div class="container">
        <router-link :to="{ name: 'GMap' }" class="brand-logo left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmrga1rLMfSbwLGHoNXhwMcS__9vHP3JXq0JY74jaUEFyXLza" style="width: 40px;padding-left: 10px" alt=""> Meme Galleries</router-link>
        <ul class="right">
          <li v-if="!user"><router-link to="/signup"><span class="" uk-icon="sign-in"></span>Signup</router-link></li>
          <li v-if="!user"><router-link :to="{ name: 'login' }"><span class="" uk-icon="unlock"></span>Login</router-link></li>
          <li v-if="user"><span class="" uk-icon="user"></span>{{user.email}}</li>
          <li v-if="user"><a href="" @click="logout"><span class="" uk-icon="sign-out"></span>logout</a></li>

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
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.push("/login"));
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

<style scoped>
  .test{
    background: #F44336;;
  }
  /*span{*/
  /*  padding-right: 10px;*/


  /*}*/
</style>
