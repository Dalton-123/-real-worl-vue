<template>
    <div>


<!--       <div class="test" @submit.prevent="me">-->
<!--           <div>-->
<!--               <label for="name">Name</label>-->
<!--               <input type="text" v-model="email">-->
<!--           </div>-->
<!--           <div>-->
<!--               <label for="password">Password</label>-->
<!--               <input type="text" v-model="password">-->
<!--           </div>-->
<!--       </div>-->
<!--        <p v-if="feedback" style="color: red">{{feedback}}</p>-->
<!--<button @click="me">test</button>-->

<h1>jlkfsjdlfdjslfh</h1>

    </div>
</template>

<script>
    import db from '@/firebase/init'
    import firebase from "firebase";
    export default {
        name: "timestamp",
        data(){
          return{
              images:[],
              feedback:null,
              email:null,
              password:null
          }
        },

        created(){

        },

        methods:{
           me(){

               firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(()=>{
                   db.collection("users").doc('kfldj').set({
                      email:this.email,
                       password:this.password

                   });

           });


           }


        }











    }
</script>

<style scoped>

.test{
    margin:150px
}
    h1{
        text-transform: uppercase;
    }
</style>
