<template>
  <div class="uk-container uk-container-small ">
    <div>
      <topMemes ></topMemes>
<!--      <form  @click="category" @submit.prevent="category">-->
<!--        <p>-->
<!--          <select class="browser-default"  v-model="cat" >-->
<!--            <option  v-for="(cat,index) in categories" :key="index">{{cat.name}}</option>-->
<!--          </select>-->

<!--        </p>-->
<!--      </form>-->

    </div>

      <div
      class=" uk-position-relative uk-visible-toggle uk-light login"
      tabindex="-1"
      uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 7000;"
    >
      <div>
        <ul class="uk-slideshow-items">
          <li v-for="image in images">
            <div
              class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right"
            >
              <router-link :to="'/start/' + image.Meme_id"
                ><img :src="image.image" alt=""
              /></router-link>
            </div>
          </li>
        </ul>
      </div>

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
  </div>
</template>

<script>
  import db from "@/firebase/init";
  import firebase from "firebase";
export default {

  name: "corousel",
  data() {
    return {
      images: [],
      cat:"",
      user:firebase.auth().currentUser.uid,
      chosen:this.$route.params.id

    };
  },
  computed: {
    // images() {
    //   return this.$store.state.Gallery;
    // },
    categories() {
      return this.$store.getters.Categories;
    }
  },

  methods:{

  },
  beforeCreate(){

  },
  created() {


      db.collection('Memes').where('category', '==', this.chosen)
              .onSnapshot(querySnapshot => {
                querySnapshot.docChanges().forEach(change => {
                  if (change.type === 'added') {
                    this.images.push(change.doc.data());
                  }

                });
              });




  },

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
