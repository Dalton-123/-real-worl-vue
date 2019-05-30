<template>
    <div class="sidebar"  id="sidebar">
        <h2 class="uk-text-center">Users</h2>
       <div v-for="use in users">
           <div style="margin-top: 10px"  class="uk-width-auto">
               <img class="uk-comment-avatar" src="crab.png" width="80" height="80" alt="">
               <span>{{use.name}}</span>
           </div>
           <div></div>
       </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import db from "@/firebase/init";
    export default {
        name: "sidebar",
        props:['name'],
        data(){
            return{
                users:[]
            }
        },
        computed:{
            ...mapGetters(['CurrentUser'])
        },
        created() {
            var observer = db.collection("message").onSnapshot(querySnapshot => {
                querySnapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                         this.users.push({name:change.doc.data().name})

                    }
                });
            });
        }

    }
</script>

<style scoped>
    #sidebar {
        /*height: 100%;*/

        float:left;
        position: absolute;

    }
    .sidebar  {
        width: 100px;
        height:96%;
        margin: 0;
    }
    #sidebar {
        background:black;
        width: 25%;
        /*margin-bottom: -4px;*/
        /*bottom: -5;*/
    }
span{color: orangered}
img{width: 20px}
</style>
