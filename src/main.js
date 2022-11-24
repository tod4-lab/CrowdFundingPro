import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TopNav from './components/layout/TopNav'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import API from '@/api'
import './assets/canvas'
import '@/permission'
import ProjectCard from "@/components/ProjectCard";

Vue.config.productionTip = false
Vue.component(TopNav.name, TopNav)
Vue.use(ElementUI)
Vue.prototype.$API = API
Vue.component(ProjectCard.name, ProjectCard)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
