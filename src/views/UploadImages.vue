<template>
  <div style="" class="">
    <a class="" href="#modal-full" uk-toggle><i style="font-size:24px" class="fa">&#xf093;</i></a>

    <div id="modal-full" class="uk-modal-full" uk-modal>
      <div class="uk-modal-dialog">
        <button @click="Reload" class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
          <div class="uk-background-cover" style="background-image: url('https://cdn.pixabay.com/photo/2018/03/09/10/41/paper-3211179__340.jpg');" uk-height-viewport></div>
          <div class="uk-padding-large">
            <h1>Meme Galleries</h1>
            <div class="">
              <img :src="imageUrl" alt="" width="200px" height="200px">
              <form @submit.prevent="sendMessage">
                <div class="input-group">
                  <input type="text" placeholder="text..." v-model="title" />
                </div>
                <div class="input-group">
                  <input type="text" placeholder="descriptiion..." v-model="description" />
                </div>
                <!--          <label>Browser Select</label>-->
                <select class="uk-select" v-model="cat" >
                  <option v-for="sta in categories">{{ sta }}</option>
                </select>
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
      </div>
    </div>

  </div>
</template>

<script>
  import db from "@/firebase/init";
  import firebase from 'firebase'

  export default {
    name: "upload",
    props: ["name"],
    data() {
      return {

        errors: "",
        image:null,
        imageUrl:"",
        names:this.$store.state.name,
        cat:null,
        time:Date.now().toString(),
        categories:['religious','political','social',],
        crabs:[],
        description:null,
        title: null

      };
    },
    methods: {
      sendMessage() {
        if (this.image) {
          var user = firebase.auth().currentUser;
          db.collection("Memes").doc()
                  .set({
                    time: this.time,
                    image:this.imageUrl,
                    title: this.title,
                    description: this.description,
                    user_id:user.uid,
                    category:this.cat,
                    name:this.Names,
                    Photo:this.Pic,
                    timestamp:Date.now()
                  }).then(()=>{
                    window.location.reload()
          }).then((data)=>{
            const key= data.id

            return key
          }).then(key=>{
            const filename=this.image.name
            const ext=filename.slice(filename.lastIndexOf('.'))
            return  firebase.storage().ref('Memes/'+key+'.'+ext).put(this.image)
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
      Reload(){
        window.location.reload()
      }


    },
    computed:{
      Pic(){
        return this.crabs.map(map=>map.image)
      },
      Names(){
        return this.crabs.map(map=>map.name)
      }
    },
    created() {
      this.$store.dispatch('ViewProfiles',this.crabs)
      // this.$store.dispatch('name')

    }
  };
</script>

<style scoped>
  /*.test{*/
  /*    margin-left: 330px;*/
  /*}*/
  button {
    margin-top: 20px;
  }
 select{
   margin-top: 20px;
 }
  .messages {
  /*;position: absolute*/
  margin-left: 2%;
    /*bottom: 0;*/
    width: 30%;
    /*z-index: 100;*/
    color: white;
    text-align: center;
    /*margin-bottom: 0px;*/

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
  a i{
    color: blue;
  }
</style>
