<template>
  <base-container title="Vuex" v-if="isAuth">
    <counter></counter>
    <button @click="increase({ value: 10 })">Add 10</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import Counter from './components/Counter.vue';
import UserAuth from './components/UserAuth.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    BaseContainer,
    Counter,
    UserAuth,
  },
  methods: {
    ...mapActions('numbers', ['increase']), // This is how you call an action from a module
    // addOne() {
    // this.$store.commit('increase', { value: 10 }); - this is how you call a mutation from vuex, commit allows you to have a second argument in case you have a payload
    // this.$store.dispatch('increment');
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated; // This is how you access your getters from Vuex
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
