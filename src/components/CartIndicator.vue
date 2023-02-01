<template>
   <router-link class="header__cart" :to="{name: 'cart'}" aria-label="Корзина с товарами">

        <svg width="30" height="21" fill="currentColor">

          <use xlink:href="#icon-cart">

          </use>

        </svg>
        <span class="header__count" width="30" height="21" aria-label="Количество товаров">
        <div v-if="!$store.state.cartLoading">{{ $store.state.cartProducts.length }}</div>
           <div v-if="$store.state.cartLoading"><img src="/img/loader.gif"></div>
        </span>
      </router-link>
</template>

<script>
export default {

}
</script>
