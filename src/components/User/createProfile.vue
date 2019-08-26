<template>
<div>
<!--  <navbar></navbar>-->




<!--   Name -->
  <div id="createProfile" class="uk-modal-container "  uk-modal="bg-close:false">
    <div class="uk-modal-dialog uk-modal-body">

<!--      <button class="uk-modal-close-default" type="button" uk-close></button>-->
      <h2 class="uk-modal-title uk-text-center">Create Your Profile Here</h2>


      <img v-if="image"  :src="image" alt="" width="100"  height="100" style="border-radius: 100px">
      <img v-else src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__340.png" alt="" width="100"  height="100" style="border-radius: 100px">



      <form class="needs-validation" novalidate @submit.prevent="SaverUsers">
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationCustom01">First name</label>
            <input type="text" class="form-control" id="validationCustom01" placeholder="Name" value="Mark"  v-model="name" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>


            <!-- Select Country         -->

          <div class="col-md-4 mb-3 ">
            <label for="validationCustom02">Country</label>
            <div >
              <select class="custom-select" v-model="address">
                <option v-for="sta in countries">{{ sta }}</option>
              </select>
              <div class="invalid-feedback">Example invalid custom select feedback</div>
            </div>
          </div>

          <!-- Select Status-->
          <div class="col-md-4 mb-3">
            <label for="validationCustom02">Marital Status</label>
            <div >
              <select class="uk-select" v-model="stat">
                <option v-for="sta in status">{{ sta }}</option>
              </select>
              <div class="invalid-feedback">Example invalid custom select feedback</div>
            </div>
          </div>






          <!--Phone Number-->
          <div class="col-md-4 mb-3">
            <label for="validationCustomUsername">Phone Number</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupPrepend">#</span>
              </div>
              <input v-model="phone" type="number" class="form-control" id="validationCustomUsername" placeholder="Phone Number" aria-describedby="inputGroupPrepend" required>
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
        </div>

        <!--Your Age-->
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationCustom03">Age</label>
            <input type="number" placeholder="age" v-model="age" class="form-control" id="validationCustom03"  required>
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>


        <!--  Job Title -->
          <div class="col-md-3 mb-3">
            <label for="validationCustom04">Job Title</label>
            <input  placeholder="Job Title" v-model="job" class="form-control" id="validationCustom04" required>
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>



        </div>


        <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="male" v-model="gender" checked>
            <label class="form-check-label" for="exampleRadios1">
              Male
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="female" v-model="gender">
            <label class="form-check-label" for="exampleRadios2">
              Female
            </label>
          </div>
          <div class="form-check disabled">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="other"  v-model="gender">
            <label class="form-check-label" for="exampleRadios3">
          Other
            </label>
          </div>
        </div>

        <p class="uk-text-center" style="color: red" v-if="feedback">{{feedback}}</p>

        <input
                type="file"
                ref="uploads"
                @change="upload"
                style="display: none"
        />



       <div style="margin-top: 50px">
         <button @click="SaverUsers" class="btn btn-primary " type="submit" >Submit form</button>
         <button class="btn btn-danger ml-2" @click="photo">
                <span v-if="!progress">Upload Image</span
                ><span v-if="progress">{{ progress }}</span>
         </button>
       </div>



      </form>
    </div>
  </div>












  </div>

</template>

<script>
  import db from "@/firebase/init";
import firebase from "firebase";
  import UIkit from "uikit"
export default {
  name: "UserProfile",
  data() {
    return {
      name: null,
        phone:null,
      age: null,
      address: null,
      image: null,
      stat: null,
        job:null,
      status: ["single", "married", "divorced", "widowed"],
  gender:null,
      feedback:null,
      progress:null,
      alias:null,
      id: firebase.auth().currentUser.uid,
      email:firebase .auth().currentUser.email
    };
  },

  computed: {
countries(){
  return this.$store.state.countries
}
  },
  methods: {

    SaverUsers() {
      const data = {
        name: this.name,
        age: this.age,
        address: this.address,
        stat:this.stat,
        phone:this.phone,
        job:this.job,
        gender:this.gender,
        alias:this.alias,
        email:this.email,
        image:this.image
      }
      if(this.name&&this.age&&this.address&&this.stat&&this.phone&&this.job&&this.gender&&this.image){
        this.$store.dispatch("PROFILE", data)
        UIkit.modal('#createProfile').hide()
        this.$router.push({name:'GMap',params:{id:'Animated'}})
      }
      else{
        this.feedback="Please fill out all fields in the form"
      }

    },

    photo() {
      this.$refs.uploads.click();
    },
    upload(e) {
      let file = e.target.files[0];
      var storageRef = firebase.storage().ref("photo/" + file.name);
      var uploadTask = storageRef.put(file);

      uploadTask.on(
        "state_changed",
        snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.progress = Math.round(progress) + "%";
        },
        error => {},
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.image = downloadURL;
            // console.log(this.image);
          });
        }
      );
    }
  },
  created() {

    db.collection("users").where('user_id','==',this.id).get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                this.alias=doc.data().alias;
              });
            });
  },

  mounted() {
    UIkit.modal('#createProfile').show()
  }
};
</script>

<style scoped>
.uk-modal-body{
    border-radius: 50px;
}

</style>
