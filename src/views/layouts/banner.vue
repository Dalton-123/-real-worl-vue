<template>
    <nav class="  container-fluid uk-text-center" uk-navbar>
        <div class="uk-navbar-right">

            <a class="uk-navbar-item uk-logo" href="#">Logo</a>

            <ul class="uk-navbar-nav ">
                <li>
                    <a href="#">
                        <span class="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                        Features
                    </a>
                </li>
            </ul>

            <div class="uk-navbar-item">
                <div>Some <a href="#">Link</a></div>
            </div>

<!--            <div class="uk-navbar-item">-->
<!--                <form action="javascript:void(0)">-->
<!--                    <input class="uk-input uk-form-width-small" type="text" placeholder="Input">-->

<!--                </form>-->
<!--            </div>-->

        </div>
    </nav>
</template>

<script>
    export default {
        name: "banner"
    }
</script>

<style scoped>
.test{
    margin-top: 0px;
    background-color: #0a2b4e;
    border-bottom: 1px solid orangered;

}
    h3{margin-left: 400px;
    color: white}

nav{
    margin-top: 0%;
    background-color: white;
}
.uk-navbar-container{
    margin-top: 0px;background-color: white;
}
</style>
