<template>
    <div>
        <single-message :name="name"></single-message>
        <forms :name="name"></forms>
    </div>
</template>

<script>
    import SingleMessage from "./SingleMessage"
    import forms from "./MessageForm"
    // import database from 'firebase/database'
    export default {
        name: "Messages",
        props:['name'],
        components: {SingleMessage,forms},

    }
</script>

<style scoped>

</style>
