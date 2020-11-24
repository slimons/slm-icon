import {createApp} from 'vue'
import App from './App.vue'
import SlmInput from '../src/SlmInput.vue'

const myApp = createApp(App)

myApp.component('slm-input', SlmInput)
myApp.mount('#app')

