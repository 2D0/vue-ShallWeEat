<template>
    <h1 class="container__main-tit">
      Shall We Eat<br>
      Together?
      </h1>
    <div class="container__btm-cont">
      <div class="container__name-input container__btm-box">
        <input type="text" placeholder="Your Name" v-model="username">
      </div>
      <div class="container__btm-box">
        <router-link to="weight" class="container__btm-btn container__btm-btn--dark-blue">Start</router-link>
      </div>
    </div>
</template>
