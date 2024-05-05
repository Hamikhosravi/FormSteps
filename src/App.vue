<template>
  <div id="app" class="h-screen w-full p-2">
    <Wizard class="h-2/4"/>
    <hr />
    <Description class="h-2/4"/>
  </div>
</template>

<script>
  import Wizard from './components/Wizard.vue';
  import Description from "./components/Description.vue";

  export default {
    components: {
      Wizard, Description
    }
  };
</script>

<style>

</style>
