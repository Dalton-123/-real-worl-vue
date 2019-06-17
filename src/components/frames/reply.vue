<template>
    <div>
        <ul uk-accordion="multiple: true">
            <li class="uk-open">
                <a class="uk-accordion-title" href="#">reply</a>
                <div class="uk-accordion-content">
                    <div class="take">
                        <input type="text"  v-model="reply">
                    </div>
                    <button @click="send"></button>
                </div>
            </li>

        </ul>
    </div>
</template>

<script>
    import db from "@/firebase/init";
    export default {
        name: "reply",
        data(){
            return{
                reply:null
            }
        },
        methods:{
            send(){

                db.collection('Memes').add({reply: this.reply});
            }
        }

    }
</script>

<style scoped>
    .take{
        width: 40%;
    }
</style>
