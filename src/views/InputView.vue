<template>
  <div>
    <input type="text" @input="inputName" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("Auth", ["setName"]),
    inputName(event) {
      this.setName(event.target.value);
    },
  },
};
</script>

<style></style>
