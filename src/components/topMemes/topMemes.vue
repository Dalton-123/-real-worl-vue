<template>
<div class="uk-text-center" style="padding-bottom: 50px;margin-top: 50px;margin-left: 400px">
  <form action="#" @submit.prevent="press">
    <div>
      <label>
        <i class="fa fa-link" @click="Likes"></i>
        <input class="uk-radio" name="group1" type="radio" value="mostLikes" v-model="mostLikes"/>
        <span>Most Liked(last two months)</span>
      </label>
    </div>

    <div>
      <label>
        <i class="fa fa-link" @click="Comments"></i>
        <input class="uk-radio" name="group1" type="radio" value="mostComments" v-model="mostComments"/>
        <span>Most Comments(last two months)</span>
      </label>
    </div>


    <div>
      <div>
        <i class="fa fa-link" @click="myMemes"></i>
        <label>
          <input class="uk-radio" name="group1" type="radio" value="myMemes" v-model="mine"/>
          <span>My Memes</span>
        </label>
      </div>
      <i class="fa fa-link" @click="mostRecent"></i>
      <label>
        <input class="uk-radio" name="group1" type="radio" value="Recent" v-model="recent"/>
        <span>Most Recent</span>
      </label>
    </div>

      <span><i @click="press" class="fa fa-link "></i></span>
      <select class=" "  v-model="cat" >
        <option  v-for="(cat, index) in Cats" :key="index" >{{
          cat.name
          }}</option>
      </select>




  </form>
</div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "topMemes",
  data() {
    return {
      cat: "",
      recent:"",
      chosen: "",
      mostComments:"",
      mostLikes:"",
      user: firebase.auth().currentUser.uid,
      mine:null
    };
  },
  computed: {
    Cats() {
      return this.$store.state.categories;
    }
  },
  methods: {
    press() {
      if (this.cat) {
        db.collection("category").doc(this.user).delete()
        db.collection("category").doc(this.user)
                .set({
                  category: this.cat
                }).then(() => {
          db.collection("category").doc(this.user)
          this.$router.push({name: "GMap", params: {id: this.chosen}});
          window.location.reload()
        })
      }
    },

    mostRecent() {
      if (this.recent) {
        this.$router.push({name: "GMap", params: {id: this.recent}})
        window.location.reload()
      }
    },
    myMemes() {
      if (this.mine) {
        this.$router.push({name: "GMap", params: {id: this.mine}})
        window.location.reload()
      }
    },
    Comments() {
      if (this.mostComments) {
        this.$router.push({name: "GMap", params: {id: this.mostComments}})
        window.location.reload()
      }
    },
    Likes() {
      if (this.mostLikes) {
        this.$router.push({name: "GMap", params: {id: this.mostLikes}})
        window.location.reload()
      }
    },

  },
  created() {
    db.collection("category").onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          this.chosen = change.doc.data().category;
        }
      });
    });
  }
};
</script>

<style scoped>
button {
  margin-left: 10px;
}

div  ,i{
  display: inline-block;
  margin-left: 25px;

}
  label span{color: black}
  i{font-size: 30px;color:#009b3a  }
  .cat{
    width: 200px;
  }

input,label,span,option{
  margin-left: 5px;
}
input:checked ~ {
  background-color: black !important;
}
</style>
