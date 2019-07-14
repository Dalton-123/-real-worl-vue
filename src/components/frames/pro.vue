<template>
   <div>
       <div v-for="crab in crabs">
           <div class="d-flex">
               <img
                       class="uk-border-circle"

                       :src="crab.image"
               />
<!--               <span> {{ crab.name }}</span>-->
           </div>

       </div>
   </div>
</template>

<script>
    import db from "@/firebase/init";
    import firebase from "firebase";
    export default {
        name: "pro",
        data(){
          return{
              crabs:[],
              id:firebase.auth().currentUser.uid,
          }
        },
        created() {
            db.collection("Profile")
                .where('id','==',this.id)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.crabs.push(doc.data())

                    });
                })
                .catch(error => {
                    console.log("Error getting documents: ", error);
                });

            this.$store.dispatch('IDs')
        },
    }
</script>

<style scoped>
img{width: 40px;height: 40px}
</style>
