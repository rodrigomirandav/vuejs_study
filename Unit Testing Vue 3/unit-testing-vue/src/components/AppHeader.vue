<template>
  <div>
    <button v-show="loggedIn">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: true,
    };
  },
};
</script>

<style></style>
