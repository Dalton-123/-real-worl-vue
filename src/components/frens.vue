<template>
    <div class="">

<!--        <img :src="'/' + images" alt="">-->
<!--        <img  style="opacity: 0.7"  src="https://cdn.pixabay.com/photo/2016/06/16/00/04/jamaica-1460207__340.jpg" alt="">-->
        <!--Input Field-->
        <div class="col-auto" style="margin-top: 50px">
            <label class="sr-only" for="inlineFormInputGroup">Username</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><i class="fa fa-search"></i></div>
                </div>
                <input  type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
            </div>
        </div>

        <div class="uk-card-header" v-if="frens.length !=0 || Friends.length !=0">

            <!--  For who sends fren request -->
            <h3 class="uk-text-bold">Your Frens</h3>



            <div  v-for="requests in frens" class="uk-grid-small uk-flex-middle  uk-child-width-1-3@s   uk-margin-remove p-1" uk-grid>
                <div class="">
                    <img class="uk-border-circle" width="60" height="30" :src="requests.requesterImage">

                </div>
                    <div>
                        <router-link :to="'/profile/' + requests.myAlias  "><span class="uk-text-bold" style="color: #009b3a">{{ requests.name}}</span></router-link>
                    </div>
                <div class="" >
                    <button class="btn btn-light" type="button" @click="remove(requests.request_id)" style="color: black">Unfren</button>
                </div>
            </div>


            <!--  For who requests fren request -->

            <div  v-for="requests in Friends" class="uk-grid-small uk-flex-middle uk-child-width-1-3@s  uk-margin-remove p-1" uk-grid>
                <div class="">
                    <img class="uk-border-circle" width="60" height="30" :src="requests.user_requestedImage">

                </div>
                <router-link :to="'/profile/' + requests.userRequestedAlias " ><span class="uk-text-bold " style="color: #009b3a;">{{ requests.user_requestedName}}</span></router-link>





                <div class="" >
                    <button class="btn btn-light" type="button" @click="remove(requests.request_id)" style="color: black;">Unfren</button>
                </div>

            </div>

            <!--  Smiley face if dont have any frens   -->

        </div>
        <div v-else>
            <h3>You have no frens</h3>
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
              images:'signup.svg'


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

    }
</script>

<style scoped>
button {
    background-color: #fed100;
    /*background-color: #e9ebee;*/


}


input{
    background-color: #e9ebee;
}


</style>
