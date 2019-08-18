<template>
  <div style="" class="">
    <span style="color: red" class="pointer" href="#modal-full" uk-toggle><i style="font-size:24px" class="fa">&#xf093;</i>upload</span>

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
                <br>
                <label for="">Categories</label>
                <select class="uk-select" v-model="cat" >
                  <option v-for="sta in Cats">{{ sta.name }}</option>
                </select>
                <br>
                <label for="">Acount Pivacy</label>
                <select class="uk-select" v-model="choose" >
                  <option v-for="cho in Options">{{ cho }}</option>
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
        cat:null,
        crabs:[],
        description:null,
        title:null,
        choose:null,
        id:firebase.auth().currentUser.uid,
        Names:null,
        Pic:null,
        alias:null


      };
    },
    methods: {
      sendMessage() {
        if (this.image) {
          var user = firebase.auth().currentUser;
          db.collection("Memes")
                  .add({
                    image:this.imageUrl,
                    title: this.title,
                    description: this.description,
                    user_id:user.uid,
                    category:this.cat,
                    privacy:this.choose,
                    name:this.Names,
                    Photo:this.Pic,
                    alias:this.alias,
                    timestamp:Date.now(),
                    counter:0
                  }).then((data)=>{
                    const key=data.key

            db.collection("Memes").doc(data.id).update({
              Meme_id:data.id
            }).then(()=>{
              return key
            })

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
          this.description=null
          this.title=null
                  this.choose=null
          this.cat=null


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

      Cats() {
        return this.$store.state.categories
      },
     Options() {
        return this.$store.state.Options;
      }
    },
    created() {
      db.collection('Profile').where('id', '==', this.id)
              .onSnapshot(querySnapshot => {
                querySnapshot.docChanges().forEach(change => {
                  if (change.type === 'added') {
                    this.Names=change.doc.data().name
                    this.Pic=change.doc.data().image
                    this.alias=change.doc.data().alias
                  }

                });
              });


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
  a i {
    color: black;
  }
  .pointer{
    cursor: pointer;
  }
</style>
