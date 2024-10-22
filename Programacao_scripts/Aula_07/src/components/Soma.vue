<script setup>
  defineProps(
      {
        n1:{
          type: Number,
          default: "Mandao n1",
          required: true
        },
        n2: {
          type: Number,
          default: "Mandao n2",
          required: true
        }
      }
  )
</script>

<template>
  <p>{{ Number(n1) }} + {{ Number(n2) }} = {{ Number(n1) + Number(n2) }}</p>
</template>

<style scoped>
  p{
    color: yellowgreen;
  }
</style>