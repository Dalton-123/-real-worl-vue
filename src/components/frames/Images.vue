<template>
  <div class="uk-container  uk-child-width-1-4@m row" uk-grid >
      <div style="margin-top: 50px" v-for="message in messages" :key="message.message" class=" " uk-grid>
          <div>
              <div class="uk-card uk-card-default flex uk-animation-toggle" style="width: 200px;margin-left: 10px" tabindex="0" >
                  <div class="uk-card-media-top uk-animation-scale-up">
                      <router-link :to="'/start/' + message.message"><img :src="message.image" alt="" class=""></router-link>
                  </div>

                  <i class="material-icons">send</i>
                  <i class="material-icons">&#xe439;</i>
                  <i class="fas fa-comment-dots"></i>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Images",
  data() {
    return {
      message: [],

    };
  },
  computed: {
    messages() {
      return this.$store.state.Gallery
    },
    // name() {
    //   return this.$store.state.name;
    // },

  },

  methods: {
    deletes(doc) {
      if (confirm("Do you want to delete this message")) {
        db.collection("Memes")
          .doc(doc)
          .delete();
      } else {
        alert("message was not removed");
      }
    }
  },
  created() {
      this.$store.dispatch('ViewImages')

  }
};
</script>

<style scoped>
img{
    width:250px;
    max-height: 180px;

}
   i{
       color: #0a2b4e;
       font-size: 1.4em;
       margin-left: 2px;
   }

</style>
