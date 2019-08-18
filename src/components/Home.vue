<template>


    <div id="modal-full" class="uk-modal-full" uk-modal>
        <div class="uk-modal-dialog">
<!--            <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>-->
            <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle uk-section uk-section-muted" uk-grid>
                <div class="uk-background-cover" style="background-image: url('world.svg');" uk-height-viewport></div>
                <div class="uk-padding-large ">
                    <img src="https://cdn.pixabay.com/photo/2012/04/26/19/07/crab-42880__340.png" alt=""/>
                    <h1>Meme Galleries</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="">
                        <button type="button" class="btn btn-info" @click="signup">Signup</button>
                        <button style="margin-left: 5px"  type="button" @click="login" class="btn btn-primary">Login</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UIkit from "uikit";
    export default {
        name: "Home",
        methods:{
          login(){
              this.$router.push({name:'login'})
              window.location.reload()
          },
            signup(){
                this.$router.push({name:'signup'})
                window.location.reload()
          }

        },
        mounted(){
            UIkit.modal('#modal-full').show();
        }
    }
</script>

<style scoped>
img{
    width: 100px;
    height: 100px;
}
</style>
