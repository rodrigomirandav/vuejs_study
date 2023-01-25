import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import GStore from "./store"
import store from "@/store/vuex"
import "nprogress/nprogress.css"

createApp(App).use(store).use(router).provide("GStore", GStore).mount("#app")
