<template>
    <div class="uk-container uk-section uk-section-muted" style="margin-top: 0px" >
        <div uk-slider="center: true">
<h3>People you may know</h3>
            <div  class="uk-position-relative uk-visible-toggle uk-light " tabindex="-1">
                <div class=" uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m" >
                    <div class="card" v-for="use in users">
                        <canvas class="header-bg" width="20" height="70" id="header-blur"></canvas>
                        <div class="avatar">
                            <img :src="use.image" alt="" />
                        </div>
                        <div class="content">
                            <p>{{use.name}} <br>
                                More description here</p>
                            <div class="">

                                <button class="btn btn-light" type="button"
                                        v-if="!test(use.id) && !confirm(use.id)"
                                        @click="addfren(use.id, use.image, use.name, use.alias)"
                                >
                                    <i class="fa fa-user-plus"> fren</i>
                                </button>

                                <div style="margin-bottom: auto;margin-left: 25px" v-else class="uk-alert-primary" uk-alert>
                                    <a class="uk-alert-close" uk-close ></a>
                                    <p>
                                        {{ msg }}<span>{{ use.name }}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a style="color: #00c7ff" class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                <a style="color: #00c7ff" class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

            </div>

            <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

        </div>
    </div>
</template>

<script>
    import db from "@/firebase/init";
    import firebase from "firebase";
    import {fb} from "@/firebase/init";

    export default {
        name: "sidebar",

        data() {
            return {
                users: [],
                gallery: [],
                id: firebase.auth().currentUser.uid,
                msg: "",
                name: null,
                image: null,
                myAlias: null,
                testing: [],
                requester: null,
                search: "",
                Show: true
            };
        },

        methods: {
            addfren(id, image, name, alias) {
                db.collection("friendships")
                    .add({
                        requester: this.id,
                        user_requested: id,
                        user_requestedImage: image,
                        status: null,
                        name: this.name,
                        user_requestedName: name,
                        requesterImage: this.image,
                        userRequestedAlias: alias,
                        myAlias: this.myAlias
                    })
                    .then(ref => {
                        db.collection("friendships")
                            .doc(ref.id)
                            .update({
                                request_id: ref.id
                            });
                    });
            },
            test(id) {
                return this.testing.find(map => {

                    return map.user_requested == id && map.requester == this.id;
                });

            },
            confirm(id) {
                return this.testing.find(map => {

                    return map.user_requested == this.id && map.requester == id;
                });
            },
            change() {
                if (!this.Show) {
                    this.Show = true;
                } else {
                    this.Show = false;
                }
            }
        },
        firestore() {
            return {
                testing: fb.collection('friendships')
            }
        },
        computed: {
            filteredList() {
                return this.users.filter(post => {
                    return post.name.toLowerCase().includes(this.search.toLowerCase());
                });
            },
            sliceList() {
                return this.filteredList.slice(0, 4);
            }
        },

        created() {
            db.collection("Profile")
                .where("id", "==", this.id)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.name = doc.data().name;
                        this.image = doc.data().image;
                        this.myAlias = doc.data().alias;
                    });
                })
                .catch(error => {
                    console.log("Error getting documents: ", error);
                });
            this.$store.dispatch("Users", this.users);


        }
    };
</script>

<style scoped>



    .src-image {
        display: none;
    }

    .card {
        overflow: hidden;
        position: relative;
        border: 1px solid #CCC;
        border-radius: 8px;
        text-align: center;
        padding: 0;
        margin:10px;
        /*background-color: black;*/
        color: rgb(136, 172, 217);
    }

    .card .header-bg {
        /* This stretches the canvas across the entire hero unit */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        border-bottom: 1px rgba(0, 155, 58, 0.9) solid;
        /* This positions the canvas under the text */
        z-index: 1;
    }
    .card .avatar {
        position: relative;
        margin-top: 15px;
        z-index: 100;
    }

    .card .avatar img {
        width: 100px;
        height: 100px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 5px solid  rgba(0, 155, 58, 0.9);
    }
    button{
        /*width: 100%;*/
/*background-color:rgba(254, 209, 0, 0.9);*/
        background-color:  rgba(254, 209, 0, 0.9) ;
    }
</style>
