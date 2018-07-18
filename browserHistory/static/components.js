const Foo = `
      <p class="component1">foo</p>
      <style>
        .component1{ color: #66ccff }
      </style>
    `
const Bar = `
      <p class="component2">bar</p>
      <style>
        .component2{ color: pink }
      </style>
    `
const NotFoundComponent = `
      <p>not found</p>
    `

const DefaultComponent = `
      <p>default</p>
    `

export { Foo, Bar, NotFoundComponent, DefaultComponent }