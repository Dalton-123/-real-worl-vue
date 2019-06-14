<template>
<!--    <div class="sidebar"  id="sidebar">-->
<div>
    <div class="uk-inline test">



        <p><i class="fa fa-users">Users</i></p>
        <div uk-dropdown> <div class="me">

            <div v-for="use in users" class="test">
                <div style="margin-top: 10px"  class="uk-width-auto">

                    <a href=""><router-link :to="'/profile/' + use.alias"><i style="color:green" class="fa fa-circle"></i>{{use.alias}}</router-link></a>
                </div>
                <div></div>
            </div>
        </div></div>
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
       background: #0a2b4e;
    }

.me{background: #0a2b4e;
    overflow: auto;
    max-height: 250px;


}
.uk-inline{
    background: #0a2b4e;
}

    i{margin-right: 5px;
        font-size: 1.2em;
        color: orangered;
    }
</style>
