import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'workspace',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/components/Workspace.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
