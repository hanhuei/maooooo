import { createStore } from 'vuex'

const files = require.context('./modules', false, /\.js$/)
const modules = {}
Object.keys(modules).forEach((key) => {
  modules[key]['namespaced'] = true
})

const store = createStore({ modules })

export function setupStore(app) {
  app.use(store)
}

export default store
