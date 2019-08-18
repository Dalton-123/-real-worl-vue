<template>
    <div class="testStep1 test uk-text-center uk-background-fixed">

        <h1 class="uk-heading-divider uk-container uk-container-small">Meet the team</h1>
        <div class="uk-container">
            <h3 >Who we are</h3>
            <p>Muscle Crab Diversities is a Jamaican owned company specializing in leading edge Inspirational Meme’s in all the types and forms. Please subscribe today at HTTPS://MemeGalleries.Com.  Our collection of services also include speaking engagements, corporate team building workshops, and healthy living medias.  We provide  SWAG for all your corporate or private events. TSHiRTS, Polos, Coffee Cups and Mugs, Pens, Key Chains, and Plaques.

            </p>
        </div>
        <div class="ex">
            <div>
                <img src="mom.JPG" alt="">
            </div>
            <div style="margin-top:10px">
                <h2>Sandra Mitchell</h2>
                <p>Treasurer</p>
            </div>
        </div>



        <div class="ex">
        <div>
            <img src="crab.JPG" alt="">
        </div>
            <div style="margin-top:10px">
               <h2>Dalton Smith</h2>
                <p>Chief Technology Director  </p>
            </div>
        </div>




        <div class="ex">
        <div>
            <img src="crab.png" alt="">
        </div>
            <div style="margin-top:10px">
               <h2>Ralston Smith</h2>
                <p>Chief Artistic Director</p>
            </div>
        </div>
        <div class="ex">
            <div>
                <img src="cris.JPG" alt="">
            </div>
            <div style="margin-top:10px">
                <h2>Christopher Rojek</h2>
                <p>Technology Architect </p>
            </div>
        </div>
<foot></foot>

    </div>
</template>

<script>
    export default {
        name: "about",

    }
</script>

<style scoped>
.test{
    margin-top: 50px;

}
img {
    border-radius: 50%;
    width:300px;
    height: 300px;
    ;
}
    .ex{
        margin-top: 100px;
    }
h1{font-weight: 700;
     font-size:3.4em;color:#0a2b4e;}

h2{font-weight: 400;
    font-size:2.4em;color:#0a2b4e;
color: orangered}

.testStep1{
    background-image: url("https://i2.wp.com/nlj.gov.jm/wp-content/uploads/2017/08/rippled-flag.jpg?fit=1024%2C576&ssl=1") ;
    /*width: 1500px;*/
    /*height: 1000px;*/
    margin-top: auto;
    padding-top: 0px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /*position: absolute;*/

}
    p{
        color:white;
        font-size: 20px ;
    }
</style>
