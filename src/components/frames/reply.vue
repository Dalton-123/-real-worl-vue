<template>
    <div>
        <ul uk-accordion="multiple: true">
            <li>
                <a class="uk-accordion-title" href="#">reply</a>
                <div class="uk-accordion-content">
                    <div class="take">
                        <input type="text"  v-model="reply">
                    </div>
                    <a @click="send"><i class="fa fa-send"></i></a>
                </div>
            </li>

        </ul>
    </div>
</template>

<script>
    import db from "@/firebase/init";
    export default {
        name: "reply",
        props:['Id'],
        data(){
            return{
                reply:null,
                time:Date.now().toString()
            }
        },
        methods:{
            send(){
                db.collection('reply').set({
                    reply: this.reply,
                    time:this.time
                }).then(this.reply=null)
            }
        },
        created(){

        }

    }
</script>

<style scoped>
    .take{
        width: 40%;
    }
</style>
