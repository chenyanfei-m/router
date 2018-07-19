import { NotFoundComponent } from './components.js'

const getHash = () => {
  const { hash } = window.location
  if (!hash.length) window.location.hash = '#/'
  return window.location.hash.replace(/^#\//, '')
}

const getPathname = (mode) => {
  if (mode === 'browser') return location.pathname
  if (mode === 'hash') return `/${getHash()}`
}

const genRender = (mode, route) => {
  const findResult = route.find(ele => ele.path === getPathname(mode))
  const routerView = document.querySelector('.router-view')
  if (findResult) {
    routerView.innerHTML = findResult.component
  } else {
    routerView.innerHTML = NotFoundComponent
  }
}

export default function ({ mode, route }) {

  const render = () => genRender(mode, route)

  const push = (path, state) => {
    if (mode === 'hash') window.location.hash = path
    if (mode === 'browser') history.pushState(state, null, path)
    window.$route.data = state
    render()
  }

  window.$route = { push }
  window.addEventListener('load', () => render())
  window.addEventListener('popstate', () => render())

  //模拟router-link
  const routerLinks = document.querySelectorAll('router-link')
  routerLinks.forEach(ele => {
    ele.onclick = (e) => push(e.target.getAttribute('path'))
  })
}