import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// 引入模組元件
import HelloWorld from './components/HelloWorld.vue'
export {HelloWorld}

// default 引入整個app
export default {
  install: (app: App) => {
    app.component('HelloWorld',HelloWorld)
  }
}