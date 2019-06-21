<template>
  <div class=" uk-container ">
    <h2>Create you Profile Here</h2>
    <div class="uk-cover-container uk-height-medium">
      <iframe src="https://www.youtube.com/embed/6vUWVIevMVs?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent" width="1920" height="1080" frameborder="0" allowfullscreen uk-cover></iframe>
    </div>
    <form @submit.prevent="SaverUsers">
      <fieldset class="uk-fieldset">

       <div class="row">
         <div class="col"></div>
         <div class="col"></div>
       </div>
        <div class="row">
          <!--            name input-->
          <div class="col">
            <input
              class="uk-input"
              type="text"
              placeholder="full name"
              v-model="name"
            />
          </div>
          <!--          Job title field  -->
          <div class="col">
            <input
              class="uk-input"
              type="text"
              placeholder="Job Title"
              v-model="job"
            />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <select class="uk-select" v-model="stat">
              <option v-for="sta in status">{{ sta }}</option>
            </select>
          </div>
          <div class="col">
            <input
              class="uk-input"
              type="number"
              placeholder="Phone Number "
              v-model="phone"
            />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <select class="uk-select" v-model="address">
              <option v-for="sta in countries">{{ sta }}</option>
            </select>
          </div>

          <div class="col">
            <input type="number" placeholder="age" class="" v-model="age" />
          </div>
        </div>

        <div>
          <div>
            <input
              type="file"
              ref="uploads"
              @change="upload"
              style="display: none"
            />
          </div>

          <div class="row">
            <div class="col-sm-3">
              <label>
                <input
                  type="checkbox"
                  value="male"
                  class="filled-in"
                  v-model="gender"
                  @click="Checkbox"
                />
                <span>Male</span>
              </label>
            </div>
            <div class="col-sm-3">
              <label>
                <input
                  type="checkbox"
                  value="female"
                  class="filled-in"
                  v-model="gender"
                  @click="Checkbox"
                />
                <span>Female</span>
              </label>
            </div>
            <div class="col-sm-3">
              <label>
                <input
                  type="checkbox"
                  value="other"
                  class="filled-in"
                  v-model="gender"
@click="Checkbox"
                />
                <span>Other</span>
              </label>
            </div>
          </div>
<p class="uk-text-center" style="color: red" v-if="feedback">{{feedback}}</p>
          <div class="row">
            <div class="col">
              <button class="uk-button uk-button-danger col" @click="photo">
              <span v-if="!progress">Upload Image</span
              ><span v-if="progress">{{ progress }}</span>
              </button>
            </div>
           <div class="col">
             <button @click="SaverUsers" class="col uk-button uk-button-secondary">
               Save
             </button>
           </div>
          </div>
        </div>
      </fieldset>
    </form>

  </div>
</template>

<script>

import firebase from "firebase";
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
      gender: [],
      feedback:null,
      progress:null
    };
  },

  computed: {
countries(){
  return this.$store.state.countries
}
  },
  methods: {
      Checkbox(){
          $('.filled-in').on('change', function(){
          $('.filled-in').not(this).prop('checked',false)
          })

      },
    SaverUsers() {
      const data = {
        name: this.name,
        age: this.age,
        address: this.address,
        image: this.image,
        stat:this.stat,
        phone:this.phone,
        job:this.job,
        gender:this.gender
      }
      if(this.name&&this.age&&this.address&&this.stat&&this.phone&&this.phone&&this.job&&this.gender&&this.image){
        this.$store.dispatch("PROFILE", data)
        this.$router.push('/profile')
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
            console.log(this.image);
          });
        }
      );
    }
  },
  created() {
    this.SaverUsers;
  }
};
</script>

<style scoped>
form {
width:900px;

  /*padding-bottom: 200px;*/
  /*padding-top: 20px;*/
}

input {
  width: 450px;
}
/*    .row{*/
/*        margin-top: 10px;*/
/*    }*/
</style>
