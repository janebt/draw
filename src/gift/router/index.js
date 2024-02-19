import Vue from 'vue';
import VueRouter from 'vue-router';
import Gift from '../views/Gift.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/gift',
    name: 'gift',
    component: Gift
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
