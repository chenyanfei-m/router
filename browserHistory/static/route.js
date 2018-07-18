import { Foo, Bar, DefaultComponent } from './components.js'
export default [{
  path: '/',
  component: DefaultComponent,
}, {
  path: '/foo',
  component: Foo,
}, {
  path: '/bar',
  component: Bar,
}]