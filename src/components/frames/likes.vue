<template>
  <div class="test d-flex">
    <div>
      <div>
        <span href="#" v-if="ID" style="color: blue" @click="like"
          ><i class="fa fa-thumbs-up" style="font-size:24px"></i
          ><span v-if="likenum>=1">{{ likenum }} You liked this image</span></span
        >
        <span v-else @click="like"
          ><i class="fa fa-thumbs-up" style="font-size:24px"></i
          ><span v-if="likenum">{{ likenum }}</span></span
        >

        <span v-if="UID" style="margin-left: 10px;color: blue" @click="unlike"
        ><i class="fa fa-thumbs-down" style="font-size:24px"></i>
            <span v-if=" dislikenum>=1">{{  dislikenum }} You disliked this image</span>
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
      products: db.collection('products'),
    }
  },

  methods: {
    like() {
      var user = firebase.auth().currentUser;
      db.collection("likes")
        .doc(this.ids + this.id )
        .set({
          time: Date.now(),
          user_id: user.uid,
            Meme_id: this.ids
        });
        db.collection('dislikes').doc(this.ids + this.id).delete().then(()=>{
         window.location.reload()
        })

    },
    unlike() {
        var user = firebase.auth().currentUser;
        db.collection("dislikes")
            .doc(this.ids + this.id)
            .set({
                time: Date.now(),
                user_id: user.uid,
                Meme_id: this.ids
            });
        db.collection('likes').doc(this.ids + this.id).delete().then(()=>{
          window.location.reload()
        })

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
  created() {
    db.collection("likes")
      .where("Meme_id", "==", this.ids)
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            this.likes.push(change.doc.data());

          }
        });
      });
    db.collection("dislikes")
      .where("Meme_id", "==", this.ids)
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            this.dislikes.push(change.doc.data());

          }
        });
      });
  }
};
</script>

<style scoped></style>
