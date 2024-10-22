<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Mensagem from "./components/Mensagem.vue";
import Soma from "./components/Soma.vue";
import Subtracao from "./components/Subtracao.vue";
import Multiplicacao from "./components/Multiplicacao.vue";
import Divisao from "./components/Divisao.vue";
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
  <subtracao n2="100" n1="20"></subtracao>
  <multiplicacao n2="3" n1="4"></multiplicacao>
  <multiplicacao n2="20" n1="38"></multiplicacao>
  <divisao n2="9" n1="3"></divisao>
  <divisao n2="3" n1="9"></divisao>
</template>

<style scoped>
  .verde{
    color: blue;
  }
</style>
