<template>
    <div class="contain__in">
      <h1 class="contain__main-tit">
        Shall We Eat<br>
        Together?
        </h1>
      <div class="contain__btm-cont">
        <div class="contain__name-input contain__btm-box">
          <input type="text" placeholder="Your Name" @input="UserName" maxlength="8">
        </div>
        <div class="contain__btm-box">
          <router-link 
            to="/Weight" 
            @click="NameFix"
            class="contain__btm-btn contain__btm-btn--dark-blue" 
          >Start</router-link>
        </div>
      </div>
    </div>
</template>


<script>
  export default {
    name: 'NameData',
    props: {
      value: {

      }
    },
    data: function(){
      return {
        UserName: '',
      }
    },
    methods: {
      NameFix() {
        this.$router.push({
          name: 'Weight',
          params: {name: 'Weight', age:2},
        })
      }
    },
  }



</script>