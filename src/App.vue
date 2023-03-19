<template>
  <base-container title="Vuex">
    <counter></counter>
    <button @click="addOne">Add 10</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import Counter from './components/Counter.vue';
export default {
  components: {
    BaseContainer,
    Counter,
  },
  methods: {
    addOne() {
      this.$store.commit('increase', { value: 10 });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
