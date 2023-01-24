import { createApp } from 'vue'
import App from './App.vue'
import FloatingVue from 'floating-vue'

const app = createApp(App)
app.use(FloatingVue, {
    disposeTimeout: 300,
    dropdown: {
        placement: 'bottom',
        triggers: ['hover']
    }
})
app.mount('#app')
