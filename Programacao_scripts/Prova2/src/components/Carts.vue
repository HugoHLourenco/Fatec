<template>
  <div class="container">
    <h1 class="my-4">Carrinhos</h1>
    <div class="row mb-4">
      <div class="col-md-4">
        <input type="date" v-model="filter.date" class="form-control" placeholder="Filtrar por data">
      </div>
      <div class="col-md-4">
        <input type="number" v-model="filter.userId" class="form-control" placeholder="Filtrar por Id de Usuário">
      </div>
      <div class="col-md-4">
        <button @click="applyFilter" class="btn btn-primary w-100">Aplicar Filtro</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <ul class="list-group">
          <li v-for="(cart, index) in filteredCarts" :key="cart.id" class="list-group-item">
            <router-link :to="'/cart/' + cart.id">Carrinho {{ index + 1 }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Carts',
  data() {
    return {
      filter: {
        date: '',
        userId: ''
      }
    };
  },
  computed: {
    filteredCarts() {
      return this.$store.getters.filteredCarts(this.filter);
    }
  },
  methods: {
    ...mapActions(['fetchCarts']),
    applyFilter() {
      this.fetchCarts();
    }
  },
  created() {
    this.fetchCarts();
  }
};
</script>
