<script>
import Pessoa from "./Pessoa.vue";
export default {
  name: "Aula 08",
  components: {
    Pessoa,
  },
  data() {
    return {
      idade: 10
    },
  }
}
</script>

<template>
  <Pessoa idade="10" @update-idade="idade++"></Pessoa>
</template>

<style scoped>
  p{
    color: #00BFFF;
  }
</style>