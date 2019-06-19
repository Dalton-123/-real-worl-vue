<template>
<div class="uk-container test">

    <div class="row" v-for="gal in gallery">
        <div class="col-md-7">
            <img :src="gal.image" alt="" uk-svg="stroke-animation: true">
            <div class="test d-flex">
                <span href="#" class="" @click=" increment"><i class="fa fa-thumbs-up" style="font-size:24px">{{increments}}</i></span>
                <span href="#" style="margin-left: 10px" @click="decrement"><i class="fa fa-thumbs-down" style="font-size:24px"></i></span>
            </div>
<!--            {{gallery.time}}-->
            <chat :ids="ids"></chat>
        </div>
       <div class="col">
           <sidegal :ids="ids"></sidegal>
       </div>
    </div>
</div>
</template>

<script>
    import chat from '@/components/Chat'
    import db from "@/firebase/init";
    export default {
        name: "GetStarted",
        components:{
            chat
        },

        data(){
          return{
              gallery:[],
              ids:this.$route.params.id,
              first:1,
              increments:null,


          }
        },
        methods: {
           increment(){
              this.increments+=1
           } ,
            decrement(){
               this.increments-=1
           }
        },
        created(){
            // this.$store.dispatch('ViewImages')
            db.collection("Memes").where('message','==',this.ids)
                .orderBy("time")
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {

                        if (change.type === "added") {
                            this.gallery.push(change.doc.data());


                        }
                    });



                })
        }
    }
</script>

<style scoped>
img{

    padding: 20px;
    max-height: 500px;
    width: 100%;
}
    .test{
        padding-top: 10px;
        padding-left: 150px;
        padding-right: 150px;


    }
</style>
