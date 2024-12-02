<template>
  <div class="container">
    <h1 class="my-4">Detalhes do Carrinho</h1>
    <div v-if="cartDetails && cartDetails.id">
      <p><strong>ID do Carrinho:</strong> {{ cartDetails.id }}</p>
      <p><strong>ID do Usuário:</strong> {{ cartDetails.userId }}</p>
      <p><strong>Data:</strong> {{ formattedDate }}</p>
      <h3>Itens</h3>
      <ul class="list-group">
        <li v-for="item in detailedProducts" :key="item.product.id" class="list-group-item">
          <img :src="item.product.image" alt="item.product.title" class="img-thumbnail" style="width: 50px; height: 50px;">
          <strong>{{ item.product.title }}</strong> - Quantidade: {{ item.quantity }} - Preço: R${{ item.product.price }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Carregando...</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import productService from '@/services/productService';

export default {
  name: 'CartDetails',
  data() {
    return {
      cartId: this.$route.params.id,
      detailedProducts: []
    };
  },
  computed: {
    ...mapGetters(['cartDetails']),
    formattedDate() {
      if (this.cartDetails && this.cartDetails.date) {
        return new Date(this.cartDetails.date).toLocaleDateString();
      }
      return '';
    }
  },
  methods: {
    ...mapActions(['fetchCartDetails']),  
    async fetchProductDetails() {
      if (this.cartDetails && this.cartDetails.products) {
        const productDetailsPromises = this.cartDetails.products.map(async (item) => {
          const response = await productService.getProductById(item.productId);
          return { product: response.data, quantity: item.quantity };
        });
        this.detailedProducts = await Promise.all(productDetailsPromises);
      }
    }
  },
  async created() {
    await this.fetchCartDetails(this.cartId);
    await this.fetchProductDetails();
  }
};
</script>

<style scoped>
.img-thumbnail {
  margin-right: 10px;
}
</style>
