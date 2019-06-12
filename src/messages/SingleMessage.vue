<template>
  <div class="uk-container test vue-chat-scroll">


    <div
      v-for="message in messages"
      :key="message.message"
      class=" uk-card  uk-width-1-1@m"
    >

      <article class="uk-comment" @submit.prevent="deletes">
        <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
          <div class="uk-width-auto ">
            <img class="uk-border-circle" :src="image" width="40" height="40" alt="">
          </div>
          <div class="uk-width-expand">
            <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{{name}}</a></h4>
            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
              <li><a href="#">{{message.time}}</a></li>
              <a href="#" @click="deletes(message.id)" class="uk-icon-link" uk-icon="trash"></a>
            </ul>
          </div>
        </header>
        <div class="uk-comment-body">
          <p>{{message.message}}</p>

        </div>
        <div class="first me">
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
      messages: [],
      crabs:[]
    };
  },
  computed:{
    image(){
      return this.$store.state.image
    },
    name(){
      return this.$store.state.name
    },
  },

  methods: {
    deletes(doc){
      if(confirm("Do you want to delete this message")){
        db.collection("message").doc(doc).delete()
      }else {
        alert("message was not removed")
      }



    }
},
  created() {
    var observer = db.collection("message").orderBy('time').onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          this.messages.push({
            name: change.doc.data().name,
            message: change.doc.data().message,
            time: moments(change.doc.data().time).format('lll'),
            image:change.doc.data().image,
            id:change.doc.id
          });
        }

      });
    });

      this.$store.dispatch('image')





  }
};
</script>

<style scoped>
.test {
  /*margin-left: 330px;*/
    max-height: 400px;
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
    margin-left: 6%;
  }
  .me{
    margin-left: 76%;
  }
</style>
