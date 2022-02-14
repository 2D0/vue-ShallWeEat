<template>
    <div class="contain__in">
      <h1 class="contain__main-tit">
        Shall We Eat<br>
        Together?
        </h1>
      <div class="contain__btm-cont">
        <div class="contain__name-input contain__btm-box">
          <input type="text" placeholder="Your Name" v-model="UserName" @keyup.enter="NameFix">
        </div>
        <div class="contain__btm-box">
          <router-link 
            to="weight" 
            @click="NameFix"
            class="contain__btm-btn contain__btm-btn--dark-blue" 
          >Start</router-link>
        </div>
      </div>
    </div>
</template>


<script>

  export default {
    props: [
      'UserName'
    ],
    methods: {
      NameFix() {
        localStorage.setItem(this.UserName, this.UserName)
      },
      PassData: function(){
        this.$emit('name')
      }
    } 
    ,
    /* data: function(){
      return {
        UserName: '',
      }
    } */
  }



</script>