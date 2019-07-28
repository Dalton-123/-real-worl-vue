<template>
 <div class="uk-section uk-section-muted">
     <banner></banner>


            <div> <pro></pro></div>


     <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match uk-margin" uk-grid>
         <div>
             <div >
                 <profileComment></profileComment>
             </div>
         </div>
         <div>
             <div >
                 <userMemes></userMemes>
             </div>
         </div>
         <div>
             <div >
                 <memeGenerator></memeGenerator>
             </div>
         </div>

     </div>
 </div>
</template>

<script>
import db from "@/firebase/init";
import pro from '@/components/User/viewProfile'
import firebase from "firebase";

export default {
  name: "profile",
    components:{
        pro
    },

  data() {
    return {
      // profiles: [],
      // newComment: null,
      // user: null,
      // feedback: null,
      // comments:[],
      // id:this.$attrs.id,
      // users:[]
    };
  },
  created() {
    //get current current user
    // let ref = db.collection("users");
    // ref.where("user_id", "==", firebase.auth().currentUser.uid).get().then(snapshot => {
    //     snapshot.forEach(doc => {
    //       (this.user = doc.data()), (this.user.id = doc.id);
    //     });
    //   });
    // //profile data
    // ref.doc(this.$route.params.id).get().then(user => {
    //     this.profiles.push(user.data());
    //   });

    //comments
    // db.collection("comments").where("to", '==', this.$route.params.id).onSnapshot(snapshot => {
    //     snapshot.docChanges().forEach(change => {
    //       if (change.type == "added") {
    //         this.comments.unshift({
    //           from: change.doc.data().from,
    //           content: change.doc.data().content
    //         });
    //       }
    //     });
    //   });
    //
    //   this.$store.dispatch('Users',this.users)
    //       this.email =firebase .auth().currentUser.email



  },
    computed:{


    },
  methods: {

    // addComment() {
    //   if (this.newComment) {
    //     this.feedback = null;
    //     let me = this.$route.params.id;
    //     db.collection("comments")
    //       .add({
    //         to: me,
    //         from: this.user.alias,
    //         content: this.newComment,
    //         time: Date.now()
    //       })
    //       .then(() => {
    //         this.newComment = null;
    //       });
    //   } else {
    //     this.feedback = "You must enter a momment to add it";
    //   }
    // }
  },

};
</script>

<style scoped>
  /*.profile .card{*/
  /*  padding:20px;*/
  /*  top:0*/
  /*  !*margin-top:60px;*!*/

  /*}*/
  /*.profile h2{*/
  /*  font-size:2em;*/
  /*  margin-top:0;*/
  /*  padding-left: 10px;*/

  /*}*/

  /*.profile li{*/
  /*  !*padding: 10px;*!*/
  /*  border-bottom: 1px solid blanchedalmond;*/

  /*}*/
  /*i{margin-right: 5px;*/
  /*    font-size: 1.5em;*/
  /*    color: orangered;*/
  /*}*/
  /*   .card{*/
  /*      width:1400px;*/
  /*  }*/
  /*  .profile{*/

  /*  }*/
</style>
