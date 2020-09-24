import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { router } from './routes';
import { store } from './store';
import VueSweetalert2 from 'vue-sweetalert2';
import ElementUI from 'element-ui';
/* import 'element-ui/lib/theme-chalk/index.css'; */
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import VueDataTables from 'vue-data-tables';

Vue.use(VueSweetalert2);
Vue.use(VueRouter);


Vue.use(ElementUI);
locale.use(lang);
Vue.use(VueDataTables);

/* const router = new VueRouter({
  routes,
  mode: 'history'
}) */

new Vue({
  el: '#app',
  router,
  store:store,
  render: h => h(App)
})
