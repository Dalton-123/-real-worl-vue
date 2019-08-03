<template>
    <div>
    <a href="#me" uk-toggle><i style="color:orangered " class="material-icons">&#xe7f0;</i></a>

    <div id="me" uk-offcanvas="flip: true;bg-close:false">
        <div class="uk-offcanvas-bar uk-section uk-section-muted test" style="margin-top: 145px;position: absolute">

            <button class="uk-offcanvas-close" type="button" uk-close></button>



            <div v-if="frens.length !=0 || Friends.length !=0">
                <h3>Your Frens</h3>
                <hr>
                <hr>
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

                        <router-link :to="'/profile/' + request.myAlias  "><span>{{ request.name}}</span></router-link><span @click="remove(request.request_id)" style="color: red">Unfren</span>
                    </div>
                </div>
                <div class="uk-grid-divider uk-child-width-expand@s" uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true" uk grid>
                    <div
                            v-for="requests in Friends"
                            class="uk-flex uk-card"
                    >
                      <div>  <img
                              class="uk-border-circle"
                              width="40"
                              height="40"
                              :src="requests.user_requestedImage"
                      /></div>
<div> <router-link :to="'/profile/' + requests
                        .userRequestedAlias"><span>{{ requests.user_requestedName}}</span></router-link></div>
                       <div><button @click="remove(requests.request_id)" style="color: red">Unfren</button></div>
                    </div>
                </div>
            </div>
            <div v-else>
                <h3>You have no frens</h3>
                <hr>
                <hr>
                <span style='font-size:200px;'>&#128577;</span></div>
        </div>

        </div>
    </div>
</template>


<script>
    import UIkit from "uikit";
    import db from "@/firebase/init";
    import firebase from "firebase";
    import {fb} from "@/firebase/init";
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

                })
            }
        },
        firestore() {
            return {
                frens: fb.collection('friendships'),
                Friends: fb.collection('friendships')
            }
        },
        created() {
            this.$binding("frens", fb.collection("friendships").where('user_requested', '==', this.id).where('status','==',1))
                .then((ford) => {
                    this.frens === ford // => __ob__: Observer
                }).catch(err => {
                console.error(err)
            })
            this.$binding("Friends", fb.collection("friendships").where('requester', '==', this.id).where('status','==',1).where('check','==',1))
                .then((ford) => {
                    this.Friends === ford // => __ob__: Observer
                }).catch(err => {
                console.error(err)
            })
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

    }
    button{margin-left: 7px}
    .test{width: 320px;
    }

</style>
