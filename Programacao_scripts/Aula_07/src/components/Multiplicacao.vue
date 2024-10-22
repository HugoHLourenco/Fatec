<script setup>
defineProps(
    {
      n1:{
        type: Number,
        default: "Manda o n1",
        required: true
      },
      n2: {
        type: Number,
        default: "Manda o n2",
        required: true
      }
    }
)
</script>

<template>
  <p>{{ n1 }} X {{ n2 }} = {{ n1 * n2 }}</p>
</template>

<style scoped>
  p{
    color: #5a29e2;
  }
</style>