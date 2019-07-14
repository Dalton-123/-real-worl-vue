<template>
  <div>
<!--      <navbar></navbar>-->
      <div v-for="test in crabs" class="uk-container card">
          <h2> {{test.name}} Profile</h2>
          <div class="row">
              <div class="col try">
                 <div v-if="test.image">
                     <img :src="test.image" alt="Avatar" style="width:200px">
                 </div>
                  <div v-else>
                      <photo></photo>
                  </div>

                  <p><i class="fa fa-user"></i>  {{test.name}}</p>
                  <p><i class="fa fa-hourglass-2"></i>  {{test.age}} years old</p>

              </div>


<!--    -->
              <div class="col test">
                <h4 style="">Contact Information</h4>
                  <p><i class="fa fa-fa fa-envelope-open"></i> {{email}}</p>
                  <p><i class="fa fa-phone-square"></i> {{test.phone}}</p>


                  <h4 style="">General Information</h4>
                  <p><i class="fa fa-users"></i> {{test.stat}}</p>
                  <p><i class="fa fa-briefcase"></i> {{test.job}}</p>
                  <p v-if="test.gender[0]=='male'"><i class="fa fa-male"></i> {{test.gender[0]}}</p>
                  <p v-if="test.gender[0]=='female'"><i class="fa fa-female"></i> {{test.gender[0]}}</p>


                  <p><i class="fa fa-map"></i>{{test.address}}</p>

              </div>

<div class="col " >

    <div >
        <img src="signup.svg" alt="">
        <update></update>
    </div>
</div>

          </div>
      </div>
  </div>
</template>

<script>
import update from '@/components/User/UpdateProfile'
import firebase from "firebase";
export default {
  name: "Profile",
    components:{
        update
    },
  data() {
    return {

        crabs:[]
    };
  },


computed:{

},

  methods: {

  },
  created() {
     this.$store.dispatch('ViewProfiles',this.crabs)
    this.email =firebase .auth().currentUser.email



  }
};
</script>

<style scoped>
  h4{
    margin-top: -7px;
  }
  img {
      max-height:250px ;
  }

    .try p{
/*margin-left: 0px;*/
        margin-top: 25px;
    }

  i{margin-right: 15px;
      font-size: 1.5em;
      margin-top: 5px;
      color: palevioletred;
  }


    .me{
        font-size: 1em;
        /*margin-right: 15px*/
    }
</style>
