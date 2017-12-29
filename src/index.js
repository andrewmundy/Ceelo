import Vue from 'vue';
import App from './components/App.vue';
import Message from './components/Message.vue';
import Style from './components/Style.vue';
import Dice from './components/Dice.vue';
import Rules from './components/Rules.vue';

Vue.component('app-message', Message);
Vue.component('app-style', Style);
Vue.component('dice', Dice);
Vue.component('rules', Rules);

new Vue({
  el: '#app',
  render: h => h(App)
});

