<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('numbers', ['finalCounter']), // This is how you call a getter from a module
  },
};
</script>
