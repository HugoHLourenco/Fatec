<script setup>
  defineProps(
      {
        msg: {
          type: String,
          default: "Erro, você não enviou a messagem",
          required: true
        }
      }
  )
</script>

<template>
  <p>{{ msg }}</p>
</template>

<style scoped>
  p {
    color: pink;
  }
</style>