<template>
  <div>
    <navbar></navbar>
     <div v-if="loading"> <loader></loader></div>
    <div class="test uk-section uk-section-muted" >
      <div class="row p-5" v-for="gal in gallery">
        <div class="col">
          <div>
            <div class="me"><img :src="gal.image" alt="" /></div>
            <h3>{{ gal.title }}</h3>

<!--  Display like button-->
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
                ><p class=" uk-margin-remove-bottom">{{ gal.name}}</p></b
                >
                <p
                        style="font-size: 0.7em"
                        class="uk-text-meta uk-margin-remove-top"
                >
                  Published on
                  <time>{{gal.timestamp|formatDate}}</time>
                </p>
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

          <chat :ids="ids" :Counter="Counter"></chat>
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



import { mapGetters } from "vuex";
export default {
  name: "GetStarted",
  components: {
    chat,


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
    },
    Counter(){
      return this.comments.length
    }
  },
  created() {
    this.$store.dispatch('SingleMemes',this.gallery)
    this.$store.dispatch('readMessages',this.comments)
  }
};
</script>

<style scoped>
.me img {
  padding-top: 27px;

  max-height: 100%;
  max-width: 100%;
  height: 500px;
  width: 1500px !important;
}
.test {

}
.uk-width-auto img {
  width: 50px;
  height: 50px;
}

  .row{

  }
</style>
