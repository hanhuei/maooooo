import { createRouter, createWebHashHistory } from 'vue-router'
import ruleRoute from './routes/rule'
const router = {
  history: createWebHashHistory,
  routes: [...ruleRoute],
}

export function setupRouter(app) {
  app.use(router)
}

export default router
