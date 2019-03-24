<!--<template>-->
<!--<div>-->
    <!--<form @submit.prevent="addMessage" >-->
        <!--<label for="new-message">New Message(enter to add)</label>-->
        <!--<input type="text" name="new-message" v-model="newMessage">-->
        <!--<p v-if="feedback" style="color: red">{{feedback}}</p>-->
    <!--</form>-->

<!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--import db from '@/firebase/init'-->
    <!--export default {-->
        <!--name: "newMessage",-->
        <!--props:['name'],-->
        <!--data(){-->
            <!--return{-->
                <!--newMessage:null,-->
                <!--feedback:null-->
            <!--}-->
        <!--},-->
        <!--methods:{-->
            <!--addMessage(){-->
                <!--if(this.newMessage){-->
                    <!--db.collection("messages").add({-->
                        <!--name: this.name,-->
                        <!--content: this.newMessage,-->
                        <!--time:Date.now()-->

                    <!--}).catch(function(error) {-->
                            <!--console.error("Error adding document: ", error);-->
                        <!--})-->
                    <!--this.newMessage=null-->
                    <!--this.feedback=null-->
                <!--}else{-->
                    <!--this.feedback='Please enter message'-->
                <!--}-->
            <!--}-->

        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
