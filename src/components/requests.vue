<template>
  <div>
    <a class="" uk-toggle="target: #friends"
      ><i class="fa fa-user-plus">requests</i></a
    >

    <div id="friends" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <h3 v-if="requests.length !=0">Friend Requests</h3>
          <div v-else><h3 >You have no requests</h3>
              <span style='font-size:200px;'>&#128577;</span></div>
        <div
          v-for="request in requests"
          :key="request.requester"
          class="uk-flex"
        >
          <img
            class="uk-border-circle"
            width="40"
            height="40"
            :src="request.image"
          />

          <span>{{ request.name[0]}}</span>
            <button v-if="!request.status" @click="confirm(request.request_id)">
              <i class="fa fa-user-plus">confirm</i>
            </button>
            <span v-else style="color: #00c7ff">{{msg}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/init";
export default {
  name: "requests",
  data() {
    return {
      id: firebase.auth().currentUser.uid,
      requests: [],
      msg: "you are frens ",
      status: null
    };
  },
  methods: {
    confirm(id) {
      db.collection("friendships")
        .doc(id)
        .update({
          status: 1
        });
      window.location.reload()
    }
  },
  created() {
    db.collection("friendships")
      .where("user_requested", "==", this.id)
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            this.requests.push(change.doc.data());
          }
        });
      });
  }
};
</script>

<style scoped>
i {
  color: orangered;
}
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
button {
  margin-left: 15px;
}
    .uk-offcanvas-bar{
        background-color: #0a2b4e;
    }
</style>
