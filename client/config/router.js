import VueRouter from 'vue-router'
import routes from './routes'

export default () => {
  return new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'extract-active-link',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    // parseQuery (query) {},
    // stringifyQuery (obj) {},
    fallback: true
  })
}
