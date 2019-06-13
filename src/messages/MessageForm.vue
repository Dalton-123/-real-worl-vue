<template>
  <div style="margin-top: 150px" class="">
    <div class=" ">

      <div class="messages">
        <img :src="imageUrl" alt="" width="200px" height="200px">
        <form @submit.prevent="sendMessage">
          <div class="input-group">
            <input type="text" placeholder="text..." v-model="message" />
          </div>
          <p v-if="errors">{{ errors }}</p>

        </form>
        <button
          @click="sendMessage"
          class="uk-button uk-button-secondary uk-button-small"
        >
          Send
        </button>

        <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="uploadFile"/>
        <button
          raised
          style="background: #F44336;"
          class="uk-button uk-button-primary uk-button-small"
          @click="upload"
        >
          upload
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from 'firebase'

export default {
  name: "MessageForm",
  props: ["name"],
  data() {
    return {
      message: "",
      errors: "",
      image:null,
      imageUrl:"",


    };
  },
  methods: {
    sendMessage() {
      if (this.message) {
        db.collection("message")
          .add({
            time: Date.now(),
            image:this.imageUrl,
            message: this.message,


          }).then((data)=>{
            const key= data.id
          // db.collection('message').doc(data.id).update({imageUrl: this.imageUrl})
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
        console.log(this.image)


    },
    deletes(doc){

    }

  },
  created() {
    this.sendMessage;
    // this.$store.dispatch('name')

  }
};
</script>

<style scoped>
/*.test{*/
/*    margin-left: 330px;*/
/*}*/
form button {
  /*margin-top: 20px;*/
}
button input {
  width: 90px;
  height: 40px;
}
.messages {
  position: absolute;
 margin-left: 2%;
  bottom: 0;
  width: 67%;
  z-index: 100;
  color: white;
  text-align: center;
  margin-bottom: 0px;

}
p {
  color: red;
}

input {
  color: black;
}
.test {
  /*margin-top: 80px;*/

}
</style>
