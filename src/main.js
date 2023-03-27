import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = { // This is how you can create a module to be merged into the store
  state() { // The state in this module is local, as in you can't do any mutations on a state that isn't defined in this module. If you want to however, you will have to call rootState in your arguments instead. state is local, rootState is not. 
    return {
      counter: 0,
    }
  },
  mutations: {
    // Use mutations to change the state of your data, state is given automatically as an argument. Having one place to change the state is better than having multiple places because if the logic changes, you can change the mutation in just one place. Don't edit the state in vuex directly in other components, it should always be done in mutations
    increment(state) {
      state.counter = state.counter + 1;
    } ,
    increase(state, payload) { // Your mutations can take a second argument named payload in which it can be any type of data. You could need this perhaps in this scenario to increase with different values in different components.
      state.counter = state.counter + payload.value
    },
  },
  actions: {
    increment(context) {
      setTimeout( function() {
        context.commit('increment') // This is how you call your mutations in actions. your mutation will be a string
      }, 2000) 
    },
    increase(context, payload) { // You add a payload as a second argument since it's required for the increase mutation to work as increase requires a payload
      context.commit('increase', payload)
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter
      if (finalCounter < 0) {
        return 0
      }
      if (finalCounter > 100) {
        return 100
      }
      return finalCounter
    },
  }, 
}

const store = createStore({
  modules: { // You can add as many modules as you like and it will all work as if it was declared here
    numbers: counterModule 
  },
  state() { // Just data
    return {
      isLoggedIn: false
    }
  },
  mutations: { 
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth // You add a key to the payload called isAuth which will have the value of isLoggedIn
    }
  },
  actions: { // You can use actions to run your mutations asynchronously 
    login(context) {
      context.commit('setAuth', {isAuth: true}) // you can modify the value of isAuth and once isAuth is modified, it will reflect on isLoggedIn as well
    },
    logout(context) {
      context.commit('setAuth', {isAuth: false} )
    }
  },
  getters: { // Getters can modify or combine data to create a new state property. These getters are read-only and do not mutate the state. To mutate the state, use mutations
    userIsAuthenticated(state) {
      return state.isLoggedIn
    }
  }
})

const app = createApp(App);

app.use(store)

app.mount('#app');
