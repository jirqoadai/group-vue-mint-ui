import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Toast from '@/components/Toast'
import Loading from '@/components/Loading'
import PullDown from '@/components/PullDown'
import PullUp from '@/components/PullUp'
import Scroll from '@/components/Scroll'
import Message from '@/components/Message'
import Action from '@/components/Action'
import Popup from '@/components/Popup'
import Swiper from '@/components/Swiper'
import Lazy from '@/components/Lazy'
import Badge from '@/components/Badge'
import Btn from '@/components/Btn'
import CellSwiper from '@/components/CellSwiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/toast',
      name: 'Toast',
      component: Toast
    }, {
      path: '/loading',
      name: 'Loading',
      component: Loading
    }, {
      path: '/pulldown',
      name: 'PullDown',
      component: PullDown
    }, {
      path: '/pullup',
      name: 'PullUp',
      component: PullUp
    }, {
      path: '/scroll',
      name: 'Scroll',
      component: Scroll
    }, {
      path: '/message',
      name: 'Message',
      component: Message
    }, {
      path: '/action',
      name: 'Action',
      component: Action
    }, {
      path: '/popup',
      name: 'Popup',
      component: Popup
    }, {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    }, {
      path: '/lazy',
      name: 'Lazy',
      component: Lazy
    }, {
      path: '/badge',
      name: 'Badge',
      component: Badge
    }, {
      path: '/button',
      name: 'Btn',
      component: Btn
    }, {
      path: '/cell-swiper',
      name: 'CellSwiper',
      component: CellSwiper
    }
  ]
})
