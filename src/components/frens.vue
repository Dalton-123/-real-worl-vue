<template>
   <div>
       <a  uk-toggle="target: #offcanvas-overlay"><i style="color:orangered " class="material-icons">&#xe7f0;</i></a>

       <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
           <div class="uk-offcanvas-bar">

               <button class="uk-offcanvas-close" type="button" uk-close></button>
              <div v-if="frens.length !=0 || Friends.length !=0">
                  <div  uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true">
                      <h3>Your Frens</h3>
                      <hr>
                      <div
                              v-for="request in frens"
                              :key="request.requester"
                              class="uk-flex uk-card"
                      >
                          <img
                                  class="uk-border-circle"
                                  width="40"
                                  height="40"
                                  :src="request.requesterImage"
                          />

                          <span>{{ request.name[0]}}</span><span @click="remove(request.request_id)" style="color: red">Unfren</span>
                      </div>
                  </div>
                  <div uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true">
                      <div
                              v-for="requests in Friends"
                              :key="requests.requester"
                              class="uk-flex uk-card"
                      >
                          <img
                                  class="uk-border-circle"
                                  width="40"
                                  height="40"
                                  :src="requests.user_requestedImage"
                          />

                          <span>{{ requests.user_requestedName}}</span><button @click="remove(requests.request_id)" style="color: red">Unfren</button>
                      </div>
                  </div>
              </div>
               <div v-else>
                   <h3>You have no frens</h3>
                   <span style='font-size:200px;'>&#128577;</span></div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    import db from "@/firebase/init";
    import firebase from "firebase";
    export default {
        name: "frens",
        data(){
          return{
              frens:[],
              Friends:[],
              id: firebase.auth().currentUser.uid,


          }
        },
        methods:{
            remove(id){
                db.collection("friendships").doc(id).delete().then(()=>{
                    window.location.reload()
                })
            }
        },
        created() {
            db.collection("friendships").where("user_requested", "==", this.id).where('status','==',1)
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === "added") {
                            this.frens.push(change.doc.data());
                        }
                    });
                });db.collection("friendships").where("requester", "==", this.id).where('status','==',1)
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === "added") {
                            this.Friends.push(change.doc.data());
                        }
                    });
                });
        }
    }
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
    .uk-offcanvas-bar{
        background-color: #0a2b4e;
    }
    button{margin-left: 7px}
</style>
