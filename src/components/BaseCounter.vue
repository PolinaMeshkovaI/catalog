<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар" @click.prevent="deleteCountProduct">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model.number="productAmount">

    <button type="button" aria-label="Добавить один товар" @click.prevent="addCountProduct">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
methods: {
 addCountProduct(){
      this.productAmount = ++this.productAmount;
    },
  deleteCountProduct(){
    (this.productAmount > 0)? this.productAmount = --this.productAmount : this.productAmount = 0;
  }
}

}
</script>
