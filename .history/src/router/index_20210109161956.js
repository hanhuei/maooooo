import { createRouter, createWebHashHistory } from 'vue-router'
import ruleRoute from './routes/rule'

const router = createRouter({
  history: createWebHashHistory,
  routes: [
    {
      path: '/rule/arcade',
      name: 'RuleArcade',
      component: () => import('/@/views/rule/arcade.vue'),
      meta: {
        title: '万元礼喵争夺赛-活动细则',
      },
    },
  ],
})

export function setupRouter(app) {
  app.use(router)
}

export default router
