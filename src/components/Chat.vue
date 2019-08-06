<template>
    <div>

<!--        <sidebar :name="name">  </sidebar>-->
        <Message :ids="ids" :Counter="Counter" ></Message>



    </div>
</template>


<script>

    import Message from "@/messages/Messages"

    export default{
        name:'chat',
        props:['ids','Counter'],
        components:{
            // sidebar,
            Message
        },
        data(){
            return{
id:this.ids
            }
        }


    }


</script>
