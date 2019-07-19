<template>
<div>
    <div>
        <input type="text" v-model="search">
    </div>
    <div v-for="test in tryThis" >
        {{test.name|test}}
    </div>
</div>
</template>

<script>
    export default {
        name: "testing",
        data(){
            return {
                search:'',
                testing:[
                    {name:'dalton Smith'},
                    {name:'christopher Rojek'},
                    {name:'sandra Duberry'},
                    {name:'ralston Smith'},
                    {name:'savisha Thompson'},
                    {name:'rojae Green '},
                    {name:'new Port'},


                ]
            }
        },
        computed:{
            tryThis(){
                return this.testing.filter((blog)=>{
                    return blog.name.match(this.search)
                })
            }
        }
    }
</script>

<style scoped>

</style>
