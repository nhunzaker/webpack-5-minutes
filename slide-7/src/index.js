import './style.css'

import { greet } from './greeting'

function render () {
  var message = document.createElement('p')

  message.innerHTML = greet("World")

  document.body.appendChild(message)
}

render()

if (module.hot) {
  module.hot.accept('./greeting', render)
}
