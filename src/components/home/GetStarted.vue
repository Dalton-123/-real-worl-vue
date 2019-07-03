<template>
  <div>
    <banner></banner>
     <div v-if="loading"> <loading></loading></div>
    <div class="container-fluid test">
      <div class="row" v-for="gal in gallery">
        <div class="col">
          <div>
            <div class="me"><img :src="gal.image" alt="" /></div>
            <h3>{{ gal.title }}</h3>

            <div style="float: right;padding-right: 15px">
              <likes :ids="ids"></likes>
            </div>
          </div>
          <hr />
          <div class="">
            <div class="uk-width-auto d-flex">
              <img
                class="uk-border-circle"
                width="40"
                height="40"
                :src="gal.Photo"
              />
              <div class="uk-width-expand ml-3">
                <b
                  ><p class=" uk-margin-remove-bottom">{{ gal.name[0] }}</p></b
                >
                <p
                  style="font-size: 0.7em"
                  class="uk-text-meta uk-margin-remove-top"
                >
                  Published on
                  <time datetime="2016-04-01T19:00">April 01, 2016</time>
                </p>
                <p>{{ gal.description }}</p>
              </div>
            </div>
          </div>

          <hr />
          <p v-if="comment">
            {{ comments.length }} <span style="font-size: 20px">Comment</span>
          </p>
          <p v-else style="font-size: 20px">
            {{ comments.length }}
            <span style="font-size: 20px;color: blue">Comments</span>
          </p>

          <chat :ids="ids"></chat>
        </div>
        <div class="col-md-4">
          <sidegal :ids="ids"></sidegal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chat from "@/components/Chat";
import db from "@/firebase/init";
import likes from "@/components/frames/likes";
import imageInfo from "@/components/frames/imageInfo";
import { mapGetters } from "vuex";
export default {
  name: "GetStarted",
  components: {
    chat,
    likes,
    imageInfo
  },

  data() {
    return {
      gallery: [],
      ids: this.$route.params.id,
      comments: [],

      meme_id: null
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["loading"]),
    comment() {
      return this.comments.length == 1;
    }
  },
  created() {
    // this.$store.dispatch('ViewImages')
    db.collection("Memes")
      .where("Meme_id", "==", this.ids)
      // .orderBy("time")
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            this.gallery.push(change.doc.data());
            // console.log(change.doc.id)
          }
        });
      });
    db.collection("message")
      .where("Meme_id", "==", this.$route.params.id)
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            this.comments.unshift(change.doc.data());
            // this.time=moments(change.doc.data().time).format('lll');
          }
        });
      });
  }
};
</script>

<style scoped>
.me img {
  padding-top: 27px;

  max-height: 400px;
  max-width: 100%;
  width: 1500px !important;
}
.test {
  max-height: 500px;
  overflow-scrolling: auto;
}
.uk-width-auto img {
  width: 50px;
  height: 50px;
}
</style>
