<script setup>

import HelloWorld from "./components/HelloWorld.vue";
import Mensagem from "./components/Mensagem.vue";
</script>

<template>
  <HelloWorld></HelloWorld>
  <HelloWorld></HelloWorld>
  <HelloWorld></HelloWorld>
  <HelloWorld></HelloWorld>
  <HelloWorld></HelloWorld>
  <HelloWorld></HelloWorld>
  <p class="verde">Test</p>
  <Mensagem msg="Prospere"></Mensagem>
</template>

<style scoped>
  .verde{
    color: blue;
  }
</style>
