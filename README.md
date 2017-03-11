## Webpack in Five Minutes

Webpack is a code bundler for JavaScript. It has several key features
that we like:

- Versioning. Each output file gets a unique hash.
- ES6 modules. Webpack 2 supportes ES6 modules out of the box.
- Async loading. Large dependencies can be asynchronously loaded using
  the draft `import()` JavaScript langage feature.
- Multiple entry and exit points. Webpack can take numerous sources,
  outputting them to numerous split build artifacts.
- The `webpack-dev-server` provides everything you need to boot up a
  local JavaScript project.
- Hot module replacement significantly improves our workflow

## A basic webpack config

```javascript
const path = require('path')

// Webpack is a tool for bundling JavaScript projects. It centers
// around a configuration file.
module.exports = {
  // Entry tells Webpack where it should start scanning for
  // dependencies.
  entry: './src/index.js',

  // Output tells Webpack where build artifacts should be
  // written. These values can include bindings to build information,
  // like the name of the entry point:
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

## Loaders

```javascript
module.exports = {
  // ...
  module: {
    rules: [{
      test: /.jsx?$/,
      loaders: [ 'babel-loader' ],
      options: {
        presets: [ 'es2015' ]
      }
    }]
  }
  // ...
}
```

## Plugins

```javascript
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  // Webpack is pluggable. Here, we tell it to generate an HTML
  // file that includes our entry points using the HTMLPlugin
  plugins: [
    new HTMLPlugin({ title: 'Hello, Webpack!' })
  ]
}
```

## Hot Modules

```javascript
import './style.css'

import { greet } from './greeting'

function render () {
  let message = document.createElement('p')

  message.innerHTML = greet("World")

  document.body.innerHTML = ''
  document.body.appendChild(message)
}

render()

// If any code changes, reload it and recall render
if (module.hot) {
  module.hot.accept(render)
}
```
