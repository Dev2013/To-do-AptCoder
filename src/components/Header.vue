<template>
  <header class="flex">
    <div class="left">TODO List</div>
    <div class="right">Apt Coder Assignment</div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
header {
  background: var(--background-secondary);
  color: var(--color-secondary);
  padding: 1em;
  font-size : 20px;

}
.left {
  text-align: left;
}
.right {
  text-align: right;
}
</style>
