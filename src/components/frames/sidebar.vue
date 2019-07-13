<template>
  <div>
    <a class="" type="" uk-toggle="target: #offcanvas"
      ><i class="fa fa-users" style="color: orangered">users</i></a
    >

    <div id="offcanvas" uk-offcanvas="flip:false; overlay: true">
      <div class="uk-offcanvas-bar test">
        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <h3 >Users</h3>
        <hr>
       <div>
         <div v-for="use in users" class="uk-flex uk-child-width-expand@s " uk-grid>

           <div >
             <img class="uk-border-circle" width="40" height="40" :src="use.image">
             <span >{{use.name}}</span>
           </div>

               <button @click="addfren(use.id,use.image,use.name,use.alias)">
               <i  class="fa fa-user-plus"> fren</i>
             </button>



         </div>
       </div>


        </div>
      </div>
    </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "sidebar",

  data() {
    return {
      users: [],
      gallery:[],
      id: firebase.auth().currentUser.uid,
      msg:'request sent',
        name:null,
        image:null,
        myAlias:null
    };
  },


  methods: {
    addfren(id,image,name,alias) {
      db.collection("friendships")
        .add({
          requester: this.id,
          user_requested: id,
          user_requestedImage:image,
          status: null,
          name:this.name,
          user_requestedName:name,
          requesterImage:this.image,
            userRequestedAlias:alias,
            myAlias:this.myAlias
        }).then(ref => {
        db.collection("friendships").doc(ref.id).update({
          request_id: ref.id
        })
      })



    }
  },
  computed:{
   // name(){
   //  return this.gallery.map(map=>map.name)
   // },
   //  image(){
   //  return this.gallery.map(map=>map.image)
   // },


  },
  created() {
      db.collection("Profile")
          .where('id','==',this.id)
          .get()
          .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                  this.name=doc.data().name
                  this.image=doc.data().image
                  this.myAlias=doc.data().alias
              });
          })
          .catch(error => {
              console.log("Error getting documents: ", error);
          });
    this.$store.dispatch("Users",this.users)



  },

};
</script>

<style scoped>
#sidebar {
  /*height: 100%;*/

  float: left;
  position: fixed;
}
.sidebar {
  width: 100px;
  height: 107%;
  margin: 0;
}
#sidebar {
  background: black;
  width: 25%;
  /*margin-bottom: -4px;*/
  /*bottom: -5;*/
}
.uk-offcanvas-bar{
  background-color: #0a2b4e;
}

.me {
  overflow: auto;
  max-height: 500px;
}
.uk-inline {
  background: #0a2b4e;
}

i {
  margin-right: 5px;
  font-size: 1.2em;
  color: #0a2b4e;
}
a {
  color: orangered;
  font-size: 1.2em;
}
button {
  margin-right: 15px;
  background-color: orangered;
  width: 10px;
}
  img{width: 30px;
  height: 30px}
  .uk-flex{margin-top: 15px}
  span{margin-left: 5px}
  .test{width: 500px}
</style>
