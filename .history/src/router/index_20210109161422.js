import { createRouter, createWebHashHistory } from 'vue-router'
import ruleRoute from './routes/rule'
const router = {
  history: createWebHashHistory,
  routes: [...ruleRoute],
}

export default router
