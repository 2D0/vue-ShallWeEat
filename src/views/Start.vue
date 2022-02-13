<template>
    <content-header></content-header>

    <h1 class="container__main-tit">
      <strong class="container__tit--big">Dablisher</strong>
      <span>What Do You Want To Eat ?</span>
    </h1>
    <div class="container__btm-cont">
      <div class="container__btm-box">
        <router-link to="/ReStart" class="container__btm-btn container__btm-btn--dark-blue">Start</router-link>
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