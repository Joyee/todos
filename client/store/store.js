// import Vue from 'vue'
import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'
// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     updateCount (state, num) {
//       state.count = num
//     }
//   }
// })

// export default store
const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev, // 只能在开发环境中使用 防止外部修改state 生产环境中不能使用
    state: defaultState,
    mutations,
    getters,
    actions,
    modules: { // vuex模块
      a: {
        namespaced: true,
        state: {
          text: '这是模块a的state'
        },
        mutations: {
          updateText (state, text) {
            state.text = text
          }
        },
        getters: {
          textPlus (state, getters, rootState) { // rootState 全局
            return state.text + rootState.count
          }
        },
        actions: {
          add ({ state, commit, rootState }) {
            // commit('updateText', '粉红色匡扶汉室发货')
            commit('updateCount', { num: 98765432 }, { root: true }) // 调用全局的 mutation root: true
          }
        }
      },
      b: {
        state: {
          text: '这是模块b的state'
        }
      }
    }
  })

  // 热重载
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './getters/getters',
      './actions/actions'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
