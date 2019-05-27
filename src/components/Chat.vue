<template>
    <div>
        <h1 class="uk-text-center"> {{name}}'s Page</h1>
        <sidebar :name="name"></sidebar>
        <Message :name="name"></Message>



    </div>
</template>


<script>
    import sidebar from '@/components/frames/sidebar'
    import Message from "@/messages/Messages"

    export default{
        name:'chat',
        props:['name'],
        components:{
            sidebar,
            Message
        },
        data(){
            return{

            }
        }


    }


</script>
