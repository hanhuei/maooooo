import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupStore } from './store'
import 'normalize.css'

const app = createApp(App)
setupRouter(app)
setupStore(app)

router.isReady().then(() => {
  app.mount('#app', true)
})
