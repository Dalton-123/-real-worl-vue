<template>
  <div class="uk-container uk-container-small ">
    <div>
      <topMemes></topMemes>
    </div>
    <div v-if="loading"><loader></loader></div>


    <div  class="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 3000;"
    >
      <ul class="uk-slideshow-items">
        <li v-for="image in images" >
          <router-link :to="'/start/' + image.Meme_id"
            ><img :src="image.image" alt=""
          /></router-link>
          <div v-if="!test(image.Meme_id)"
            style="opacity: 0.9"
            class="uk-overlay uk-overlay-primary uk-position-bottom  uk-transition-slide-bottom "
          >
            <h5 class="uk-margin-remove">Name: {{ image.title }}</h5>
            <p class="uk-margin-remove">
              Description: {{ image.description }}.
            </p>
            <p class="uk-margin-remove">Category: {{ image.category }}</p>
          </div>
        </li>
      </ul>

      <a
        class="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous
        uk-slideshow-item="previous"
      ></a>
      <a
        class="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next
        uk-slideshow-item="next"
      ></a>
  </div>
    <p>{{test.length}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import db from "@/firebase/init";
export default {
  name: "corousel",
  data() {
    return {
      images: [],
      cat: "",
      user: firebase.auth().currentUser.uid,
      chosen: this.$route.params.id,
      testing:[],
      id:[]
    };
  },
  computed: {
    ...mapGetters(["loading"]),
    categories() {
      return this.$store.getters.Categories;
    },

  },

  methods: {
    test(id) {
    this.id=id
  },
  },

  beforeMount() {
    this.$store.dispatch("carousel", this.images);

    db.collection("message").where('Meme_id','==','eCvJd9QC3RbgdvRkpHBe').onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          this.testing.push(change.doc.data());
        }
      });
    });
  }
};
</script>

<style scoped>
.login {
  max-width: 70%;
  margin-top: 10px;
  margin-left: 160px;
  max-height: 100% !important;
}
img {
  width: 1800px;
  max-height: 100% !important;
  /*height:400px !important;*/
  border: 4px solid white;
}
</style>
