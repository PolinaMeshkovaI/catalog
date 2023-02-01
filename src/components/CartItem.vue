<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img :src="item.product.image" width="120" height="120" alt="item.product.title">
    </div>
    <h3 class="product__title">
      {{ item.product.title }}
    </h3>
    <span class="product__code">
      {{ item.product.id }}
    </span>

    <div class="product__counter form__counter">
       <BaseCounter :count.sync="amount"></BaseCounter>
    </div>

    <b class="product__price">
      {{ (item.amount * item.product.price) | numberFormat}} ₽
    </b>

    <button class="product__del button-del" type="button" aria-label="Удалить товар из корзины" @click.prevent="deleteProductFromCart()">
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>


<script>
import BaseCounter from '@/components/BaseCounter';
import numberFormat from '@/helpers/numberFormat';
import { mapActions } from 'vuex';

export default {
  filters: {numberFormat},
  props: ['item'],
  components: { BaseCounter },
  computed: {
    amount: {
      get(){
        return this.item.amount;
      },
      set(value){
        this.$store.dispatch('updateCartProductAmount', {productId: this.item.productId, amount: value});
      },
    },
  },
  methods: {
    ...mapActions(['deleteCartProduct']),

    deleteProductFromCart(){
      this.deleteCartProduct({productId: this.item.productId});
    }
  }
}
</script>
