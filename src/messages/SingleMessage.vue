<template>
  <div class=" test">


    <div
      v-for="message in messages"
      :key="message.message"
      class=" uk-card  uk-width-1-1@m"
    >

      <article class="uk-comment" @submit.prevent="deletes">
        <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
          <div class="uk-width-auto ">
            <img class="uk-border-circle" :src="message.pic"  alt="">
          </div>
          <div class="uk-width-expand">
            <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{{message.name[0]}}</a></h4>
            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
              <li><a href="#">{{time}}</a></li>
<!--              <a href="#" @click="deletes(message.id)" class="uk-icon-link" uk-icon="trash"></a>-->

            </ul>
          </div>
        </header>
        <div class="uk-comment-body">
          <p><i style="" class="fas fa-comment-dots"></i>{{message.message}}</p><p style="margin-left: 4px" v-for="emoji in message.emoji">{{emoji}}</p>

<!--          REPLY-->
<reply :Id="messageId" ></reply>




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
import reply from '@/components/frames/reply'
export default {
  name: "SingleMessage",
  props:['ids'],
  data() {
    return {
      messages: [],
      crabs:[],
        time:null,
        messageId:null

    };
  },
  components:{reply},
  computed:{
    // image(){
    //   return this.$store.state.image
    // },

  },

  methods: {
    deletes(doc){
      if(confirm("Do you want to delete this message")){
        db.collection("message").doc(doc).delete()
        window.location.reload()
      }else {
        alert("message was not removed")
      }



    }
},
  created() {
    this.$store.dispatch('readMessages',this.messages)







  }
};
</script>

<style scoped>
.test {
  /*margin-left: 330px;*/
    max-height: 400px;
    /*overflow: auto;*/

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
i{margin-right: 15px;
  font-size: 1.1em;
  margin-top: 5px;
  color: palevioletred;
}

  a{font-size: 1.1em}
  .fa fa-thumbs-up{
    color:blue;
  }
   .uk-width-auto img{
        width: 45px;
       max-height: 45px;
    }
    p{display: inline-block;
    }
</style>
