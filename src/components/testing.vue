<template>
    <div>
        <top></top>
        <div class="uk-container">
            <div class=" uk-grid-small uk-grid-match uk-margin " uk-grid>
                <div class=" uk-width-1-4@l" v-for="dat in data" >
                    <div   class="uk-height-medium   uk-background-cover uk-light"
                         :data-src="dat.meme_image"   uk-img >
                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                        <p class="uk-text-center me"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                    </div>
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



  },
  created() {
      db.collection('User_Memes')
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
    p{
        font-weight:bold;

    }.uk-grid-small{
    margin-top: 50px;
         }
</style>
