<template>
<div>
<banner></banner>

    <div class="container-fluid test">
        <div class="row" v-for="gal in gallery">
            <div class="col-md-7">
                <img :src="gal.image" alt="" uk-svg="stroke-animation: true">
                <h2>{{gal.title}}</h2>
                <div style="float: right;padding-right: 15px"> <likes :ids="ids"></likes>
                    </div>


<!--image description-->

                <hr>
                <imageInfo></imageInfo>


                <hr>

                <!--            {{gallery.time}}-->
                <p >{{comments.length}} <span style="font-size: 20px">Comments</span></p>
                <hr>
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
    import imageInfo from '@/components/frames/imageInfo'
    export default {
        name: "GetStarted",
        components:{
            chat,likes,imageInfo
        },

        data(){
          return{
              gallery:[],
              ids:this.$route.params.id,
              comments:[],

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
        computed:{

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
            db.collection('message').where('Meme_id', '==', this.$route.params.id)
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.comments.unshift(change.doc.data());
                            // this.time=moments(change.doc.data().time).format('lll');

                        }

                    });
                });
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
