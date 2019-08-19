<template>
  <div>
    <navbar></navbar>

    <div class="first">


      <div class="uk-grid-match">
        <div>
          <div class="uk-card uk-card-body" uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">
            <div class="container"   uk-scrollspy-class="uk-animation-slide-top">
              <div class="d-flex justify-content-center h-100">
                <div class="card uk-card" >
                  <div class="card-header">
                    <h3>Sign In</h3>
                    <div class="d-flex justify-content-end social_icon">
                      <span><i class="fab fa-facebook-square"></i></span>
                      <span><i class="fab fa-google-plus-square"></i></span>
                      <span><i class="fab fa-twitter-square"></i></span>
                    </div>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="input-group form-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="fas fa-user"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="email" v-model="email">

                      </div>
                      <div class="input-group form-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="fas fa-key"></i></span>
                        </div>
                        <input type="password" class="form-control" placeholder="password" v-model="password">
                      </div>
                      <!--                <div class="row align-items-center remember">-->
                      <!--&lt;!&ndash;                  <input type="checkbox">Remember Me&ndash;&gt;-->
                      <!--                </div>-->
                      <p style="color: red">{{feedback}}</p>
                      <div class="">

                      </div>
                    </form>
                    <button class="btn float-right login_btn" @click="login">Login</button>
                  </div>
                  <div class="card-footer">
                    <div class="d-flex justify-content-center links">
                      Don't have an account?<a href="#">Sign Up</a>
                    </div>
                    <div class="d-flex justify-content-center">
                      <a href="#">Forgot your password?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


















      <vue-particles style=""
                     color="#009b3a"
                     :particleOpacity="0.7"
                     :particlesNumber="100"
                     shapeType="circle"
                     :particleSize="4"
                     linesColor="#fed100"
                     :linesWidth="1"
                     :lineLinked="true"
                     :lineOpacity="0.4"
                     :linesDistance="150"
                     :moveSpeed="6"
                     :hoverEffect="true"
                     hoverMode="grab"
                     :clickEffect="true"
                     clickMode="push"
      >
      </vue-particles>
    </div>










    <div class="testStep1" uk-scrollspy-class="uk-animation-slide-top">
      <div class="login container uk-card uk-card-default">
        <form @submit.prevent="login" class="card">
          <h2 class=" center test">login</h2>
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
            <button @click="login" class="tests">login</button>
          </div>
        </form>
      </div>
    </div>






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
      feedback: null,

    };
  },
  methods: {
    login() {
      if (this.password, this.email) {
       firebase.auth().signInWithEmailAndPassword( this.email,this.password,).then((cred)=>{
        if(cred.user.emailVerified != true){
          cred.user.sendEmailVerification().then(()=>{
            // Email sent.
          }).catch((error)=> {
            // An error happened.
          });
        }
       }).then(cred=>{
             this.$router.push({name:'GMap',params:{id:'Animated'}})
           }).catch(err=>{
           this.feedback = err.message

       })


      } else {
        this.feedback = "you need to enter email and password";
      }


    },


  }
};
</script>

<style scoped>
  .first
  {
    background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    font-family: 'Numans', sans-serif;
  }

.card{
  margin-top:100px
}

.container{
  height: 100%;
  align-content: center;
  padding-top: 150px;
}

.card{
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0,0,0,0.5) !important;
}

.social_icon span{
  font-size: 60px;
  margin-left: 10px;
  color: #FFC312;
}

.social_icon span:hover{
  color: white;
  cursor: pointer;
}

.card-header h3{
  color: white;
}

.social_icon{
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend span{
  width: 50px;
  background-color: #FFC312;
  color: black;
  border:0 !important;
}

input:focus{
  outline: 0 0 0 0  !important;
  box-shadow: 0 0 0 0 !important;

}

.remember{
  color: white;
}

.remember input
{
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn{
  color: black;
  background-color: #FFC312;
  width: 100px;
}

.login_btn:hover{
  color: black;
  background-color: white;
}

.links{
  color: white;
}

.links a{
  margin-left: 4px;
}
</style>
