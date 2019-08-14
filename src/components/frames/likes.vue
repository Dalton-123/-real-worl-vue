<template>
  <div class="test d-flex">
    <div>
      <div>
        <span href="#" v-if="ID" style="color: blue" @click="like"
          ><i class="fa fa-thumbs-up" style="font-size:24px"></i
          ><span v-if="likenum">{{ likenum }} You liked this image</span></span
        >
        <span v-else @click="like"
          ><i class="fa fa-thumbs-up" style="font-size:24px"></i
          ><span v-if="likenum">{{ likenum }}</span></span
        >

        <span v-if="UID" style="margin-left: 10px;color: blue" @click="unlike"
        ><i class="fa fa-thumbs-down" style="font-size:24px"></i>
            <span v-if=" dislikenum">{{  dislikenum }} You disliked this image</span>
        </span>

          <span v-else style="margin-left: 10px" @click="unlike"
        ><i class="fa fa-thumbs-down" style="font-size:24px"></i>
            <span v-if=" dislikenum">{{  dislikenum }}</span>
        </span>

      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
import {fb} from "@/firebase/init";
export default {
  name: "likes",
  props: ["ids"],
  data() {
    return {
      likes: [],
        dislikes:[],
      id: firebase.auth().currentUser.uid,
      likemsg:'You liked this image',
      dislikemsg:'You disliked this image'
    };
  },
  firestore(){
    return {
      likes: db.collection('likes'),
      dislikes: db.collection('dislikes'),
    }
  },

  methods: {
    like() {
      var user = firebase.auth().currentUser;
        if(this.ID){
            db.collection('likes').doc(this.ids + this.id).delete()
        }else{
            db.collection("likes")
                .doc(this.ids + this.id )
                .set({
                    time: Date.now(),
                    user_id: user.uid,
                    Meme_id: this.ids
                });
            db.collection('dislikes').doc(this.ids + this.id).delete().then(()=>{
            }).then(()=>{
                db.collection('Memes').doc(this.ids).update({
                    likes:this.likenum
                })
            })
        }

    },
    unlike() {
        var user = firebase.auth().currentUser;
        if(this.UID){
            db.collection('dislikes').doc(this.ids + this.id).delete()
        }else{
            db.collection("dislikes")
                .doc(this.ids + this.id)
                .set({
                    time: Date.now(),
                    user_id: user.uid,
                    Meme_id: this.ids
                });
            db.collection('likes').doc(this.ids + this.id).delete().then(()=>{
              db.collection('Memes').doc(this.ids).update({
                dislikes:this.dislikenum
              })
            })
        }


    }
  },
  computed: {
    likenum() {

        return this.likes.length;

    },
    ID() {

      return this.likes.find(map => map.user_id === this.id);
    },
      dislikenum() {

        return this.dislikes.length;


      },
      UID() {
          return this.dislikes.find(map => map.user_id === this.id);
      },

  },
  mounted() {
    this.$binding("likes", fb.collection("likes").where('Meme_id', '==', this.ids))
            .then((ford) => {
              this.likes === ford // => __ob__: Observer
            }).catch(err => {
      console.error(err)
    })
    this.$binding("dislikes", fb.collection("dislikes").where('Meme_id', '==', this.ids))
            .then((ford) => {
              this.dislikes === ford // => __ob__: Observer
            }).catch(err => {
      console.error(err)
    })
  }
};
</script>

<style scoped></style>
