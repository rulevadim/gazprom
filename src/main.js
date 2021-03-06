import '@/styles/common.scss';

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import '@/filters';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
