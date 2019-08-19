<template>
  <div>
    <div>
      <navbar></navbar>
    </div>

    <div  style="background-color: #e9ebee">
      <div class="" style="background-color: #e9ebee">
          <topMemes></topMemes>
      </div>

      <div style="margin: 50px;background-color: #e9ebee" >
        <div class="row ">
          <div class="col-xs-7 col-sm-6 col-lg-2">
            <div class="card test">
                <Grid></Grid>
            </div>
          </div>

          <div class="col-xs-5 col-sm-6 col-lg-8">
            <div  style="background-color: #e9ebee">
              <div style="margin: 5px">
                <!--                    <cor></cor>-->
                <div class="card">
                  <timestamp></timestamp>
                </div>
                <div style="margin: 10px">
                    <div class="card ">
                        <cor></cor>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-5 col-sm-6 col-lg-2  ">
            <div class="card test">
                <frens></frens>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cor from "@/components/frames/corousel";
import but from "@/components/frames/buttons";
import about from "@/components/pages/about";

export default {
  name: "GMap",
  props: ["alias"],
  components: {
    cor,
    but,
    about
  },
  mounted() {
    // UIkit.offcanvas('#offcanvas-usage').show()
    // window.location.reload()
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("IDs");
  }
};
</script>

<style scoped>
    .src-image {
        display: none;
    }

    .card {
        overflow: hidden;
        position: relative;
        border: 1px solid #CCC;
        border-radius: 8px;
        text-align: center;
        padding: 0;
        margin:10px;
        /*background-color: black;*/
        color: rgb(136, 172, 217);

    }

    .card .header-bg {
        /* This stretches the canvas across the entire hero unit */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        border-bottom: 1px rgba(0, 155, 58, 0.9) solid;
        /* This positions the canvas under the text */
        z-index: 1;
    }
    .card .avatar {
        position: relative;
        margin-top: 15px;
        z-index: 100;
    }

    .card .avatar img {
        width: 100px;
        height: 100px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 5px solid  rgba(0, 155, 58, 0.9);
    }
    button{
        /*width: 100%;*/
        /*background-color:rgba(254, 209, 0, 0.9);*/
        background-color:  rgba(254, 209, 0, 0.9) ;
    }
    .test{
        height: 1000px;
    }
</style>
