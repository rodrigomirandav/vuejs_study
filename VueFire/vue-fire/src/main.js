import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from "./firebase"

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth],
  })
  .mount('#app')
