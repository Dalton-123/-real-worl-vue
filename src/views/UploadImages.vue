<template>
    <div>
        <div>
            <input
                    type="file"
                    ref="uploads"
                    @change="upload"
                    style="display: none"
            />
        </div>
        <button class="uk-button uk-button-danger col" @click="photo">
            <p class="row" v-if="!progress">Upload Image</p>
            <span v-if="progress">{{ progress }}</span>
        </button>
    </div>
</template>

<script>
    import firebase from "firebase";
    export default {
        name: "Upload Images",
        methods: {
            photo() {
                this.$refs.uploads.click();
            },
            upload(e) {
                let file = e.target.files[0];
                var storageRef = firebase.storage().ref("Memes/");
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
                            this.image=downloadURL

                        });
                    }
                );
            }
        }

    }
</script>

<style scoped>

</style>
