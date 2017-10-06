import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
  },
  strict: DEBUG
})
