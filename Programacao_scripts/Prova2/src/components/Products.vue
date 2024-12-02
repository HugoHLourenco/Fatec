<template>
  <div class="container">
    <h1 class="my-4">Produtos</h1>
    <div class="row mb-4">
      <div class="col-md-4">
        <input type="text" class="form-control" v-model="search" placeholder="Buscar produtos">
      </div>
      <div class="col-md-4">
        <select class="form-control" v-model="selectedCategory" @change="filterByCategory">
          <option value="">Todas as Categorias</option>
          <option value="electronics">Eletrônicos</option>
          <option value="jewelery">Joias</option>
          <option value="men's clothing">Roupas Masculinas</option>
          <option value="women's clothing">Roupas Femininas</option>
        </select>
      </div>
      <div class="col-md-4">
        <select class="form-control" v-model="sortOrder" @change="sortProducts">
          <option value="price">Ordenar por Preço</option>
          <option value="rating">Ordenar por Avaliação</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="product in filteredProducts" :key="product.id">
        <div class="card mb-4">
          <img :src="product.image" class="card-img-top" :alt="product.title">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text"><strong>R${{ product.price }}</strong></p>
            <button class="btn btn-primary" @click="viewProduct(product.id)">Visualizar</button>
            <button class="btn btn-danger" @click="deleteProduct(product.id)">Excluir</button>
            <button class="btn btn-success" @click="addProductToCart(product.id)">Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Products',
  data() {
    return {
      search: '',
      selectedCategory: '',
      sortOrder: 'price',
    };
  },
  computed: {
    ...mapGetters(['allProducts', 'allCategories']),
    filteredProducts() {
      let products = this.allProducts;
      if (this.search) {
        products = products.filter(product => product.title.toLowerCase().includes(this.search.toLowerCase()));
      }
      if (this.selectedCategory) {
        products = products.filter(product => product.category === this.selectedCategory);
      }
      return products;
    },
  },
  methods: {
    ...mapActions(['fetchProducts', 'fetchCategories', 'deleteProduct', 'addToCart']),
    viewProduct(id) {
      this.$router.push(`/products/${id}`);
    },
    sortProducts() {
      if (this.sortOrder === 'price') {
        this.allProducts.sort((a, b) => a.price - b.price);
      } else if (this.sortOrder === 'rating') {
        this.allProducts.sort((a, b) => b.rating.rate - a.rating.rate);
      }
    },
    addProductToCart(productId) {
      this.addToCart({ productId, quantity: 1 });
    },
  },
  created() {
    this.fetchProducts();
    this.fetchCategories();
  },
};
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
