<template>
  <div class="uk-container  uk-child-width-1-4@m row" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true">
      <div style="margin-top: 50px" v-for="message in messages" :key="message.message" class=" " uk-grid>
          <div>
              <div class="uk-card uk-card-default flex" style="width: 200px;margin-left: 10px">
                  <div class="uk-card-media-top">
                      <img :src="message.image" alt="" class="col">
                  </div>
                  <div class="uk-card-body">
                      <h3 class="uk-card-title">Media Top</h3>
                      <p>Lorem ipsum dolor sit amet, .</p>
                  </div>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
import db from "@/firebase/init";
import moments from "moment";
export default {
  name: "Images",
  data() {
    return {
      messages: [],
      crabs: []
    };
  },
  computed: {
    image() {
      return this.$store.state.image;
    },
    name() {
      return this.$store.state.name;
    }
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
    var observer = db
      .collection("Memes")
      .orderBy("time")
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            this.messages.push({
              name: change.doc.data().name,
              message: change.doc.data().message,
              time: moments(change.doc.data().time).format("lll"),
              image: change.doc.data().image,
              id: change.doc.id
            });
          }
        });
      });

    this.$store.dispatch("image");
  }
};
</script>

<style scoped>
img{
    with:150px;
    max-height: 180px;

}
</style>
