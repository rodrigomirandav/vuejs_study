import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { upperCase, upperFirst } from 'lodash'
import { camelCase } from 'lodash'
import App from './App.vue'




import router from './router'

import './assets/main.css'

const app = createApp(App)

const requireComponent = require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
  )

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)

    const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
    )

    app.component(componentName, componentConfig.default || componentConfig)
});

app.use(createPinia())
app.use(router)

app.mount('#app')
