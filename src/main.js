import {createApp} from "vue"
import{createPinia} from "pinia"
import App from "./App.vue"
import router from "./router"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue-next/dist/bootstrap-vue-next.css"

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount("#app")
