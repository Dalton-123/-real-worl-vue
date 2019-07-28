<template>
  <div>
    <div class=" uk-container-small card">

        <div v-if="!image" @click="photo">
            <img src="https://cdn.pixabay.com/photo/2017/07/11/10/43/upload-2493114__340.png" alt="">
        </div>


        <div class="uk-height-medium   uk-background-cover uk-light" v-else
             :data-src="image"  style="margin: 50px"   uk-img >
            <h1 class="uk-text-center" style="font-weight: bold;font-size: 4.0em ">{{top}}</h1>
            <h1 class="uk-text-center" style="font-weight: bold;font-size: 4.0em;margin-top: 120px">{{bottom}}</h1>

        </div>



      <form @submit.prevent="" >
        <fieldset class="uk-fieldset">
          <div>
            <div>
              <input
                type="file"
                ref="uploads"
                @change="upload"
                style="display: none"
              />
            </div>

             <div v-if="image">
                 <input type="text" v-model="top" placeholder="Top Section">
                 <input type="text" v-model="bottom" placeholder="Bottom Section">
             </div>

            <div class="row">
              <div class="">

                  <span v-if="progress">{{ progress }}</span>

              </div>
              <div class="">
                <button style="margin-left: 10px"
                  @click="Save"
                  class=" uk-button uk-button-secondary"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>


<!--    cards with memes  -->
      <div class=" uk-grid-small uk-grid-match uk-margin uk-container" uk-grid>
          <div class="card uk-card-body uk-width-1-1@l" v-for="dat in data" >
              <div class="uk-height-medium   uk-background-cover uk-light"
                   :data-src="dat.image"   uk-img >
                  <h1 class="uk-text-center" style="font-weight: bold;font-size: 4.0em ">{{dat.top}}</h1>
                  <h1 class="uk-text-center" style="font-weight: bold;font-size: 4.0em;margin-top: 120px">{{dat.bottom}}</h1>

              </div>
          </div>

      </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "UserProfile",
  data() {
    return {
      image: null,
comment:null,
      progress: null,
        top:null,
        bottom:null,
        data:[]
    };
  },

  methods: {
      Save() {
        db.collection('Generator').add({
            image:this.image,
            top:this.top,
            bottom:this.bottom,


        })
    },

    photo() {
      this.$refs.uploads.click();
    },
    upload(e) {
      let file = e.target.files[0];
      var storageRef = firebase.storage().ref("MemeGenerator/" + file.name);
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
      db.collection('Generator')
          .onSnapshot(querySnapshot => {
              querySnapshot.docChanges().forEach(change => {
                  if (change.type === 'added') {
                      this.data.push(change.doc.data());
                  }

              });
          });

  }
};
</script>

<style scoped>



button{
    width:80px
}

    img,button,span{
        margin-left: 30px;
    }
</style>
