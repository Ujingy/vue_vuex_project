<template>
  <div>
    <p>
      <span> 카운트 : {{ cnt }}</span>
    </p>
    <p>
      <span> 카운트(state) : {{ count }}</span>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["cnt"]),
    ...mapState(["count"]),
  },
};
</script>

<style></style>
