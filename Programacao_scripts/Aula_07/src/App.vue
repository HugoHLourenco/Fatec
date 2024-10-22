<script setup>

import HelloWorld from "./components/HelloWorld.vue";
import Mensagem from "./components/Mensagem.vue";
import Soma from "./components/Soma.vue";
import Subtracao from "./components/Subtracao.vue";
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
  <Soma n2="10" n1="1"></Soma>
  <Soma n2="20" n1="5"></Soma>
  <Subtracao n2="20" n1="5"></Subtracao>
</template>

<style scoped>
  .verde{
    color: blue;
  }
</style>
