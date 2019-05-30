<template>
  <div class="uk-container uk-container-small test vue-chat-scroll">
    <div
      v-for="message in messages"
      :key="message.message"
      class=" uk-card  uk-width-1-1@m"
    >

      <article class="uk-comment">
        <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
          <div class="uk-width-auto">
            <img class="uk-comment-avatar" src="crab.png" width="80" height="80" alt="">
          </div>
          <div class="uk-width-expand">
            <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{{message.name}}</a></h4>
            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
              <li><a href="#">{{message.time}}</a></li>
              <li><a href="#">Reply</a></li>
            </ul>
          </div>
        </header>
        <div class="uk-comment-body">
          <p>{{message.message}}</p>

        </div>
        <div class="first">
          <img :src="message.image" alt="" height="100px" width="100px">
        </div>
      </article>
      <hr>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import moments from 'moment'
export default {
  name: "SingleMessage",
  data() {
    return {
      messages: []
    };
  },
  methods: {},
  created() {
    var observer = db.collection("message").orderBy('time').onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          this.messages.push({
            name: change.doc.data().name,
            message: change.doc.data().message,
            time: moments(change.doc.data().time).format('lll'),
            image:change.doc.data().imageUrl,
          });
        }
      });
    });
  }
};
</script>

<style scoped>
.test {
  margin-left: 330px;
    max-height: 600px;
    overflow: auto;

}
.test::-webkit-scrollbar-track{
    background-color: white;
}

.rcorners {
  border-radius: 25px;
  background: #73ad21;
  padding: 20px;
  width: 400px;
  height: 115px;
  color: black;
}
    .tests{color:blue;
    font-size: 0.7em}
    .col{color: white}

  .first{
    margin-left: 600px;
  }
</style>
