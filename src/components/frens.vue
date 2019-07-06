<template>
   <div>
       <a  uk-toggle="target: #offcanvas-overlay"><i style="color:orangered " class="material-icons">&#xe7f0;</i></a>

       <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
           <div class="uk-offcanvas-bar">

               <button class="uk-offcanvas-close" type="button" uk-close></button>
               <div v-if="frens.length !=0">
                   <h3>Your Frens</h3>
                   <div
                           v-for="request in frens"
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
              id: firebase.auth().currentUser.uid,

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
</style>
