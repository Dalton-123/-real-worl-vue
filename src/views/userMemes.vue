<template>
    <div class="test" >
<div v-for="image in images" >
    <div>
        <div class="card">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-auto">
                        <img class="uk-border-circle" width="40" height="40" :src="image.Photo">
                    </div>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">{{image.name[0]}}</h3>
                        <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                    </div>
                </div>
            </div>
            <div class="uk-card-media-top">
                <img :src="image.image" alt="">
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">{{image.title}}</h3>
                <p>{{image.description}}</p>
            </div>
        </div>
    </div>

</div>

    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import db from "@/firebase/init";
    import firebase from 'firebase'

    export default {
        name: "userMemes",
        props: ["ids"],
        data() {
            return {
                images:[],
                id:firebase.auth().currentUser.uid
            };
        },
        methods: {
            Goto(id) {
                this.$router.push({ name: "GetStarted", params: { id: id } });
                window.location.reload();
            }
        },
        computed: {
            ...mapGetters(["loading"]),

        },
        created() {
            // this.$store.dispatch("ViewImages");
            db.collection('Memes').where('user_id','==',this.id).where('privacy','==','Frens')
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.images.push(change.doc.data());
                        }

                    });
                });
        }
    };
</script>

<style scoped>
    .uk-width-auto img{
        width: 40px;
        width: 40px;height: 40px;
    }
    .test {
        margin-top: 25px;





    }
 .uk-card-media-top   img{

        max-width: 100%;

        max-height: 70%;
        width:500px;
        height: 300px;
        padding: 15px;
    }

.card{
    width: 500px;
}

</style>
