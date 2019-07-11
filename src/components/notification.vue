<template>
  <div>
      <div class="">
          <span class="" ><i class="fa fa-globe" style="font-size:24px;color: orangered"></i><span style="position:relative;top:-20px;left:-10px;margin-top: 5px;background-color: red" class="uk-badge">{{Friends.length}}</span></span>
          <div uk-dropdown="mode: click" v-if="Friends.length != 0">
              <div v-for="requests in Friends" class="uk-flex "  style="width: 450px">
                 <div>
                     <img
                             class="uk-border-circle"
                             width="40"
                             height="40"
                             :src="requests.user_requestedImage"
                     />
                 </div>
                  <span style="color: #00c7ff;font-weight: bold" >{{ requests.user_requestedName }}</span><span>{{msg}}</span><span style="color: red" @click="checked(requests.request_id)"><span class="uk-margin-small-right" uk-icon="check"></span></span>
              </div>
              <div></div>

          </div>
      </div>
  </div>






</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "notification",
  data() {
    return {
      msg:'accepted you fren request',
      Friends: [],
      id: firebase.auth().currentUser.uid
    };
  },
  methods: {
      checked(id) {
          db.collection("friendships")
              .doc(id)
              .update({
                  check:1

              }).then(()=>{
              window.location.reload()
          })


    }
  },
  created() {

    db.collection("friendships")
      .where("requester", "==", this.id)
      .where("status", "==", 1).where("check", "==", null)
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            this.Friends.push(change.doc.data());
          }
        });
      });
  }
};
</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
}
.uk-flex {
  margin-top: 15px;
}
span {
  margin-left: 5px;
}
.uk-offcanvas-bar {
  background-color: #0a2b4e;
}
button {
  margin-left: 7px;
}
</style>
