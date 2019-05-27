<template>
  <div class="test">
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
// import moment from 'moments'
export default {
  name: "MessageForm",
  props: ["name"],
  data() {
    return {
      message: "",
      errors: "",
      imge:"",
      imageUrl:""
    };
  },
  methods: {
    sendMessage() {
      if (this.message) {
        db.collection("message")
          .add({
            time: Date.now(),
            imge:this.imge,
            message: this.message,
            name: this.name,

          })
          .catch(err => {
            console.log(err);
          });
        this.message = null;
        this.errors = null;
      } else {
        this.errors = "You need to enter a message";
      }
    },
    upload() {
      this.$refs.fileInput.click()
    },
    uploadFile(event){
      const files=event.target.files
      let filename=files[0].name
      if(filename.lastIndexOf('.')<=0){
        return alert('Please enter a valid file')
      }
      const fileReader=new FileReader()
      fileReader.addEventListener('load',()=>{
        this.imageUrl=fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.imge=files[0]
      console.log(this.imge)
    }
  },
  created() {
    this.sendMessage;
  }
};
</script>

<style scoped>
/*.test{*/
/*    margin-left: 330px;*/
/*}*/
form button {
  margin-top: 20px;
}
button input {
  width: 90px;
  height: 40px;
}
.messages {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  color: white;
  text-align: center;
  margin-bottom: 1px;
  margin-left: 20%;
}
p {
  color: red;
}
div {
  background-color: #ddd;
}
input {
  color: black;
}
.test {
  margin-top: 80px;
}
</style>
