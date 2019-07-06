<template>
  <form action="#" @submit.prevent="press">
    <p>
      <label>
        <input name="group1" type="radio" checked />
        <span>Most Liked</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" />
        <span>My Memes</span>
      </label>
    </p>
    <p>
      <label>
        <input class="with-gap" name="group1" type="radio" />
        <span>Most Comments</span>
      </label>
    </p>
    <div>
      <i class="fa fa-link"></i>
      <label>
        <input name="group1" type="radio" v-model="recent"/>
        <span>Most Recent</span>
      </label>
    </div>
    <p>
      <label>
        <input name="group1" type="radio" />
        <span>Awarded Memes</span>
      </label>
    </p>

    <div class="uk-flex cat">
      <i @click="press" class="fa fa-link"></i>
      <select class="browser-default"  v-model="cat" >
        <option  v-for="(cat, index) in categories" :key="index" >{{
          cat.name
        }}</option>
      </select>

    </div>


  </form>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "topMemes",
  data() {
    return {
      cat: "",
      recent:"Recent",
      chosen: "tfvc",
      user: firebase.auth().currentUser.uid,
    };
  },
  computed: {
    categories() {
      return this.$store.getters.Categories;
    }
  },
  methods: {



    press() {
      db.collection("category").doc(this.user).delete()
      db.collection("category").doc(this.user)
        .set({
          category: this.cat
        }).then(()=>{
        db.collection("category").doc(this.user)
        this.$router.push({ name: "GMap", params: { id: this.chosen } });
        window.location.reload()
      })





    }
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

p {
  display: inline-block;
  padding-right: 60px;
}
  label span{color: black}
  i{font-size: 30px}
  .cat{
    width: 150px;
  }
</style>
