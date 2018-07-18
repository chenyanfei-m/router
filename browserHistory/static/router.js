import { NotFoundComponent } from './components.js'

const render = (route) => {
  const findResult = route.find(ele => ele.path === location.pathname)
  const routerView = document.querySelector('.router-view')
  if (findResult) {
    routerView.innerHTML = findResult.component
  } else {
    routerView.innerHTML = NotFoundComponent
  }
}

export default function ({ route }) {

  const push = (path, state) => {
    history.pushState(state, null, path)
    window.$route.data = state
    render(route)
  }

  window.$route = { push }
  window.onload = () => render(route)
  window.onpopstate = (e) => render(route)

  const routerLinks = document.querySelectorAll('router-link')
  routerLinks.forEach(ele => {
    ele.onclick = (e) => push(e.target.getAttribute('path'))
  })
}