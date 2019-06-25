<template>
<div>
<banner></banner>

    <div class="container-fluid test">
        <div class="row" v-for="gal in gallery">
            <div class="col-md-7">
                <img :src="gal.image" alt="" uk-svg="stroke-animation: true">
               <likes :ids="ids"></likes>
                <!--            {{gallery.time}}-->
                <chat :ids="ids"></chat>
            </div>
            <div class="col-md-4">
                <sidegal :ids="ids"></sidegal>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import chat from '@/components/Chat'
    import db from "@/firebase/init";
    import likes from "@/components/frames/likes";
    export default {
        name: "GetStarted",
        components:{
            chat,likes
        },

        data(){
          return{
              gallery:[],
              ids:this.$route.params.id,
              first:1,
              increments:null,
              meme_id:null


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
            db.collection("Memes").where('time','==',this.ids)
                // .orderBy("time")
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {

                        if (change.type === "added") {
                            this.gallery.push(change.doc.data());
                            // console.log(change.doc.id)

                        }
                    });



                })
        }
    }
</script>

<style scoped>
img{
padding-top: 27px;
    padding-right: 25px;
    max-height: 500px;
    width: 100%;
}
    .test{
max-height: 500px;
        overflow-scrolling: auto;


    }
</style>
