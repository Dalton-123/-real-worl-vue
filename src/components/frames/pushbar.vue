<template>
    <div>
        <button class="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-overlay">Open</button>

        <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
            <div class="uk-offcanvas-bar">

                <button class="uk-offcanvas-close" type="button" uk-close></button>


                <h3>Title</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pushbar"
    }
</script>

<style scoped>
    .main {
        margin-left: 160px; /* Same as the width of the sidenav */
        font-size: 28px; /* Increased text to enable scrolling */
        padding: 0px 10px;
    }
</style>
