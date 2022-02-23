<template>
    <div class="contain__in">
      <h1 class="contain__main-tit">
        Shall We Eat<br>
        Together?
        </h1>
      <div class="contain__btm-cont">
        <div class="contain__name-input contain__btm-box">
          <input type="text" placeholder="Your Name" :value="value" @input="UserName" @keyup.enter="NameFix">
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
import Weight from './Weight.vue'

  export default {
    name: 'NameData',
    props: {
      value: {

      }
    },
    data: function(){
      return {
        pvalue: this.value,
        UserName: '',
      }
    },
    methods: {
      NameFix() {
        localStorage.setItem(this.UserName, this.UserName)
      },
      UserName($event){
        this.$emit('input', $event.target.value)
      }
    },
  }



</script>