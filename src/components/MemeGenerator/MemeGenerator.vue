<template>
    <div  class="top">
<navbar></navbar>
        <top></top>
        <div class="uk-container uk-text-center">

<!--            <div v-if="!image" @click="photo">-->
<!--                <img src="https://cdn.pixabay.com/photo/2017/07/11/10/43/upload-2493114__340.png" alt="">-->
<!--            </div>-->
<!--            <div class="uk-height-medium   uk-background-cover uk-light" v-else-->
<!--                 :data-src="image"  style="margin: 50px"   uk-img >-->
<!--                <h3 class="uk-text-center" v-bind:style="{ color: selected_color,fontSize:font_size }" style="font-weight: bold;font-size: 4.0em ">{{top}}</h3>-->
<!--                <h3 class="uk-text-center" v-bind:style="{ color: selected_color ,fontSize: font_size}" style="font-weight: bold;font-size: 4.0em;margin-top: 120px">{{bottom}}</h3>-->

<!--            </div>-->

            <div class=" uk-width-1-1@m">
                <div class=" uk-grid-small uk-grid-match uk-margin uk-container" uk-grid>
                    <div class=" uk-width-1-1@l" v-for="select_meme in select_memes" >
                        <div  class="uk-height-medium   uk-background-cover uk-light"
                             :data-src="select_meme.image"   uk-img >
                            <h3 class="uk-text-center" v-bind:style="{ color: selected_color,fontSize:font_size }" style="font-weight: bold;font-size: 4.0em ;">{{top}}</h3>
                            <h3 class="uk-text-center" v-bind:style="{ color: selected_color ,fontSize: font_size}" style="font-weight: bold;font-size: 4.0em;margin-top: 100px">{{bottom}}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <form @submit.prevent=""  class="uk-margin-remove">

                <fieldset class="uk-fieldset">
                    <div>
                        <div>
                            <input
                                    type="file"
                                    ref="uploads"
                                    @change="upload"
                                    style="display: none"
                            />
                        </div>

                        <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Top" v-model="top">
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Down" v-model="bottom">
                                </div>
                            </div>
                            <br> <br>
                            <div class="form-row">
                                <div class="col">
                                    <select class="form-control"   v-model="selected_color" >
                                        <option v-for="col in colors">{{col}}</option>
                                    </select>
                                </div>
                               <div class="col">
                                   <select class="form-control"  v-model="font_size">
                                       <option v-for="font in Font_Size  " >{{font}}px</option>

                                   </select>
                               </div>
                            </div>
                           <div style="padding-top: 10px">
                               <button  @click="confirm" type="submit" class="btn btn-primary uk-align-left" >Save</button>
                           </div>





<!--                        <div class="row">-->
<!--                            <div class="">-->

<!--                                <span v-if="progress">{{ progress }}</span>-->

<!--                            </div>-->


<!--                            <div class="">-->
<!--                                <button style="margin-left: 10px"-->
<!--                                        @click="Save"-->
<!--                                        class=" uk-button uk-button-secondary"-->
<!--                                >-->
<!--                                    Save-->
<!--                                </button>-->
<!--                            </div>-->
<!--                        </div>-->
                    </div>
                </fieldset>
            </form>

            <div class="tops" uk-filter="target: .js-filter">

                <ul class="uk-subnav uk-subnav-pill">
                    <li  uk-filter-control=".tag-white"><button type="submit" class="btn btn-primary">Animated</button></li>
                    <li uk-filter-control=".tag-blue"><button type="submit" class="btn btn-primary">Blessings</button></li>
                    <li uk-filter-control=".tag-black"><button type="submit" class="btn btn-primary">Divorce</button></li>
                    <li uk-filter-control=".tag-black"><button type="submit" class="btn btn-primary">Duplicates</button></li>
                    <li uk-filter-control=".tag-black"><button type="submit" class="btn btn-primary">Finance</button></li>
                    <li uk-filter-control=".tag-black"><button type="submit" class="btn btn-primary">Business</button></li>
                    <li uk-filter-control=".tag-black"><button type="submit" class="btn btn-primary">Love</button></li>
                    <li uk-filter-control=".tag-black"><button type="submit" class="btn btn-primary">Marriage</button></li>
                    <li uk-filter-control=".tag-black"><button type="submit" class="btn btn-primary">Nutrition</button></li>
                    <li uk-filter-control=".tag-black"><button type="submit" class="btn btn-primary">Political</button></li>
                    <li uk-filter-control=".tag-black"><button type="submit" class="btn btn-primary">Purpose</button></li>
                    <li uk-filter-control=".tag-black"><button type="submit" class="btn btn-primary">Relationship</button></li>
                    <li uk-filter-control=".tag-black"><button type="submit" class="btn btn-primary">Religious</button></li>
                    <li uk-filter-control=".tag-black"><button type="submit" class="btn btn-primary">Roman</button></li>
                    <li uk-filter-control=".tag-black"><button type="submit" class="btn btn-primary">Sports</button></li>



                </ul>

                <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
                    <li class="tag-white">
                        <div class="uk-card uk-card-default uk-card-body">Item</div>
                    </li>
                    <li class="tag-blue">
                        <div class="uk-card uk-card-primary uk-card-body">Item</div>
                    </li>
                    <li class="tag-white">
                        <div class="uk-card uk-card-default uk-card-body">Item</div>
                    </li>
                    <li class="tag-white">
                        <div class="uk-card uk-card-default uk-card-body">Item</div>
                    </li>
                    <li class="tag-black">
                        <div class="uk-card uk-card-secondary uk-card-body">Item</div>
                    </li>
                    <li class="tag-black">
                        <div class="uk-card uk-card-secondary uk-card-body">Item</div>
                    </li>
                    <li class="tag-blue">
                        <div class="uk-card uk-card-primary uk-card-body">Item</div>
                    </li>
                    <li class="tag-black">
                        <div class="uk-card uk-card-secondary uk-card-body">Item</div>
                    </li>

                </ul>

            </div>







            <!--    cards with memes  -->

<!--            <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m">-->
<!--                <div class=" uk-grid-small uk-grid-match uk-margin uk-container" uk-grid>-->
<!--                    <div class=" uk-width-1-4@l" v-for="dat in data" >-->
<!--                        <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"-->
<!--                             :data-src="dat.image"   uk-img >-->
<!--                            <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>-->
<!--                            <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>-->

<!--                        </div>-->
<!--                    </div>-->

<!--                </div>-->
<!--            </div>-->



        </div>



    </div>
</template>

<script>
    import db from "@/firebase/init";
    import firebase from "firebase";
    export default {
        name: "MemeGenerator",
        data() {
            return {
                image: null,
                comment:null,
                progress: null,
                top:null,
                bottom:null,
                data:[],
                select_memes:null,
                selected_color:null,
                colors:['red','blue','green'],
                font_size:null,
                id: firebase.auth().currentUser.uid


            };


        },
        computed: {
            Font_Size() {
                var cars = [];
                for (let i = 20; i < 60; i+=5) {
                    cars.push(i)
                }
                return cars;
            },
            SelectedMemeId(){
                return this.select_memes[0].meme_id
            },SelectedImage(){
                return this.select_memes[0].image
            },
            Cats() {
                return this.$store.state.categories
            },
        },

        methods: {
            press(meme_id,image){
                db.collection('SelectMemes').doc("selected_meme").set({
                    meme_id:meme_id,
                    image:image,
                    id:this.id

                })

            },
            confirm(){
               const crab = {
                         image:this.SelectedMemeId,
                        meme_image:this.SelectedImage,
                        id:this.id,
                        color:this.selected_color,
                        font:this.font_size,
                        top:this.top,
                        bottom:this.bottom
                }
                console.log(crab)
                db.collection('User_Memes').add(crab)
                    .then(()=>{
                    this.$router.push('/testing')
                })
            },
            Save() {
                db.collection('Generator').add({
                    image:this.image,
                    top:this.top,
                    bottom:this.bottom,
                    color:this.selected_color,
                    font:this.font_size
                }) .then(ref => {
                    db.collection("Generator")
                        .doc(ref.id)
                        .update({
                            Meme_ID: ref.id
                        });
                });
            },

            photo() {
                this.$refs.uploads.click();
            },
            upload(e) {
                let file = e.target.files[0];
                var storageRef = firebase.storage().ref("MemeGenerator/" + file.name);
                var uploadTask = storageRef.put(file);

                uploadTask.on(
                    "state_changed",
                    snapshot => {
                        var progress =
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        this.progress = Math.round(progress) + "%";
                    },
                    error => {},
                    () => {
                        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                            this.image = downloadURL;
                            console.log(this.image);
                        });
                    }
                );
            }
        },
        created() {
            db.collection('Generator')
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.data.push(change.doc.data());
                        }

                    });
                });
            this.$binding("select_memes", db.collection("SelectMemes"))
                .then((ford) => {
                    this.select_memes === ford // => __ob__: Observer
                }).catch(err => {
                console.error(err)
            })

        }
    };
</script>

<style scoped>



    button{
        width:80px;background: #009b3a !important;
        margin-top: 10px;

    }

li button{
    font-size: 0.9em !important;
    width:100px;
    color:white !important;
}
    .selectMeme{

    }.top{
             background-color: #e0e0e0;
         }
    .tops{
        margin-bottom: 100px;
    }
</style>
