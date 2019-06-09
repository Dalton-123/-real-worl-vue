<template>
    <div class="sidebar"  id="sidebar">

        <h3 class="test">#USERS</h3>
        <hr style="width: 200px;margin-left: 10px">
       <div v-for="use in userse" class="test">
           <div style="margin-top: 10px"  class="uk-width-auto">
               <i style="color:green" class="fa fa-circle"></i>
               <span>{{use.alias}}</span>
           </div>
           <div></div>
       </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    // import profiles from '@/components/User/viewProfile'
    import db from "@/firebase/init";
    export default {
        name: "sidebar",
        props:['name'],
        // components:{
        //     profiles
        // },
        data(){
            return{
                userse:[]
            }
        },
        computed:{
            ...mapGetters(['CurrentUser'])
        },
        created() {
            var observer = db.collection("users").onSnapshot(querySnapshot => {
                querySnapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                         this.userse.push({alias:change.doc.data().alias})
                            // console.log(this.userse)

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
        position: fixed;

    }
    .sidebar  {
        width: 100px;
        height:107%;
        margin: 0;
    }
    #sidebar {
        background:black;
        width: 25%;
        /*margin-bottom: -4px;*/
        /*bottom: -5;*/
    }
    .test{
        margin-left: 20px;
    }
span{color: orangered}
img{width: 20px}
</style>
