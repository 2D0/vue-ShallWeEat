<script setup lang="ts">
</script>

<template>
    <div class="container">
      <div class="container__in">
        <router-view></router-view>
      </div>
    </div>
</template>

<style lang="scss">
  @import '@/assets/base.scss';

</style>

<script>

  export default {
    data: function(){
      return {
        username: '',
      }
    }
  }



</script>