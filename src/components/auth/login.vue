<template>
  <div class="login container">
    <form @submit.prevent="login" class="card-panel">
      <h2 class=" center deep-purple-text">login</h2>
      <div class="field">
        <label for="email">Email</label>
        <input type="text" name="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <p v-if="feedback" style="color:red" class="center red-text-centered">
        {{ feedback }}
      </p>
      <div class="field center">
        <button class="btn deep-purple">login</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    login() {
      if (this.password, this.email) {
       firebase.auth().signInWithEmailAndPassword( this.email,this.password,)
           .then(cred=>{
               console.log(cred.user)
               this.$router.push({name:'GMap'})
           }).catch(err=>{
           this.feedback = err.message
       })


      } else {
        this.feedback = "you need to enter email and password";
      }
    }
  }
};
</script>

<style scoped>
.login {
  max-width: 40%;
  margin-top: 60px;
}
.login h2 {
  font-size: 2.4em;
}
.login .field {
  margin-top: 16px;
}
</style>
