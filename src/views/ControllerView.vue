<template>
  <div>
    <p><button @click="$store.state.count++">증가</button></p>
    <p><button @click="$store.state.count--">감소</button></p>
  </div>
</template>

<script>
export default {
  methods: {
    increase(number) {
      this.$store.commit("changeCount", number);
    },

    decrease(number) {
      this.$store.dispatch("changeCount", number);
    },
  },
};
</script>

<style></style>
