<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар" @click.prevent="decrement">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model.number="amount">

    <button type="button" aria-label="Добавить один товар" @click.prevent="increment">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: [ 'count' ],
  computed: {
    amount: {
      get(){
        return this.count;
      },
      set(value){
        this.$emit('update:count', value);
      }
    }
  },
  methods: {
    increment() {
      this.amount++;
    },
    decrement() {
      (this.amount > 0) ? this.amount-- : 0;
    }
  }
}
</script>
