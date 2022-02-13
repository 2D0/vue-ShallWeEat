<template>
      <h1 class="main_tit">Shall We Eat<br>Together?</h1>
      <div class="bottom_cont">
        <div class="name_input bottom_btn">
          <input id="name" type="text" placeholder="Your Name" v-model="username">
          <label for="name"></label>
        </div>
        <div class="bottom_btn dark_blue">
          <router-link to="weight">Start</router-link>
          <router-view></router-view>	
        </div>
      </div>
</template>