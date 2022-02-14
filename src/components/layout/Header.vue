<template>
    <div class="header">
      <div class="header__btn">
        <button class="header__btn--back" @click="back">
          <img src="../../assets/icons/BackBtn.svg" alt="back">
        </button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'content-header',
    methods: {
      back () {
        this.$router.go(-1);
      }
    },
  }
</script>