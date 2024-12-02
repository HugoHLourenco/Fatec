<template>
  <div class="auth-layout container">
    <header class="my-4">
      <h1>Auth Layout</h1>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
};
</script>

<style scoped>
.auth-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
