<template>
  <div id="app">
    <Wizard />
  </div>
</template>

<script>
  import Wizard from './components/Wizard.vue';

  export default {
    components: {
      Wizard
    }
  };
</script>

<style>
  #app {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 20px;
  }
</style>
