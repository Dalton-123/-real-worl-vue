<template>
  <form action="#" @submit.prevent="press">
    <p>
      <label>
        <input name="group1" type="radio" checked />
        <span>Red</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" />
        <span>Yellow</span>
      </label>
    </p>
    <p>
      <label>
        <input class="with-gap" name="group1" type="radio" />
        <span>Green</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" />
        <span>Brown</span>
      </label>
    </p>

    <p >
      <select class="browser-default"  v-model="cat" >
        <option  v-for="(cat, index) in categories" :key="index" >{{
          cat.name
        }}</option>
      </select>

    </p>

    <p>  <button @click="press" class="uk-button uk-button-primary">
      Primary
    </button></p>
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
      chosen: "tfvc",

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
        document.location.reload()
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
div {
  background: white;
}
p {
  display: inline-block;
  padding-right: 60px;
}
</style>
