<template>
    <div>
    <a href="#me" uk-toggle><i style="color:orangered " class="material-icons">&#xe7f0;</i></a>

    <div id="me" uk-offcanvas="flip: true;bg-close:false">
        <div class="uk-offcanvas-bar test" style="margin-top: 145px;position: absolute">

            <button class="uk-offcanvas-close" type="button" uk-close></button>

            <h3>Your Frens</h3>
            <hr>
            <hr>
            <div v-if="frens.length !=0 || Friends.length !=0">
                <div  uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true">

                    <div
                            v-for="request in frens"

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
</template>


<script>
    import UIkit from "uikit";
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
                })
            ;db.collection("friendships").where("requester", "==", this.id).where('status','==',1)
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === "added") {
                            this.Friends.push(change.doc.data());
                        }
                    });
                });
        },
        mounted() {
            UIkit.offcanvas("#me").show();
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
        background-color: rgb(144, 148, 156);;
    }
    button{margin-left: 7px}
    .test{width: 320px;
    }

</style>
