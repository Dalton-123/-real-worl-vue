<template>
  <div>
   <div>
     <a class="" uk-toggle="target: #friends"
     ><i class="fa fa-user-plus">requests</i><span style="position:relative;top:-15px;left:-10px;margin-top: 5px;background-color:#009b3a" class="uk-badge">{{friends.length}}</span>
     </a
     >
     <div id="friends" uk-offcanvas="overlay: true">
       <div class="uk-offcanvas-bar">
         <button class="uk-offcanvas-close" type="button" uk-close></button>

         <h3 v-if="friends.length !=0">Friend Requests</h3>
         <div v-else><h3 >You have no requests</h3>
           <span style='font-size:200px;'>&#128577;</span></div>
         <div
                 v-for="request in friends"
                 :key="request.requester"
                 class="uk-flex"
         >
           <img
                   class="uk-border-circle"
                   width="40"
                   height="40"
                   :src="request.requesterImage"
           />

           <span>{{ request.name}}</span>
           <button  @click="confirm(request.request_id,request.name)">
             <i class="fa fa-user-plus">confirm</i>
           </button> <button  @click="removeRequest(request)">
             remove
           </button>
         </div>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
  import UIkit from "uikit";
import firebase from "firebase";
import db from "@/firebase/init";
import {fb} from "@/firebase/init";

export default {
  name: "requests",
  data() {
    return {
      id: firebase.auth().currentUser.uid,
      status: null,
      friends:[]
    };
  },
  firestore() {
    return {
      friends: fb.collection('friendships')
    }
  },
  computed:{

  },
  methods: {

    confirm(id,name) {
      db.collection("friendships")
        .doc(id)
        .update({
          status: 1,
          check:null

        }).then(()=>{
        UIkit.notification("You are now frens with" + ' ' + name)
      })

    },
    removeRequest(id) {
      db.collection('friendships').doc(id['.key']).delete();

      }

  },
  mounted() {
    this.$binding("friends", fb.collection("friendships").where('user_requested', '==', this.id).where('status','==',null))
            .then((ford) => {
              this.friends === ford // => __ob__: Observer
            }).catch(err => {
      console.error(err)
    })
  }
};
</script>

<style scoped>
i {
  color: black;
}
img {
  width: 30px;
  height: 30px;
}
.uk-flex {
  margin-top: 15px;
}
/*span {*/
/*  margin-left: 5px;*/
/*}*/
button {
  margin-left: 15px;
}
    .uk-offcanvas-bar{
        background-color: #0a2b4e;
    }
</style>
