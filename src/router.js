import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/homePage/home'
import Order from './components/dialog/order'
import Check from './components/dialog/check'
import TicketBook from './views/ticketBook/index'
import OrderInfo from './views/orderInfo/index'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/order',
      children: [
        {
          path: '/order',
          name: 'Order',
          component: Order
        },
        {
          path: '/check',
          name: 'Check',
          component: Check
        }
      ]
    },
    {
      path: '/ticketBook',
      name: 'TicketBook',
      component: TicketBook
    },
    {
      path: '/orderInfo',
      name: 'OrderInfo',
      component: OrderInfo
    }
  ]
})
