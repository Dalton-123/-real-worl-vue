<template>
  <div style="" class="test">
    <div class=" ">

      <div class="messages">
        <img :src="imageUrl" alt="" width="100px" height="100px">
        <form @submit.prevent="sendMessage">
         <div>
           <div class="d-flex" style="margin-top: 10px">
             <div class="uk-width-auto ">
               <img width="50" height="100" class="uk-border-circle" src="@/assets/avatar.svg">
             </div>
             <div class="input-group col">
               <input type="text" placeholder="Comment..." v-model="message" />

              <div v-for="emoji in showEmoji">
                <p v-if="show">{{emoji}}</p>
              </div>

               <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="uploadFile"/>

               <span @click="sendMessage" class="uk-badge" style="background-color: red"> <i style="color: blue" class="fa fa-send"></i></span>
               <span @click="upload" class="ml-3 uk-badge"> <i style="color: blue" class="fa fa-camera "></i></span>
               <span @click="shows" class="uk-badge" style="background-color: blue">&#128578;</span>
               <div v-if="show">
                 <new></new>
               </div>
             </div>
           </div>


         </div>
          <p v-if="errors">{{ errors }}</p>
        </form>


      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from 'firebase'

export default {
  name: "MessageForm",
  props: ["ids","Counter"],
  data() {
    return {
      message: "",
      errors: "",
      image:null,
      imageUrl:"",
      crabs:[],
      show:null,
        Pic:null,
        names:null,
        id:firebase.auth().currentUser.uid,



    };
  },
  computed:{


    showEmoji() {
      return this.$store.state.Emoji
    }
  },
  methods: {
    sendMessage() {
      if (this.message) {
        var user = firebase.auth().currentUser;
        db.collection("message")
          .add({
            Meme_id:this.ids,
            user_id:user.uid,
            time: Date.now(),
            image:this.imageUrl,
            message: this.message,
            pic:this.Pic,
            name:this.names,
            emoji:this.showEmoji

          }).then(()=>{
             db.collection("Memes").doc(this.ids).update({
                 counter:this.Counter
             })
        }).then((data)=>{
            this.show=null
d
            const key= data.id
          return key
        }).then(key=>{
          const filename=this.image.name
          const ext=filename.slice(filename.lastIndexOf('.'))
         return  firebase.storage().ref('message/'+key+'.'+ext).put(this.image)

        }).catch(err => {
            console.log(err);
          })
        this.message = null;
        this.errors = null;
        this.imageUrl=null
        this.showEmoji=null
      } else {
        this.errors = "You need to enter a message";
      }
    },
    upload() {
      this.$refs.fileInput.click()
    },
    uploadFile(event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please enter a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]



    },
      shows(){
          if (!this.show) {
              this.show=true
          } else {
              this.show=false
          }

      }


  },
  created() {
    this.sendMessage;
    this.$store.dispatch('ViewProfiles',this.crabs)
      db.collection("Profile")
          .where('id','==',this.id)
          .get()
          .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                  this.Pic=doc.data().image
                  this.names=doc.data().name

              });
          })
  }
};
</script>

<style scoped>

.messages {


  bottom: 0;
  width: 100%;


  text-align: center;
  margin-bottom: 0px;

}
p {
  color: red;
}
p{padding: 3px}
input {
  color: black;
}
.uk-width-auto img{

  max-height: 100px;
}
 span{
     margin-left: 15px;
 }
</style>
