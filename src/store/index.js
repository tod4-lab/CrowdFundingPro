import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";
import member from "@/store/modules/member";

Vue.use(Vuex)

const store =  new Vuex.Store({
  modules: {
    member
  },
  getters: getters
})

export default store
