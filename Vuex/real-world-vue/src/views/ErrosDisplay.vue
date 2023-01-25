<template>
  <h4>Oops! Thre was an error:</h4>
  <p>{{ error }}</p>
</template>

<script>
export default {
  props: ["error"],
}
</script>
