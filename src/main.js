import Vue from 'vue';
import App from './App.vue';
import router from './router';

// import { message, question } from './alert';
// import alertFunction from './alert_function';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

// alertFunction(message);
// alertFunction(question);
