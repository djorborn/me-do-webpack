function component () {
  var el = document.createElement('div')

  el.innerHTML = 'Hello Webpack'

  return el
}

document.body.appendChild(component())
