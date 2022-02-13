<template>
    <content-header></content-header>

    <h1 class="container__main-tit">
      <strong class="container__tit--big">Dablisher</strong>
      <span>Is Going To Eat</span>
    </h1>
    <div class="container__btm-cont">
      <div class="container__btm-box">
        <button @click="back" class="container__btm-btn container__btm-btn--dark-blue">Restart</button>
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