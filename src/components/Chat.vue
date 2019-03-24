<!--<template>-->
    <!--<div>-->
        <!--<div class="chat">-->
            <!--<h2>Dalton chat</h2>-->
            <!--<div >-->
                <!--<ul v-for="message in messages" :key="message.id" v-chat-scroll>-->
                    <!--<li ><span style="color: blue">{{message.name}}</span><p style="color: green">  {{message.content}}</p></li>-->
                    <!--<li class="time">{{message.time}}</li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->
        <!--<newMessage :name="name"></newMessage>-->
    <!--</div>-->

<!--</template>-->

<!--<script>-->
    <!--import newMessage from "@/components/newMessage"-->
    <!--import db from '@/firebase/init'-->
    <!--import moment from 'moment'-->
    <!--export default {-->
        <!--name: "Chat",-->
        <!--props:['name'],-->
        <!--components:{-->
            <!--newMessage-->
        <!--},-->
        <!--data(){-->
            <!--return{-->
                <!--messages:[]-->
            <!--}-->
        <!--},-->
        <!--created(){-->
            <!--let ref= db.collection('messages').orderBy('time')-->
            <!--ref.onSnapshot(snapshot => {-->
                <!--snapshot.docChanges().forEach(change=>{-->
                    <!--if(change.type=='added'){-->
                         <!--let docs = change.doc-->
                        <!--this.messages.push({-->
                            <!--id:docs.id,-->
                            <!--name:docs.data().name,-->
                            <!--content:docs.data().content,-->
                            <!--time:moment(docs.data().time).format('lll')-->
                        <!--})-->
                    <!--}-->
                <!--})-->
            <!--})-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.chat h2{-->
    <!--font-size:2.6em;-->
    <!--margin-bottom: 40px;-->
<!--}-->
    <!--.chat span,p{-->
        <!--font-size: 1.4em;-->
        <!--display: inline;-->
    <!--}-->
    <!--p{-->
        <!--font-size: 15px;-->
    <!--}-->

    <!--.time{-->
        <!--display: block;-->
        <!--font-size: 0.8em;-->
    <!--}-->
    <!--.chat{-->
        <!--max-height: 300px;-->
        <!--overflow: auto;-->
    <!--}-->
<!--</style>-->
