import Vue from 'vue';
import App from './components/App.vue';
import Message from './components/Message.vue';
import Style from './components/Style.vue';
import Dice from './components/Dice.vue';

Vue.component('app-message', Message);
Vue.component('app-style', Style);
Vue.component('dice', Dice);

new Vue({
  el: '#app',
  render: h => h(App)
});

