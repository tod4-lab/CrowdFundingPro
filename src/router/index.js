import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => {
    }, () => {
    })
  }
}

VueRouter.prototype.replace = function (location, resole, reject) {
  if (resole && reject) {
    originReplace.call(this, location, resole, reject);
  } else {
    originReplace.call(this, location, () => {
    }, () => {
    })
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component:  () => import('@/views/Home')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import('@/views/Member')
  },
  {
    path: '/personCenter',
    name: 'PersonCenter',
    component: () => import('@/views/PersonCenter')
  },
  {
    path: '/crowdFunding',
    name: 'CrowdFunding',
    component: () => import('@/views/CrowdFunding'),
    children: [
      {
        path: 'agreement',
        name: 'Agreement',
        component: () => import('@/views/CrowdFunding/Agreement')
      },
      {
        path: 'step',
        name: 'Step',
        component: () => import('@/views/CrowdFunding/Step')
      }
    ]
  },
  {
    path: '/projectDetail',
    name: 'ProjectDetail',
    component: () => import("@/views/ProjectDetail")
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import("@/views/Search")
  },
  {
    path: '/pay',
    name: 'Pay',
    redirect: '/pay/step',
    component: () => import("@/views/Pay"),
    children: [
      {
        path: 'step',
        name: 'step',
        component: () => import("@/views/Pay/Step")
      },
      {
        path: 'aliPay',
        name: 'aliPay',
        component: () => import("@/views/Pay/AliPay")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
