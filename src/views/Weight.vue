<template>
    <content-header></content-header>

    <div class="contain__in">
      <h1 class="contain__main-tit">
        <strong class="contain__tit--big">
          <div :UserName='name' @name='PassName'></div>
          <name-data :UserName='name' @name='PassName'></name-data>
          <my-name UserName="nameVal" @input="NameFixOn"></my-name>
        </strong>
        <span>Choose The Preference</span>
      </h1>
      <div class="contain__btm-cont">
        <div class="contain__btm-box">
          <router-link to="/Start" class="contain__btm-btn contain__btm-btn--light-blue">Light</router-link>
        </div>
        <div class="contain__btm-box">
          <router-link to="/Start" class="contain__btm-btn contain__btm-btn--blue">Normal</router-link>
        </div>
        <div class="contain__btm-box">
          <router-link to="/Start" class="contain__btm-btn contain__btm-btn--dark-blue">Heavy</router-link>
        </div>
      </div>
    </div>
</template>


<script>
  import ContentHeader from '../components/layout/Header.vue'
  import NameData from './Home.vue'

  export default {
    components: {
      'content-header' : ContentHeader,
      'name-data' : NameData
    },
    data: function(){
      return{
        name: 'UserName'
      }
    },
    methods: {
      PassName: function(){
        this.name = UserName;
      }
    }
  }


</script>