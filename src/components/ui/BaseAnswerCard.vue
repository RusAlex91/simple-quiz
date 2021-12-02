<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card {
  border: 1px solid gray;
  margin: 5px;
  min-width: 20vh;
  cursor: pointer;
}
</style>
