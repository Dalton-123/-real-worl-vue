<template>
 <div>
   <navbar></navbar>
  <div class="uk-section uk-section-muted" style="height: 100% !important;">
    <div class="container register" >
      <div class="row">
        <div class="col-md-3 register-left">
          <img src="https://cdn.pixabay.com/photo/2012/04/26/19/07/crab-42880__340.png" alt=""/>
          <h3>Welcome</h3>
          <p style="font-size: 1.2em">By signing up, I agree to  Memes Galleries <span><TermsCondition></TermsCondition></span>.</p>
          <router-link to="/login"><input style="background: #fed100;color:white" type="submit" name="" value="Login"/></router-link><br/>
        </div>
        <div class="col-md-9 register-right">
<!--          <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">-->
<!--            <li class="nav-item">-->
<!--              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Employee</a>-->
<!--            </li>-->
<!--            <li class="nav-item">-->
<!--              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hirer</a>-->
<!--            </li>-->
<!--          </ul>-->
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <h3 class="register-heading">Signup today</h3>
              <div class="row register-form">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Email *" v-model="email" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password *" v-model="password" />
                  </div>
                  <div class="form-group">
                    <input  class="form-control" placeholder="Your Phone *" v-model.number="number" type="number">
                  </div>

                  <div class="form-group">
                    <input  class="form-control" placeholder="Alias *" v-model="alias" type="text">
                  </div>
                  <div class="form-group">
                    <p style="color: red" v-if="feedback" class="red-text center">{{ feedback }}</p>
                  </div>
<!--                  <div class="form-group">-->
<!--                    <input type="text" name="alias" v-model="alias" class="form-control"  placeholder="Alias *"/>-->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                    <div class="maxl">-->
<!--                      <label class="radio inline">-->
<!--                        <input type="radio" name="gender" value="male" checked>-->
<!--                        <span> Male </span>-->
<!--                      </label>-->
<!--                      <label class="radio inline">-->
<!--                        <input type="radio" name="gender" value="female">-->
<!--                        <span>Female </span>-->
<!--                      </label>-->
<!--                    </div>-->
<!--                  </div>-->
                </div>
<!--                <div class="col-md-6">-->
<!--                  <div class="form-group">-->
<!--                    <input type="email" class="form-control" placeholder="Your Email *" value="" />-->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                    <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" value="" />-->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                    <select class="form-control">-->
<!--                      <option class="hidden"  selected disabled>Please select your Sequrity Question</option>-->
<!--                      <option>What is your Birthdate?</option>-->
<!--                      <option>What is Your old Phone Number</option>-->
<!--                      <option>What is your Pet Name?</option>-->
<!--                    </select>-->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                    <input type="text" class="form-control" placeholder="Enter Your Answer *" value="" />-->
<!--                  </div>-->
<!--                  <input type="submit" class="btnRegister"  value="Register"/>-->
<!--                </div>-->
              </div>
            </div>
<!--            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">-->
<!--              <h3  class="register-heading">Apply as a Hirer</h3>-->
<!--              <div class="row register-form">-->
<!--                <div class="col-md-6">-->
<!--                  <div class="form-group">-->
<!--                    <input type="text" class="form-control" placeholder="First Name *" value="" />-->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                    <input type="text" class="form-control" placeholder="Last Name *" value="" />-->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                    <input type="email" class="form-control" placeholder="Email *" value="" />-->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                    <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone *" value="" />-->
<!--                  </div>-->


<!--                </div>-->
<!--                <div class="col-md-6">-->
<!--                  <div class="form-group">-->
<!--                    <input type="password" class="form-control" placeholder="Password *" value="" />-->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                    <input type="password" class="form-control" placeholder="Confirm Password *" value="" />-->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                    <select class="form-control">-->
<!--                      <option class="hidden"  selected disabled>Please select your Sequrity Question</option>-->
<!--                      <option>What is your Birthdate?</option>-->
<!--                      <option>What is Your old Phone Number</option>-->
<!--                      <option>What is your Pet Name?</option>-->
<!--                    </select>-->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                    <input type="text" class="form-control" placeholder="`Answer *" value="" />-->
<!--                  </div>-->
            <div class="form-group">
              <button @click="signup"class="btnRegister">Signup</button>
            </div>
<!--                  <input type="submit"   value="Register"/>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>















     <!--   <div class="testStep1">-->
<!--     <div class="signup container ">-->
<!--       <form @submit.prevent="signup" class="card-panel">-->
<!--         <img src="signup.svg" alt="">-->
<!--         <h2 class="center test">Signup</h2>-->
<!--         <div class="field">-->
<!--           <label for="email">Email</label>-->
<!--           <input type="text" name="email" v-model="email" />-->
<!--         </div>-->
<!--         <div class="field">-->
<!--           <label for="password">Password</label>-->
<!--           <input type="password" name="password" v-model="password" />-->
<!--         </div>-->
<!--         <div class="field">-->
<!--           <label for="">Phone Number</label>-->
<!--           <input v-model.number="number" type="number">-->
<!--         </div>-->
<!--         <div class="field">-->
<!--           <label for="alias">Alias</label>-->
<!--           <input type="text" name="alias" v-model="alias" />-->
<!--         </div>-->
<!--         <p v-if="feedback" class="red-text center">{{ feedback }}</p>-->
<!--         <div class="field center">-->
<!--           <button @click="signup" class="uk-button uk-button-default uk-button-small tests">Signup</button>-->
<!--         </div>-->
<!--       </form>-->
<!--     </div>-->

<!--   </div>-->
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
      if (this.alias && this.email && this.password) {
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
                ref.set({
                  alias: this.slug,
                  Phone:this.number,
                  geolocation: "",
                  user_id: creds.user.uid
                });
              }).then(()=>{
              var user = firebase.auth().currentUser;
              user.sendEmailVerification().then(()=> {
                // Email sent.
              }).catch((error)=>{
                // An error happened.
              });
            })
              .then(() => {
                this.$router.push({ name: "UserProfile" });

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



.register{
  background: -webkit-linear-gradient(left, #009b3a, #fed100);
  margin-top: 3%;
  padding: 3%;
}
.register-left{
  text-align: center;
  color: #fff;
  margin-top: 4%;
}
.register-left input{
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  width: 60%;
  background: #f8f9fa;
  font-weight: bold;
  color: #383d41;
  margin-top: 30%;
  margin-bottom: 3%;
  cursor: pointer;
}
.register-right{
  background: #f8f9fa;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
}
.register-left img{
  margin-top: 15%;
  margin-bottom: 5%;
  width: 25%;
  -webkit-animation: mover 2s infinite  alternate;
  animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
}
@keyframes mover {
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
}
.register-left p{
  font-weight: lighter;
  padding: 12%;
  margin-top: -9%;
}
.register .register-form{
  padding: 10%;
  margin-top: 10%;
}
.btnRegister{
  float: right;
  margin-top: 10%;
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  background: #fed100;
  color: #fff;
  font-weight: 600;
  width: 10%;
  cursor: pointer;
  margin-bottom: 20px;
}
.register .nav-tabs{
  margin-top: 3%;
  border: none;
  background: #0062cc;
  border-radius: 1.5rem;
  width: 18%;
  float: right;
}
.register .nav-tabs .nav-link{
  padding: 2%;
  height: 34px;
  font-weight: 600;
  color: #fff;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover{
  border: none;
}
.register .nav-tabs .nav-link.active{
  width: 100px;
  color: #0062cc;
  border: 2px solid #0062cc;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
.register-heading{
  text-align: center;
  margin-top: 8%;
  margin-bottom: -15%;
  color: #495057;
}
</style>
