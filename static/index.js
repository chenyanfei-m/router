import routes from './route.js'
import Router from './router.js'

new Router({
  // mode: 'hash',
  mode: 'browser',
  route: routes
})