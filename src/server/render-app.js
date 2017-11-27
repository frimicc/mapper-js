import { APP_CONTAINER_CLASS, STATIC_PATH } from '../shared/config'
import { isProd } from '../shared/util'

const renderApp = title =>
  `<!doctype html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
    </head>
    <body>
      <div class="${APP_CONTAINER_CLASS}"></div>
      <script src="${isProd ? STATIC_PATH : 'https://mapper-js.herokuapp.com/dist'}/js/bundle.js"></script>
    </body>
  </html>
  `

export default renderApp
