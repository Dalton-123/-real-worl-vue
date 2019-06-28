<template>
<!--    <div class=" uk-width-1-2@m" style="margin: 0%">-->
<!--        <div  v-for="im in images" class="">-->
<!--            <div class="uk-grid-small uk-flex-middle" uk-grid>-->
<!--                <div class="">-->
<!--                    <img class="uk-border-circle" width="40" height="40" :src="im.Photo">-->
<!--                </div>-->
<!--                <div class="uk-width-expand">-->
<!--                    <h3 class="uk-card-title uk-margin-remove-bottom">{{im.name[0]}}</h3>-->
<!--                    <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">{{im.time}}</time></p>-->
<!--                </div>-->
<!--            </div>-->

<!--        <div class="uk-card-body">-->
<!--            <p>{{im.description}}</p>-->
<!--        </div>-->
<!--        </div>-->

<!--    </div>-->
</template>

<script>
    export default {
        name: "imageInfo",
        computed: {
            images() {
                return this.$store.state.Gallery;
            }
        },
        created() {
            this.$store.dispatch('ViewImages')
        }
    }
</script>

<style scoped>

</style>
