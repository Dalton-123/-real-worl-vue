<template>
  <div class="profile container">
    <div class="card">
      <h2 class="deep-purple-text center">{{ profile.alias }}'s Wall</h2>
      <ul v-for="(comment,index) in comments" :key="comment.index" class="comments collection">
        <li >Comment</li>
        <div class="deep-purple-text">{{comment.from}}</div>
        <div class="grey-text text-darken-2">{{comment.content}}</div>
      </ul>
      <form @submit.prevent="addComment">
        <div class="field">
          <label for="comment">Add a comment</label>
          <input type="text" name="comment" v-model="newComment" />
          <p v-if="feedback" class="red-text center">{{ feedback }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

import firebase from "firebase";

export default {
  name: "profile",
  data() {
    return {
      profile: null,
      newComment: null,
      user: null,
      feedback: null,
      comments:[]
    };
  },
  created() {
    //get current current user
    let ref = db.collection("users");
    ref.where("user_id", "==", firebase.auth().currentUser.uid).get().then(snapshot => {
        snapshot.forEach(doc => {
          (this.user = doc.data()), (this.user.id = doc.id);
          console.log(this.user);
        });
      });
    //profile data
    ref.doc(this.$route.params.id).get().then(user => {
        this.profile = user.data();
      });

    //comments
    db.collection("comments").where("to", '==', this.$route.params.id).onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type == "added") {
            this.comments.unshift({
              from: change.doc.data().from,
              content: change.doc.data().content
            });
          }
        });
      });
  },
  methods: {
    addComment() {
      if (this.newComment) {
        this.feedback = null;
        let me = this.$route.params.id;
        db.collection("comments")
          .add({
            to: me,
            from: this.user.alias,
            content: this.newComment,
            time: Date.now()
          })
          .then(() => {
            this.newComment = null;
          });
      } else {
        this.feedback = "You must enter a momment to add it";
      }
    }
  }
};
</script>

<style scoped>
  .profile .card{
    padding:20px;
    margin-top:60px;

  }
  .profile h2{
    fonr-size:2em;
    margin-top:0;
    padding-left: 10px;
  }

  .profile li{
    /*padding: 10px;*/
    border-bottom: 1px solid blanchedalmond;

  }
</style>
