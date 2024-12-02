<template>
  <div class="container">
    <h1 class="my-4">Login</h1>
    <form @submit.prevent="login" class="w-50 mx-auto">
      <div class="mb-3">
        <input v-model="user.username" class="form-control" placeholder="Username" />
      </div>
      <div class="mb-3">
        <input v-model="user.password" type="password" class="form-control" placeholder="Password" />
      </div>
      <button type="submit" class="btn btn-primary w-100">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(['login']),
    async login() {
      try {
        await this.login(this.user);
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>
