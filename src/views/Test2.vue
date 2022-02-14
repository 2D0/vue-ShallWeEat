<template>
  <div class="add">
    <input
      type="text"
      class="add__input"
      placeholder="Enter your task here"
      v-model="newTodoItem"
      v-on:keyup.enter="addTodoItem"
    />
    <button class="add__button" v-on:click="addTodoItem">
      <span class="blind">Add</span>
    </button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    addTodoItem() {
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
    }
  }
};
</script>