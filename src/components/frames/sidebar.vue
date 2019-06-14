<template>
<!--    <div class="sidebar"  id="sidebar">-->
<div>


        <h3 class="test">#USERS</h3>
        <hr style="width: 200px;margin-left: 10px">
       <div v-for="use in users" class="test">
           <div style="margin-top: 10px"  class="uk-width-auto">
               <i style="color:green" class="fa fa-circle"></i>
               <router-link :to="'/profile/' + use.alias">{{use.alias}}</router-link>
           </div>
           <div></div>
       </div>
    </div>
</template>

<script>

    import db from "@/firebase/init";
    export default {
        name: "sidebar",


        data(){
            return{
                users:[],
                id:[]
            }
        },
        // methods:{
        //     profile(id){
        //      this.$router.push({name:'profile'})
        //     }
        // },
        created() {
            this.$store.dispatch('Users',this.users)
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
