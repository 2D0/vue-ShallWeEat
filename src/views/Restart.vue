<template>
    <content-header></content-header>

    <div class="contain__in">
      <h1 class="contain__main-tit">
        <strong class="contain__tit--big">Dablisher</strong>
        <span>Is Going To Eat</span>
      </h1>
      <div class="contain__mid-cont">
        <div class="contain__mid-cont--photo">
          <div class="contain__mid-cont__box">
            <img src="../assets/foodData/RiceCake.jpg" alt="rice-cake">
          </div>
        </div>
        <div class="contain__btm-cont--start">
          <div class="contain__btm-box">
            <button @click="back" class="contain__btm-btn contain__btm-btn--dark-blue">Restart</button>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
  import ContentHeader from '../components/layout/Header.vue'
  
  export default {
    components: {
      'content-header' : ContentHeader,
    },
    methods: {
      back () {
        this.$router.go(-1);
      }
    },
  }


</script>