<template>
    <div class="hero">
        <div class="container ">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-md-5">
                    <div class="hero-content">
                        <h1 class="hero-title">
                            Memes Gallery
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?
                        </p>
                        <div class="hero-btn mt-5">
                            <button class="btn custom-btn btn-info mr-4">Explore</button>
                            <button class="btn custom-btn btn-outline-secondary">Products</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="graphic">
                        <img src="@/assets/front.svg" alt="">
                    </div>

                </div>
            </div>
            <imags></imags>
        </div>
    </div>
</template>
<script>
    import imags from '@/components/frames/Images'
    export default {
        name: "gallery",
        components:{
            imags
        }
    }
</script>

<style scoped>
    .hero{
        /*padding-top: 0rem;*/
        margin-top: 0;
        width: 100%;
        height: 500px;
        text-align: left;
        margin-left: 30px;
    }
    img{
        width:500px
    }
</style>
