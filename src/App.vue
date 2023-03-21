<template>
  <base-container title="Vuex">
    <counter></counter>
    <button @click="increase({ value: 10 })">Add 10</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import Counter from './components/Counter.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    BaseContainer,
    Counter,
  },
  methods: {
    // addOne() {
    // this.$store.commit('increase', { value: 10 });
    // this.$store.dispatch('increment');
    ...mapActions(['increment', 'increase']),
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
