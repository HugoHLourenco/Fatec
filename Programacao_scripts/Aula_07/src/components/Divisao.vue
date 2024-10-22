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
  <p>{{ n1 }} / {{ n2 }} = {{ (n1 / n2).toFixed(2) }}</p>
</template>

<style scoped>
  p{
    color: #12b618;
  }
</style>