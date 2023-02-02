<template>
  <div>
    <div v-if="$store.state.cartLoading" style="text-align: center"><img src="/img/loader_order.gif"></div>
    <ul class="cart__orders">
      <li class="cart__order" v-for="item in products" :key="item.productId">
        <h3>{{ item.product.title }}</h3>
        <b>  {{ item.product.price * item.amount | numberFormat }}₽</b>
        <span>Артикул: {{item.product.id}}</span>
      </li>
    </ul>

    <div class="cart__total">
      <p>Доставка: <b>500 ₽</b></p>
      <p>Итого: <b>{{ products.length}}</b> {{ $store.state.cartProducts.length, ['товар', 'товара', 'товаров'] | wordDeclension }} на сумму <b>{{ totalPrice | numberFormat}} ₽</b></p>
    </div>
  </div>
</template>

<script>
  import numberFormat from '@/helpers/numberFormat';
  import wordDeclension from '@/helpers/wordDeclension';
  import { mapGetters } from 'vuex';


  export default{
   filters: { numberFormat, wordDeclension },
    computed:{
    ...mapGetters({products: 'cartDetailProducts', totalPrice: 'cartTotalPrice'})
    },
  }
</script>
