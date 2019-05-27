<template>
 <div class="testStep1">
   <div class="signup container ">
     <form @submit.prevent="signup" class="card-panel">
       <h2 class="center test">Signup</h2>
       <div class="field">
         <label for="email">Email</label>
         <input type="text" name="email" v-model="email" />
       </div>
       <div class="field">
         <label for="password">Password</label>
         <input type="password" name="password" v-model="password" />
       </div>
       <div class="field">
         <label for="">Phone Number</label>
         <input v-model.number="number" type="number">
       </div>
       <div class="field">
         <label for="alias">Alias</label>
         <input type="text" name="alias" v-model="alias" />
       </div>
       <p v-if="feedback" class="red-text center">{{ feedback }}</p>
       <div class="field center">
         <button @click="signup" class="uk-button uk-button-default uk-button-small tests">Signup</button>
       </div>
     </form>
   </div>
 </div>
</template>

<script>
import slugify from "slugify";
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      alias: null,
      number:null,
      feedback: null,
      slug: null
    };
  },
  methods: {
    signup() {
      if (this.alias && this.email && this.password&&this.number) {
        this.slug = slugify(this.alias, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        let ref = db.collection("users").doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "this alias already exist";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(creds => {
                this.$store.dispatch('set_user',{payload:'kjfldsjkdf'})
                ref.set({
                  alias: this.alias,
                  Phone:this.number,
                  geolocation: "",
                  user_id: creds.user.uid
                });
              })
              .then(() => {
                this.$router.push({ name: "GMap" ,params:{alias:this.alias}});
              })
              .catch(err => {
                console.log(err);
                this.feedback = err.message;
              });
            this.feedback = "this alias is free to use";
          }
        });
      } else {
        this.feedback = "You must enter all fields";
      }
    }
  }
};
</script>

<style scoped>
.signup {
  max-width: 400px;
  margin-top: 60px;
}
.signup h2 {
  font-size: 2.4em;
}
.signup.field {
  margin-bottom: 16px;
}

 .testStep1{
   background-image: url('../../../public/space.jpg');
   width: 1500px;
   height: 1000px;
   margin-top: 0px;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   position: fixed;
 }
  .test{
    /*color: #F44336;*/
  }
  .tests{
    background: #F44336;
    height: 50px;
    width: 100px;
  }
</style>
