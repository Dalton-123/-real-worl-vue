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
                        <h3 class="uk-card-title uk-margin-remove-bottom">{{image.name}}</h3>
                        <p class="uk-text-meta uk-margin-remove-top"><time >Published: {{image.timestamp|formatDate}}</time></p>
                    </div>
                </div>
            </div>
            <div class="uk-card-media-top">
                <router-link :to="'/start/' + image.Meme_id"><img :src="image.image" alt=""></router-link>
            </div>
            <div class="uk-card-body">
                <h3 class=""><b>Title:</b> {{image.title}}</h3>
                <p><b>Description:</b> {{image.description}}</p>
                <p><b>Category:</b> {{image.category}}</p>
                <p><b>Published:</b> {{image.timestamp|formatDate}}</p>
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
                id:this.$route.params.id
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
            db.collection('Memes').where('alias','==',this.id)
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
        /*margin-top: 25px;*/
        /*max-width: 300px;*/
        margin-left: 100px;







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
.uk-card-body h3{
    font-size: 1.4rem;
}
</style>
