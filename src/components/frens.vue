<template>
    <div class="">



        <div class="uk-card-header" v-if="frens.length !=0 || Friends.length !=0">

            <!--  For who sends fren request -->

            <div  v-for="requests in frens" class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                    <img class="uk-border-circle" width="50" height="50" :src="requests.user_requestedImage">

                </div>
                    <router-link :to="'/profile/' + requests.myAlias  "><span>{{ requests.user_requestedName}}</span></router-link>
                <div class="uk-width-expand">
                    <button class="btn btn-light" type="button" @click="remove(requests.request_id)" style="color: black">Unfren</button>
                </div>
            </div>


            <!--  For who requests fren request -->

            <div  v-for="requests in Friends" class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-expand">
                    <img class="uk-border-circle" width="50" height="50" :src="requests.user_requestedImage">

                </div>
                <router-link :to="'/profile/' + requests.myAlias  ">{{ requests.user_requestedName}}</router-link>

                <div class="uk-width-expand">
                    <button class="btn btn-light" type="button" @click="remove(requests.request_id)" style="color: black">Unfren</button>
                </div>
            </div>

            <!--  Smiley face if dont have any frens   -->

        </div>
        <div v-else>
            <h3>You have no frens</h3>
            <hr>
            <hr>
            <span style='font-size:200px;'>&#128577;</span></div>

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
        // mounted() {
        //     UIkit.offcanvas("#me").show();
        // }
    }
</script>

<style scoped>
button {
    background-color: #fed100;
   margin-left: 5px;
}
</style>
