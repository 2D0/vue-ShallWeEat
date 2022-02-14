<template>
    <content-header></content-header>

    <div class="contain__in">
      <h1 class="contain__main-tit">
        <strong class="contain__tit--big">Dablisher</strong>
        <span>What Do You Want To Eat ?</span>
      </h1>
      <div class="contain__mid-cont">
        <div class="contain__mid-cont--photo">
          <div class="contain__mid-cont__box">
            <img src="../assets/foodData/RiceCake.jpg" alt="rice-cake">
          </div>
        </div>
        <div class="contain__btm-cont--start">
          <div class="contain__btm-box">
            <router-link to="/ReStart" class="contain__btm-btn contain__btm-btn--dark-blue">Start</router-link>
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
    }
  }


</script>