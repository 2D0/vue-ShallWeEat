<template>
    <content-header></content-header>

    <div class="contain__in">
      <h1 class="contain__main-tit">
        <strong class="contain__tit--big">
          <NameData v-model="name"></NameData>
          <div>
            {{name}}
          </div>
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
    name:'Weight',
    components: {
      'content-header' : ContentHeader,
      NameData
    },
    data (){
      return{
        name: 'UserName'
      }
    }
  }


</script>